/* Painel Inicial - nova guia personalizada */

// ---------- Configuração padrão ----------
const DEFAULTS = {
  name: "João Victor",
  city: { name: "Carangola", lat: -20.7336, lon: -42.0292 },
  zones: [
    { label: "Bogotá", tz: "America/Bogota" },
    { label: "Boston", tz: "America/New_York" },
    { label: "Portugal", tz: "Europe/Lisbon" }
  ]
};

// IDs de fotos cênicas do Lorem Picsum (fonte: Unsplash)
const PHOTO_IDS = [1015, 1016, 1018, 1019, 1021, 1022, 1036, 1039, 1043, 1053, 1061, 110];

const QUOTES_PT = [
  { t: "Transforme seus obstáculos em oportunidades e seus problemas em possibilidades.", a: "Roy T. Bennett" },
  { t: "A disciplina é a ponte entre metas e realizações.", a: "Jim Rohn" },
  { t: "Feito é melhor que perfeito.", a: "Sheryl Sandberg" },
  { t: "A melhor maneira de prever o futuro é criá-lo.", a: "Peter Drucker" },
  { t: "Você não precisa ser ótimo para começar, mas precisa começar para ser ótimo.", a: "Zig Ziglar" },
  { t: "O sucesso é a soma de pequenos esforços repetidos dia após dia.", a: "Robert Collier" },
  { t: "Simplicidade é a sofisticação máxima.", a: "Leonardo da Vinci" },
  { t: "Não conte os dias, faça os dias contarem.", a: "Muhammad Ali" },
  { t: "A persistência realiza o impossível.", a: "Provérbio chinês" },
  { t: "Foco é dizer não a mil coisas boas.", a: "Steve Jobs" },
  { t: "Aprender é a única coisa de que a mente nunca se cansa.", a: "Leonardo da Vinci" },
  { t: "Grandes coisas nunca vêm de zonas de conforto.", a: "Anônimo" },
  { t: "A ação é a chave fundamental para todo sucesso.", a: "Pablo Picasso" },
  { t: "Quem quer, encontra um meio. Quem não quer, encontra uma desculpa.", a: "Provérbio árabe" }
];

const QUOTES_EN = [
  { t: "Turn your obstacles into opportunities and your problems into possibilities.", a: "Roy T. Bennett" },
  { t: "Discipline is the bridge between goals and accomplishment.", a: "Jim Rohn" },
  { t: "Done is better than perfect.", a: "Sheryl Sandberg" },
  { t: "The best way to predict the future is to create it.", a: "Peter Drucker" },
  { t: "You don't have to be great to start, but you have to start to be great.", a: "Zig Ziglar" },
  { t: "Success is the sum of small efforts repeated day in and day out.", a: "Robert Collier" },
  { t: "Simplicity is the ultimate sophistication.", a: "Leonardo da Vinci" },
  { t: "Don't count the days, make the days count.", a: "Muhammad Ali" },
  { t: "Energy and persistence conquer all things.", a: "Benjamin Franklin" },
  { t: "Focusing is about saying no to a thousand good things.", a: "Steve Jobs" },
  { t: "Learning never exhausts the mind.", a: "Leonardo da Vinci" },
  { t: "Great things never came from comfort zones.", a: "Anonymous" },
  { t: "Action is the foundational key to all success.", a: "Pablo Picasso" },
  { t: "Where there is a will, there is a way.", a: "Proverb" }
];

