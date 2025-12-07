// script.js — fichier central corrigé

let currentLang = localStorage.getItem("lang") || "fr";
const CORRECT_HASH = "88546f608b8f5f0e1451b8da1177b96fec4729f98195755eaf29daba0e597126";

// ----------------- TRANSLATIONS (FR / ES) -----------------
const translations = {
  fr: {
    "nav-accueil": "Accueil",
    "nav-infos": "Infos",
    "nav-galerie": "Galerie",
    "titre-principal": "Clara & Adrián",
    "countdown-title": "Le grand jour arrive dans",
    "label-days": "JOURS",
    "label-hours": "HEURES",
    "label-minutes": "MINUTES",
    "label-seconds": "SECONDES",
    // Infos / WhatsApp
    "infos-title": "Où et quand ?",
    "infos-ceremonie": "Cérémonie : 14 août 2026 – Pazo de Xerlis, A Estrada (Galice, Espagne)",
    "infos-hour": "Heure : 14h00",
    "infos-whatsapp-button": "Rejoindre le groupe WhatsApp",
    "infos-whatsapp-prompt": "Entrez le mot de passe pour accéder au groupe WhatsApp :",
    "infos-whatsapp-link-label": "👉 Rejoindre",
    "infos-whatsapp-incorrect": "Mot de passe incorrect !",
    "infos-whatsapp-text": "Rejoignez le groupe pour les infos",
    "sleep_title": "🏨 Où dormir ?",
    "sleep_text": "Nous vous proposerons prochainement une liste d’hébergements à proximité du lieu du mariage. 🏡",
    "travel_title": "🗺️ Comment y aller ?",
    "wedding_title": "💍 Informations sur le mariage",
    "wedding_text": "Tenue : élégante mais confortable (on dansera 💃). Les enfants sont les bienvenus ! 👶",
    "party_title": "🎉 Planning fun",
    "party_1": "🕐 14h00 – Cérémonie",
    "party_2": "🍸 16h00 – Cocktail & apéritif",
    "party_3": "🍽️ 18h00 – Dîner",
    "party_4": "💃 21h00 – Soirée et fiesta !",
    "party_5": "🌅 02h00 – Fin de la fête",
    "info_access_title": "✨ Informations pratiques",
    "info_access_text": "Tenue : élégante mais confortable (on dansera 💃). Les enfants sont les bienvenus ! 👶",
    "info_access-move": `Nous recommandons chaleureusement d’avoir un moyen de locomotion sur place, les distances peuvent être longues et les transports publics ne sont pas optimales partout.`,
    "travel_airports_intro": "✈️ Aéroports",
    "travel_airport_scq": "SCQ — Santiago de Compostela (Aéroport Lavacolla) — ~30–40 min",
    "travel_airport_vgo": "VGO — Vigo — ~1h",
    "travel_airport_opo": "OPO — Porto — ~2h15–2h30"
  },
  es: {
    "nav-accueil": "Inicio",
    "nav-infos": "Información",
    "nav-galerie": "Galería",
    "titre-principal": "Clara & Adrián",
    "countdown-title": "El gran día llega en",
    "label-days": "DÍAS",
    "label-hours": "HORAS",
    "label-minutes": "MINUTOS",
    "label-seconds": "SEGUNDOS",
    "infos-title": "¿Dónde y cuándo?",
    "infos-ceremonie": "Ceremonia: 14 de agosto de 2026 – Pazo de Xerlís, A Estrada (Galicia, España)",
    "infos-hour": "Hora: 14:00",
    "infos-whatsapp-button": "Acceder al grupo de WhatsApp",
    "infos-whatsapp-prompt": "Introduce la contraseña para acceder al grupo de WhatsApp:",
    "infos-whatsapp-link-label": "👉 Unirse",
    "infos-whatsapp-incorrect": "¡Contraseña incorrecta!",
    "infos-whatsapp-text": "Únete al grupo para recibir información",
    "sleep_title": "🏨 Dónde dormir",
    "sleep_text": "Pronto os enviaremos una lista de alojamientos (hoteles, airbnb, casas rurales) cerca del lugar del matrimonio. 🏡",
    "travel_title": "🗺️ Cómo llegar",
    "wedding_title": "💍 Información sobre la boda",
    "wedding_text": "Vestimenta: elegante pero cómoda (¡habrá baile 💃!). ¡Los niños son bienvenidos! 👶",
    "party_title": "🎉 Plan de la fiesta",
    "party_1": "🕐 14:00 – Ceremonia",
    "party_2": "🍸 16:00 – Cóctel y aperitivo",
    "party_3": "🍽️ 18:00 – Cena",
    "party_4": "💃 21:00 – Fiesta y baile",
    "party_5": "🌅 02:00 – Fin de la celebración",
    "info_access_title": "✨ Información práctica",
    "info_access_text": "Vestimenta: elegante pero cómoda (¡habrá baile 💃!). ¡Los niños son bienvenidos! 👶",
    "info_access-move": `Recomendamos encarecidamente disponer de un medio de transporte en la zona, ya que las distancias pueden ser largas y el transporte público no es óptimo en todas partes.`,
    "travel_airports_intro": "✈️ Aeropuertos",
    "travel_airport_scq": "SCQ — Santiago de Compostela (Lavacolla) — ~30–40 min",
    "travel_airport_vgo": "VGO — Vigo — ~1h",
    "travel_airport_opo": "OPO — Porto — ~2h15–2h30"
  }
};

