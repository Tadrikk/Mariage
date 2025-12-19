// script.js — Code complet et vérifié pour l'ensemble du site

let currentLang = localStorage.getItem("lang") || "fr";
const CORRECT_HASH = "88546f608b8f5f0e1451b8da1177b96fec4729f998195755eaf29daba0e597126"; // Hash de mot de passe

// Définition des données structurées pour le planning
const planningData = [
    { day: "Lundi: 10", key: "Mon-10" },
    { day: "Mardi: 11", key: "Tue-11" },
    { day: "Mercredi: 12", key: "Wed-12" },
    { day: "Jeudi: 13", key: "Thu-13" },
    { day: "Vendredi: 14", key: "Fri-14" },
    { day: "Samedi: 15", key: "Sat-15" },
    { day: "Dimanche: 16", key: "Sun-16" },
    { day: "Lundi: 17", key: "Mon-17" },
];

// Nouvelle structure de données pour les lieux en Galice avec Provinces et Restaurants  
const galiciaData = [
    { province: "Lugo", location: "Playa de las Catedrales", attraction: "Là où la mer sculpte des cathédrales de pierre, un chef-d’œuvre naturel à contempler au rythme des marées.", attraction_es: "Donde el mar esculpe catedrales de piedra, una obra maestra natural a contemplar al ritmo de las mareas.", restaurant: "" },
    { province: "Lugo", location: "La muralla de Lugo", attraction: "Une muraille romaine qui enlace la ville depuis des siècles, comme un cercle de légendes et d’histoire.", attraction_es: "Una muralla romana que abraza la ciudad desde hace siglos, como un círculo de leyendas e historia.", restaurant: "" },
    { province: "A Coruña", location: "Finisterre", attraction: "Le bout du monde… là où le soleil se couche dans l’océan et où le phare veille sur les âmes voyageuses.", attraction_es: "El fin del mundo... donde el sol se pone en el océano y el faro vela por las almas viajeras.", restaurant: "" },
    { province: "A Coruña", location: "Mirador de Coitelo", attraction: "Acantilados de Loiba : Des falaises vertigineuses où le vent raconte des légendes celtes.", attraction_es: "Acantilados de Loiba: Acantilados vertiginosos donde el viento cuenta leyendas celtas.", restaurant: "" },
    { province: "A Coruña", location: "Ruínas do Muíño de Sesín", attraction: "Vestiges mystérieux, témoins d’un temps suspendu entre forêt et rivière.", attraction_es: "Vestigios misteriosos, testigos de un tiempo suspendido entre bosque y río.", restaurant: "" },
    { province: "A Coruña", location: "Mosteiro de Santa María de Monfero", attraction: "Un monastère qui semble murmurer des prières à travers ses pierres centenaires.", attraction_es: "Un monasterio que parece susurrar oraciones a través de sus piedras centenarias.", restaurant: "" },
    { province: "Ourense", location: "Canón do Sil", attraction: "Un canyon majestueux où la rivière dessine des arabesques au cœur des vignobles.", attraction_es: "Un cañón majestuoso donde el río dibuja arabescos en el corazón de los viñedos.", restaurant: "" },
    { province: "Ourense", location: "Termas de Prexigueiro", attraction: "Sources chaudes en pleine nature, pour un bain sous les étoiles.", attraction_es: "Fuentes termales en plena naturaleza, para un baño bajo las estrellas.", restaurant: "" },
    { province: "Ourense", location: "Miradoiro de Vilouxe", attraction: "Un balcon sur l’infini, où la Galice se dévoile dans toute sa splendeur.", attraction_es: "Un balcón hacia el infinito, donde Galicia se revela en todo su esplendor.", restaurant: "" },
    { province: "Ourense", location: "Columpio O bambán do solpor", attraction: "Une balançoire suspendue entre ciel et terre, pour toucher le coucher du soleil. (A Mirada Máxica)", attraction_es: "Un columpio suspendido entre cielo y tierra, para tocar la puesta de sol. (A Mirada Máxica)", restaurant: "" },
    { province: "Ourense", location: "Columpio de Adega Terrabrava", attraction: "Là où le vin et le vent s’unissent pour offrir une vue magique.", attraction_es: "Donde el vino y el viento se unen para ofrecer una vista mágica.", restaurant: "" },
    { province: "Ourense", location: "Allariz", attraction: "Un village médiéval qui semble sorti d’un conte, avec ses ruelles pavées et ses jardins secrets.", attraction_es: "Un pueblo medieval que parece sacado de un cuento, con sus calles empedradas y jardines secretos.", restaurant: "" },
    { province: "Pontevedra", location: "A Guarda", attraction: "Moulins de Folón et Castro de Santa Trega, où l’histoire danse avec le vent.", attraction_es: "Molinos de Folón y el Castro de Santa Trega, donde la historia baila con el viento.", restaurant: "Porto Guardés, As Brasas" },
    { province: "Pontevedra", location: "Baiona", attraction: "Entre son vieux centre, le Parador et la Virxe da Rocha, une ville qui respire l’élégance maritime.", attraction_es: "Entre su casco antiguo, el Parador y la Virxe da Rocha, una ciudad que respira elegancia marítima.", restaurant: "" },
    { province: "Pontevedra", location: "Islas Cíes", attraction: "Un paradis surnommé « les Caraïbes galiciennes », où la mer se pare de turquoise.", attraction_es: "Un paraíso apodado «el Caribe gallego», donde el mar se tiñe de turquesa.", restaurant: "" },
    { province: "Pontevedra", location: "Nigrán", attraction: "Monteferro : Un promontoire magique pour admirer l’océan infini.", attraction_es: "Monteferro: Un promontorio mágico para admirar el océano infinito.", restaurant: "Taperia O'Druída" },
    { province: "Pontevedra", location: "Pontevedra", attraction: "Flânez dans son centre historique, entre places animées et palais cachés. (Suggestion : Kamelia Taberna)", attraction_es: "Pasee por su centro histórico, entre plazas animadas y palacios escondidos. (Sugerencia: Kamelia Taberna)", restaurant: "" },
    { province: "Pontevedra", location: "Combarro", attraction: "Un village de carte postale, avec ses hórreos en pierre face à la mer.", attraction_es: "Un pueblo de postal, con sus hórreos de piedra frente al mar.", restaurant: "" },
    { province: "Pontevedra", location: "O Grove", attraction: "Terre de fruits de mer et de couchers de soleil dorés.", attraction_es: "Tierra de mariscos y puestas de sol doradas.", restaurant: "" },
    { province: "Pontevedra", location: "Villagarcia de Arousa", attraction: "Découvrez A Illa de Arousa et Illa San Sadurniño, joyaux au cœur des rías.", attraction_es: "Descubra A Illa de Arousa e Illa San Sadurniño, joyas en el corazón de las rías.", restaurant: "" },
    { province: "Pontevedra", location: "Sanxenxo", attraction: "Plages dorées et ambiance festive au bord de l’Atlantique.", attraction_es: "Playas doradas y ambiente festivo junto al Atlántico.", restaurant: "" },
    { province: "Pontevedra", location: "Baroña", attraction: "Le Castro de Baroña, vestige celte face à l’océan, où le temps semble s’arrêter.", attraction_es: "El Castro de Baroña, vestigio celta frente al océano, donde el tiempo parece detenerse.", restaurant: "" },
    { province: "Pontevedra", location: "Padron", attraction: "Son marché animé et ses pulpeiros, pour goûter à l’authenticité galicienne.", attraction_es: "Su mercado animado y sus pulpeiros, para saborear la autenticidad gallega.", restaurant: "" },
    { province: "Santiago de Compostela", location: "Santiago de Compostela", attraction: "La cathédrale et son mirador, un lieu où chaque pierre respire la spiritualité et l’histoire.", attraction_es: "La catedral y su mirador, un lugar donde cada piedra respira espiritualidad e historia.", restaurant: "" },
];

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
`Nous nous sommes rencontrés le… (je réfléchis…) 14 octobre, lors de la soirée d’adieu d’une amie commune.
De mon côté, j’avais déjà préparé ma stratégie pour l’aborder, alors qu’elle, innocente, ne se doutait de rien.
C’est ce soir-là que notre belle histoire a commencé.

Depuis, nous avons partagé beaucoup de moments incroyables : cuisiner chez elle, passer des soirées à commander de la nourriture très saine… et prendre du poids.
Puis rencontrer la famille de Clara et découvrir leur organisation légendaire — et reprendre du poids.
Refuser de danser la salsa avec Clara, pour finalement en danser avec quelqu’un d’autre qui a su me convaincre en dix secondes.
Me rendre compte, dès sa première rencontre avec ma famille en Galice, qu’elle les aimait déjà plus que moi.
Et, finalement, aller jusqu’à quitter ma ville natale pour venir vivre avec elle au Luxembourg.

Bien sûr, je n’oublie pas tous les voyages que nous avons faits, grâce auxquels j’ai découvert des facettes de moi que je ne connaissais pas encore.

Bref, le 19 mai 2025, je lui ai demandé sa main et, sans surprise — parce que je suis toujours sûr de moi — elle a dit oui.
Notre tout premier sujet de discussion a été la Galice, et c’est finalement là-bas que nous avons décidé de concrétiser notre union.

Du fond du cœur, j’aimerais que vous soyez tous présents pour partager ce moment avec nous.
Promis, vous ne serez pas déçus.`,

 "titre-principal": "Clara & Adrián",
        "countdown-title": "Le grand jour arrive dans",
        "label-days": "JOURS",
        "label-hours": "HEURES",
        "label-minutes": "MINUTES",
        "label-seconds": "SECONDES",
        "rsvp-title-index": "Serez-vous présent ?",
        "rsvp-datelim-index":"Nous avons hâte de célébrer ce jour spécial avec vous !",
        "rsvp-button": "RSVP",
        // Infos Page
        "infos-title": "Où et quand ?",
        "infos-ceremonie": "Cérémonie : 14 août 2026 – Pazo de Xerlís, A Estrada (Galice, Espagne)",
        "infos-hour": "Heure : 18h00",

        // Accordéon Logement
        "lodging-main-title": "🏨 Logement",
        "lodging-intro-text": `Pour les logements avant ou après le mariage cela dépend de où vous voulez vous trouver (<a href="infos_comp.html">Infos complémentaires</a>).

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
        "travel-table-col-airport": "Aéroport", 
        "travel-table-col-time": "Temps de trajet", 
        "info_access-title": "✨ Informations pratiques",
        "info_access-text1": 
        `Thème du mariage: <strong> Yellow Touch 🌟 </strong> (Tournesol et citrons exclus).
        
        Sous le doux éclat du soleil d’août, nous rêvons d’une journée lumineuse, parsemée de touches de jaune, symbole de joie et d’énergie.`,
        "info_access-text": `Nous recommandons d’avoir un moyen de locomotion sur place, les distances peuvent être longues et les transports publics ne sont pas optimales partout.
                            Le mariage est à 18h le 14 août 2026 au Pazo de Xerlis`,
        "info_access-IBAN": `Votre présence est déjà un merveilleux cadeau ❤️. Si toutefois vous souhaitez nous gâter davantage, une participation financière pour notre lune de miel nous ferait très plaisir.

        💳 Notre compte bancaire est le suivant: BE37 6512 2062 8728`,
        "rsvp-click-text": "Cliquez ici pour accéder au formulaire RSVP 👇",
        "Lien_Google_sheet": "Lien : https://docs.google.com/forms/d/e/1FAIpQLSclZyDY5n2FXKByn372KZeAedKKUAS-Dg5bEZPgU0p_56_tUA/viewform?usp=dialog",
    
        // NOUVEAU POUR LE PLANNING
        "planning-intro": "Voici le planning prévisionnel des festivités autour du mariage. N'hésitez pas à nous rejoindre si vous êtes dans les environs !",
        "planning-col-date": "Date Aout",
        "planning-col-morning": "Matin",
        "planning-col-afternoon": "Après-midi",
        "planning-col-evening": "Soirée",
        "planning-title-caption": "Programme de la semaine du 10 au 17 août",
        
        // DONNÉES DU TABLEAU EN FRANÇAIS
        "data-Mon-10-M": "", "data-Mon-10-A": "", "data-Mon-10-S": "", // Lundi 10
        "data-Tue-11-M": "Talaso Atlantico", "data-Tue-11-A": "Evènement familial", "data-Tue-11-S": "", // Mardi 11
        "data-Wed-12-M": "Islas Cíes", "data-Wed-12-A": "Islas Cíes", "data-Wed-12-S": "Baiona (boire un verre)", // Mercredi 12
        "data-Thu-13-M": "Run : Patos ou Mougas", "data-Thu-13-A": "Calas de Montefero (plage)", "data-Thu-13-S": "", // Jeudi 13
        "data-Fri-14-M": "MARIAGE", "data-Fri-14-A": "MARIAGE", "data-Fri-14-S": "MARIAGE", // Vendredi 14
        "data-Sat-15-M": "Survivre", "data-Sat-15-A": "", "data-Sat-15-S": "Fiesta del Agua pendant la nuit", // Samedi 15
        "data-Sun-16-M": "Survivre", "data-Sun-16-A": "Fiesta del Agua (Villagarcía)", "data-Sun-16-S": "Fiesta del Agua (Villagarcía)", // Dimanche 16
        "data-Mon-17-M": "Termas de Prexigueiro", "data-Mon-17-A": "", "data-Mon-17-S": "", // Lundi 17
    
        // NOUVEAU POUR GALICE
        "galice-intro": 
        `Ici, la mer murmure des légendes et les pierres racontent des siècles d’histoire. Terre celte et spirituelle, la Galice séduit par ses paysages verdoyants, ses rías mystérieuses et ses villages authentiques. Entre traditions, gastronomie et le mythique Chemin de Saint-Jacques, chaque coin est une invitation à la découverte.
        Si vous prolongez votre séjour…
        Voici quelques lieux incontournables dans notre région`, // Légère mise à jour pour inclure la note sur Pontevedra
        "galice-col-province": "Province",
        "galice-col-location": "Lieu / Ville",
        "galice-col-attraction": "Visite / Point d'intérêt",
        "galice-col-restaurant": "Suggestions Restaurants",
        "galice-title-caption": "Suggestions de visites en Galice",
        "travel-table-col-airport": "Aéroport", 
        "travel-table-col-time": "Information",

        // Road trip
        "roadtrip-intro": "Les proponemos dos itinerarios para llegar a / salir de Galicia."
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

El 19 de mayo de 2025, quien nos había unido por primera vez fue testigo de nuestro compromiso. Estamos en Galicia, y más concretamente en las Islas Cíes, Adri está delante de mí de rodillas y me pide que nos casemos. Contesto que sí, obviamente, sí a vivir nuestra vida para siempre.

Unos días después, en un tren hacia Madrid, os anunciamos la noticia y comenzamos los preparativos de nuestra boda en Galicia — ¿dónde si no? En nuestra tierra querida, que llevabamos anos deseando mostraros. Si queréis descubrir el paraíso o venir a acompañarnos, os esperamos el 14 de agosto de 2026 en el Pazo de Xerlís.`,
       
        "adrian-text":