// ---------- Idiomas ----------
const I18N = {
  pt: {
    locale: "pt-BR",
    tasks: "Tarefas",
    notes: "Notas",
    photo: "Foto",
    changePhoto: "Trocar foto de fundo",
    settings: "Configurações",
    close: "Fechar",
    notesPlaceholder: "Escreva suas anotações aqui... (salvas automaticamente)",
    taskPlaceholder: "Nova tarefa... (Enter para adicionar)",
    noTasks: "Nenhuma tarefa ainda.",
    complete: "Concluir",
    removeTask: "Remover",
    yourName: "Seu nome",
    weatherCity: "Cidade do clima",
    cityPlaceholder: "Digite para buscar... Ex.: Carangola",
    worldClocks: "Relógios mundiais",
    max6: "máx. 6",
    zonePlaceholder: "Buscar fuso... Ex.: Sao Paulo, Tokyo",
    bookmarksTitle: "Barra de favoritos",
    bookmarksDesc: "Exibe seus favoritos do Chrome no topo da página",
    language: "Idioma",
    cancel: "Cancelar",
    save: "Salvar",
    createdBy: "criado por",
    searching: "Buscando cidade...",
    cityNotFound: "Cidade não encontrada, mantendo a anterior.",
    cityError: "Erro ao buscar cidades. Verifique a conexão.",
    chooseCity: "Escolha uma cidade da lista antes de salvar.",
    selected: "Selecionado",
    maxClocks: "Máximo de 6 relógios.",
    noCityResults: "Nenhuma cidade encontrada",
    noZoneResults: "Nenhum fuso encontrado",
    now: "agora",
    emptyFolder: "Pasta vazia",
    noBookmarks: "Sem favoritos na barra",
    bookmarksPermission: "Para exibir os favoritos, recarregue a extensão em chrome://extensions e aceite a permissão.",
    changeQuote: "Trocar frase",
    removeZone: "Remover",
    folder: "Pasta",
    photoSection: "Foto de fundo",
    providerAuto: "Automático (com fallback)",
    checking: "verificando...",
    online: "online",
    offline: "fora do ar",
    favoriteThemes: "Temas favoritos",
    themesHint: "usados na busca por tema (LoremFlickr)",
    theme_nature: "Natureza",
    theme_mountains: "Montanhas",
    theme_beach: "Praia",
    theme_forest: "Floresta",
    theme_city: "Cidade",
    theme_sky: "Céu",
    theme_snow: "Neve",
    theme_sunset: "Pôr do sol",
    theme_animals: "Animais",
    greetings: ["Boa madrugada", "Bom dia", "Boa tarde", "Boa noite"],
    quotes: QUOTES_PT
  },
  en: {
    locale: "en-GB",
    tasks: "Tasks",
    notes: "Notes",
    photo: "Photo",
    changePhoto: "Change background photo",
    settings: "Settings",
    close: "Close",
    notesPlaceholder: "Write your notes here... (saved automatically)",
    taskPlaceholder: "New task... (Enter to add)",
    noTasks: "No tasks yet.",
    complete: "Complete",
    removeTask: "Remove",
    yourName: "Your name",
    weatherCity: "Weather city",
    cityPlaceholder: "Type to search... e.g. London",
    worldClocks: "World clocks",
    max6: "max. 6",
    zonePlaceholder: "Search timezone... e.g. Sao Paulo, Tokyo",
    bookmarksTitle: "Bookmarks bar",
    bookmarksDesc: "Shows your Chrome bookmarks at the top of the page",
    language: "Language",
    cancel: "Cancel",
    save: "Save",
    createdBy: "created by",
    searching: "Searching city...",
    cityNotFound: "City not found, keeping the previous one.",
    cityError: "Error searching cities. Check your connection.",
    chooseCity: "Pick a city from the list before saving.",
    selected: "Selected",
    maxClocks: "Maximum of 6 clocks.",
    noCityResults: "No cities found",
    noZoneResults: "No timezones found",
    now: "now",
    emptyFolder: "Empty folder",
    noBookmarks: "No bookmarks in the bar",
    bookmarksPermission: "To show bookmarks, reload the extension at chrome://extensions and accept the permission.",
    changeQuote: "Change quote",
    removeZone: "Remove",
    folder: "Folder",
    photoSection: "Background photo",
    providerAuto: "Automatic (with fallback)",
    checking: "checking...",
    online: "online",
    offline: "offline",
    favoriteThemes: "Favorite themes",
    themesHint: "used for theme search (LoremFlickr)",
    theme_nature: "Nature",
    theme_mountains: "Mountains",
    theme_beach: "Beach",
    theme_forest: "Forest",
    theme_city: "City",
    theme_sky: "Sky",
    theme_snow: "Snow",
    theme_sunset: "Sunset",
    theme_animals: "Animals",
    greetings: ["Good night", "Good morning", "Good afternoon", "Good evening"],
    quotes: QUOTES_EN
  }
};

let lang = "pt";
const t = (key) => (I18N[lang] || I18N.pt)[key];

function applyI18n() {
  document.documentElement.lang = lang === "en" ? "en" : "pt-BR";
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });
  document.querySelectorAll("[data-i18n-title]").forEach((el) => {
    el.title = t(el.dataset.i18nTitle);
  });
}

// ---------- Ícones SVG (traço branco, estilo linha) ----------
const svg = (inner, vb = "0 0 24 24") =>
  `<svg viewBox="${vb}" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${inner}</svg>`;

