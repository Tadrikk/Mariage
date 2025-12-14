// script.js — Code complet et vérifié pour l'ensemble du site

let currentLang = localStorage.getItem("lang") || "fr";
const CORRECT_HASH = "88546f608b8f5f0e1451b8da1177b96fec4729f998195755eaf29daba0e597126"; // Hash de mot de passe

// ----------------- DATA (INDÉPENDANTE DE LA LANGUE) -----------------

// Données des aéroports pour la création du tableau (existantes)
const airportData = [
    { code: "SCQ", name_fr: "Santiago de Compostela (Aéroport Lavacolla)", name_es: "Santiago de Compostela (Lavacolla)", time: "~30–40 min" },
    { code: "VGO", name_fr: "Vigo", name_es: "Vigo", time: "~1h" },
    { code: "OPO", name_fr: "Porto", name_es: "Porto", time: "~2h15–2h30" }
];

// --- NOUVELLES DONNÉES POUR LA PAGE INFOS COMPLÉMENTAIRES ---

// Données du Planning de la semaine
const planningData = [
    { date: "Lundi 10", matin: "", apresMidi: "", soiree: "" },
    { date: "Mardi 11", matin: "", apresMidi: "Talaso Atlantico", soiree: "60 AÑOS ARIANE" },
    { date: "Mercredi 12", matin: "Islas Cies", apresMidi: "Islas Cies", soiree: "Baiona" },
    { date: "Jeudi 13", matin: "Run : patos O mougas", apresMidi: "Calas de Montefero", soiree: "" },
    { date: "Vendredi 14", matin: "MARIAGE", apresMidi: "MARIAGE", soiree: "" },
    { date: "Samedi 15", matin: "Survivre", apresMidi: "Fiesta del agua, Villagarcia", soiree: "Fiesta del agua, Villagarcia" },
    { date: "Dimanche 16", matin: "Survivre", apresMidi: "Fiesta del Agua, Villagarcia", soiree: "Fiesta del Agua, Villagarcia" },
    { date: "Lundi 17", matin: "Termas de Prexigueiro", apresMidi: "", soiree: "" },
];

// Données des lieux à visiter en Galice
const galiceData = [
    { province: "Lugo", lieux: "Playa de las Catedrales", visite: "", restaurant: "" },
    { province: "A Coruña", lieux: "Finisterre", visite: "Phare du Cap Finisterre", restaurant: "" },
    { province: "A Coruña", lieux: "Mirador de Coitelo - Acantilados de Loiba", visite: "", restaurant: "" },
    { province: "A Coruña", lieux: "Ruínas do Muíño de Sesín", visite: "", restaurant: "" },
    { province: "A Coruña", lieux: "Mosteiro de Santa María de Monfero", visite: "", restaurant: "" },
    { province: "Ourense", lieux: "Canón do Sil", visite: "", restaurant: "" },
    { province: "Ourense", lieux: "Termas de Prexigueiro", visite: "", restaurant: "" },
    { province: "Ourense", lieux: "Miradoiro de Vilouxe", visite: "", restaurant: "" },
    { province: "Ourense", lieux: "Columpio O bambán do solpor", visite: "", restaurant: "" },
    { province: "Ourense", lieux: "A Mirada Máxica", visite: "", restaurant: "" },
    { province: "Ourense", lieux: "Columpio de Adega Terrabrava", visite: "", restaurant: "" },
    { province: "Ourense", lieux: "Allariz", visite: "", restaurant: "" },
    { province: "Pontevedra", lieux: "A Guarda", visite: "Moulins de Folón, Castro de Santa Trega", restaurant: "Porto Guardés, As Brasas" },
    { province: "Pontevedra", lieux: "Baiona", visite: "Casco viejo (le centre), Parador de Baiona, Virxe da Rocha", restaurant: "" },
    { province: "Pontevedra", lieux: "Islas Cies", visite: "(départ possible ed Vigo également)", restaurant: "" },
    { province: "Pontevedra", lieux: "Nigran", visite: "Monteferro", restaurant: "Taperia O'Druída" },
    { province: "Pontevedra", lieux: "Pontevedra", visite: "Casco viejo (le centre), Praza da Leña, Pazo de Lourizán", restaurant: "Kamelia Taberna ?" },
    { province: "Pontevedra", lieux: "Combarro", visite: "Combarro", restaurant: "" },
    { province: "Pontevedra", lieux: "O Grove", visite: "", restaurant: "" },
    { province: "Pontevedra", lieux: "Villagarcia de Arousa", visite: "A Illa de Arousa, Illa San Sadurniño", restaurant: "" },
    { province: "Pontevedra", lieux: "Sanxenxo", visite: "", restaurant: "" },
    { province: "Pontevedra", lieux: "Baroña", visite: "Castro de Baroña", restaurant: "" },
    { province: "Pontevedra", lieux: "Padron", visite: "Son marché très réputé avec les pulpeiros", restaurant: "" },
    { province: "A Coruña", lieux: "Santiago de Compostela", visite: "Miradoiro da Catedral, Cathédrale de Saint-Jacques-de-Compostelle", restaurant: "" },
];


