
// ---------------- LANGUE ----------------
let currentLang = localStorage.getItem("lang") || "fr";

const langButton = document.getElementById("lang-toggle");
if (langButton) {
  langButton.addEventListener("click", () => {
    currentLang = currentLang === "fr" ? "es" : "fr";
    localStorage.setItem("lang", currentLang);
    applyTranslations();
  });
}

function applyTranslations() {
  const elements = document.querySelectorAll("[id]");
  elements.forEach(el => {
    const id = el.id;
    if (translations[currentLang][id]) {
      el.textContent = translations[currentLang][id];
    }
  });
}

document.addEventListener("DOMContentLoaded", applyTranslations);

// ---------------- TRADUCTIONS ----------------
const translations = {
  fr: {
    "nav-accueil": "Accueil",
    "nav-infos": "Infos",
    "nav-rsvp": "RSVP",
    "nav-galerie": "Galerie",
    "titre-principal": "Clara & Adrian",
    "titre-secondaire": "14 aout ❤️",
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
    "claraName": "Clara",
    "claraText": "La plus belle des histoires commence souvent avec un sourire et un peu de malice 💕",
    "adrianName": "Adrián",
    "adrianText": ` A moi maintenant de raconter notre histoire (lisez d'abord celle de Clara sinon ça commencera mal). 
          Nous nous sommmes rencontrés le (... je réfléchi ...) le 14 octobre, pour une soirée de d'adieu à une amie commune qui partait vivre à l'étranger.
          J'avais déjà établi ma stratégie pour la connaitre alors qu'elle, innocente, n'avait rien prévu.
          Notre histoire a commencé ce soir-là, et avons ensuite pendant les neufs prochaines années, vécus plein de belles choses, en commençeant par cuisiner chez elle, à passer des soirées et commander de la nourriture très saine, prendre du poids
          rencontrer sa famille et découvrir leur organisation légendaire, prendre encore du poids, refuser de danser la salsa avec elle pour enfin en faire parce quelqu'un d'autre m'a motivé, sa rencontre avec ma famille en Galice et me rende compte qu'il l'aime plus que moi, 
          laisser ma ville natale pour vivre avec elle au Luxembourg ...  et enfin parmi les plus belles aventure, nos voyages qu'on a fait (Indonésie, Guadeloupe, Jordanie, Japon et j'en passe) grace auxquels j'ai pu découvrir des nouvelles parties de moi-même.
          Bref, le 19 mai 2025 j'ai lui ai demandé sa main et sans surprise (car je suis toujours sur de moi) elle a dit oui. On a commencé par se connaitre en discutant de la Galice, pour finalement s'unir devant nos proches au même endroit
          C'est une belle manière de célébrer notre union, et j'aimerai du fond du coeur que vous soyez tous là pour partager ce moment avec nous (vous ne serez pas déçus promis !).`,
  
    // ---- INFOS ----
    "infos-title": "📍 Où et quand ?",
    "infos-when": "14 août 2026 – Pazo de Sergude, A Coruña (Galice, Espagne)",
    "infos-hour": "Heure : 14h00",
    "infos-whatsapp": "Lien WhatsApp : https://chat.whatsapp.com/XXXXXX",

    "sleep-title": "🏨 Où dormir ?",
    "sleep-text": "Nous vous proposerons prochainement une liste d’hébergements (hôtels, airbnb, gîtes) à proximité du lieu du mariage. 🏡",

    "travel-title": "🗺️ Comment y aller ?",
    "travel-galicia": "Les aéroports les plus proches sont A Coruña, Santiago de Compostela et Vigo.",
    "travel-location": "Le mariage se tiendra au Pazo de Sergude, à 25 minutes du centre de A Coruña.",
    "travel-move": "Les bus et taxis sont disponibles facilement, mais le plus pratique reste la location de voiture. 🚗",

    "wedding-title": "💍 Informations sur le mariage",
    "wedding-text": "Tenue : élégante mais confortable (on dansera 💃). Les enfants sont les bienvenus ! 👶",

    "party-title": "🎉 Planning fun",
    "party-1": "🕐 14h00 – Cérémonie",
    "party-2": "🍸 16h00 – Cocktail & apéritif",
    "party-3": "🍽️ 18h00 – Dîner",
    "party-4": "💃 21h00 – Soirée et fiesta !",
    "party-5": "🌅 02h00 – Fin de la fête"
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
    "claraName": "Clara",
    "claraText": "La historia más hermosa suele comenzar con una sonrisa y un toque de picardía 💕",
    "adrianName": "Adrián",
    "adrianText": "Convencido de que se enamoraría... y no se equivocó 😎",

     // ---- INFOS ----
    "infos-title": "📍 Dónde y cuándo",
    "infos-when": "14 de agosto de 2026 – Pazo de Sergude, A Coruña (Galicia, España)",
    "infos-hour": "Hora: 14:00",
    "infos-whatsapp": "Lien WhatsApp : https://chat.whatsapp.com/XXXXXX",
    "info_access-title":"",
    
    "sleep-title": "🏨 Dónde alojarse",
    "sleep-text": "Pronto os enviaremos una lista de alojamientos (hoteles, airbnb, casas rurales) cerca del lugar de la boda. 🏡",

    "travel-title": "🗺️ Cómo llegar",
    "travel-galicia": "Los aeropuertos más cercanos son A Coruña, Santiago de Compostela y Vigo.",
    "travel-location": "La boda se celebrará en el Pazo de Sergude, a 25 minutos del centro de A Coruña.",
    "travel-move": "Hay autobuses y taxis disponibles, pero lo más práctico es alquilar un coche. 🚗",

    "wedding-title": "💍 Información sobre la boda",
    "wedding-text": "Vestimenta: elegante pero cómoda (¡vamos a bailar! 💃). Los niños son bienvenidos 👶.",

    "party-title": "🎉 Programa de la fiesta",
    "party-1": "🕐 14:00 – Ceremonia",
    "party-2": "🍸 16:00 – Cóctel y aperitivo",
    "party-3": "🍽️ 18:00 – Cena",
    "party-4": "💃 21:00 – Fiesta",
    "party-5": "🌅 02:00 – Fin de la fiesta",

    "info_access-text":"",
  }
};