const ICONS = {
  globe: svg('<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>'),
  folder: svg('<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>'),
  link: svg('<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>'),
  skip: svg('<polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/>'),
  x: svg('<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>'),
  sun: svg('<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>'),
  cloud: svg('<path d="M18 10h-1.26A8 8 0 1 0 9 20h9a4 4 0 0 0 0-8z"/>'),
  fog: svg('<line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="13" x2="21" y2="13"/><line x1="5" y1="17" x2="19" y2="17"/>'),
  drizzle: svg('<line x1="8" y1="19" x2="8" y2="21"/><line x1="8" y1="13" x2="8" y2="15"/><line x1="16" y1="19" x2="16" y2="21"/><line x1="16" y1="13" x2="16" y2="15"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="12" y1="15" x2="12" y2="17"/><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"/>'),
  rain: svg('<line x1="16" y1="13" x2="16" y2="21"/><line x1="8" y1="13" x2="8" y2="21"/><line x1="12" y1="15" x2="12" y2="23"/><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"/>'),
  snow: svg('<path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"/><line x1="8" y1="16" x2="8.01" y2="16"/><line x1="8" y1="20" x2="8.01" y2="20"/><line x1="12" y1="18" x2="12.01" y2="18"/><line x1="12" y1="22" x2="12.01" y2="22"/><line x1="16" y1="16" x2="16.01" y2="16"/><line x1="16" y1="20" x2="16.01" y2="20"/>'),
  storm: svg('<path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9"/><polyline points="13 11 9 17 15 17 11 23"/>')
};

// Códigos de tempo (WMO) -> ícone
function weatherIcon(code) {
  if (code === 0 || code === 1) return ICONS.sun;
  if (code === 2 || code === 3) return ICONS.cloud;
  if (code === 45 || code === 48) return ICONS.fog;
  if (code >= 51 && code <= 57) return ICONS.drizzle;
  if ((code >= 61 && code <= 67) || (code >= 80 && code <= 82)) return ICONS.rain;
  if ((code >= 71 && code <= 77) || code === 85 || code === 86) return ICONS.snow;
  if (code >= 95) return ICONS.storm;
  return ICONS.cloud;
}

// ---------- Armazenamento ----------
// Na extensao usa chrome.storage.local (sobrevive a atualizacoes e nao sofre
// limpeza de site data). Fora dela (testes locais), cai para localStorage.
// Leituras sao sincronas via cache em memoria carregado no init.
const hasChromeStorage =
  typeof chrome !== "undefined" && chrome.storage && chrome.storage.local;

let storeCache = {};

async function initStore() {
  if (!hasChromeStorage) return;
  storeCache = await chrome.storage.local.get(null);

  // Migra dados antigos do localStorage (chaves "painel:*") uma unica vez
  const pendentes = {};
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i);
    if (k && k.startsWith("painel:")) {
      const nome = k.slice("painel:".length);
      if (!(nome in storeCache)) {
        try {
          pendentes[nome] = JSON.parse(localStorage.getItem(k));
        } catch {
          /* valor invalido: ignora */
        }
      }
    }
  }
  if (Object.keys(pendentes).length > 0) {
    Object.assign(storeCache, pendentes);
    await chrome.storage.local.set(pendentes);
  }
}

const store = {
  get(key, fallback) {
    if (hasChromeStorage) {
      return key in storeCache ? storeCache[key] : fallback;
    }
    try {
      const raw = localStorage.getItem("painel:" + key);
      return raw === null ? fallback : JSON.parse(raw);
    } catch {
      return fallback;
    }
  },
  set(key, value) {
    if (hasChromeStorage) {
      storeCache[key] = value;
      chrome.storage.local.set({ [key]: value });
      return;
    }
    localStorage.setItem("painel:" + key, JSON.stringify(value));
  },
  remove(key) {
    if (hasChromeStorage) {
      delete storeCache[key];
      chrome.storage.local.remove(key);
      return;
    }
    localStorage.removeItem("painel:" + key);
  }
};

const $ = (id) => document.getElementById(id);
const todayKey = () => new Date().toISOString().slice(0, 10);

// ---------- Relógio e saudação ----------
function updateClock() {
  const now = new Date();
  $("clock").textContent = now.toLocaleTimeString(t("locale"), {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  });

  const h = now.getHours();
  const name = store.get("name", DEFAULTS.name);
  const greetings = t("greetings");
  const greeting = h < 6 ? greetings[0] : h < 12 ? greetings[1] : h < 18 ? greetings[2] : greetings[3];
  $("greeting").textContent = `${greeting}, ${name}.`;
}

// ---------- Fusos horários ----------
function renderWorldClocks() {
  const zones = store.get("zones", DEFAULTS.zones);
  const now = new Date();
  $("world-clocks").innerHTML = zones
    .map((z) => {
      const time = new Intl.DateTimeFormat(t("locale"), {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        timeZone: z.tz
      }).format(now);
      return `<div class="wclock"><div class="wclock-icon">${ICONS.globe}</div><div class="wclock-time">${time}</div><div class="wclock-label">${z.label}</div></div>`;
    })
    .join("");
}

