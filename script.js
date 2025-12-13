// script.js — fichier central corrigé et complet

// ----------------- TRANSLATIONS (FR / ES) -----------------
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
        "titre-principal": "Clara et Adrian",
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
        "sleep-title": "🏨 Où dormir ?",
        "sleep-text1": "Nous vous proposerons prochainement une liste d’hébergements (hôtels, airbnb, gîtes) à proximité du lieu du mariage. 🏡",
        "sleep-text2": "",
        "sleep-text3": "",
        "lodging-title": "🏨 Logements / Alojamiento",
        "lodging-intro": "",
        "lodging-caption": "Logements proches du lieu",
        "lodging_col_name": "Nom",
        "lodging_col_distance": "Distance",
        "lodging_col_price": "Prix",
        "lodging_col_capacity": "Capacité",
        "lodging_col_phone": "Téléphone",
        "lodging_1_name": "Casa rural de Dora",
        "lodging_1_distance": "300 m",
        "lodging_1_price": "180€ (maison entière)",
        "lodging_1_capacity": "9 personnes",
        "lodging_1_phone": "606 636 699",
        "lodging_2_name": "Casa rural Amarinda",
        "lodging_2_distance": "1.4 km",
        "lodging_2_price": "720€ (4 nuits minimum)",
        "lodging_2_capacity": "15 personnes",
        "lodging_2_phone": "658 800 640",
        "lodging_3_name": "A Casa do Lagoeiro",
        "lodging_3_distance": "3.2 km",
        "lodging_3_price": "80€ chambre (petit-déj inclus)",
        "lodging_3_capacity": "13 personnes",
        "lodging_3_phone": "655 031 397",
        "lodging_4_name": "Hostal A Bombilla",
        "lodging_4_distance": "4.3 km",
        "lodging_4_price": "35–48€ par nuit",
        "lodging_4_capacity": "20 chambres",
        "lodging_4_phone": "986 570 335",
        "lodging_5_name": "Hotel A Estrada Rooms",
        "lodging_5_distance": "3 km",
        "lodging_5_price": "?",
        "lodging_5_capacity": "16 chambres",
        "lodging_5_phone": "653 057 593",
        "lodging_6_name": "Casa de Brea",
        "lodging_6_distance": "3.8 km",
        "lodging_6_price": "490€",
        "lodging_6_capacity": "16 personnes",
        "lodging_6_phone": "627 002 554 / 636 996 149",
        "travel-title": "🗺️ Comment y aller ?",
        "wedding-title": "💍 Informations sur le mariage",
        "wedding-text": "Tenue : élégante mais confortable (on dansera 💃). Les enfants sont les bienvenus ! 👶",
        "party-title": "🎉 Planning fun",
        "party-1": "🕐 14h00 – Cérémonie",
        "party-2": "🍸 16h00 – Cocktail & apéritif",
        "party-3": "🍽️ 18h00 – Dîner",
        "party-4": "💃 21h00 – Soirée et fiesta !",
        "party-5": "🌅 02h00 – Fin de la fête",
        "info_access-title": "✨ Informations pratiques",
        "info_access-text": "Tenue : élégante mais confortable (on dansera 💃). Les enfants sont les bienvenus ! 👶",
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

Hemos vivido muchas experiencias bonitas: cocinar en su casa, pasar noches pidiendo comida sana... y ganando peso. Conocer a su familia y descubrir su organización legendaria, no querer bailar salsa con ella para acabar bailando con alguien que me convenció en 10 segundos, darme cuenta en su primera reunión con mi familia en Galicia que ella les quiere más que a mí, y finalmente dejar mi ciudad natal para vivir con ella en Luxemburgo. No olvido todos los viajes que hemos hecho (Indonésie, Guadeloupe, Jordania, Japón, y más), gracias a los cuales descubrí partes de mí desconocidas.

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
        "sleep-title": "🏨 Dónde dormir",
        "sleep-text1": "Pronto os enviaremos una lista de alojamientos (hoteles, airbnb, casas rurales) cerca del lugar del matrimonio. 🏡",
        "sleep-text2": "",
        "sleep-text3": "",
        "lodging-title": "🏨 Logements / Alojamiento",
        "lodging-intro": "",
        "lodging-caption": "Alojamientos cercanos al lugar",
        "lodging_col_name": "Nombre",
        "lodging_col_distance": "Distancia",
        "lodging_col_price": "Precio",
        "lodging_col_capacity": "Capacidad",
        "lodging_col_phone": "Teléfono",
        "lodging_1_name": "Casa rural de Dora",
        "lodging_1_distance": "300 m",
        "lodging_1_price": "180€ (casa entera)",
        "lodging_1_capacity": "9 personas",
        "lodging_1_phone": "606 636 699",
        "lodging_2_name": "Casa rural Amarinda",
        "lodging_2_distance": "1.4 km",
        "lodging_2_price": "720€ (4 noches mínimas)",
        "lodging_2_capacity": "15 personas",
        "lodging_2_phone": "658 800 640",
        "lodging_3_name": "A Casa do Lagoeiro",
        "lodging_3_distance": "3.2 km",
        "lodging_3_price": "80€ habitación (desayuno incl.)",
        "lodging_3_capacity": "13 personas",
        "lodging_3_phone": "655 031 397",
        "lodging_4_name": "Hostal A Bombilla",
        "lodging_4_distance": "4.3 km",
        "lodging_4_price": "35–48€ por noche",
        "lodging_4_capacity": "20 habitaciones",
        "lodging_4_phone": "986 570 335",
        "lodging_5_name": "Hotel A Estrada Rooms",
        "lodging_5_distance": "3 km",
        "lodging_5_price": "?",
        "lodging_5_capacity": "16 habitaciones",
        "lodging_5_phone": "653 057 593",
        "lodging_6_name": "Casa de Brea",
        "lodging_6_distance": "3.8 km",
        "lodging_6_price": "490€",
        "lodging_6_capacity": "16 personas",
        "lodging_6_phone": "627 002 554 / 636 996 149",
        "travel-title": "🗺️ Cómo llegar",
        "wedding-title": "💍 Información sobre la boda",
        "wedding-text": "Vestimenta: elegante pero cómoda (¡habrá baile 💃!). ¡Los niños son bienvenidos! 👶",
        "party-title": "🎉 Plan de la fiesta",
        "party-1": "🕐 14:00 – Ceremonia",
        "party-2": "🍸 16:00 – Cóctel y aperitivo",
        "party-3": "🍽️ 18:00 – Cena",
        "party-4": "💃 21:00 – Fiesta y baile",
        "party-5": "🌅 02:00 – Fin de la celebración",
        "info_access-title": "✨ Información práctica",
        "info_access-text": "Vestimenta: elegante pero cómoda (¡habrá baile 💃!). ¡Los niños son bienvenidos! 👶",
        "info_access-move": `Recomendamos encarecidamente disponer de un medio de transporte en la zona, ya que las distancias pueden ser largas y el transporte público 
no es óptimo en todas partes.`,
        "travel_airports_intro": "✈️ Aeropuertos",
        "travel_airport_scq": "SCQ — Santiago de Compostela (Lavacolla) — ~30–40 min",
        "travel_airport_vgo": "VGO — Vigo — ~1h",
        "travel_airport_opo": "OPO — Porto — ~2h15–2h30"
    }
};

