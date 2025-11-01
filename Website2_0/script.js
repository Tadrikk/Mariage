let currentLang = localStorage.getItem("lang") || "fr";
const CORRECT_HASH = "88546f608b8f5f0e1451b8da1177b96fec4729f98195755eaf29daba0e597126";
const STORAGE_KEY_RSVP = "mariage_rsvp_local";

// --------------------------------------------------
// Traductions FR / ES
// --------------------------------------------------
const translations = {
  fr: {
    "nav-accueil": "Accueil",
    "nav-infos": "Infos",
    "nav-rsvp": "RSVP",
    "nav-galerie": "Galerie",
    "titre-principal": "Clara & Adrián",
    "titre-secondaire": "14 août ❤️",
    "countdown-title": "💃🕺Le grand jour arrive dans...",
    "label-days": "JOURS",
    "label-hours": "HEURES",
    "label-minutes": "MINUTES",
    "label-seconds": "SECONDES",
    "rsvp-title": "Seriez-vous présent ?",
    "label-oui": "Oui",
    "label-non": "Non, j'ai aqua poney",
    "label-name": "Votre nom :",
    "guest-placeholder": "Tapez votre nom...",
    "submit-button": "Confirmer",
    "thank-you": "Merci, votre réponse a été enregistrée",
    // Infos / WhatsApp
    "infos-title": "Où et quand ?",
    "infos-ceremonie": "Cérémonie : 14 août 2026 – Pazo de Xerlis, A Estrada (Galice, Espagne)",
    "infos-hour": "Heure : 14h00",
    "infos-whatsapp-button": "Rejoindre le groupe WhatsApp",
    "infos-whatsapp-prompt": "Entrez le mot de passe pour accéder au groupe WhatsApp :",
    "infos-whatsapp-link-label": "👉 Rejoindre",
    "infos-whatsapp-incorrect": "Mot de passe incorrect !",
    "infos-whatsapp-text": "Rejoignez le groupe pour les infos et surprises 💕",
    "rsvp-prompt": "Entrez le mot de passe pour confirmer votre RSVP :"
  },
  es: {
    "nav-accueil": "Inicio",
    "nav-infos": "Información",
    "nav-rsvp": "Confirmación",
    "nav-galerie": "Galería",
    "titre-principal": "Clara & Adrián",
    "titre-secondaire": "14 de agosto ❤️",
    "countdown-title": "💃🕺El gran día llega en...",
    "label-days": "DÍAS",
    "label-hours": "HORAS",
    "label-minutes": "MINUTOS",
    "label-seconds": "SEGUNDOS",
    "rsvp-title": "¿Vendrás a la boda?",
    "label-oui": "Sí",
    "label-non": "No, tengo aqua poney",
    "label-name": "Tu nombre:",
    "guest-placeholder": "Escribe tu nombre...",
    "submit-button": "Confirmar",
    "thank-you": "Gracias, tu respuesta ha sido guardada",
    // Infos / WhatsApp
    "infos-title": "¿Dónde y cuándo?",
    "infos-ceremonie": "Ceremonia: 14 de agosto de 2026 – Pazo de Xerlis, A Estrada (Galicia, España)",
    "infos-hour": "Hora: 14:00",
    "infos-whatsapp-button": "Acceder al grupo de WhatsApp",
    "infos-whatsapp-prompt": "Introduce la contraseña para acceder al grupo de WhatsApp:",
    "infos-whatsapp-link-label": "👉 Unirse",
    "infos-whatsapp-incorrect": "¡Contraseña incorrecta!",
    "infos-whatsapp-text": "Únete al grupo para recibir información y sorpresas 💕",
    "rsvp-prompt": "Introduce la contraseña para confirmar tu RSVP:"
  }
};

// --------------------------------------------------
// Utilitaires
// --------------------------------------------------
function safeGet(id) { return document.getElementById(id) || null; }

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);
  applyTranslations();
}

function applyTranslations() {
  const map = translations[currentLang] || translations['fr'];
  Object.keys(map).forEach(key => {
    const el = safeGet(key);
    if (el) {
      if (el.tagName === "INPUT" && el.placeholder !== undefined) {
        el.placeholder = map[key];
      } else {
        el.textContent = map[key];
      }
    }
  });

  // Spécial WhatsApp
  const wb = safeGet('whatsappButton');
  if (wb) wb.textContent = translations[currentLang]['infos-whatsapp-button'];

  const waLink = safeGet('whatsappAnchor');
  if (waLink) waLink.textContent = translations[currentLang]['infos-whatsapp-link-label'];

  const waText = safeGet('infos-whatsapp-text');
  if (waText) waText.textContent = translations[currentLang]['infos-whatsapp-text'];

  // Toggle langue
  const langToggle = safeGet('lang-toggle');
  if (langToggle) langToggle.innerText = (currentLang === 'fr' ? 'ES / FR' : 'ES / FR');
}