// ---------- Clima ----------
async function updateWeather(force = false) {
  const city = store.get("city", DEFAULTS.city);
  $("weather-city").textContent = city.name;

  const cache = store.get("weather", null);
  const THIRTY_MIN = 30 * 60 * 1000;
  if (!force && cache && cache.city === city.name && Date.now() - cache.ts < THIRTY_MIN) {
    $("weather-temp").textContent = `${Math.round(cache.temp)}°`;
    $("weather-icon").innerHTML = weatherIcon(cache.code);
    return;
  }

  try {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${city.lat}&longitude=${city.lon}&current_weather=true`;
    const res = await fetch(url);
    const data = await res.json();
    const { temperature, weathercode } = data.current_weather;
    $("weather-temp").textContent = `${Math.round(temperature)}°`;
    $("weather-icon").innerHTML = weatherIcon(weathercode);
    store.set("weather", { ts: Date.now(), temp: temperature, code: weathercode, city: city.name });
  } catch {
    $("weather-temp").textContent = "--°";
    $("weather-icon").innerHTML = ICONS.cloud;
  }
}

// ---------- Provedores de foto ----------
const THEMES = ["nature", "mountains", "beach", "forest", "city", "sky", "snow", "sunset", "animals"];
const DEFAULT_THEMES = ["nature", "mountains"];

function preload(url, timeout = 12000) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const timer = setTimeout(() => {
      img.src = "";
      reject(new Error("timeout"));
    }, timeout);
    img.onload = () => {
      clearTimeout(timer);
      resolve(url);
    };
    img.onerror = () => {
      clearTimeout(timer);
      reject(new Error("erro ao carregar"));
    };
    img.src = url;
  });
}

const PROVIDERS = {
  bing: {
    nome: "Bing Wallpaper",
    async url() {
      const idx = Math.floor(Math.random() * 8);
      const mkt = lang === "en" ? "en-US" : "pt-BR";
      const res = await fetch(
        `https://www.bing.com/HPImageArchive.aspx?format=js&idx=${idx}&n=1&mkt=${mkt}`,
        { signal: AbortSignal.timeout(8000) }
      );
      const data = await res.json();
      return "https://www.bing.com" + data.images[0].urlbase + "_1920x1080.jpg";
    },
    async ping() {
      await preload(await this.url(), 8000);
    }
  },
  picsum: {
    nome: "Picsum",
    async url() {
      const id = PHOTO_IDS[Math.floor(Math.random() * PHOTO_IDS.length)];
      return `https://picsum.photos/id/${id}/1920/1080`;
    },
    async ping() {
      await preload(`https://picsum.photos/id/1015/60/40?t=${Date.now()}`, 7000);
    }
  },
  flickr: {
    nome: "LoremFlickr",
    async url() {
      const temas = store.get("themes", DEFAULT_THEMES);
      const tema = temas.length ? temas[Math.floor(Math.random() * temas.length)] : "nature";
      return `https://loremflickr.com/1920/1080/${encodeURIComponent(tema)}?lock=${Math.floor(Math.random() * 1e6)}`;
    },
    async ping() {
      await preload(`https://loremflickr.com/60/40/nature?lock=${Date.now() % 1e6}`, 7000);
    }
  }
};

const PROVIDER_ORDER = ["bing", "picsum", "flickr"];

// Tenta o provedor escolhido e cai para os demais se falhar
async function resolvePhoto() {
  const escolha = store.get("provider", "auto");
  const ordem =
    escolha === "auto" || !PROVIDERS[escolha]
      ? PROVIDER_ORDER
      : [escolha, ...PROVIDER_ORDER.filter((p) => p !== escolha)];

  for (const nome of ordem) {
    try {
      const url = await PROVIDERS[nome].url();
      await preload(url);
      return { url, provider: nome };
    } catch {
      // provedor indisponivel: tenta o proximo
    }
  }
  return null;
}

// ---------- Fundo (crossfade entre duas camadas) ----------
let bgActive = 0;

function showBackground(url, instant = false) {
  const layers = [$("bg-a"), $("bg-b")];
  const next = layers[1 - bgActive];
  const current = layers[bgActive];

  const img = new Image();
  img.onload = () => {
    // Na abertura da guia a foto ja esta no cache: mostra sem fade,
    // para nao expor o gradiente de fallback. O crossfade fica para trocas.
    if (instant) {
      next.style.transition = "none";
      current.style.transition = "none";
    }
    next.style.backgroundImage = `url("${url}")`;
    next.classList.add("visible");
    current.classList.remove("visible");
    if (instant) {
      void next.offsetWidth;
      next.style.transition = "";
      current.style.transition = "";
    }
    bgActive = 1 - bgActive;
  };
  // Se falhar (offline), mantém o gradiente do html
  img.src = url;
}

async function setBackground(force = false) {
  const saved = store.get("photo", null);

  // Foto do dia ja resolvida: mostra instantaneamente (cache do navegador)
  if (!force && saved && saved.url && saved.date === todayKey()) {
    try {
      await preload(saved.url);
      showBackground(saved.url, true);
      return;
    } catch {
      // foto do dia falhou (provedor caiu): resolve outra abaixo
    }
  }

  const foto = await resolvePhoto();
  if (!foto) return; // todos os provedores fora: mantem o gradiente
  store.set("photo", { url: foto.url, provider: foto.provider, date: todayKey() });
  showBackground(foto.url, false);
}

