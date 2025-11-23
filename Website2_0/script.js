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
    "clara-text":
      `Notre histoire commence le 14 octobre 2016, dans un bar Bruxellois, le premier contact est facil, car Adri s’est déjà renseigné sur moi et sait que nous avons des origines communes, nous venons tous les deux de Galice.
      
      Les semaines passent et nous maintenons le contact grâce à notre passion commune pour le sport et la nourriture, la semaine Adri vient cuisiner des plats de sa diète dans mon petit appartement d’étudiante et le week-end on se balade.
      
      Les mois passent et on se découvre une passion pour les voyages, je suis habituée au chaos des Vilariño (Fostier), Adri lui au début préfère plus de confort et d’organisation, mais il n'a pas le choix que de s’adapter, car rapidement il se retrouve en Indonésie avec un sac à dos à parcourir plus de 1500 km en 3 semaines.
      
      Les années passent, nous avons vécus plein d’aventures, mais sommes séparés par la distance, Adri à Bruxelles, moi au Luxembourg et après quelques négociations, Adri déménage pour vivre avec moi et en échange, je prends des cours de Salsa. 
      
      Le 19 mai 2025, celle qui nous avait unis pour la première fois, est témoin de notre engagement. Nous voilà en Galice, plus précisément aux Iles Cies, Adri est devant moi, un genou à terre et me demande qu’on se marie. Je dis oui, évidemment, oui à vivre notre vie pour toujours.
      
      Quelques jours plus tard, dans un train en direction de Madrid, on vous annonce la nouvelle et on commence les préparatifs de notre mariage, en Galice, où d’autre ? Dans notre terre tant aimée que nous souhaitions vous présenter depuis tant d’années, alors si vous êtes curieux de découvrir le paradis ou si vous souhaitez assister à notre union, on vous attend le 16 août 2026 au Pazo de Xerlis.`,
    "adrian-text": 
      `A moi maintenant de raconter notre histoire.
      Nous nous sommmes rencontrés le (... je réfléchi ...) le 14 octobre, pour une soirée d'adieu d'une amie commune. 
      J'avais déjà établi ma stratégie pour l'aborder, alors qu'elle, innocente, n'avait rien prévu.
      Notre belle histoire a commencé ce soir-là et on est toujours ensemble!
      On a vécu plein de belles choses, en commençeant par cuisiner chez elle, à passer ensuite des soirées à commander de la nourriture très saine, 
      et à prendre du poids. Puis rencontrer sa famille et découvrir leur organisation légendaire, à prendre encore du poids, 
      à refuser de danser la salsa avec elle pour enfin en faire parce quelqu'un d'autre m'a motivé,
      me rendre compte que ma famille en Galice l'aime plus que moi et jusqu'à laisser ma ville natale pour vivre avec elle au Luxembourg ... 
      et bien sur tous les voyages qu'on a fait (Indonésie, Guadeloupe, Jordanie, Japon et j'en passe) grace auxquels j'ai pu découvrir des parties de moi encore inconnues.
      Bref, le 19 mai 2025 j'ai lui ai demandé sa main et sans surprise (car je suis toujours sur de moi) elle a dit oui. 
      C'est drôle car notre premier sujet de discussion était sur la Galice, et finalement c'est là qu'on concrétise notre union.
      J'aimerai du fond du coeur que vous soyez tous là pour partager ce moment avec nous (vous ne serez pas déçus promis !).`,