`Nos conocimos el... (deja que piense...) 14 de octubre, en la fiesta de despedida de una amiga en común.

Yo ya había establecido mi estrategia para abordarla, mientras ella, inocente, no sospechaba nada. A partir de esa noche, nuestra hermosa historia comenzó.

Hemos vivido muchas experiencias maravillosas: primero, cocinar en su casa, luego, pasar noches pidiendo comida muy sana... y engordando. Después, conocer a su familia y descubrir su legendaria organización, engordar aún más, negarme a bailar salsa con ella para finalmente bailar con otra persona que me convenció en 10 segundos, darme cuenta, desde su primer encuentro con mi familia en Galicia, que la quieren más que a mí, y finalmente, hasta dejar mi ciudad natal para vivir con ella en Luxemburgo. Por supuesto, no olvido todos los viajes que hicimos (Indonesia, Guadalupe, Jordania, Japón, y más), gracias a los cuales pude descubrir partes de mí mismo que aún no conocía.

En resumen, el 19 de mayo de 2025, le pedí matrimonio y, sin sorpresa (porque siempre estoy seguro de mí mismo), dijo que sí.

Nuestro primer tema de conversación fue sobre Galicia, y es allí donde finalmente sellaremos nuestra unión.

Me encantaría, de todo corazón, que estéis todos presentes para compartir este momento con nosotros (¡os prometo que no os decepcionaremos!).`,
        "titre-principal": "Clara & Adrián",
        "countdown-title": "El gran día llega en",
        "label-days": "DÍAS",
        "label-hours": "HORAS",
        "label-minutes": "MINUTOS",
        "label-seconds": "SEGUNDOS",
        "rsvp-title-index": "¿Vienes a la boda?",
        "rsvp-datelim-index":"¡Estamos deseando celebrar este día tan especial con vosotros!",
        "rsvp-button": "Confirmación",
        "infos-title": "¿Dónde y cuándo?",
        "infos-ceremonie": "Ceremonia: 14 de agosto de 2026 – Pazo de Xerlís, A Estrada (Galicia, España)",
        "infos-hour": "Hora: 18:00",

        // Accordéon Alojamiento
        "lodging-main-title": "🏨 Alojamiento",
        "lodging-intro-text": `Para el alojamiento antes o después de la boda, depende de dónde queráis estar (<a href="infos_comp.html">Información adicional</a>).

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
        "info_access-text1": 
        `Temática de la boda: <strong> Yellow Touch 🌟 </strong> (excluyendo girasoles y limón).
        
        Bajo el suave resplandor del sol de agosto, soñamos con un día luminoso, salpicado de toques de amarillo, símbolo de alegría y energía.`,
        "info_access-text": `Recomendamos encarecidamente disponer de un medio de transporte propio, ya que las distancias pueden ser largas y el transporte público no es óptimo en todas las zonas.
        La ceremonia tendrá lugar a las 18h el 14 de agosto de 2026 en el Pazo de Xerlís. Vengan con antelación si es necesario.`,
        "info_access-IBAN": `Vuestra presencia ya es un regalo maravilloso ❤️. Si aun así deseáis obsequiarnos con algo más, una aportación económica para nuestra luna de miel nos haría mucha ilusión.
        
        💳 Nuestra cuenta bancaria es la siguiente: BE37 6512 2062 8728`,
        "rsvp-click-text": "Haz clic aquí para acceder al formulario RSVP 👇",
        "Lien_Google_sheet": "Enlace: https://docs.google.com/forms/d/e/1FAIpQLSclZyDY5n2FXKByn372KZeAedKKUAS-Dg5bEZPgU0p_56_tUA/viewform?usp=dialog",
  
        // NOUVEAU POUR LE PLANNING
        "planning-intro": "Aquí está la programación provisional de las festividades alrededor de la boda. ¡No duden en unirse si están cerca!",
        "planning-col-date": "Fecha Agosto",
        "planning-col-morning": "Mañana",
        "planning-col-afternoon": "Tarde",
        "planning-col-evening": "Noche",
        "planning-title-caption": "Programa de la semana del 10 al 17 de agosto",
        
        // DONNÉES DU TABLEAU EN ESPAGNOL (les noms des lieux restent généralement les mêmes)
        "data-Mon-10-M": "", "data-Mon-10-A": "", "data-Mon-10-S": "",
        "data-Tue-11-M": "Talaso Atlántico", "data-Tue-11-A": "Evemento familia", "data-Tue-11-S": "",
        "data-Wed-12-M": "Islas Cíes", "data-Wed-12-A": "Islas Cíes", "data-Wed-12-S": "Baiona (tomar algo)",
        "data-Thu-13-M": "Carrera: Patos o Mougas", "data-Thu-13-A": "Calas de Montefero (playa)", "data-Thu-13-S": "",
        "data-Fri-14-M": "BODA", "data-Fri-14-A": "BODA", "data-Fri-14-S": "BODA",
        "data-Sat-15-M": "Sobrevivir", "data-Sat-15-A": "", "data-Sat-15-S": "Fiesta del Agua durante la noche",
        "data-Sun-16-M": "Sobrevivir", "data-Sun-16-A": "Fiesta del Agua (Villagarcía)", "data-Sun-16-S": "Fiesta del Agua (Villagarcía)",
        "data-Mon-17-M": "Termas de Prexigueiro", "data-Mon-17-A": "", "data-Mon-17-S": "",

        // NOUVEAU POUR GALICE
        "galice-intro": 
        `Aquí, el mar susurra leyendas y las piedras cuentan siglos de historia. Tierra celta y espiritual, Galicia seduce con sus paisajes verdes, sus rías misteriosas y sus pueblos auténticos. Entre tradiciones, gastronomía y el mítico Camino de Santiago,
        cada rincón es una invitación al descubrimiento.
        Si prolongan su estancia... Aquí tienen algunos lugares imprescindibles en nuestra región`,
        "galice-col-province": "Provincia",
        "galice-col-location": "Lugar / Ciudad",
        "galice-col-attraction": "Visita / Punto de interés",
        "galice-col-restaurant": "Sugerencias Restaurantes",
        "galice-title-caption": "Sugerencias de visitas en Galicia",
        "travel-table-col-airport": "Aeropuerto", 
        "travel-table-col-time": "Información",

        // Road trip
        "roadtrip-intro": "Nous vous proposons deux itinéraires pour arriver/repartir de Galice"    }
        
};

// Données des aéroports pour la création du tableau (indépendantes de la langue)
const airportData = [
    { 
        code: "SCQ", 
        name_fr: "Santiago de Compostela (Aéroport Lavacolla)", 
        name_es: "Santiago de Compostela (Lavacolla)", 
        info_fr: "Départ depuis BRU ou CRL, généralement avec escale. Proche de Villagarcia de Arousa.",
        info_es: "Salida desde BRU o CRL, generalmente con escala. Cerca de Villagarcía de Arousa."
    },
    { 
        code: "VGO", 
        name_fr: "Vigo", 
        name_es: "Vigo", 
        info_fr: "Départ depuis BRU, avec escale. Proche de Nigran/Oia.", 
        info_es: "Salida desde BRU, con escala. Cerca de Nigrán/Oia."
    },
    { 
        code: "OPO", 
        name_fr: "Porto", 
        name_es: "Porto", 
        info_fr: "Départ depuis CRL ou LUX, vols fréquents. Plus loin de VGO et SCQ.",
        info_es: "Salida desde CRL o LUX, vuelos frecuentes. Más lejos de VGO y SCQ."
    }
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
    const colInfoKey = `info_${lang}`;
    
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
        tableHtml += `<td>${airport[colInfoKey]}</td>`;
        tableHtml += `</tr>`;
    });

    tableHtml += `</tbody></table>`;
    return tableHtml;
}

function generateGaliciaTable(lang) {
    const texts = translations[lang];
    const container = document.getElementById('galice-table-container');
    const intro = document.getElementById('galice-intro');
    
    if (!container || !intro) return;

    intro.textContent = texts["galice-intro"];
    
    // Définir la clé d'attraction à utiliser en fonction de la langue
    const attractionKey = lang === 'fr' ? 'attraction' : 'attraction_es';

    let html = `<div class="table-wrapper"> <table class="lodging-table">
        <caption id="galice-caption">${texts["galice-title-caption"]}</caption>
        <thead>
            <tr>
                <th>${texts["galice-col-province"]}</th>
                <th>${texts["galice-col-location"]}</th>
                <th>${texts["galice-col-attraction"]}</th>
                <th>${texts["galice-col-restaurant"]}</th>
            </tr>
        </thead>
        <tbody>`;

    galiciaData.forEach(item => {
        html += `<tr>
            <td><strong>${item.province}</strong></td>
            <td>${item.location}</td>
            <td>${item[attractionKey]}</td> 
            <td>${item.restaurant}</td>
        </tr>`;
    });

    html += `</tbody></table></div>`; // Fermeture du table et du div table-wrapper
    container.innerHTML = html;
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

    const langToggle = safeGet('lang-toggle');
    if (langToggle) {
        if (lang === 'fr') {
            langToggle.textContent = 'ES'; // Si la page est en FR, le bouton propose de passer à ES
        } else {
            langToggle.textContent = 'FR'; // Si la page est en ES, le bouton propose de passer à FR
        }
    }

    // Générer et insérer le tableau de voyage
    const travelContainer = safeGet('travel-table-container');
    if (travelContainer) {
        travelContainer.innerHTML = generateTravelTable(lang);
    }
    generatePlanningTable(lang);
    generateGaliciaTable(lang)

}

    function generatePlanningTable(lang) {
    const texts = translations[lang];
    const container = document.getElementById('planning-table-container');
    const intro = document.getElementById('planning-intro');
    
    if (!container || !intro) return;

    // Met à jour le paragraphe d'introduction
    intro.textContent = texts["planning-intro"];
    
    let html = `<table class="lodging-table">
        <caption id="planning-caption">${texts["planning-title-caption"]}</caption>
        <thead>
            <tr>
                <th>${texts["planning-col-date"]}</th>
                <th>${texts["planning-col-morning"]}</th>
                <th>${texts["planning-col-afternoon"]}</th>
                <th>${texts["planning-col-evening"]}</th>
            </tr>
        </thead>
        <tbody>`;

    planningData.forEach(item => {
        // Construction de chaque ligne
        html += `<tr>
            <td><strong>${item.day}</strong></td>
            <td>${texts[`data-${item.key}-M`]}</td>
            <td>${texts[`data-${item.key}-A`]}</td>
            <td>${texts[`data-${item.key}-S`]}</td>
        </tr>`;
    });

    html += `</tbody></table>`;
    container.innerHTML = html;
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