// ---------- Citação ----------
function currentQuoteIndex() {
  const saved = store.get("quote", null);
  if (saved && saved.date === todayKey()) return saved.idx;

  const start = new Date(new Date().getFullYear(), 0, 0);
  const dayOfYear = Math.floor((Date.now() - start.getTime()) / 86400000);
  return dayOfYear % t("quotes").length;
}

function renderQuote() {
  const idx = currentQuoteIndex();
  const quotes = t("quotes");
  const q = quotes[idx % quotes.length];
  $("quote").textContent = `“${q.t}”`;
  $("quote-author").innerHTML =
    `${q.a} <button id="quote-skip" class="quote-skip" title="${t("changeQuote")}">${ICONS.skip}</button>`;

  $("quote-skip").addEventListener("click", () => {
    let next = idx;
    while (next === idx) next = Math.floor(Math.random() * quotes.length);
    store.set("quote", { date: todayKey(), idx: next });

    const box = document.querySelector(".bottom-center");
    box.classList.add("fading");
    setTimeout(() => {
      renderQuote();
      box.classList.remove("fading");
    }, 160);
  });
}

// ---------- Notas ----------
function bindNotes() {
  const panel = $("notes-panel");
  $("notes-text").value = store.get("notes", "");

  const open = () => panel.classList.toggle("open");
  $("btn-notes").addEventListener("click", open);
  $("btn-notes-top").addEventListener("click", open);
  $("notes-close").addEventListener("click", () => panel.classList.remove("open"));
  $("notes-text").addEventListener("input", (e) => store.set("notes", e.target.value));
}

// ---------- Tarefas ----------
function renderTasks(highlightLast = false) {
  const tasks = store.get("tasks", []);
  const list = $("tasks-list");

  if (tasks.length === 0) {
    list.innerHTML = `<li class="tasks-empty">${t("noTasks")}</li>`;
    return;
  }

  list.innerHTML = tasks
    .map(
      (task, i) => `
      <li class="task-item ${task.done ? "done" : ""}" data-i="${i}">
        <input type="checkbox" ${task.done ? "checked" : ""} title="${t("complete")}">
        <span></span>
        <button class="task-del" title="${t("removeTask")}">${ICONS.x}</button>
      </li>`
    )
    .join("");

  // Texto via textContent para não interpretar HTML digitado
  list.querySelectorAll(".task-item span").forEach((el, i) => {
    el.textContent = tasks[i].text;
  });

  if (highlightLast) {
    const items = list.querySelectorAll(".task-item");
    items[items.length - 1].classList.add("task-new");
  }
}

function bindTasks() {
  const panel = $("tasks-panel");

  $("btn-tasks").addEventListener("click", () => panel.classList.toggle("open"));
  $("tasks-close").addEventListener("click", () => panel.classList.remove("open"));

  $("task-input").addEventListener("keydown", (e) => {
    if (e.key === "Enter" && e.target.value.trim()) {
      const tasks = store.get("tasks", []);
      tasks.push({ text: e.target.value.trim(), done: false });
      store.set("tasks", tasks);
      e.target.value = "";
      renderTasks(true);
    }
  });

  $("tasks-list").addEventListener("click", (e) => {
    const item = e.target.closest(".task-item");
    if (!item) return;
    const i = Number(item.dataset.i);
    const tasks = store.get("tasks", []);

    if (e.target.closest(".task-del")) {
      tasks.splice(i, 1);
    } else if (e.target.matches('input[type="checkbox"]')) {
      tasks[i].done = e.target.checked;
    } else {
      return;
    }
    store.set("tasks", tasks);
    renderTasks();
  });
}

// ---------- Barra de favoritos ----------
function faviconUrl(pageUrl) {
  try {
    const u = new URL(chrome.runtime.getURL("/_favicon/"));
    u.searchParams.set("pageUrl", pageUrl);
    u.searchParams.set("size", "16");
    return u.toString();
  } catch {
    return null;
  }
}

let openDropdownBtn = null;

function closeBookmarkDropdowns() {
  document.querySelectorAll("body > .bm-dropdown").forEach((d) => d.remove());
  document.querySelectorAll(".bm-folder.open").forEach((b) => b.classList.remove("open"));
  openDropdownBtn = null;
}