// ----------------- UTIL & CORE FUNCTIONS -----------------
function safeGet(id) { return document.getElementById(id) || null; }

async function sha256Hex(str) {
    const enc = new TextEncoder();
    const data = enc.encode(str);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    return Array.from(new Uint8Array(hashBuffer)).map(b => b.toString(16).padStart(2, '0')).join('');
}


function applyTranslations(lang) {
    const t = translations[lang];

    // Appliquer les traductions à TOUS les éléments par ID
    for (const key in t) {
        const element = safeGet(key);
        if (element) {
            // Utiliser textContent pour le titre et les histoires longues pour préserver les sauts de ligne
            if (key === 'titre-principal' || key === 'clara-text' || key === 'adrian-text') {
                element.textContent = t[key];
            } else {
                element.innerHTML = t[key];
            }
        }
    }
}

// Fonction pour le compte à rebours
function startCountdown() {
    const weddingDate = new Date("August 14, 2026 14:00:00").getTime();
    const interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = weddingDate - now;

        const daysElement = safeGet('days');
        const hoursElement = safeGet('hours');
        const minutesElement = safeGet('minutes');
        const secondsElement = safeGet('seconds');

        if (distance < 0) {
            clearInterval(interval);
            if (safeGet('countdown-title')) safeGet('countdown-title').innerHTML = "C'est le grand jour !";
            if (daysElement) daysElement.textContent = '00';
            if (hoursElement) hoursElement.textContent = '00';
            if (minutesElement) minutesElement.textContent = '00';
            if (secondsElement) secondsElement.textContent = '00';
            return;
        }
        
        if (daysElement) {
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            daysElement.textContent = String(days).padStart(2, '0');
            hoursElement.textContent = String(hours).padStart(2, '0');
            minutesElement.textContent = String(minutes).padStart(2, '0');
            secondsElement.textContent = String(seconds).padStart(2, '0');
        }
    }, 1000);
}

// Fonction d'initialisation de l'accordéon (appelée à chaque chargement/traduction)
function initAccordion() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(header => {
        // Supprimer l'écouteur s'il existe déjà pour éviter les duplications après les changements de langue
        header.removeEventListener('click', toggleAccordion);
        // Ajouter le nouvel écouteur
        header.addEventListener('click', toggleAccordion);
    });
}

function toggleAccordion() {
    const header = this;
    const content = header.nextElementSibling;
    
    // Fermer tous les autres accordéons
    document.querySelectorAll('.accordion-header').forEach(h => {
        if (h !== header && h.classList.contains('active')) {
            h.classList.remove('active');
            h.nextElementSibling.style.maxHeight = null;
        }
    });

    // Ouvrir ou fermer l'accordéon cliqué
    header.classList.toggle('active');
    if (content.style.maxHeight) {
        content.style.maxHeight = null;
    } else {
        // Utiliser scrollHeight pour déterminer la hauteur nécessaire
        content.style.maxHeight = content.scrollHeight + "px";
    }
}


// Lancement à l'ouverture de la page
document.addEventListener('DOMContentLoaded', () => {
    // 1. Appliquer les traductions
    applyTranslations(currentLang);
    
    // 2. Lancer le compte à rebours uniquement sur la page d'accueil
    if (document.body.classList.contains('accueil')) {
        startCountdown();
    }
    
    // 3. Configuration du bouton de langue
    const langToggle = safeGet('lang-toggle');
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            currentLang = currentLang === 'fr' ? 'es' : 'fr';
            localStorage.setItem("lang", currentLang);
            applyTranslations(currentLang);
            // Réinitialiser les accordéons après le changement de langue
            if (document.body.classList.contains('infos')) {
                 initAccordion();
            }
        });
    }

    // 4. Configuration de l'accordéon (page infos) - Appel initial
    if (document.body.classList.contains('infos')) {
        initAccordion();
    }
});