// SHA-256 hex
async function sha256Hex(str) {
  const enc = new TextEncoder();
  const data = enc.encode(str);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(hashBuffer)).map(b => b.toString(16).padStart(2, '0')).join('');
}

// Stockage RSVP local
function storeLocalRsvp(entry) {
  try {
    const existing = JSON.parse(localStorage.getItem(STORAGE_KEY_RSVP) || "[]");
    existing.push({ ...entry, ts: new Date().toISOString() });
    localStorage.setItem(STORAGE_KEY_RSVP, JSON.stringify(existing));
  } catch (err) {
    console.warn("Erreur stockage local RSVP:", err);
  }
}

// --------------------------------------------------
// DOM ready
// --------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  if (!translations[currentLang]) currentLang = 'fr';
  applyTranslations();

  // Toggle langue
  const langToggle = safeGet('lang-toggle');
  if (langToggle) langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'fr' ? 'es' : 'fr';
    setLang(currentLang);
  });

  // Accordéon
  document.querySelectorAll(".accordion-header").forEach(button => {
    button.addEventListener("click", () => {
      const content = button.nextElementSibling;
      button.classList.toggle("active");
      content.style.maxHeight = content.style.maxHeight ? null : content.scrollHeight + "px";
    });
  });

  // Compte à rebours
  function updateCountdownLocal() {
    const weddingDate = new Date("2026-08-14T14:00:00");
    const now = new Date();
    const diffMs = weddingDate.getTime() - now.getTime();
    const elDays = safeGet("days");
    const elHours = safeGet("hours");
    const elMinutes = safeGet("minutes");
    const elSeconds = safeGet("seconds");
    if (diffMs <= 0 && elDays) {
      const parent = document.querySelector(".countdown");
      if (parent) parent.innerHTML = '<p class="celebrate">C’est le grand jour ! 🎉</p>';
      return;
    }
    if (elDays) elDays.textContent = String(Math.floor(diffMs / (1000*60*60*24))).padStart(2,"0");
    if (elHours) elHours.textContent = String(Math.floor((diffMs/(1000*60*60))%24)).padStart(2,"0");
    if (elMinutes) elMinutes.textContent = String(Math.floor((diffMs/(1000*60))%60)).padStart(2,"0");
    if (elSeconds) elSeconds.textContent = String(Math.floor((diffMs/1000)%60)).padStart(2,"0");
  }
  updateCountdownLocal();
  setInterval(updateCountdownLocal, 1000);

  // WhatsApp
  const whatsappButton = safeGet("whatsappButton");
  const whatsappLinkSpan = safeGet("whatsappLink");
  const whatsappAnchor = safeGet("whatsappAnchor");
  if (whatsappButton && whatsappLinkSpan && whatsappAnchor) {
    whatsappButton.addEventListener("click", async () => {
      const password = prompt(translations[currentLang]["infos-whatsapp-prompt"]);
      if (!password) return;
      const hashHex = await sha256Hex(password);
      if (hashHex === CORRECT_HASH) {
        whatsappLinkSpan.style.display = "inline";
      } else {
        alert(translations[currentLang]["infos-whatsapp-incorrect"]);
      }
    });
  }

  // RSVP
  const rsvpForm = safeGet("rsvp-form");
  const guestNameInput = safeGet("guest-name");
  const thankYou = safeGet("thank-you-message");
  if (rsvpForm && guestNameInput) {
    rsvpForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const nameValue = guestNameInput.value.trim();
      if (!nameValue) return alert(currentLang==="fr"?"Merci d'indiquer votre nom !":"Por favor indica tu nombre !");
      const password = prompt(translations[currentLang]["rsvp-prompt"]);
      if (!password) return;
      const hashHex = await sha256Hex(password);
      if (hashHex !== CORRECT_HASH) return alert(currentLang==="fr"?"Mot de passe incorrect !":"¡Contraseña incorrecta!");
      if (thankYou) { thankYou.innerText = translations[currentLang]["thank-you"]; thankYou.classList.add("show"); }
      storeLocalRsvp({ name: nameValue, presence: (safeGet("rsvp-oui")?.checked ? "oui":"non") });
      rsvpForm.reset();
      setTimeout(()=>{if(safeGet("index.html"))window.location.href="index.html";},1800);
    });
  }

}); // DOMContentLoaded