function buildBookmarkNodes(nodes, inDropdown) {
  const frag = document.createDocumentFragment();

  nodes.forEach((node) => {
    if (node.url) {
      const wrap = document.createElement("div");
      wrap.className = "bm-item";
      const a = document.createElement("a");
      a.className = "bm-link";
      a.href = node.url;
      a.title = node.title || node.url;

      const fav = faviconUrl(node.url);
      if (fav) {
        const img = document.createElement("img");
        img.className = "bm-icon";
        img.src = fav;
        img.alt = "";
        a.appendChild(img);
      } else {
        const ic = document.createElement("span");
        ic.className = "bm-icon";
        ic.innerHTML = ICONS.link;
        a.appendChild(ic);
      }

      const label = document.createElement("span");
      label.textContent = node.title || new URL(node.url).hostname;
      a.appendChild(label);
      wrap.appendChild(a);
      frag.appendChild(wrap);
      return;
    }

    // Pasta
    const wrap = document.createElement("div");
    wrap.className = "bm-item";
    const btn = document.createElement("button");
    btn.className = "bm-folder";
    btn.type = "button";
    btn.innerHTML = `<span class="bm-icon">${ICONS.folder}</span><span></span>`;
    btn.querySelector("span:nth-of-type(2)").textContent = node.title || t("folder");
    wrap.appendChild(btn);

    btn.addEventListener("click", (e) => {
      e.stopPropagation();

      if (inDropdown) {
        // Pasta aninhada: expande/recolhe dentro do dropdown
        btn.classList.toggle("open");
        let sub = wrap.querySelector(":scope > .bm-sub");
        if (sub) {
          sub.remove();
        } else {
          sub = document.createElement("div");
          sub.className = "bm-sub";
          sub.appendChild(buildBookmarkNodes(node.children || [], true));
          wrap.appendChild(sub);
        }
        return;
      }

      // Pasta da barra: abre dropdown fixo anexado ao body
      // (dentro da barra ele seria cortado pelo overflow-x)
      const wasOpen = openDropdownBtn === btn;
      closeBookmarkDropdowns();
      if (wasOpen) return;

      btn.classList.add("open");
      openDropdownBtn = btn;

      const drop = document.createElement("div");
      drop.className = "bm-dropdown";
      const children = node.children || [];
      if (children.length === 0) {
        drop.innerHTML = `<div class="bm-empty">${t("emptyFolder")}</div>`;
      } else {
        drop.appendChild(buildBookmarkNodes(children, true));
      }

      const rect = btn.getBoundingClientRect();
      drop.style.left = `${Math.max(8, Math.min(rect.left, window.innerWidth - 320))}px`;
      drop.style.top = `${rect.bottom + 6}px`;
      document.body.appendChild(drop);
    });

    frag.appendChild(wrap);
  });

  return frag;
}

async function renderBookmarksBar() {
  const bar = $("bookmarks-bar");
  const enabled = store.get("showBookmarks", true);
  const isExtension = typeof chrome !== "undefined" && chrome.runtime && chrome.runtime.id;

  if (!enabled || !isExtension) {
    bar.classList.add("hidden");
    bar.innerHTML = "";
    return;
  }

  if (!chrome.bookmarks) {
    // Permissão ainda não concedida: manifest novo exige recarregar a extensão
    bar.innerHTML = `<div class="bm-empty">${t("bookmarksPermission")}</div>`;
    bar.classList.remove("hidden");
    return;
  }

  try {
    const tree = await chrome.bookmarks.getTree();
    const roots = tree[0].children || [];
    // "Barra de favoritos" costuma ser o id "1"
    const barNode = roots.find((n) => n.id === "1") || roots[0];
    const items = (barNode && barNode.children) || [];

    bar.innerHTML = "";
    if (items.length === 0) {
      bar.innerHTML = `<div class="bm-empty">${t("noBookmarks")}</div>`;
    } else {
      bar.appendChild(buildBookmarkNodes(items, false));
    }
    bar.classList.remove("hidden");
    // Rolagem horizontal da barra desalinharia o dropdown fixo: fecha ao rolar
    bar.addEventListener("scroll", closeBookmarkDropdowns, { passive: true });
  } catch {
    bar.classList.add("hidden");
  }
}

// ---------- Editor de relógios mundiais ----------
const TZ_LIST =
  typeof Intl.supportedValuesOf === "function" ? Intl.supportedValuesOf("timeZone") : [];

let zonesDraft = [];

const normalize = (s) =>
  s.normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/_/g, " ").toLowerCase();

const tzLabel = (tz) => tz.split("/").pop().replace(/_/g, " ");

function renderZonesDraft() {
  const list = $("zones-list");
  list.innerHTML = "";
  zonesDraft.forEach((z, i) => {
    const chip = document.createElement("span");
    chip.className = "zone-chip";
    const label = document.createElement("span");
    label.textContent = z.label;
    label.title = z.tz;
    const del = document.createElement("button");
    del.type = "button";
    del.title = `${t("removeZone")} ${z.label}`;
    del.innerHTML = ICONS.x;
    del.addEventListener("click", () => {
      zonesDraft.splice(i, 1);
      renderZonesDraft();
    });
    chip.append(label, del);
    list.appendChild(chip);
  });
}

