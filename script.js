// script.js — fichier central corrigé

let currentLang = localStorage.getItem("lang") || "fr";
const CORRECT_HASH = "88546f608b8f5f0e1451b8da1177b96fec4729f98195755eaf29daba0e597126";

// ----------------- TRANSLATIONS (FR / ES) -----------------
// Texte FR et ES complets (tels que fournis) — longueurs conservées

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
`Nous nous sommes rencontrés le (... je réfléchis ...) 14 octobre, lors d’une soirée d’adieu d’une amie commune.
J’avais déjà établi ma stratégie pour l’aborder, alors qu’elle, innocente, ne se doutait de rien.
C’est à partir de ce soir-là que notre belle histoire a commencé.

Nous avons vécu de nombreuses belles expériences : d’abord cuisiner chez elle, puis passer des soirées à commander de la nourriture très saine… et à prendre du poids. Ensuite, rencontrer sa famille et découvrir leur organisation légendaire, prendre encore du poids,
refuser de danser la salsa avec elle pour finalement en danser avec quelqu'un d'autres qui a su me convaincre en 10 secondes,
me rendre compte dès sa première rencontre avec ma famille en Galice, qu'elle l’aime plus que moi, et enfin jusqu'à même quitter ma ville natale pour vivre avec elle au Luxembourg.
Bien sûr, je n'oublie pas tous les voyages que nous avons faits (Indonésie, Guadeloupe, Jordanie, Japon, et j’en passe), grâce auxquels j’ai pu découvrir des parties de moi encore inconnues.

Bref, le 19 mai 2025, je lui ai demandé sa main et, sans surprise (car je suis toujours sûr de moi), elle a dit oui.
Notre premier sujet de discussion fut sur la Galice, et c’est finalement là que nous concrétisons notre union.

J’aimerais, du fond du cœur, que vous soyez tous présents pour partager ce moment avec nous (vous ne serez pas déçus, promis !)`,
    "titre-principal": "test",
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
    "guest-name": "Tapez votre nom...",
    "children-text": `Vos enfants sont les bienvenus, néanmoins si vous pensez qu’être accompagné de votre enfant impactera votre présence au mariage nous recommandons dans ces cas là de les faire 
                      garder et venir seuls`,
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
    "info_access_title": "✨ Informations pratiques",
    "info_access_text": "Tenue : élégante mais confortable (on dansera 💃). Les enfants sont les bienvenus ! 👶",
    "info_access-move": `Nous recommandons chaleureusement d’avoir un moyen de locomotion sur place, les 
    distances peuvent être longues et les transports publics ne sont pas optimales partout.`,
    "travel_airports_intro": "✈️ Aéroports",
    "travel_airport_scq": "SCQ — Santiago de Compostela (Aéroport Lavacolla) — ~30–40 min",
    "travel_airport_vgo": "VGO — Vigo — ~1h",
    "travel_airport_opo": "OPO — Porto — ~2h15–2h30"
  },

  es: {
    "nav-accueil": "Inicio",
    "nav-infos": "Información",
    "nav-rsvp": "Confirmación",
    "nav-galerie": "Galería",
    "clara-text":
`Nuestra historia comienza el 14 de octubre de 2016, en un bar de Bruselas, el primer contacto fue fácil, porque Adri ya se había informado sobre mí y sabe que tenemos orígenes comunes, los dos venimos de Galicia.

Las semanas pasan y mantenemos el contacto gracias a nuestra pasión por el deporte y la comida; entre semana Adri viene a cocinar platos de su dieta en mi pequeño piso de estudiante y los fines de semana salimos a pasear.

Los meses pasan y descubrimos una pasión por viajar; yo estoy acostumbrada al caos de los Vilariño (Fostier), Adri al principio prefería más comodidad y organización, pero no tuvo más remedio que adaptarse, porque pronto se encontró en Indonesia con una mochila recorriendo más de 1500 km en 3 semanas.

Los años pasan, vivimos muchas aventuras, pero la distancia nos separa: Adri en Bruselas, yo en Luxemburgo y tras algunas negociaciones Adri se muda a vivir conmigo y, a cambio, yo empiezo clases de salsa.

El 19 de mayo de 2025, quien nos había unido por primera vez fue testigo de nuestro compromiso. Allí, en Galicia, y más concretamente en las Islas Cíes, Adri está delante de mí de rodillas y me pide que nos casemos. Digo que sí, obviamente, sí a vivir nuestra vida para siempre.

Unos días después, en un tren hacia Madrid, os anunciamos la noticia y comenzamos los preparativos de nuestra boda en Galicia — ¿dónde si no? En nuestra tierra querida que queríamos mostraros desde hace años. Si queréis descubrir el paraíso o venir a acompañarnos, os esperamos el 16 de agosto de 2026 en el Pazo de Xerlís.`,
    "adrian-text":
`Nos conocimos el (... lo recuerdo ...) 14 de octubre, en una fiesta de despedida de una amiga común.
Ya tenía mi estrategia para hablarle y ella, inocente, no sospechaba nada.
Esa noche comenzó nuestra historia.

Hemos vivido muchas experiencias bonitas: cocinar en su casa, pasar noches pidiendo comida sana... y ganando peso. Conocer a su familia y descubrir su organización legendaria, no querer bailar salsa con ella para acabar bailando con alguien que me convenció en 10 segundos, darme cuenta en su primera reunión con mi familia en Galicia que ella les quiere más que a mí, y finalmente dejar mi ciudad natal para vivir con ella en Luxemburgo. No olvido todos los viajes que hemos hecho (Indonesia, Guadalupe, Jordania, Japón, y más), gracias a los cuales descubrí partes de mí desconocidas.

El 19 de mayo de 2025 le pedí matrimonio y, sin sorpresa (porque siempre estoy seguro), dijo que sí.
Nuestra primera conversación fue sobre Galicia, y ahí vamos a celebrarlo.

Me encantaría que todos vosotros compartierais ese momento con nosotros (prometo que no os decepcionará).`,
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
    "guest-name": "Escribe tu nombre...",
    "children-text": `Sus hijos son más que bienvenidos. 
Sin embargo, si creen que venir con ellos podría hacerles disfrutar menos de la boda, les recomendamos considerar dejarlos al cuidado de alguien y venir tranquilos`,
    "submit-button": "Confirmar",
    "thank-you": "Gracias, tu respuesta ha sido guardada",
    "infos-title": "¿Dónde y cuándo?",
    "infos-ceremonie": "Ceremonia: 14 de agosto de 2026 – Pazo de Xerlís, A Estrada (Galicia, España)",
    "infos-hour": "Hora: 14:00",
    "infos-whatsapp-button": "Acceder al grupo de WhatsApp",
    "infos-whatsapp-prompt": "Introduce la contraseña para acceder al grupo de WhatsApp:",
    "infos-whatsapp-link-label": "👉 Unirse",
    "infos-whatsapp-incorrect": "¡Contraseña incorrecta!",
    "infos-whatsapp-text": "Únete al grupo para recibir información",
    "rsvp-prompt": "Introduce la contraseña para confirmar tu RSVP:",
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
    "info_access-move": `Recomendamos encarecidamente disponer de un medio de transporte en la zona, ya que las distancias pueden ser largas y el transporte público 
no es óptimo en todas partes.`,
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
  if (!translations[currentLang]) currentLang = 'fr';
  const map = translations[currentLang];

  Object.keys(map).forEach(key => {
    const el = safeGet(key);
    if (!el) return;
    // Inputs/textarea -> placeholder, otherwise innerHTML (conserve sauts de ligne)
    if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
      el.placeholder = map[key];
    } else {
      el.innerHTML = map[key];
    }
  });

  // éléments spécifiques
  const wb = safeGet('whatsappButton');
  if (wb && translations[currentLang]['infos-whatsapp-button']) wb.textContent = translations[currentLang]['infos-whatsapp-button'];

  const waAnchor = safeGet('whatsappAnchor');
  if (waAnchor && translations[currentLang]['infos-whatsapp-link-label']) waAnchor.textContent = translations[currentLang]['infos-whatsapp-link-label'];

  const waText = safeGet('infos-whatsapp-text');
  if (waText && translations[currentLang]['infos-whatsapp-text']) waText.textContent = translations[currentLang]['infos-whatsapp-text'];

  // labels du countdown
  const ld = safeGet('label-days'); if(ld && translations[currentLang]['label-days']) ld.textContent = translations[currentLang]['label-days'];
  const lh = safeGet('label-hours'); if(lh && translations[currentLang]['label-hours']) lh.textContent = translations[currentLang]['label-hours'];
  const lm = safeGet('label-minutes'); if(lm && translations[currentLang]['label-minutes']) lm.textContent = translations[currentLang]['label-minutes'];
  const ls = safeGet('label-seconds'); if(ls && translations[currentLang]['label-seconds']) ls.textContent = translations[currentLang]['label-seconds'];

  // nav / titre
  const title = safeGet('titre-principal'); if(title && translations[currentLang]['titre-principal']) title.textContent = translations[currentLang]['titre-principal'];
  const navAccueil = safeGet('nav-accueil'); if(navAccueil && translations[currentLang]['nav-accueil']) navAccueil.textContent = translations[currentLang]['nav-accueil'];
  const navInfos = safeGet('nav-infos'); if(navInfos && translations[currentLang]['nav-infos']) navInfos.textContent = translations[currentLang]['nav-infos'];
  const navRsvp = safeGet('nav-rsvp'); if(navRsvp && translations[currentLang]['nav-rsvp']) navRsvp.textContent = translations[currentLang]['nav-rsvp'];
  const navGalerie = safeGet('nav-galerie'); if(navGalerie && translations[currentLang]['nav-galerie']) navGalerie.textContent = translations[currentLang]['nav-galerie'];

  // update lang button label (visuel)
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

    if (content.classList.contains('open')) {
      content.style.maxHeight = content.scrollHeight + "px";
      button.classList.add('active');
    } else {
      content.style.maxHeight = null;
      button.classList.remove('active');
    }

    button.addEventListener("click", () => {
      const isOpen = content.style.maxHeight && content.style.maxHeight !== "";
      if (isOpen) {
        content.style.maxHeight = null;
        button.classList.remove('active');
        content.classList.remove('open');
      } else {
        // recalc scrollHeight to handle images/content loaded
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
      // whatsappAnchor.href = "..."; // set real link if you have it
    } else {
      alert(translations[currentLang]['infos-whatsapp-incorrect'] || "Mot de passe incorrect !");
    }
  });
}

// ----------------- LANG TOGGLE -----------------
function initLangToggle() {
  const langToggle = safeGet('lang-toggle');
  if (!langToggle) return;
  langToggle.addEventListener('click', () => {
    currentLang = (currentLang === 'fr') ? 'es' : 'fr';
    localStorage.setItem('lang', currentLang);
    applyTranslations();
  });
}

// ----------------- INIT -----------------
document.addEventListener("DOMContentLoaded", () => {
  // ensure fallback language exists
  if (!translations[currentLang]) currentLang = 'fr';
  applyTranslations();
  initAccordion();
  initCountdown();
  initWhatsApp();
  initLangToggle();

  // If some content relies on images to calculate heights (accordion), recalc after load
  window.addEventListener('load', () => {
    document.querySelectorAll('.accordion-content.open').forEach(c => {
      c.style.maxHeight = c.scrollHeight + 'px';
    });
  });
});