// ---------------- UTIL ----------------
function safeGet(id) {
  return document.getElementById(id) || null;
}

// ---------------- FONCTION LANGUE ----------------
function changeLanguage(lang) {
  const langButton = safeGet('lang-toggle');
  if (langButton) langButton.innerText = (lang === 'fr' ? 'ES' : 'FR');

  const map = translations[lang];
  if (!map) return;

  Object.keys(map).forEach(key => {
    if (key === "guest-placeholder") {
      const guestInput = safeGet("guest-name");
      if (guestInput) guestInput.setAttribute("placeholder", map[key]);
    } else {
      const el = safeGet(key);
      if (el) el.innerText = map[key];
    }
  });
    // 🩷 Textes Clara & Adrián
  if (document.getElementById("clara-name")) {
    document.getElementById("clara-name").textContent = translations[lang].claraName;
    document.getElementById("clara-text").textContent = translations[lang].claraText;
    document.getElementById("adrian-name").textContent = translations[lang].adrianName;
    document.getElementById("adrian-text").textContent = translations[lang].adrianText;
  }

}

// ---------------- COMPTE À REBOURS ----------------
const countdownDate = new Date("August 14, 2026 14:00:00").getTime();
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

if (daysEl && hoursEl && minutesEl && secondsEl) {
  setInterval(() => {
    const now = new Date().getTime();
    const diff = countdownDate - now;

    if (diff < 0) return;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    daysEl.textContent = days.toString().padStart(2, "0");
    hoursEl.textContent = hours.toString().padStart(2, "0");
    minutesEl.textContent = minutes.toString().padStart(2, "0");
    secondsEl.textContent = seconds.toString().padStart(2, "0");
  }, 1000);
}