function renderZoneResults(query) {
  const list = $("zone-results");
  const q = normalize(query);
  const matches = TZ_LIST.filter((tz) => normalize(tz).includes(q)).slice(0, 6);

  if (matches.length === 0) {
    list.innerHTML = `<li class="city-option" aria-disabled="true">${t("noZoneResults")}</li>`;
    list.classList.remove("hidden");
    return;
  }

  list.innerHTML = "";
  matches.forEach((tz) => {
    const time = new Intl.DateTimeFormat(t("locale"), {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: tz
    }).format(new Date());

    const li = document.createElement("li");
    li.setAttribute("role", "option");
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "city-option";
    btn.innerHTML = `<strong></strong><small></small>`;
    btn.querySelector("strong").textContent = tzLabel(tz);
    btn.querySelector("small").textContent = `${tz} · ${t("now")} ${time}`;
    btn.addEventListener("click", () => {
      if (zonesDraft.length >= 6) {
        $("set-city-status").textContent = t("maxClocks");
      } else if (!zonesDraft.some((z) => z.tz === tz)) {
        zonesDraft.push({ label: tzLabel(tz), tz });
        renderZonesDraft();
      }
      $("zone-input").value = "";
      list.classList.add("hidden");
    });
    li.appendChild(btn);
    list.appendChild(li);
  });
  list.classList.remove("hidden");
}

function bindZoneSearch() {
  const input = $("zone-input");

  input.addEventListener("input", () => {
    const query = input.value.trim();
    if (query.length < 2) {
      $("zone-results").classList.add("hidden");
      return;
    }
    renderZoneResults(query);
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "Escape") $("zone-results").classList.add("hidden");
  });
}

// ---------- Busca de cidade (autocomplete com resultados reais) ----------
let selectedCity = null;
let citySearchTimer = null;

function hideCityResults() {
  $("city-results").classList.add("hidden");
  $("set-city").setAttribute("aria-expanded", "false");
}

function renderCityResults(results) {
  const list = $("city-results");

  if (!results || results.length === 0) {
    list.innerHTML = `<li class="city-option" aria-disabled="true">${t("noCityResults")}</li>`;
    list.classList.remove("hidden");
    return;
  }

  list.innerHTML = "";
  results.forEach((r) => {
    const detail = [r.admin1, r.country].filter(Boolean).join(", ");
    const li = document.createElement("li");
    li.setAttribute("role", "option");
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "city-option";
    btn.innerHTML = `<strong></strong><small></small>`;
    btn.querySelector("strong").textContent = r.name;
    btn.querySelector("small").textContent = detail;
    btn.addEventListener("click", () => {
      selectedCity = { name: r.name, lat: r.latitude, lon: r.longitude };
      $("set-city").value = detail ? `${r.name}, ${detail}` : r.name;
      $("set-city-status").textContent = `${t("selected")}: ${r.name} (${r.latitude.toFixed(2)}, ${r.longitude.toFixed(2)})`;
      hideCityResults();
    });
    li.appendChild(btn);
    list.appendChild(li);
  });

  list.classList.remove("hidden");
  $("set-city").setAttribute("aria-expanded", "true");
}