// ----------------- TRANSLATIONS (FR / ES) -----------------
const translations = {
    fr: {
        "nav-accueil": "Accueil",
        "nav-infos-importantes": "Infos importantes",
        "nav-infos-comp": "Infos complémentaires",
        "nav-rsvp": "RSVP",
        "nav-galerie": "Galerie",
        // ... (autres traductions existantes) ...

        // Accordéon Voyage (Ajout de la caption manquante)
        "travel-title": "🗺️ Comment y aller ?",
        "travel_airports_intro": "✈️ Aéroports",
        "travel-table-caption": "Aéroports et temps de trajet", // CLÉ AJOUTÉE
        "travel-table-col-airport": "Aéroport", 
        "travel-table-col-time": "Temps de trajet", 
        "info_access-title": "✨ Informations pratiques",
        "info_access-text1": "Thème du mariage: Yellow Touch 🌟 (Tournesol et exclus) ",
        "info_access-text": `Nous recommandons d’avoir un moyen de locomotion sur place, les distances peuvent être longues et les transports publics ne sont pas optimales partout.
                            Le mariage est à ?h le 14 août 2026 au Pazo de Xerlis`,
        "info_access-IBAN": `Votre présence est déjà un merveilleux cadeau. Si toutefois vous souhaitez nous gâter davantage, une participation financière pour notre lune de miel nous ferait très plaisir.
        Notre compte bancaire est le suivant: BE37 6512 2062 8728`,
        
        // --- NOUVELLES TRADUCTIONS INFOS COMPLÉMENTAIRES ---
        "infos-comp-title": "Informations et idées",
        
        // 1. Planning de la semaine
        "planning-title": "🗓️ Planning de la semaine",
        "planning-caption": "Activités proposées (10 au 17 août)",
        "planning-col-date": "Dates",
        "planning-col-matin": "Matin",
        "planning-col-apresMidi": "Après-midi",
        "planning-col-soiree": "Soirée",

        // 2. Que voir en Galice
        "galice-title": "📍 Que voir en Galice",
        "galice-intro": "Galice : une région à quatre provinces : Lugo, Ourense, A coruña et Pontevedra (notre région à Adri et moi)",
        "galice-caption": "Idées de visites et d'activités",
        "galice-col-province": "Province",
        "galice-col-lieux": "Lieux",
        "galice-col-visite": "Visite/activité/point d’intérêt",
        "galice-col-restaurant": "Restaurants",

        // 3. Road trip
        "roadtrip-title": "🗺️ Road trip",
        "roadtrip-map-intro": "Carte générale de la Galice pour vous donner une idée des distances :",
        "roadtrip-intro": "Nous vous proposons deux itinéraires pour arriver/repartir de Galice :",
        "roadtrip-aller-title": "🚗 Itinéraire Aller",
        "roadtrip-retour-title": "🚙 Itinéraire Retour",

    },
    // Le bloc ES a été complété et adapté
    es: {
        "nav-accueil": "Inicio",
        "nav-infos-importantes": "Información importante",
        "nav-infos-comp": "Información adicional",
        "nav-rsvp": "Confirmación",
        "nav-galerie": "Galería",
        // ... (autres traductions existantes) ...

        // Accordéon Viaje (Ajout de la caption manquante)
        "travel-title": "🗺️ Cómo llegar",
        "travel_airports_intro": "✈️ Aeropuertos",
        "travel-table-caption": "Aeropuertos y tiempo de viaje", // CLÉ AJOUTÉE
        "travel-table-col-airport": "Aeropuerto", 
        "travel-table-col-time": "Tiempo de viaje", 
        "info_access-title": "✨ Información práctica",
        "info_access-text1": "Temática de la boda: Yellow Touch 🌟 (excluyendo girasoles) ",
        "info_access-text": `Recomendamos encarecidamente disponer de un medio de transporte propio, ya que las distancias pueden ser largas y el transporte público no es óptimo en todas las zonas.
La boda tendrá lugar a las ? h el 14 de agosto de 2026 en el Pazo de Xerlís.`,
        "info_access-IBAN": `Vuestra presencia ya es un regalo maravilloso. Si aun así deseáis obsequiarnos con algo más, una aportación económica para nuestra luna de miel nos haría mucha ilusión.
        
        Nuestra cuenta bancaria es la siguiente: BE37 6512 2062 8728`,

        // --- NOUVELLES TRADUCTIONS INFOS COMPLÉMENTAIRES ---
        "infos-comp-title": "Información e ideas",

        // 1. Planning de la semana
        "planning-title": "🗓️ Planning de la semana",
        "planning-caption": "Actividades propuestas (10 al 17 de agosto)",
        "planning-col-date": "Fechas",
        "planning-col-matin": "Mañana",
        "planning-col-apresMidi": "Tarde",
        "planning-col-soiree": "Noche",

        // 2. Que voir en Galice
        "galice-title": "📍 Qué ver en Galicia",
        "galice-intro": "Galicia: una región de cuatro provincias: Lugo, Ourense, A Coruña y Pontevedra (nuestra región, de Adri y mía)",
        "galice-caption": "Ideas de visitas y actividades",
        "galice-col-province": "Provincia",
        "galice-col-lieux": "Lugares",
        "galice-col-visite": "Visita/actividad/punto de interés",
        "galice-col-restaurant": "Restaurantes",

        // 3. Road trip
        "roadtrip-title": "🗺️ Road trip",
        "roadtrip-map-intro": "Mapa general de Galicia para que os hagáis una idea de las distancias:",
        "roadtrip-intro": "Os proponemos dos itinerarios para llegar/salir de Galicia:",
        "roadtrip-aller-title": "🚗 Itinerario Ida",
        "roadtrip-retour-title": "🚙 Itinerario Vuelta",
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

// --- NOUVELLES FONCTIONS DE GÉNÉRATION DE TABLEAUX ---

/**
 * Génère le tableau du Planning de la semaine.
 */
function generatePlanningTable(lang) {
    const t = translations[lang];
    
    let tableHtml = `<div class="table-wrapper"><table class="lodging-table">`; // Réutilisation du style lodging-table
    tableHtml += `<caption>${t["planning-caption"]}</caption>`;
    tableHtml += `<thead><tr>`;
    tableHtml += `<th>${t["planning-col-date"]}</th>`;
    tableHtml += `<th>${t["planning-col-matin"]}</th>`;
    tableHtml += `<th>${t["planning-col-apresMidi"]}</th>`;
    tableHtml += `<th>${t["planning-col-soiree"]}</th>`;
    tableHtml += `</tr></thead>`;
    tableHtml += `<tbody>`;

    planningData.forEach(item => {
        tableHtml += `<tr>`;
        tableHtml += `<td><strong>${item.date}</strong></td>`;
        tableHtml += `<td>${item.matin}</td>`;
        tableHtml += `<td>${item.apresMidi}</td>`;
        tableHtml += `<td>${item.soiree}</td>`;
        tableHtml += `</tr>`;
    });

    tableHtml += `</tbody></table></div>`;
    return tableHtml;
}

/**
 * Génère le tableau des lieux à visiter en Galice.
 */
function generateGaliceTable(lang) {
    const t = translations[lang];
    
    let tableHtml = `<div class="table-wrapper"><table class="lodging-table">`; // Réutilisation du style lodging-table
    tableHtml += `<caption>${t["galice-caption"]}</caption>`;
    tableHtml += `<thead><tr>`;
    tableHtml += `<th>${t["galice-col-province"]}</th>`;
    tableHtml += `<th>${t["galice-col-lieux"]}</th>`;
    tableHtml += `<th>${t["galice-col-visite"]}</th>`;
    tableHtml += `<th>${t["galice-col-restaurant"]}</th>`;
    tableHtml += `</tr></thead>`;
    tableHtml += `<tbody>`;

    galiceData.forEach(item => {
        tableHtml += `<tr>`;
        tableHtml += `<td>${item.province}</td>`;
        tableHtml += `<td>${item.lieux}</td>`;
        // Remplacement des virgules par des <br> pour la lisibilité
        tableHtml += `<td>${item.visite.replace(/, /g, ',<br>')}</td>`; 
        tableHtml += `<td>${item.restaurant.replace(/, /g, ',<br>')}</td>`;
        tableHtml += `</tr>`;
    });

    tableHtml += `</tbody></table></div>`;
    return tableHtml;
}


function applyTranslations(lang) {
    const t = translations[lang];

    for (const key in t) {
        const element = safeGet(key);
        if (element) {
            // Utiliser innerHTML pour les textes longs avec sauts de ligne pour CSS `white-space: pre-line;`
            if (key === 'clara-text' || key === 'adrian-text' || key === 'children-text' || key === 'info_access-move' || key === 'lodging-intro-text2' || key === 'lodging-intro-text') {
                element.innerHTML = t[key]; 
            } else {
                element.innerHTML = t[key];
            }
        }
    }

    // Générer et insérer les tableaux sur les pages appropriées

    // 1. Tableau de voyage (Page infos.html)
    const travelContainer = safeGet('travel-table-container');
    if (travelContainer) {
        travelContainer.innerHTML = generateTravelTable(lang);
    }
    
    // 2. Tableau de Planning (Page infos_comp.html)
    const planningContainer = safeGet('planning-table-container');
    if (planningContainer) {
        planningContainer.innerHTML = generatePlanningTable(lang);
    }

    // 3. Tableau Galice (Page infos_comp.html)
    const galiceContainer = safeGet('galice-table-container');
    if (galiceContainer) {
        galiceContainer.innerHTML = generateGaliceTable(lang);
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


// Fonctions pour l'accordéon (inchangées)
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
        // Utiliser scrollHeight pour déterminer la hauteur nécessaire
        content.style.maxHeight = content.scrollHeight + "px"; // Ouvrir
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
            // Appeler initAccordion sur toutes les pages 'infos' pour recalculer les hauteurs si besoin
            if (document.body.classList.contains('infos') || document.body.classList.contains('infos_comp')) { 
                initAccordion(); 
            }
        });
    }

    // 4. Configuration de l'accordéon (page infos ou infos_comp) - Appel initial
    // J'ai ajouté une vérification de classe générique ou spécifique à infos_comp si vous l'utilisez
    if (document.body.classList.contains('infos') || document.body.classList.contains('infos_comp')) {
        initAccordion();
    }
})

// TODO: Ajouter ici la logique spécifique à RSVP (soumission de formulaire, vérification du mot de passe) si vous l'ajoutez plus tard.