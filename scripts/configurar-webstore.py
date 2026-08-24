"""Configura a publicacao automatica na Chrome Web Store.

Pede o ID da extensao e as credenciais OAuth, abre o navegador para voce
autorizar, troca o codigo por um refresh token e cadastra os 4 segredos
no repositorio do GitHub via gh CLI. Nenhum valor sai da sua maquina.

Uso: python scripts/configurar-webstore.py
Requisitos: gh CLI autenticado (gh auth status).
"""
import json
import subprocess
import urllib.parse
import urllib.request
import webbrowser
from http.server import BaseHTTPRequestHandler, HTTPServer

PORT = 8819
REPO = "joaosouz4dev/mornio-extension"
SCOPE = "https://www.googleapis.com/auth/chromewebstore"


def pedir(nome):
    valor = input(f"{nome}: ").strip()
    while not valor:
        valor = input(f"{nome} (obrigatorio): ").strip()
    return valor


def main():
    print("=== Mornio: configuracao da Chrome Web Store ===\n")
    ext_id = pedir("ID da extensao na Web Store (32 letras, da URL do item)")
    client_id = pedir("Client ID (OAuth Desktop app)")
    client_secret = pedir("Client Secret")

    codigo = {}

    class Handler(BaseHTTPRequestHandler):
        def do_GET(self):
            q = urllib.parse.parse_qs(urllib.parse.urlparse(self.path).query)
            codigo["code"] = q.get("code", [None])[0]
            self.send_response(200)
            self.send_header("Content-Type", "text/html; charset=utf-8")
            self.end_headers()
            msg = "Autorizado! Pode fechar esta aba e voltar ao terminal."
            if not codigo["code"]:
                msg = "Autorizacao negada ou sem codigo. Rode o script de novo."
            self.wfile.write(f"<h2>{msg}</h2>".encode())

        def log_message(self, *args):
            pass

    servidor = HTTPServer(("127.0.0.1", PORT), Handler)
    redirect = f"http://localhost:{PORT}"
    auth_url = "https://accounts.google.com/o/oauth2/v2/auth?" + urllib.parse.urlencode({
        "response_type": "code",
        "client_id": client_id,
        "redirect_uri": redirect,
        "scope": SCOPE,
        "access_type": "offline",
        "prompt": "consent",
    })

    print("\nAbrindo o navegador para voce autorizar com a MESMA conta Google")
    print("do Developer Console da Web Store...")
    webbrowser.open(auth_url)
    servidor.handle_request()

    if not codigo.get("code"):
        raise SystemExit("Nao recebi o codigo de autorizacao. Tente novamente.")

    corpo = urllib.parse.urlencode({
        "code": codigo["code"],
        "client_id": client_id,
        "client_secret": client_secret,
        "redirect_uri": redirect,
        "grant_type": "authorization_code",
    }).encode()
    resposta = json.loads(urllib.request.urlopen(
        "https://oauth2.googleapis.com/token", corpo).read())
    refresh = resposta.get("refresh_token")
    if not refresh:
        raise SystemExit(f"Resposta sem refresh_token (campos: {list(resposta)}). "
                         "Confira se o consent screen esta em producao e tente de novo.")
    print("Refresh token obtido.\n")

    def gravar_segredo(nome, valor):
        subprocess.run(["gh", "secret", "set", nome, "-R", REPO],
                       input=valor.encode(), check=True)
        print(f"  segredo gravado: {nome}")

    gravar_segredo("CWS_EXTENSION_ID", ext_id)
    gravar_segredo("CWS_CLIENT_ID", client_id)
    gravar_segredo("CWS_CLIENT_SECRET", client_secret)
    gravar_segredo("CWS_REFRESH_TOKEN", refresh)

    print("\nTudo pronto! A partir do proximo bump de versao no manifest.json,")
    print("o push na main publica no GitHub e na Chrome Web Store automaticamente.")


if __name__ == "__main__":
    main()