async function searchCity(query) {
  try {
    const url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(query)}&count=5&language=${lang}`;
    const res = await fetch(url);
    const data = await res.json();
    renderCityResults(data.results || []);
  } catch {
    $("set-city-status").textContent = t("cityError");
    hideCityResults();
  }
}

function bindCitySearch() {
  const input = $("set-city");

  input.addEventListener("input", () => {
    selectedCity = null;
    $("set-city-status").textContent = "";
    clearTimeout(citySearchTimer);

    const query = input.value.trim();
    if (query.length < 2) {
      hideCityResults();
      return;
    }
    // Debounce: busca 300ms após parar de digitar
    citySearchTimer = setTimeout(() => searchCity(query), 300);
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "Escape") hideCityResults();
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".city-search")) {
      hideCityResults();
      $("zone-results").classList.add("hidden");
    }
    if (!e.target.closest(".bm-item") && !e.target.closest(".bm-dropdown")) {
      closeBookmarkDropdowns();
    }
  });
}

// ---------- Temas favoritos e status dos provedores ----------
let themesDraft = [];

function renderThemesDraft() {
  const box = $("themes-list");
  box.innerHTML = "";
  THEMES.forEach((k) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "theme-chip" + (themesDraft.includes(k) ? " on" : "");
    b.textContent = t("theme_" + k);
    b.addEventListener("click", () => {
      const i = themesDraft.indexOf(k);
      if (i >= 0) themesDraft.splice(i, 1);
      else themesDraft.push(k);
      renderThemesDraft();
    });
    box.appendChild(b);
  });
}

async function checarProvedores() {
  const box = $("providers-status");
  box.innerHTML = "";
  PROVIDER_ORDER.forEach((nome) => {
    const row = document.createElement("div");
    row.className = "provider-row";
    row.dataset.p = nome;
    row.innerHTML = `<span class="dot wait"></span><span></span><em>${t("checking")}</em>`;
    row.querySelector("span:nth-of-type(2)").textContent = PROVIDERS[nome].nome;
    box.appendChild(row);
  });

  await Promise.all(
    PROVIDER_ORDER.map(async (nome) => {
      const row = box.querySelector(`[data-p="${nome}"]`);
      if (!row) return;
      try {
        await PROVIDERS[nome].ping();
        row.querySelector(".dot").className = "dot ok";
        row.querySelector("em").textContent = t("online");
      } catch {
        row.querySelector(".dot").className = "dot bad";
        row.querySelector("em").textContent = t("offline");
      }
    })
  );
}

// ---------- Configurações ----------
function bindSettings() {
  const modal = $("settings-modal");

  $("btn-settings").addEventListener("click", () => {
    const city = store.get("city", DEFAULTS.city);
    $("set-name").value = store.get("name", DEFAULTS.name);
    $("set-lang").value = lang;
    $("set-city").value = city.name;
    $("set-city-status").textContent = "";
    $("set-bookmarks").checked = store.get("showBookmarks", true);
    $("set-provider").value = store.get("provider", "auto");
    $("zone-input").value = "";
    zonesDraft = store.get("zones", DEFAULTS.zones).map((z) => ({ ...z }));
    renderZonesDraft();
    themesDraft = [...store.get("themes", DEFAULT_THEMES)];
    renderThemesDraft();
    checarProvedores();
    selectedCity = null;
    hideCityResults();
    $("zone-results").classList.add("hidden");
    modal.classList.remove("hidden");
  });

  $("set-cancel").addEventListener("click", () => modal.classList.add("hidden"));
  $("set-close").addEventListener("click", () => modal.classList.add("hidden"));
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.add("hidden");
  });

  $("set-save").addEventListener("click", async () => {
    const name = $("set-name").value.trim();
    if (name) store.set("name", name);

    if (selectedCity) {
      // Cidade escolhida na lista: usa as coordenadas exatas dela
      store.set("city", selectedCity);
      store.remove("weather");
    } else {
      // Sem seleção: se o texto mudou, exige escolher na lista
      const typed = $("set-city").value.trim();
      const current = store.get("city", DEFAULTS.city);
      if (typed && typed.toLowerCase() !== current.name.toLowerCase()) {
        $("set-city-status").textContent = t("chooseCity");
        return;
      }
    }

    store.set("zones", zonesDraft);
    store.set("showBookmarks", $("set-bookmarks").checked);

    const provedorAntes = store.get("provider", "auto");
    const temasAntes = JSON.stringify(store.get("themes", DEFAULT_THEMES));
    store.set("provider", $("set-provider").value);
    store.set("themes", themesDraft);
    const fotoMudou =
      $("set-provider").value !== provedorAntes ||
      JSON.stringify(themesDraft) !== temasAntes;

    const novoIdioma = $("set-lang").value;
    if (novoIdioma !== lang && I18N[novoIdioma]) {
      lang = novoIdioma;
      store.set("lang", lang);
    }

    applyI18n();
    updateClock();
    renderWorldClocks();
    renderQuote();
    renderTasks();
    renderBookmarksBar();
    updateWeather(true);
    if (fotoMudou) setBackground(true);
    modal.classList.add("hidden");
  });
}

// ---------- Atalhos globais ----------
function bindGlobal() {
  $("btn-shuffle").addEventListener("click", () => setBackground(true));

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      $("notes-panel").classList.remove("open");
      $("tasks-panel").classList.remove("open");
      $("settings-modal").classList.add("hidden");
      closeBookmarkDropdowns();
    }
  });
}

// ---------- Inicialização ----------
async function init() {
  await initStore();
  lang = store.get("lang", "pt");
  if (!I18N[lang]) lang = "pt";
  applyI18n();

  updateClock();
  renderWorldClocks();
  renderQuote();
  renderTasks();
  setBackground();
  updateWeather();
  renderBookmarksBar();

  bindNotes();
  bindTasks();
  bindCitySearch();
  bindZoneSearch();
  bindSettings();
  bindGlobal();

  setInterval(updateClock, 1000);
  setInterval(renderWorldClocks, 15000);
  setInterval(() => updateWeather(), 30 * 60 * 1000);
}

document.addEventListener("DOMContentLoaded", init);
