// script.js — Code complet et vérifié pour l'ensemble du site

let currentLang = localStorage.getItem("lang") || "fr";
const CORRECT_HASH = "88546f608b8f5f0e1451b8da1177b96fec4729f998195755eaf29daba0e597126"; // Hash de mot de passe

// ----------------- TRANSLATIONS (FR / ES) -----------------
const translations = {
    fr: {
        "nav-accueil": "Accueil",
        "nav-infos-importantes": "Infos importantes",
        "nav-infos-comp": "Infos complémentaires",
        "nav-rsvp": "RSVP",
        "nav-galerie": "Galerie",
        "clara-text":
`Notre histoire commence le 14 octobre 2016, dans un bar Bruxellois, le premier contact est facil, car Adri s’est déjà renseigné sur moi et sait que nous avons des origines communes, nous venons tous les deux de Galice.

Les semaines passent et nous maintenons le contact grâce à notre passion commune pour le sport et la nourriture, la semaine Adri vient cuisiner des plats de sa diète dans mon petit appartement d’étudiante et le week-end on se balade.

Les mois passent et on se découvre une passion pour les voyages, je suis habituée au chaos des Vilariño (Fostier), Adri lui au début préfère plus de confort et d’organisation, mais il n'a pas le choix que de s’adapter, car rapidement il se retrouve en Indonésie avec un sac à dos à parcourir plus de 1500 km en 3 semaines.

Les années passent, nous avons vécus plein d’aventures, mais sommes séparés par la distance, Adri à Bruxelles, moi au Luxembourg et après quelques négociations, Adri déménage pour vivre avec moi et en échange, je prends des cours de Salsa. 

Le 19 mai 2025, celle qui nous avait unis pour la première fois, est témoin de notre engagement. Nous voilà en Galice, plus précisément aux Iles Cies, Adri est devant moi, un genou à terre et me demande qu’on se marie. Je dis oui, évidemment, oui à vivre notre vie pour toujours.

Quelques jours plus tard, dans un train en direction de Madrid, on vous annonce la nouvelle et on commence les préparatifs de notre mariage, en Galice, où d’autre ? Dans notre terre tant aimée que nous souhaitions vous présenter depuis tant d’années, alors si vous êtes curieux de découvrir le paradis ou si vous souhaitez assister à notre union, on vous attend le 14 août 2026 au Pazo de Xerlis.`,
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
        "guest-name": "Tapez votre nom...",
        "children-text":
`Vos enfants sont les bienvenus, néanmoins si vous pensez qu’être accompagné de votre enfant impactera votre présence au mariage nous recommandons dans ces cas là de les faire 
garder et venir seuls`,
        "submit-button": "Confirmer",
        "thank-you": "Merci, votre réponse a été enregistrée",
        // Infos Page
        "infos-title": "Où et quand ?",
        "infos-ceremonie": "Cérémonie : 14 août 2026 – Pazo de Xerlís, A Estrada (Galice, Espagne)",
        "infos-hour": "Heure : 18h00",

        // Accordéon Logement
        "lodging-main-title": "🏨 Logement",
        "lodging-intro-text": `Pour les logements avant ou après le mariage cela dépend de où vous voulez vous trouver.

Avec Adri nous serons dans un premier temps dans la zone de Nigrán/Oia avant le mariage et ensuite après le mariage on se trouvera dans la zone de Villagarcia de Arousa.

A titre informatif, il est possible de dormir en tente dans le jardin de mes parents à Oia avec accès à une douche extérieure et à l’eléctricité.

`,
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
        "lodging_1_phone": "+34 606 636 699",
        "lodging_2_name": "Casa rural Amarinda",
        "lodging_2_distance": "1.4 km",
        "lodging_2_price": "720€ (4 nuits minimum)",
        "lodging_2_capacity": "15 personnes",
        "lodging_2_phone": "+34 658 800 640",
        "lodging_3_name": "A Casa do Lagoeiro",
        "lodging_3_distance": "3.2 km",
        "lodging_3_price": "80€ chambre (petit-déj inclus)",
        "lodging_3_capacity": "13 personnes",
        "lodging_3_phone": "+34 655 031 397",
        "lodging_4_name": "Hostal A Bombilla",
        "lodging_4_distance": "4.3 km",
        "lodging_4_price": "35–48€ par nuit",
        "lodging_4_capacity": "20 chambres",
        "lodging_4_phone": "+34 986 570 335",
        "lodging_5_name": "Hotel A Estrada Rooms",
        "lodging_5_distance": "3 km",
        "lodging_5_price": "?",
        "lodging_5_capacity": "16 chambres",
        "lodging_5_phone": "+34 653 057 593",
        "lodging_6_name": "Casa de Brea",
        "lodging_6_distance": "3.8 km",
        "lodging_6_price": "490€",
        "lodging_6_capacity": "16 personnes",
        "lodging_6_phone": "+34 627 002 554 /+34 636 996 149",
        "lodging_7_name": "Appartement 3 et 4, A Estrada",
        "lodging_7_distance": "4 km",
        "lodging_7_price": "345€ par nuit",
        "lodging_7_capacity": "14 personnes",
        "lodging_7_phone": "Airbnb",
        // Accordéon Voyage
        "travel-title": "🗺️ Comment y aller ?",
        "travel_airports_intro": "✈️ Aéroports", // Utilisé pour le titre des aéroports au-dessus du tableau
        "travel-table-col-airport": "Aéroport", 
        "travel-table-col-time": "Temps de trajet", 
        "info_access-title": "✨ Informations pratiques",
        "info_access-text1": "Thème du mariage: Yellow Touch 🌟 (Tournesol et citrons exclus) ",
        "info_access-text": `Nous recommandons d’avoir un moyen de locomotion sur place, les distances peuvent être longues et les transports publics ne sont pas optimales partout.
                            Le mariage est à ?h le 14 août 2026 au Pazo de Xerlis`,
        "info_access-IBAN": `Votre présence est déjà un merveilleux cadeau. Si toutefois vous souhaitez nous gâter davantage, une participation financière pour notre lune de miel nous ferait très plaisir.

        Notre compte bancaire est le suivant: BE37 6512 2062 8728`,
        "Lien_Google_sheet": "Lien: https://docs.google.com/forms/d/e/1FAIpQLSclZyDY5n2FXKByn372KZeAedKKUAS-Dg5bEZPgU0p_56_tUA/viewform?usp=dialog"
    },
    // Le bloc ES a été complété et adapté
    es: {
        "nav-accueil": "Inicio",
        "nav-infos-importantes": "Información importante",
        "nav-infos-comp": "Información adicional",
        "nav-rsvp": "Confirmación",
        "nav-galerie": "Galería",
        "clara-text":
`Nuestra historia comienza el 14 de octubre de 2016, en un bar de Bruselas, el primer contacto fue fácil, porque Adri ya se había informado sobre mí y sabe que tenemos orígenes comunes, los dos venimos de Galicia.

Las semanas pasan y mantenemos el contacto gracias a nuestra pasión por el deporte y la comida; entre semana Adri viene a cocinar platos de su dieta en mi pequeño piso de estudiante y los fines de semana salimos a pasear.

Los meses pasan y descubrimos una pasión por viajar; yo estoy acostumbrada al caos de los Vilariño (Fostier), Adri al principio prefería más comodidad y organización, pero no tuvo más remedio que adaptarse, porque pronto se encontró en Indonesia con una mochila recorriendo más de 1500 km en 3 semanas.

Los años pasan, vivimos muchas aventuras, pero la distancia nos separa: Adri en Bruselas, yo en Luxemburgo y tras algunas negociaciones Adri se muda a vivir conmigo y, a cambio, yo empiezo clases de salsa.

El 19 de mayo de 2025, quien nos había unido por primera vez fue testigo de nuestro compromiso. Allí, en Galicia, y más concretamente en las Islas Cíes, Adri está delante de mí de rodillas y me pide que nos casemos. Digo que sí, obviamente, sí a vivir nuestra vida para siempre.

Unos días después, en un tren hacia Madrid, os anunciamos la noticia y comenzamos los preparativos de nuestra boda en Galicia — ¿dónde si no? En nuestra tierra querida que queríamos mostraros desde hace años. Si queréis descubrir el paraíso o venir a acompañarnos, os esperamos el 14 de agosto de 2026 en el Pazo de Xerlís.`,
        "adrian-text":
`Nos conocimos el (... lo recuerdo ...) 14 de octubre, en una fiesta de despedida de una amiga común.
Ya tenía mi estrategia para hablarle y ella, inocente, no sospechaba nada.
Caminó por delante del bar y la llamé, me di cuenta de que teníamos la misma pasión por la comida y el deporte y que a los dos nos gustaba reírnos.
Esa noche comenzó nuestra historia.

Hemos vivido muchas experiencias bonitas: cocinar en su casa, pasar noches pidiendo comida sana... y ganando peso. Conocer a su familia y descubrir su organización legendaria, no querer bailar salsa con ella para acabar bailando con alguien que me convenció en 10 segundos, darme cuenta en su primera reunión con mi familia en Galicia que ella les quiere más que a mí, y finalmente dejar mi ciudad natal para vivir con ella en Luxemburgo. No olvido todos los viajes que hemos hecho (Indonésie, Guadeloupe, Jordania, Japón, y más), gracias a los cuales descubrí partes de mí desconocidas.

Bref, el 19 de mayo de 2025 le pedí matrimonio y, sin sorpresa (porque siempre estoy seguro), dijo que sí.
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
        "children-text":
`Sus hijos son más que bienvenidos. 
Sin embargo, si creen que venir con ellos podría hacerles disfrutar menos de la boda, les recomendamos considerar dejarlos al cuidado de alguien y venir tranquilos`,
        "submit-button": "Confirmar",
        "thank-you": "Gracias, tu respuesta ha sido guardada",
        "infos-title": "¿Dónde y cuándo?",
        "infos-ceremonie": "Ceremonia: 14 de agosto de 2026 – Pazo de Xerlís, A Estrada (Galicia, España)",
        "infos-hour": "Hora: 1:00",

        // Accordéon Alojamiento
        "lodging-main-title": "🏨 Alojamiento",
        "lodging-intro-text": `Para el alojamiento antes o después de la boda, depende de dónde queráis estar.

Con Adri estaremos primero en la zona de Nigrán/Oia antes de la boda y, después de la boda, estaremos en la zona de Vilagarcía de Arousa.

A modo informativo, es posible dormir en tienda de campaña en el jardín de mis padres en Oia, con acceso a una ducha exterior y electricidad.

`,
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
        "lodging_7_name": "Apartamento 3 et 4, A Estrada",
        "lodging_7_distance": "4 km",
        "lodging_7_price": "345€ por noche",
        "lodging_7_capacity": "14 personas",
        "lodging_7_phone": "Airbnb",
        // Accordéon Viaje
        "travel-title": "🗺️ Cómo llegar",
        "travel_airports_intro": "✈️ Aeropuertos", // Utilisé pour le titre des aéroports au-dessus du tableau
        "travel-table-col-airport": "Aeropuerto", 
        "travel-table-col-time": "Tiempo de viaje", 
        "info_access-title": "✨ Información práctica",
        "info_access-text1": "Temática de la boda: Yellow Touch 🌟 (excluyendo girasoles y lima) ",
        "info_access-text": `Recomendamos encarecidamente disponer de un medio de transporte propio, ya que las distancias pueden ser largas y el transporte público no es óptimo en todas las zonas.
La boda tendrá lugar a las ? h el 14 de agosto de 2026 en el Pazo de Xerlís.`,
        "info_access-IBAN": `Vuestra presencia ya es un regalo maravilloso. Si aun así deseáis obsequiarnos con algo más, una aportación económica para nuestra luna de miel nos haría mucha ilusión.
        
        Nuestra cuenta bancaria es la siguiente: BE37 6512 2062 8728`,
        "Lien_Google_sheet": "Enlace: https://docs.google.com/forms/d/e/1FAIpQLSclZyDY5n2FXKByn372KZeAedKKUAS-Dg5bEZPgU0p_56_tUA/viewform?usp=dialog"
    }
        
};

// Données des aéroports pour la création du tableau (indépendantes de la langue)
const airportData = [
    { code: "SCQ", name_fr: "Santiago de Compostela (Aéroport Lavacolla)", name_es: "Santiago de Compostela (Lavacolla)", time: "~30–40 min" },
    { code: "VGO", name_fr: "Vigo", name_es: "Vigo", time: "~1h" },
    { code: "OPO", name_fr: "Porto", name_es: "Porto", time: "~2h15–2h30" }
];

// ----------------- UTIL & CORE FUNCTIONS -----------------
function safeGet(id) { return document.getElementById(id) || null; }

async function sha256Hex(str) {
    const enc = new TextEncoder();
    const data = enc.encode(str);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    return Array.from(new Uint8Array(hashBuffer)).map(b => b.toString(16).padStart(2, '0')).join('');
}

/**
 * Génère le tableau HTML pour les informations de voyage (Aéroports).
 * @param {string} lang 'fr' ou 'es'
 * @returns {string} HTML du tableau.
 */
function generateTravelTable(lang) {
    const t = translations[lang];
    const colAirportKey = `name_${lang}`; 
    
    let tableHtml = `<table class="travel-table">`;
    tableHtml += `<caption>${t["travel-table-caption"]}</caption>`;
    tableHtml += `<thead><tr>`;
    tableHtml += `<th>${t["travel-table-col-airport"]}</th>`;
    tableHtml += `<th>${t["travel-table-col-time"]}</th>`;
    tableHtml += `</tr></thead>`;
    tableHtml += `<tbody>`;

    airportData.forEach(airport => {
        tableHtml += `<tr>`;
        tableHtml += `<td>${airport.code} — ${airport[colAirportKey]}</td>`;
        tableHtml += `<td>${airport.time}</td>`;
        tableHtml += `</tr>`;
    });

    tableHtml += `</tbody></table>`;
    return tableHtml;
}


function applyTranslations(lang) {
    const t = translations[lang];

    for (const key in t) {
        const element = safeGet(key);
        if (element) {
            // Utiliser innerHTML pour les textes longs avec sauts de ligne pour CSS `white-space: pre-line;`
            if (key === 'clara-text' || key === 'adrian-text' || key === 'children-text' || key === 'info_access-move' || key === 'lodging-intro-text2') {
                element.innerHTML = t[key]; 
            } else {
                element.innerHTML = t[key];
            }
        }
    }

    // Générer et insérer le tableau de voyage
    const travelContainer = safeGet('travel-table-container');
    if (travelContainer) {
        travelContainer.innerHTML = generateTravelTable(lang);
    }
}

// Fonction pour le compte à rebours (inchangée)
let countdownInterval;

function startCountdown() {
    // S'assurer qu'il n'y a qu'un seul intervalle actif
    if (countdownInterval) {
        clearInterval(countdownInterval);
    }

    const weddingDate = new Date("August 14, 2026 14:00:00").getTime();
    
    const updateCountdown = () => {
        const now = new Date().getTime();
        const distance = weddingDate - now;

        const daysElement = safeGet('days');
        const hoursElement = safeGet('hours');
        const minutesElement = safeGet('minutes');
        const secondsElement = safeGet('seconds');

        if (distance < 0) {
            clearInterval(countdownInterval);
            if (safeGet('countdown-title')) safeGet('countdown-title').innerHTML = (currentLang === 'fr' ? "C'est le grand jour !" : "¡Es el gran día!");
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
    };

    updateCountdown(); 
    countdownInterval = setInterval(updateCountdown, 1000);
}


// Fonctions pour l'accordéon
function initAccordion() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(header => {
        header.removeEventListener('click', toggleAccordion);
        header.addEventListener('click', toggleAccordion);
    });
    // Fermer tous les accordéons au chargement
    document.querySelectorAll('.accordion-content').forEach(content => {
        content.style.maxHeight = "";
    });
}

function toggleAccordion() {
    const header = this; 
    const content = header.nextElementSibling;
    
    // Fermer tous les autres accordéons
    document.querySelectorAll('.accordion-header').forEach(h => {
        const c = h.nextElementSibling;
        if (h !== header && h.classList.contains('active')) {
            h.classList.remove('active');
            c.style.maxHeight = ""; 
        }
    });

    // Ouvrir ou fermer l'accordéon cliqué
    header.classList.toggle('active');
    if (content.style.maxHeight) {
        content.style.maxHeight = ""; // Fermer
    } else {
        // CORRECTION ICI :
        content.style.maxHeight = "0"; 
        setTimeout(() => {
            // On ajoute + 50 pixels au calcul pour inclure les marges et le padding du bas
            content.style.maxHeight = (content.scrollHeight + 50) + "px"; 
        }, 10); // Petit délai de 10ms pour assurer la prise en compte du rendu
    }
}


// Lancement à l'ouverture de la page
document.addEventListener('DOMContentLoaded', () => {
    // 1. Appliquer les traductions initiales
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
            
            if (document.body.classList.contains('accueil')) {
                startCountdown(); 
            }
            if (document.body.classList.contains('infos')) {
                // Réinitialiser les accordéons pour recalculer scrollHeight avec le nouveau contenu traduit
                initAccordion(); 
            }
        });
    }

    // 4. Configuration de l'accordéon (page infos) - Appel initial
    if (document.body.classList.contains('infos')) {
        initAccordion();
    }
})

// TODO: Ajouter ici la logique spécifique à RSVP (soumission de formulaire, vérification du mot de passe) si vous l'ajoutez plus tard.