// ----------------- UTIL -----------------
function safeGet(id) { return document.getElementById(id) || null; }

async function sha256Hex(str) {
  const enc = new TextEncoder();
  const data = enc.encode(str);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(hashBuffer)).map(b => b.toString(16).padStart(2, '0')).join('');
}

// ----------------- APPLY TRANSLATIONS -----------------
function applyTranslations() {
  const map = translations[currentLang] || translations['fr'];

  Object.keys(map).forEach(key => {
    const el = safeGet(key);
    if (!el) return;
    if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
      el.placeholder = map[key];
    } else {
      el.innerHTML = map[key];
    }
  });

  // Special elements
  const wb = safeGet('whatsappButton');
  if (wb && translations[currentLang]['infos-whatsapp-button']) wb.textContent = translations[currentLang]['infos-whatsapp-button'];

  const waAnchor = safeGet('whatsappAnchor');
  if (waAnchor && translations[currentLang]['infos-whatsapp-link-label']) waAnchor.textContent = translations[currentLang]['infos-whatsapp-link-label'];

  const waText = safeGet('infos-whatsapp-text');
  if (waText && translations[currentLang]['infos-whatsapp-text']) waText.textContent = translations[currentLang]['infos-whatsapp-text'];

  const langToggle = safeGet('lang-toggle');
  if (langToggle) langToggle.innerText = (currentLang === 'fr' ? 'ES / FR' : 'ES / FR');
}

// ----------------- ACCORDION -----------------
function initAccordion() {
  document.querySelectorAll(".accordion-header").forEach(button => {
    button.setAttribute('role', 'button');
    button.tabIndex = 0;

    const content = button.nextElementSibling;
    if (!content) return;

    content.style.maxHeight = content.classList.contains('open') ? content.scrollHeight + "px" : null;
    button.classList.toggle('active', content.classList.contains('open'));

    button.addEventListener("click", () => {
      const isOpen = content.style.maxHeight && content.style.maxHeight !== "";
      if (isOpen) {
        content.style.maxHeight = null;
        button.classList.remove('active');
        content.classList.remove('open');
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
        button.classList.add('active');
        content.classList.add('open');
      }
    });

    button.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        button.click();
      }
    });
  });
}

// ----------------- COUNTDOWN -----------------
function initCountdown() {
  const weddingDate = new Date("2026-08-14T14:00:00");
  const elDays = safeGet("days");
  const elHours = safeGet("hours");
  const elMinutes = safeGet("minutes");
  const elSeconds = safeGet("seconds");

  function tick() {
    const now = new Date();
    const diffMs = weddingDate.getTime() - now.getTime();
    if (diffMs <= 0) {
      const parent = document.querySelector(".countdown");
      if (parent) parent.innerHTML = '<p class="celebrate">C’est le grand jour ! 🎉</p>';
      return;
    }
    const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diffMs / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diffMs / (1000 * 60)) % 60);
    const seconds = Math.floor((diffMs / 1000) % 60);

    if (elDays) elDays.textContent = String(days).padStart(2, "0");
    if (elHours) elHours.textContent = String(hours).padStart(2, "0");
    if (elMinutes) elMinutes.textContent = String(minutes).padStart(2, "0");
    if (elSeconds) elSeconds.textContent = String(seconds).padStart(2, "0");
  }

  tick();
  setInterval(tick, 1000);
}

// ----------------- WHATSAPP (password -> reveal link) -----------------
function initWhatsApp() {
  const whatsappButton = safeGet("whatsappButton");
  const whatsappLinkSpan = safeGet("whatsappLink");
  const whatsappAnchor = safeGet("whatsappAnchor");

  if (!whatsappButton || !whatsappLinkSpan || !whatsappAnchor) return;

  whatsappButton.addEventListener("click", async () => {
    const promptText = translations[currentLang] && translations[currentLang]['infos-whatsapp-prompt']
      ? translations[currentLang]['infos-whatsapp-prompt']
      : "Entrez le mot de passe :";
    const password = prompt(promptText);
    if (!password) return;
    const hashHex = await sha256Hex(password);
    if (hashHex === CORRECT_HASH) {
      whatsappLinkSpan.style.display = "inline";
    } else {
      alert(translations[currentLang]['infos-whatsapp-incorrect'] || "Mot de passe incorrect !");
    }
  });
}

// ----------------- INIT -----------------
document.addEventListener("DOMContentLoaded", () => {
  applyTranslations();
  initAccordion();
  initCountdown();
  initWhatsApp();
});