"titre-principal": "Clara & Adrián",
    "countdown-title": "Le grand jour arrive dans",
    "label-days": "JOURS",
    "label-hours": "HEURES",
    "label-minutes": "MINUTES",
    "label-seconds": "SECONDES",
    "rsvp-title-index": "Serez-vous présent ?",
    "rsvp-datelim-index":"Nous avons hâte de célébrer ce jour spécial avec vous !",
    "label-oui": "Oui",
    "label-non": "Non",
    "label-name": "Votre nom et prénom :",
    "guest-placeholder": "Tapez votre nom...",
    "children-text": `Vos enfants sont les bienvenus ! Cependant, nous vous suggérons de ne pas les emmener si vous craignez de devoir partir prématurément. 
    Veuillez nous informer si vous venez avec vos enfants`,
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
    "infos-whatsapp-text": "Rejoignez le groupe pour les infos",
    "rsvp-prompt": "Entrez le mot de passe pour confirmer votre RSVP :",

    
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

    "info_access_title": "✨ Informations & Accessoires",
    "info_access_text": "Tenue : élégante mais confortable (on dansera 💃). Les enfants sont les bienvenus ! 👶",

    // ---- Sous-sections voyage ----
    "travel_airports_intro": "Trois aéroports principaux pour venir en Galice / nord-Portugal :",
    "travel_airport_scq": "SCQ — Santiago de Compostela (Aéroport Lavacolla) — ~38 km / ~30–40 min de Pazo de Xerlís (A Estrada). Compagnies fréquentes depuis BE/LUX : Brussels Airlines (BRU), Ryanair (CRL).",
    "travel_airport_vgo": "VGO — Vigo (Aéroport Vigo-Peinador) — ~68 km / ~1h de Pazo de Xerlís. Compagnies : Ryanair (selon saison) ou vols régionaux.",
    "travel_airport_opo": "OPO — Porto (Francisco Sá Carneiro, Portugal) — ~203 km / ~2h15–2h30. Très fréquent depuis Bruxelles / Luxembourg / Charleroi : Brussels Airlines, Ryanair, Luxair.",

    "travel_distances_title": "Distances routières approximatives (Pazo de Xerlís / A Estrada →)",
    "travel_dist_santiago": "Santiago (aéroport SCQ / ville) : 37–38 km (30–40 min)",
    "travel_dist_vigo": "Vigo (VGO / ville) : 64–73 km (1h–1h10)",
    "travel_dist_pontevedra": "Pontevedra : 39 km (40–45 min)",
    "travel_dist_ourense": "Ourense : 91 km (1h)",
    "travel_dist_porto": "Porto (OPO, Portugal) : 203–206 km (2h15–2h30)",
    "travel_dist_coruna": "A Coruña : 98 km (1h10)",

    "travel_roadtrip_title": "🚗 Si vous partez en road-trip / venez en voiture",
    "travel_roadtrip_text": "Distances approximatives en voiture (trajet direct) :",
    "travel_roadtrip_bru": "Bruxelles → Pazo de Xerlís : 1500–1600 km (~14–15 h de route)",
    "travel_roadtrip_lux": "Luxembourg → Pazo de Xerlís : 1300–1400 km (~12–13 h de route)",
    "travel_roadtrip_stop": "Recommandation d’étape : Bayonne ou Bordeaux, parfaites pour couper le trajet et profiter d’un bon repas avant la Galice.",

    "travel_bus_title": "🚍 Bus (régional / intercity)",
    "travel_bus_monbus": "MonBus — dessert Santiago, Pontevedra, Vigo, Ourense; liaisons locales A Estrada ↔ Santiago / Pontevedra. Prix : 2–8 €. monbus.es",
    "travel_bus_alsa": "ALSA — dessert Pontevedra et les grandes villes. Prix variables. alsa.com",
    "travel_bus_rede": "Depuis Porto — Rede Expressos (bus international Porto ↔ Pontevedra). Prix : 15–40 € selon la route.",

    "travel_train_title": "🚆 Train",
    "travel_train_renfe": "Renfe — bonne option pour Santiago ↔ Vigo / A Coruña. Prix : 9–20 €. renfe.com",
    "travel_train_porto": "Depuis Porto : train + bus (ex. Porto Campanhã → Vigo). Vérifier Renfe / CP Portugal.",

    "travel_taxi_title": "🚖 Taxi",
    "travel_taxi_text": "Taxi depuis les aéroports régionaux (SCQ / VGO) → A Estrada : 70–120 € environ selon l’heure et les bagages.",

    "travel_rental_title": "🚗 Location de voiture (fortement recommandée)",
    "travel_rental_text": "Comptoirs à l’arrivée (Hertz, Europcar, Sixt, Avis, OK Mobility...). Prix : 20–60 €/jour. Si vous louez au Portugal, vérifiez les frais transfrontaliers.",

    "travel_summary_title": "🧭 Récapitulatif pratique",
    "travel_summary_1": "Option la plus simple et proche : vol vers Santiago (SCQ) — ~30–40 min jusqu’à A Estrada.",
    "travel_summary_2": "Plus de vols et horaires : vol vers Porto (OPO) — ~2h15 de route.",
    "travel_summary_3": "Location de voiture recommandée pour explorer la Galice."
  },

  es: {
    "nav-accueil": "Inicio",
    "nav-infos": "Información",
    "nav-rsvp": "Confirmación",
    "nav-galerie": "Galería",
    "titre-principal": "Clara & Adrián",
    "countdown-title": "El gran día llega en",
    "label-days": "DÍAS",
    "label-hours": "HORAS",
    "label-minutes": "MINUTOS",
    "label-seconds": "SEGUNDOS",
    "rsvp-title-index": "¿Vienes a la boda?",
    "rsvp-datelim-index":"¡Estamos deseando celebrar este día tan especial con vosotros!",
    "label-oui": "Sí",
    "label-non": "No",
    "label-name": "Nombre y apellido:",
    "guest-placeholder": "Escribe tu nombre...",
    "children-text": "",
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
    "infos-whatsapp-text": "Únete al grupo para recibir información",
    "rsvp-prompt": "Introduce la contraseña para confirmar tu RSVP:",

    "sleep_title": "🏨 Dónde dormir",
    "sleep_text": "Próximamente compartiremos una lista de alojamientos cerca del lugar de la boda. 🏡",

    "travel_title": "🗺️ Cómo llegar",

    "wedding_title": "💍 Información sobre la boda",
    "wedding_text": "Vestimenta: elegante pero cómoda (¡habrá baile 💃!). ¡Los niños son bienvenidos! 👶",

    "party_title": "🎉 Plan de la fiesta",
    "party_1": "🕐 14:00 – Ceremonia",
    "party_2": "🍸 16:00 – Cóctel y aperitivo",
    "party_3": "🍽️ 18:00 – Cena",
    "party_4": "💃 21:00 – Fiesta y baile",
    "party_5": "🌅 02:00 – Fin de la celebración",

    "info_access_title": "✨ Información y accesorios",
    "info_access_text": "Vestimenta: elegante pero cómoda (¡habrá baile 💃!). ¡Los niños son bienvenidos! 👶",

    // ---- Sub-secciones viaje ----
    "travel_airports_intro": "Tres aeropuertos principales para venir a Galicia o al norte de Portugal:",
    "travel_airport_scq": "SCQ — Santiago de Compostela (Aeropuerto de Lavacolla) — aprox. 38 km / 30–40 min desde Pazo de Xerlís (A Estrada). Aerolíneas frecuentes desde BE/LUX: Brussels Airlines (BRU), Ryanair (CRL).",
    "travel_airport_vgo": "VGO — Vigo (Aeropuerto de Peinador) — aprox. 68 km / 1h desde Pazo de Xerlís. Aerolíneas: Ryanair (según temporada) u otras regionales.",
    "travel_airport_opo": "OPO — Porto (Aeropuerto Francisco Sá Carneiro, Portugal) — aprox. 203 km / 2h15–2h30. Muy frecuentado desde Bruselas, Charleroi o Luxemburgo (Brussels Airlines, Ryanair, Luxair).",

    "travel_distances_title": "Distancias aproximadas (desde Pazo de Xerlís / A Estrada):",
    "travel_dist_santiago": "Santiago (aeropuerto SCQ / ciudad): 37–38 km (30–40 min)",
    "travel_dist_vigo": "Vigo (VGO / ciudad): 64–73 km (1h–1h10)",
    "travel_dist_pontevedra": "Pontevedra: 39 km (40–45 min)",
    "travel_dist_ourense": "Ourense: 91 km (1h)",
    "travel_dist_porto": "Porto (OPO, Portugal): 203–206 km (2h15–2h30)",
    "travel_dist_coruna": "A Coruña: 98 km (1h10)",

    "travel_roadtrip_title": "🚗 Si vienes en coche o road-trip",
    "travel_roadtrip_text": "Distancias aproximadas (ruta directa):",
    "travel_roadtrip_bru": "Bruselas → Pazo de Xerlís: 1500–1600 km (~14–15 h de conducción)",
    "travel_roadtrip_lux": "Luxemburgo → Pazo de Xerlís: 1300–1400 km (~12–13 h)",
    "travel_roadtrip_stop": "Sugerencia para una parada agradable: Bayona o Burdeos, perfectas para descansar antes de llegar a Galicia.",

    "travel_bus_title": "🚍 Autobuses regionales e interurbanos",
    "travel_bus_monbus": "MonBus — conecta Santiago, Pontevedra, Vigo, Ourense; también A Estrada ↔ Santiago / Pontevedra. Precio: 2–8 € por trayecto. monbus.es",
    "travel_bus_alsa": "ALSA — rutas regionales grandes (Pontevedra, Vigo, Ourense). Precios variables. alsa.com",
    "travel_bus_rede": "Desde Porto — Rede Expressos (bus internacional Porto ↔ Pontevedra). Precio: 15–40 € según ruta.",

    "travel_train_title": "🚆 Trenes (Renfe)",
    "travel_train_renfe": "Renfe — buena opción entre Santiago ↔ Vigo / A Coruña. Precio: 9–20 €. renfe.com",
    "travel_train_porto": "Desde Porto: tren + bus (ej. Porto Campanhã → Vigo) — consultar Renfe / CP (Portugal).",

    "travel_taxi_title": "🚖 Taxi",
    "travel_taxi_text": "Taxi desde los aeropuertos regionales (SCQ / VGO) → A Estrada: 70–120 € aprox. según hora y equipaje.",

    "travel_rental_title": "🚗 Alquiler de coche (muy recomendado)",
    "travel_rental_text": "Agencias en los tres aeropuertos (Hertz, Europcar, Sixt, Avis, Enterprise, OK Mobility...). Precio medio: 20–60 €/día. Si alquilas en Portugal, verifica los costes por cruzar la frontera.",

    "travel_summary_title": "🧭 Resumen práctico",
    "travel_summary_1": "La opción más fácil y cercana: volar a Santiago (SCQ) — a 30–40 min de A Estrada.",
    "travel_summary_2": "Más opciones y horarios: volar a Porto (OPO) — a 2h15 aprox. de A Estrada.",
    "travel_summary_3": "Recomendado alquilar coche para moverse cómodamente por Galicia."
  }
};
document.getElementById("clara-text").textContent = translations.fr["clara-text"];
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