function updateCountdown() {
  try {
    // Remplace par la date/heure exacte de ton évènement
    const weddingDate = new Date("2026-08-14T14:00:00");
    const now = new Date();
    const diffMs = weddingDate.getTime() - now.getTime();

    const countdownContainer = document.querySelector(".countdown-timer");
    if (!countdownContainer) return;

    if (diffMs <= 0) {
      // Si la date est passée
      const parent = document.querySelector(".countdown");
      if (parent) parent.innerHTML = '<p class="celebrate">C’est le grand jour ! 🎉</p>';
      return;
    }

    const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diffMs / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diffMs / (1000 * 60)) % 60);
    const seconds = Math.floor((diffMs / 1000) % 60);

    const elDays = safeGet("days");
    const elHours = safeGet("hours");
    const elMinutes = safeGet("minutes");
    const elSeconds = safeGet("seconds");

    if (elDays) elDays.textContent = String(days).padStart(2, "0");
    if (elHours) elHours.textContent = String(hours).padStart(2, "0");
    if (elMinutes) elMinutes.textContent = String(minutes).padStart(2, "0");
    if (elSeconds) elSeconds.textContent = String(seconds).padStart(2, "0");
  } catch (err) {
    console.error("Erreur updateCountdown:", err);
  }
}

// ---------------- DOM CONTENT LOADED ----------------
document.addEventListener('DOMContentLoaded', () => {
  console.log("DOM ready — initialisation script.");

  // Appliquer la langue initiale
  changeLanguage(currentLang);

  // Toggle FR/ES (si présent)
  const langToggle = safeGet('lang-toggle');
  if (langToggle) {
    langToggle.addEventListener('click', () => {
      currentLang = currentLang === 'fr' ? 'es' : 'fr';
      changeLanguage(currentLang);
    });
  }

  // Injecter la liste des invités si la datalist existe
  const datalist = safeGet("guest-list");
  if (datalist) {
    guestList.forEach(name => {
      const option = document.createElement("option");
      option.value = name;
      datalist.appendChild(option);
    });
  }

  // Lancer le compte à rebours si la zone existe
  const countdown = document.querySelector(".countdown-timer");
  if (countdown) {
    updateCountdown();               // appel immédiat
    setInterval(updateCountdown, 1000); // puis chaque seconde
  } else {
    console.log("Aucun élément .countdown-timer détecté — saut du countdown.");
  }

  // ---------------- RSVP (initialisation uniquement si présent) ----------------
 // ---------------- RSVP ----------------
const guestInput = document.getElementById("guest-name");
const guestListElement = document.getElementById("guest-list");
const rsvpForm = document.getElementById("rsvp-form");
const thankYou = document.getElementById("thank-you-message");

if (guestListElement && guestList) {
  guestList.forEach(name => {
    const option = document.createElement("option");
    option.value = name;
    guestListElement.appendChild(option);
  });
}

if (rsvpForm) {
  rsvpForm.addEventListener("submit", e => {
    e.preventDefault();
    const name = guestInput.value.trim();
    if (!name) return alert("Merci d'indiquer votre nom !");
    thankYou.textContent = "Merci, votre réponse a été enregistrée 💕";
    thankYou.classList.add("show");
    rsvpForm.reset();
  });
}
 
  const form = safeGet("rsvp-form");
  if (form) {
    const thankYou = safeGet("thank-you-message");
    const guestNameInput = safeGet("guest-name");
    const guestSet = new Set(guestList);

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!guestNameInput) return;

      const nameValue = guestNameInput.value.trim();
      if (!guestSet.has(nameValue)) {
        alert(currentLang === "fr"
          ? "Veuillez sélectionner un nom dans la liste."
          : "Por favor, selecciona un nombre de la lista.");
        return;
      }

      if (thankYou) {
        thankYou.innerText = translations[currentLang]["thank-you"];
        thankYou.classList.add("show");
      }

      // Redirection (optionnelle)
      setTimeout(() => {
        window.location.href = "index.html";
      }, 3000);
    });
  } else {
    console.log("Pas de formulaire RSVP présent sur cette page.");
  }

});
