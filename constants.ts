
import { City, Translations, Language, TransportLeg, Currency, PointOfInterest, AIPromptContent } from './types';

export const LANGUAGES = [
  { code: Language.ES, name: 'Español' },
  { code: Language.HE, name: 'עברית' },
];

export const CURRENCIES = [
  { code: Currency.ARS, name: 'ARS' },
  { code: Currency.USD, name: 'USD' },
  { code: Currency.EUR, name: 'EUR' },
  { code: Currency.ILS, name: 'ILS' },
];

const buenosAiresPois: PointOfInterest[] = [
  { id: 'ba_poi_obelisco', nameKey: 'buenosaires_poi_obelisco_name', coords: [-34.6037, -58.3816], descriptionKey: 'buenosaires_poi_obelisco_desc' },
  { id: 'ba_poi_teatrocolon', nameKey: 'buenosaires_poi_teatrocolon_name', coords: [-34.6010, -58.3830], descriptionKey: 'buenosaires_poi_teatrocolon_desc' },
  { id: 'ba_poi_caminito', nameKey: 'buenosaires_poi_caminito_name', coords: [-34.6383, -58.3625], descriptionKey: 'buenosaires_poi_caminito_desc' },
  { id: 'ba_poi_palermo', nameKey: 'buenosaires_poi_palermo_name', coords: [-34.5729, -58.4204], descriptionKey: 'buenosaires_poi_palermo_desc' }, // General Palermo, near Rose Garden
  { id: 'ba_poi_planetario', nameKey: 'buenosaires_poi_planetario_name', coords: [-34.5700, -58.4121], descriptionKey: 'buenosaires_poi_planetario_desc' },
  { id: 'ba_poi_puertomadero', nameKey: 'buenosaires_poi_puertomadero_name', coords: [-34.6105, -58.3647], descriptionKey: 'buenosaires_poi_puertomadero_desc' }, // Puente de la Mujer
  { id: 'ba_poi_bellasartes', nameKey: 'buenosaires_poi_bellasartes_name', coords: [-34.5820, -58.3929], descriptionKey: 'buenosaires_poi_bellasartes_desc' },
  { id: 'ba_poi_recoleta', nameKey: 'buenosaires_poi_recoleta_name', coords: [-34.5887, -58.3906], descriptionKey: 'buenosaires_poi_recoleta_desc' }, // Recoleta Cemetery
  { id: 'ba_poi_plazamayo', nameKey: 'buenosaires_poi_plazamayo_name', coords: [-34.6083, -58.3722], descriptionKey: 'buenosaires_poi_plazamayo_desc' },
];


export const CITIES: City[] = [
  { 
    id: 'buenosaires', 
    nameKey: 'buenosaires_title', 
    coords: [-34.6118, -58.3960], 
    image: '/docs/imagenes/buenosaires/buenosaires.jpg', 
    descriptionKey: 'buenosaires_desc_main',
    activitiesKey: 'buenosaires_activities_recommended', 
    accommodationKey: 'buenosaires_accommodation_examples', 
    budgetKey: 'buenosaires_budget_table',
    pointsOfInterest: buenosAiresPois,
  },
  { 
    id: 'rosario', 
    nameKey: 'rosario_title', 
    coords: [-32.9442, -60.6505], 
    image: '/docs/imagenes/rosario/Monumento-a-la-Bandera-1024x768.jpg', 
    descriptionKey: 'rosario_desc_main',
    activitiesKey: 'rosario_activities_recommended',
    accommodationKey: 'rosario_accommodation_examples',
    budgetKey: 'rosario_budget_table'
  },
  { 
    id: 'bariloche', 
    nameKey: 'bariloche_title', 
    coords: [-41.1335, -71.3103], 
    image: '/docs/imagenes/bariloche/emilio-lujan-HhobdGoYzaA-unsplash.jpg', 
    descriptionKey: 'bariloche_desc_main',
    activitiesKey: 'bariloche_activities_recommended',
    accommodationKey: 'bariloche_accommodation_examples',
    budgetKey: 'bariloche_budget_table'
  },
  { 
    id: 'mendoza', 
    nameKey: 'mendoza_title', 
    coords: [-32.8908, -68.8272], 
    image: '/docs/imagenes/mendoza/Mendoza-Puente-del-Inca.jpg', 
    descriptionKey: 'mendoza_desc_main',
    activitiesKey: 'mendoza_activities_recommended',
    accommodationKey: 'mendoza_accommodation_examples',
    budgetKey: 'mendoza_budget_table'
  },
  { 
    id: 'malargue', 
    nameKey: 'malargue_title', 
    coords: [-35.4757, -69.5840], 
    image: '/docs/imagenes/malargue/malargue-cover.jpg', 
    descriptionKey: 'malargue_desc_main',
    activitiesKey: 'malargue_activities_recommended',
    accommodationKey: 'malargue_accommodation_examples',
    budgetKey: 'malargue_budget_table'
  },
  { 
    id: 'jujuy', 
    nameKey: 'jujuy_title', 
    coords: [-24.1858, -65.2995],
    image: '/docs/imagenes/jujuy/jujuy-cover.jpg', 
    descriptionKey: 'jujuy_desc_main',
    activitiesKey: 'jujuy_activities_recommended',
    accommodationKey: 'jujuy_accommodation_examples',
    budgetKey: 'jujuy_budget_table'
  },
  { 
    id: 'iguazu', 
    nameKey: 'iguazu_title', 
    coords: [-25.5952, -54.5732],
    image: '/docs/imagenes/iguazu/iguazu-cover.jpg', 
    descriptionKey: 'iguazu_desc_main',
    activitiesKey: 'iguazu_activities_recommended',
    accommodationKey: 'iguazu_accommodation_examples',
    budgetKey: 'iguazu_budget_table'
  },
  { 
    id: 'corrientes', 
    nameKey: 'corrientes_title', 
    coords: [-27.4691, -58.8309], 
    image: '/docs/imagenes/corrientes/corrientes-cover.jpg', 
    descriptionKey: 'corrientes_desc_main',
    activitiesKey: 'corrientes_activities_recommended',
    accommodationKey: 'corrientes_accommodation_examples',
    budgetKey: 'corrientes_budget_table'
  },
  { 
    id: 'ibera', 
    nameKey: 'ibera_title', 
    coords: [-28.539, -57.16], 
    image: '/docs/imagenes/ibera/ibera-cover.jpg', 
    descriptionKey: 'ibera_desc_main',
    activitiesKey: 'ibera_activities_recommended',
    accommodationKey: 'ibera_accommodation_examples',
    budgetKey: 'ibera_budget_table'
  },
];

export const AI_PROMPT_CONFIGS: AIPromptContent[] = [
  { titleKey: 'ai_menu_title', descriptionKey: 'ai_menu_description', buttonKey: 'ai_menu_button', promptKeySuffix: '_ai_prompt_menu', icon: 'fa-utensils', userInputPlaceholderKey: 'ai_menu_input_placeholder' },
  { titleKey: 'ai_accommodation_title', descriptionKey: 'ai_accommodation_description', buttonKey: 'ai_accommodation_button', promptKeySuffix: '_ai_prompt_accommodation', icon: 'fa-hotel', userInputPlaceholderKey: 'ai_accommodation_input_placeholder' },
  { titleKey: 'ai_family_tips_title', descriptionKey: 'ai_family_tips_description', buttonKey: 'ai_family_tips_button', promptKeySuffix: '_ai_prompt_family_tips', icon: 'fa-users-cog', userInputPlaceholderKey: 'ai_family_tips_input_placeholder' },
  { titleKey: 'ai_budget_analysis_title', descriptionKey: 'ai_budget_analysis_description', buttonKey: 'ai_budget_analysis_button', promptKeySuffix: '_ai_prompt_budget_analysis', icon: 'fa-piggy-bank', userInputPlaceholderKey: 'ai_budget_analysis_input_placeholder' },
];


export const translations: Translations = {
  [Language.ES]: {
    // General
    tituloPrincipal: "Itinerario Familiar por Argentina",
    idioma: "Idioma:",
    moneda: "Moneda:",
    explore_btn: "Explorar más detalles",
    volverItinerario: "Volver al Itinerario",
    loading: "Cargando...",
    error: "Error",
    generating: "Generando...",
    duration_not_specified: "Duración no especificada",
    // Top Bar
    // Home Page
    bienvenidaPrincipal: "¡Bienvenidos! Haz clic en cada ciudad para ver información, mapas y recomendaciones.",
    transporte: "Transporte entre ciudades",
    desde: "Desde",
    hasta: "Hasta",
    medio: "Medio",
    tiempo: "Tiempo",
    precio: "Precio aprox.",
    compania: "Compañía",
    mapaInteractivoTitulo: "Mapa Interactivo del Viaje",
    mapaInteractivoBienvenida: "Recorre el itinerario familiar por Argentina. Haz clic en cada ciudad para detalles.",
    // Packing List
    packing_title: "Lista de equipaje",
    packing_add: "Agregar",
    packing_essential: "Esenciales",
    packing_optional: "Opcionales",
    packing_placeholder: "¿Qué más llevás?",
    // AI Consultation (Homepage)
    iaTitulo: "Consulta a IA General",
    iaPlaceholder: "Haz tu pregunta sobre el viaje...",
    consultarBtn: "Consultar",
    iaError: "Error al contactar la IA. Intenta de nuevo más tarde.",
    iaProcessing: "Procesando tu consulta...",
    // Currency Converter
    conversorTitulo: "Conversor de moneda",
    convertirBtn: "Convertir",
    montoPlaceholder: "Monto",

    // Section Titles for Detail Page
    section_title_dates_duration: "Fechas y Duración",
    section_title_must_see: "Lugares Imperdibles",
    section_title_activities_recommended: "Actividades Recomendadas",
    section_title_gastronomy_highlight: "Gastronomía Destacada",
    section_title_accommodation_examples: "Alojamiento (Ejemplos)",
    section_title_coordinates: "Coordenadas",
    section_title_events_agenda: "Agenda de Eventos",
    section_title_family_tips: "Consejos para Familias",
    section_title_cultural_tips: "Tips Culturales",
    section_title_budget_table: "Presupuesto Orientativo",
    section_title_city_map: "Mapa de la Ciudad",
    gastronomy_restaurants_subtitle: "Restaurantes recomendados",
    gastronomy_cafes_subtitle: "Confiterías y cafés",
    table_header_restaurant: "Restaurante",
    table_header_cafe: "Confitería",
    table_header_type: "Tipo",
    table_header_gluten_free: "Sin Gluten",
    table_header_sugar_free: "Sin Azúcar",

    // Footer
    footerText: "© 2025 Viaje Familiar Argentina. Todos los derechos reservados.",
    // City Detail Page (generic titles, specific content comes from city_id + key)
    activities: "Actividades Sugeridas", 
    accommodation: "Opciones de Alojamiento",
    budget: "Presupuesto Estimado", 

    // City Titles (used as keys in CITIES array)
    buenosaires_title: "Buenos Aires",
    rosario_title: "Rosario",
    bariloche_title: "Bariloche",
    mendoza_title: "Mendoza",
    malargue_title: "Malargüe",
    jujuy_title: "Jujuy",
    iguazu_title: "Puerto Iguazú",
    corrientes_title: "Corrientes",
    ibera_title: "Esteros del Iberá",

    // MAIN DESCRIPTIONS FOR CITY CARDS - Ensuring all cities have one
    buenosaires_desc_main: "Buenos Aires es la capital de la República Argentina, una ciudad cosmopolita, vibrante y con muchísimas propuestas para disfrutar en familia.",
    rosario_desc_main: "Rosario, la ciudad de la bandera, ofrece una rica historia, parques extensos y una vibrante vida cultural a orillas del río Paraná.",
    bariloche_desc_main: "San Carlos de Bariloche, la capital de los Lagos, es un destino de montaña en la Patagonia argentina, famoso por sus paisajes de bosques, lagos y montañas nevadas.",
    mendoza_desc_main: "Mendoza, la tierra del sol y del buen vino, se encuentra al pie de la Cordillera de los Andes, ofreciendo cultura vitivinícola y aventuras.",
    malargue_desc_main: "Malargüe, en el sur de Mendoza, es conocida por sus paisajes volcánicos, formaciones geológicas únicas y aventuras en la naturaleza.",
    jujuy_desc_main: "La provincia de Jujuy, en el noroeste argentino, es una explosión de colores y cultura andina, famosa por sus montañas multicolores y pueblos ancestrales.",
    iguazu_desc_main: "Puerto Iguazú es la puerta de entrada a las majestuosas Cataratas del Iguazú, una de las Siete Maravillas Naturales del Mundo.",
    corrientes_desc_main: "Corrientes, a orillas del río Paraná, es un centro cultural vibrante, conocido por su carnaval, chamamé y rica historia.",
    ibera_desc_main: "Los Esteros del Iberá son uno de los humedales más importantes del mundo, un paraíso de biodiversidad ideal para el ecoturismo familiar.",

    // BUENOS AIRES (Detailed content)
    buenosaires_dates_duration: "- **Estadía**: 28/09 al 02/10 (5 días) y 29/10 (1 día)\n- **Cómo llegar**: Llegada internacional (EZE/AEP) / Vuelo desde Corrientes para la última noche",
    buenosaires_must_see: "- [Obelisco y Avenida 9 de Julio](https://es.wikipedia.org/wiki/Obelisco_de_Buenos_Aires)\n- [Teatro Colón (visitas guiadas)](https://teatrocolon.org.ar/es)\n- [Caminito y el colorido barrio de La Boca](https://es.wikipedia.org/wiki/Caminito)\n- [Palermo: bosques, Jardín Japonés, museos, cafés y tiendas](https://es.wikipedia.org/wiki/Palermo_(Buenos_Aires))\n- [Planetario Galileo Galilei](https://planetario.buenosaires.gob.ar/)\n- [Puerto Madero y Reserva Ecológica](https://es.wikipedia.org/wiki/Puerto_Madero)\n- [Museo Nacional de Bellas Artes](https://www.bellasartes.gob.ar/)\n- [Recoleta: Cementerio histórico, feria de artesanos y cafés](https://turismo.buenosaires.gob.ar/es/otros-lugares/cementerio-de-la-recoleta)\n- [Plaza de Mayo y Casa Rosada](https://es.wikipedia.org/wiki/Plaza_de_Mayo)",
    buenosaires_activities_recommended: "- Tango y espectáculos típicos (San Telmo o La Boca)\n- Tours guiados a pie o en bicicleta\n- Picnic en los bosques de Palermo\n- Visita a museos y ferias artesanales\n- Paseo en barco por el Río de la Plata (Puerto Madero)",
    buenosaires_gastronomy_highlight: "La ciudad ofrece desde parrillas tradicionales hasta restaurantes gourmet, opciones vegetarianas/veganas y cafeterías históricas.\n\n### Restaurantes recomendados\n| Restaurante | Tipo | Sin Gluten | Sin Azúcar |\n|---|---|---|---|\n| [Don Julio](https://www.parrilladonjulio.com/) | Parrilla clásica | ✔️ | ❌ |\n| [Sacro](https://www.sacro.restaurant/) | Vegano gourmet | ✔️ | ✔️ |\n| [Bio Restaurante](https://www.biorestaurante.com/) | Orgánico | ✔️ | ✔️ |\n| [Paru Inkas Sushi & Grill](https://parurestaurant.com/) | Fusión Peruano-Japonesa | ✔️ | ❌ |\n\n### Confiterías y cafés\n| Confitería | Tipo | Sin Gluten | Sin Azúcar |\n|---|---|---|---|\n| [Café Tortoni](https://www.cafetortoni.com.ar/) | Histórico / Clásico | ❌ | ❌ |\n| [Havanna](https://www.havanna.com.ar/) | Alfajores / Café | ✔️ | ✔️ |\n| [Confitería Ideal](https://www.confiteriaideal.com/) | Repostería Tradicional | ❌ | ❌ |",
    buenosaires_accommodation_examples: "- Alvear Palace\n- Madero\n- Ibis\n- Airbnb Palermo",
    buenosaires_coordinates: "- 34° 36' S 58° 22' 48\" W",
    buenosaires_events_agenda_text: "- **29/09/2025**: Festival de Tango al aire libre en Plaza Dorrego\n- **01/10/2025**: Noche de los Museos (entrada libre en museos seleccionados)",
    buenosaires_events_agenda_link_text: "Descargar agenda completa en formato iCal (.zip)",
    buenosaires_events_agenda_link_url: "../docs/agenda/ariflier1970@gmail.com.ical.zip",
    buenosaires_family_tips: "- Las zonas turísticas son seguras y están bien conectadas por transporte público (tarjeta SUBE).\n- Hay muchas actividades gratuitas y para todas las edades.\n- Los fines de semana suelen haber espectáculos callejeros y ferias.\n- Se recomienda reservar alojamiento con anticipación en Palermo o Recoleta.",
    buenosaires_budget_table: "| Concepto                      | Precio estimado (USD) |\n|-------------------------------|:--------------------:|\n| Alojamiento (noche, familia)  | 50–120               |\n| Comida (por día, familia)     | 30–70                |\n| Transporte público (por día)  | 3–5                  |\n| Actividades y tours (por día) | 20–50                |\n| Entradas museos/atracciones   | 0–15                 |",
    buenosaires_cultural_tips: "- El idioma oficial es español (rioplatense, muy amigable).\n- Es común saludar con un beso en la mejilla.\n- Los horarios de comida suelen ser más tarde que en otros países (cena desde las 21:00).\n- El mate es la infusión nacional.",
    buenosaires_map_link_text: "Ver mapa más grande de Buenos Aires",
    buenosaires_map_link_url: "https://www.openstreetmap.org/#map=12/-34.60/-58.45",
    buenosaires_poi_obelisco_name: "Obelisco",
    buenosaires_poi_obelisco_desc: "Monumento histórico en la Av. 9 de Julio.",
    buenosaires_poi_teatrocolon_name: "Teatro Colón",
    buenosaires_poi_teatrocolon_desc: "Uno de los teatros de ópera más importantes del mundo.",
    buenosaires_poi_caminito_name: "Caminito",
    buenosaires_poi_caminito_desc: "Calle museo colorida en La Boca.",
    buenosaires_poi_palermo_name: "Bosques de Palermo",
    buenosaires_poi_palermo_desc: "Gran parque urbano con lagos y rosedal.",
    buenosaires_poi_planetario_name: "Planetario Galileo Galilei",
    buenosaires_poi_planetario_desc: "Centro de divulgación astronómica.",
    buenosaires_poi_puertomadero_name: "Puerto Madero",
    buenosaires_poi_puertomadero_desc: "Moderno barrio portuario con restaurantes y el Puente de la Mujer.",
    buenosaires_poi_bellasartes_name: "Museo Nacional de Bellas Artes",
    buenosaires_poi_bellasartes_desc: "Principal museo de arte de Argentina.",
    buenosaires_poi_recoleta_name: "Cementerio de la Recoleta",
    buenosaires_poi_recoleta_desc: "Cementerio histórico con mausoleos imponentes.",
    buenosaires_poi_plazamayo_name: "Plaza de Mayo",
    buenosaires_poi_plazamayo_desc: "Centro histórico y político de la ciudad, frente a la Casa Rosada.",

    // AI Section Titles, Descriptions, Prompts, Placeholders (ES)
    ai_menu_title: "Generador de Menú Saludable",
    ai_menu_description: "Obtén sugerencias de menú para un día completo (desayuno, almuerzo, cena) adaptadas para dietas bajas en carbohidratos, aptas para diabéticos y, si es posible, sin gluten, inspiradas en la gastronomía de {cityName}.",
    ai_menu_button: "Generar Menú",
    ai_menu_input_placeholder: "Añade detalles (ej: 'vegetariano', 'sin pescado')...",
    buenosaires_ai_prompt_menu: "Eres un experto en gastronomía argentina y nutrición. Genera un plan de menú de un día (desayuno, almuerzo, cena) para una familia que visita Buenos Aires, Argentina. Las opciones deben ser aptas para diabéticos, bajas en carbohidratos y, si es posible, sin gluten. Incorpora platos típicos argentinos adaptados. Considera estas preferencias adicionales del usuario: ", // User input will be appended here
    rosario_ai_prompt_menu: "Eres un experto en gastronomía argentina y nutrición. Genera un plan de menú de un día (desayuno, almuerzo, cena) para una familia que visita Rosario, Argentina. Las opciones deben ser aptas para diabéticos, bajas en carbohidratos, sin gluten si es posible, e inspiradas en la cocina local (ej. pescado de río). Considera estas preferencias adicionales del usuario: ",
    bariloche_ai_prompt_menu: "Eres un experto en gastronomía patagónica y nutrición. Genera un plan de menú de un día (desayuno, almuerzo, cena) para una familia que visita Bariloche, Argentina. Las opciones deben ser aptas para diabéticos, bajas en carbohidratos y, si es posible, sin gluten. Incluye ejemplos de platos locales como trucha o cordero adaptados. Considera estas preferencias adicionales del usuario: ",
    mendoza_ai_prompt_menu: "Eres un experto en gastronomía cuyana y nutrición. Genera un plan de menú de un día (desayuno, almuerzo, cena) para una familia que visita Mendoza, Argentina. Las opciones deben ser aptas para diabéticos, bajas en carbohidratos y, si es posible, sin gluten, destacando ingredientes locales y maridajes con vino (para adultos, claro). Considera estas preferencias adicionales del usuario: ",
    malargue_ai_prompt_menu: "Eres un experto en gastronomía de Malargüe y nutrición. Genera un plan de menú de un día (desayuno, almuerzo, cena) para una familia que visita Malargüe, Argentina. Las opciones deben ser aptas para diabéticos, bajas en carbohidratos y, si es posible, sin gluten. Incluye platos como chivito adaptado. Considera estas preferencias adicionales del usuario: ",
    jujuy_ai_prompt_menu: "Eres un experto en gastronomía andina y nutrición. Genera un plan de menú de un día (desayuno, almuerzo, cena) para una familia que visita Jujuy, Argentina. Las opciones deben ser aptas para diabéticos, bajas en carbohidratos y, si es posible, sin gluten, utilizando ingredientes como quinoa, llama (adaptada) o maíz. Considera estas preferencias adicionales del usuario: ",
    iguazu_ai_prompt_menu: "Eres un experto en gastronomía misionera y nutrición. Genera un plan de menú de un día (desayuno, almuerzo, cena) para una familia que visita Puerto Iguazú, Argentina. Las opciones deben ser aptas para diabéticos, bajas en carbohidratos y, si es posible, sin gluten, incluyendo pescados de río o frutas tropicales. Considera estas preferencias adicionales del usuario: ",
    corrientes_ai_prompt_menu: "Eres un experto en gastronomía litoraleña y nutrición. Genera un plan de menú de un día (desayuno, almuerzo, cena) para una familia que visita Corrientes, Argentina. Las opciones deben ser aptas para diabéticos, bajas en carbohidratos y, si es posible, sin gluten, con pescados de río como dorado o surubí. Considera estas preferencias adicionales del usuario: ",
    ibera_ai_prompt_menu: "Eres un experto en gastronomía regional de los Esteros del Iberá y nutrición. Genera un plan de menú de un día (desayuno, almuerzo, cena) para una familia que visita Iberá, Argentina. Las opciones deben ser aptas para diabéticos, bajas en carbohidratos y, si es posible, sin gluten, basadas en cocina casera y productos locales. Considera estas preferencias adicionales del usuario: ",
    generic_ai_prompt_menu: "Eres un experto en gastronomía argentina y nutrición. Genera un plan de menú de un día (desayuno, almuerzo, cena) para una familia que visita {cityName}, Argentina. Las opciones deben ser aptas para diabéticos, bajas en carbohidratos y, si es posible, sin gluten. Incorpora platos típicos locales adaptados. Considera estas preferencias adicionales del usuario: ",
    
    ai_accommodation_title: "Sugerencias de Alojamiento con IA",
    ai_accommodation_description: "Obtén recomendaciones de alojamiento en {cityName}, considerando opciones familiares, seguras y bien ubicadas.",
    ai_accommodation_button: "Generar Sugerencias",
    ai_accommodation_input_placeholder: "Detalla preferencias (ej: 'con piscina', 'cerca del centro')...",
    buenosaires_ai_prompt_accommodation: "Eres un asistente de viajes experto en Buenos Aires. Genera 3-5 sugerencias de alojamiento en Buenos Aires, Argentina, ideales para una familia con 2 hijos. Considera opciones seguras, bien ubicadas y con servicios adecuados para familias. Incluye diferentes tipos (hoteles, apartamentos, Airbnb). Ten en cuenta esta información adicional del usuario: ",
    generic_ai_prompt_accommodation: "Eres un asistente de viajes experto. Genera 3-5 sugerencias de alojamiento en {cityName}, Argentina, ideales para una familia con 2 hijos. Considera opciones seguras, bien ubicadas y con servicios adecuados para familias. Incluye diferentes tipos (hoteles, apartamentos, Airbnb). Ten en cuenta esta información adicional del usuario: ",
    
    ai_family_tips_title: "Consejos Adicionales para Familias con IA",
    ai_family_tips_description: "Recibe consejos personalizados para disfrutar {cityName} en familia, incluyendo actividades, seguridad y logística.",
    ai_family_tips_button: "Generar Consejos",
    ai_family_tips_input_placeholder: "Indica edades de los niños o intereses específicos...",
    buenosaires_ai_prompt_family_tips: "Eres un guía turístico experto en Buenos Aires para familias. Proporciona 5 consejos prácticos y personalizados para una familia con niños que visita Buenos Aires. Cubre actividades para niños, seguridad, transporte familiar y cómo maximizar la estadía. Considera esta información adicional del usuario: ",
    generic_ai_prompt_family_tips: "Eres un guía turístico experto para familias. Proporciona 5 consejos prácticos y personalizados para una familia con niños que visita {cityName}, Argentina. Cubre actividades para niños, seguridad, transporte familiar y cómo maximizar la estadía. Considera esta información adicional del usuario: ",
    
    ai_budget_analysis_title: "Análisis de Presupuesto con IA",
    ai_budget_analysis_description: "Obtén un análisis y desglose del presupuesto orientativo para tu estadía en {cityName}, con posibles optimizaciones.",
    ai_budget_analysis_button: "Analizar Presupuesto",
    ai_budget_analysis_input_placeholder: "Menciona si tienes un presupuesto total o prioridades...",
    buenosaires_ai_prompt_budget_analysis: "Eres un asesor financiero de viajes. Analiza el presupuesto orientativo para una familia en Buenos Aires (USD): Alojamiento (noche): 50-120, Comida (día): 30-70, Transporte (día): 3-5, Actividades (día): 20-50, Entradas: 0-15. Proporciona un desglose estimado por día y categoría, y sugiere 2-3 formas de optimizar este presupuesto sin sacrificar la experiencia. Considera estas notas del usuario: ",
    generic_ai_prompt_budget_analysis: "Eres un asesor financiero de viajes. Analiza el presupuesto orientativo para una familia en {cityName}, Argentina. Consulta el presupuesto detallado de la ciudad y proporciona un desglose estimado por día y categoría, y sugiere 2-3 formas de optimizar este presupuesto sin sacrificar la experiencia. Considera estas notas del usuario: ",
    ai_translate_button_text: "Traducir respuesta a {lang}",
    
    // ROSARIO (Detailed content)
    rosario_dates_duration: "- **Estadía**: 02/10 al 05/10 (4 días)\n- **Cómo llegar**: Vuelo desde Buenos Aires / Bus de larga distancia",
    rosario_must_see: "- [Monumento Nacional a la Bandera](https://www.monumentoalabandera.gob.ar/)\n- [Parque de la Independencia](https://www.rosario.gob.ar/web/ciudad/parques-y-plazas/parque-de-la-independencia)\n- Costanera del Río Paraná\n- [Isla de los Inventos](https://www.rosario.gob.ar/web/ciudad/cultura/infancia-y-juventud/isla-de-los-inventos)\n- Museo de Ciencias Naturales \"Dr. Ángel Gallardo\"\n- Boulevard Oroño",
    rosario_activities_recommended: "- Visitar el Monumento a la Bandera y subir a su mirador.\n- Paseos en barco por el Río Paraná y sus islas.\n- Alquilar bicicletas para recorrer la Costanera y los parques.\n- Actividades recreativas en la Isla de los Inventos o la Granja de la Infancia.\n- Disfrutar de un picnic en los grandes parques de la ciudad.\n- Visitas a museos adaptados para niños.",
    rosario_gastronomy_highlight: "Rosario es conocida por su gastronomía variada, con opciones que van desde las tradicionales parrillas y la carne a la estaca, hasta platos de pescado de río fresco y una creciente oferta de cocina moderna y saludable.\n\n### Restaurantes recomendados\n| Restaurante | Tipo | Sin Gluten | Sin Azúcar |\n|---|---|---|---|\n| Don Ferro | Parrilla con vista al río | ✔️ | ❌ |\n| Rock & Feller's | Americano / Familiar | ✔️ | ❌ |\n| Chinchibira | Cocina de autor / Fusión | ✔️ | ✔️ |\n| El Viejo Balcón | Pescados de río | ✔️ | ❌ |\n\n### Confiterías y cafés\n| Confitería | Tipo | Sin Gluten | Sin Azúcar |\n|---|---|---|---|\n| El Cairo | Histórico / Literario | ❌ | ❌ |\n| Gofre | Waffles y pastelería | ✔️ | ✔️ |\n| Sunderland | Tradicional / Clásico | ❌ | ❌ |",
    rosario_accommodation_examples: "- Ros Tower Hotel\n- Esplendor by Wyndham Savoy Rosario\n- Apartamentos en el centro o cerca de la Costanera\n- Airbnb en barrios residenciales como Fisherton o Pichincha",
    rosario_coordinates: "- 32° 57' S 60° 38' O",
    rosario_events_agenda_text: "- **(Consultar agenda local)**: Rosario tiene una activa vida cultural con festivales, ferias y espectáculos.\n- **(Consultar agenda local)**: Eventos deportivos o musicales en el Parque de la Independencia.",
    rosario_events_agenda_link_text: "Descargar agenda completa en formato iCal (.zip)",
    rosario_events_agenda_link_url: "../docs/agenda/ariflier1970@gmail.com.ical.zip",
    rosario_family_tips: "- Aprovechen los amplios espacios verdes y la costanera para actividades al aire libre.\n- El transporte público es eficiente (tarjeta MOVI).\n- La ciudad es segura en las zonas turísticas y céntricas.\n- Consideren un paseo en barco para ver la ciudad desde el río.\n- En la Costanera hay muchas opciones de restaurantes con juegos para niños.",
    rosario_budget_table: "| Concepto                      | Precio estimado (USD) |\n|-------------------------------|:--------------------:|\n| Alojamiento (noche, familia)  | 50–120               |\n| Comida (por día, familia)     | 30–70                |\n| Transporte público (por día)  | 3–5                  |\n| Actividades y tours (por día) | 20–50                |\n| Entradas museos/atracciones   | 0–15                 |",
    rosario_cultural_tips: "- El \"Che\" Guevara nació cerca de Rosario.\n- Rosario es cuna de grandes futbolistas (Messi, Di María) y artistas.\n- La siesta es común en las horas centrales del día, afectando horarios comerciales.\n- Los rosarinos son conocidos por su hospitalidad.",
    rosario_map_link_text: "Ver mapa más grande de Rosario",
    rosario_map_link_url: "https://www.openstreetmap.org/#map=12/-32.944/-60.655",
    
    // BARILOCHE (Detailed content)
    bariloche_dates_duration: "- **Estadía**: 05/10 al 09/10 (5 días)\n- **Cómo llegar**: Vuelo desde Rosario / Bus de larga distancia",
    bariloche_must_see: "- **Centro Cívico**: Corazón de la ciudad con arquitectura alpina.\n- **Lago Nahuel Huapi**: Para paseos en barco y actividades acuáticas.\n- **Circuito Chico**: Recorrido panorámico con vistas espectaculares.\n- **Cerro Catedral**: Centro de esquí en invierno, trekking y vistas en verano.\n- **Cerro Campanario**: Votado entre las mejores vistas del mundo, con aerosilla.\n- **Bosque de Arrayanes**: Un bosque único al que se llega en barco.\n- **Puerto Blest y Cascada de los Cántaros**: Excursión en barco por el lago.",
    bariloche_activities_recommended: "- Degustación de chocolates y cervezas artesanales.\n- Navegación por el Lago Nahuel Huapi.\n- Trekking y senderismo (adaptados para familias).\n- Deportes de nieve en invierno (esquí, snowboard, culipatin).\n- Cabalgatas o canopy en los alrededores.\n- Visita a la Colonia Suiza para probar el curanto.\n- Recorrer el Circuito Chico en auto o bicicleta.",
    bariloche_gastronomy_highlight: "La gastronomía de Bariloche es famosa por sus chocolates, carnes de caza (ciervo, jabalí), truchas y ahumados. También hay opciones saludables y para dietas especiales.\n\n### Restaurantes recomendados\n| Restaurante             | Tipo                       | Sin Gluten | Sin Azúcar |\n|-------------------------|:--------------------------:|:----------:|:----------:|\n| El Boliche de Alberto   | Parrilla / Carnes          | ✔️        | ❌         |\n| La Fonda del Tío        | Comida patagónica casera   | ✔️        | ✔️         |\n| Butterfly               | Alta cocina / Trucha       | ✔️        | ✔️         |\n| Rapa Nui                | Chocolatería / Cafetería   | ✔️        | ✔️         |\n\n### Confiterías y cafés\n| Confitería              | Tipo                       | Sin Gluten | Sin Azúcar |\n|-------------------------|:--------------------------:|:----------:|:----------:|\n| Mamuschka               | Chocolatería / Pastelería  | ✔️        | ✔️         |\n| Abuela Goye             | Chocolatería / Cafetería   | ✔️        | ✔️         |\n| El Almacén de Flores    | Café de especialidad       | ✔️        | ✔️         |",
    bariloche_accommodation_examples: "- Hotel Llao Llao (lujo)\n- Hotel Panamericano Bariloche\n- Cabañas y complejos turísticos con actividades para niños\n- Airbnb en el centro o cerca del Circuito Chico",
    bariloche_coordinates: "- 41° 08' S 71° 18' O",
    bariloche_events_agenda_text: "- **(Consultar agenda local)**: Eventos de invierno (Fiesta Nacional de la Nieve).\n- **(Consultar agenda local)**: Festivales de música o gastronomía en otras estaciones.",
    bariloche_events_agenda_link_text: "Descargar agenda completa en formato iCal (.zip)",
    bariloche_events_agenda_link_url: "../docs/agenda/ariflier1970@gmail.com.ical.zip",
    bariloche_family_tips: "- Vístanse en capas (la temperatura puede variar mucho).\n- Reserven excursiones y alojamiento con anticipación, especialmente en temporada alta.\n- Hay muchas actividades para niños: parques de nieve, senderos fáciles, paseos en barco.\n- La zona es muy segura para explorar en familia.\n- Prueben los chocolates locales, pero con moderación si hay restricciones.",
    bariloche_budget_table: "| Concepto                      | Precio estimado (USD) |\n|-------------------------------|:--------------------:|\n| Alojamiento (noche, familia)  | 70–180               |\n| Comida (por día, familia)     | 40–90                |\n| Transporte local (por día)    | 5–15                 |\n| Actividades y tours (por día) | 30–80                |\n| Entradas museos/atracciones   | 0–20                 |",
    bariloche_cultural_tips: "- Bariloche tiene una fuerte influencia de inmigrantes suizos y alemanes, visible en su arquitectura y gastronomía.\n- Es un destino popular para viajes de egresados, por lo que puede haber muchos jóvenes en ciertas épocas.\n- La cultura de montaña es muy arraigada: respeto por la naturaleza, deportes al aire libre.",
    bariloche_map_link_text: "Ver mapa más grande de Bariloche",
    bariloche_map_link_url: "https://www.openstreetmap.org/#map=12/-41.133/-71.328",

    mendoza_dates_duration: "- **Estadía**: 09/10 al 13/10 (5 días)\n- **Cómo llegar**: Vuelo desde Bariloche / Bus de larga distancia",
    mendoza_must_see: "- **Parque General San Martín**: Uno de los parques urbanos más grandes de Sudamérica, con lago y rosedal.\n- **Cerro de la Gloria**: Mirador con vistas panorámicas de la ciudad y los Andes.\n- **Bodegas de Luján de Cuyo y Maipú**: Para tours de vino y, algunas, con actividades para niños.\n- **Plazas fundacionales**: Plaza Independencia, Plaza España, Plaza Italia, etc.\n- **Cañón del Atuel (Malargüe)**: Para una excursión de día completo (ver sección de Malargüe si se pernocta allí).\n- **Puente del Inca**: Curiosidad natural en el camino a la alta montaña.",
    mendoza_activities_recommended: "- Recorrido por bodegas con degustación (algunas ofrecen jugos y actividades para niños).\n- Visita a la alta montaña, incluyendo el Parque Provincial Aconcagua (mirador).\n- Rafting en el Río Mendoza (para edades adecuadas).\n- Paseo en bicicleta por los viñedos.\n- Visita al Acuario de Mendoza.\n- Caminatas y picnics en el Parque San Martín.\n- Exploración de la ciudad a pie, visitando sus plazas y calles arboladas.",
    mendoza_gastronomy_highlight: "Mendoza es un paraíso gastronómico, famoso por sus carnes a la parrilla, olivas y, por supuesto, la vasta oferta de vinos. Muchos restaurantes en bodegas ofrecen opciones de alta cocina.\n\n### Restaurantes recomendados\n| Restaurante             | Tipo                       | Sin Gluten | Sin Azúcar |\n|-------------------------|:--------------------------:|:----------:|:----------:|\n| Siete Cocinas           | Cocina regional / de autor | ✔️        | ✔️         |\n| Azafrán                 | Alta cocina con maridaje   | ✔️        | ✔️         |\n| La Marchigiana          | Cocina italiana clásica    | ✔️        | ❌         |\n| Bodega Zuccardi (Piedra Infinita) | Experiencia gourmet en bodega | ✔️        | ✔️         |\n\n### Confiterías y cafés\n| Confitería              | Tipo                       | Sin Gluten | Sin Azúcar |\n|-------------------------|:--------------------------:|:----------:|:----------:|\n| Mamma Mia               | Pastelería / Cafetería     | ✔️        | ✔️         |\n| Havanna (varias sucursales) | Alfajores / Café          | ✔️        | ✔️         |\n| The Bazaar Bar          | Café de especialidad       | ✔️        | ✔️         |",
    mendoza_accommodation_examples: "- Park Hyatt Mendoza\n- Diplomatic Hotel Mendoza\n- Cabañas o lodges en Chacras de Coria o Luján de Cuyo (zona de bodegas)\n- Airbnb en el centro o en barrios residenciales tranquilos.",
    mendoza_coordinates: "- 32° 53' S 68° 50' O",
    mendoza_events_agenda_text: "- **(Consultar agenda local)**: Vendimia (Febrero/Marzo).\n- **(Consultar agenda local)**: Ferias de artesanos y mercados de productos locales.",
    mendoza_events_agenda_link_text: "Descargar agenda completa en formato iCal (.zip)",
    mendoza_events_agenda_link_url: "../docs/agenda/ariflier1970@gmail.com.ical.zip",
    mendoza_family_tips: "- Consideren alquilar un auto para explorar las bodegas y la alta montaña a su propio ritmo.\n- Siempre lleven agua y protector solar, el clima es seco y soleado.\n- Algunas bodegas tienen áreas de juego o actividades para niños mientras los adultos degustan.\n- La ciudad es muy arbolada y con canales de riego, lo que la hace agradable para caminar.\n- En la alta montaña, las temperaturas pueden bajar considerablemente, incluso en verano.",
    mendoza_budget_table: "| Concepto                      | Precio estimado (USD) |\n|-------------------------------|:--------------------:|\n| Alojamiento (noche, familia)  | 60–160               |\n| Comida (por día, familia)     | 40–80                |\n| Transporte local (por día)    | 5–20                 |\n| Actividades y tours (por día) | 25–70                |\n| Entradas museos/atracciones   | 0–20                 |",
    mendoza_cultural_tips: "- La cultura del vino es central en Mendoza.\n- La \"siesta\" es una costumbre muy arraigada, con muchos comercios cerrando al mediodía.\n- Los mendocinos son muy orgullosos de su provincia y su producción vitivinícola.\n- La calidez de su gente es notable.",
    mendoza_map_link_text: "Ver mapa más grande de Mendoza",
    mendoza_map_link_url: "https://www.openstreetmap.org/#map=12/-32.889/-68.846",

    malargue_dates_duration: "- **Estadía**: 13/10 al 16/10 (4 días)\n- **Cómo llegar**: Bus desde Mendoza / Auto de alquiler",
    malargue_must_see: "- **Caverna de las Brujas**: Impactante sistema de cuevas con estalactitas y estalagmitas (requiere reserva y tour guiado).\n- **La Payunia**: Reserva Natural de campos de lava y volcanes (excursión de día completo, requiere 4x4 y guía).\n- **Laguna de la Niña Encantada**: Pequeña laguna de aguas cristalinas rodeada de rocas.\n- **Valle de Las Leñas**: Centro de esquí en invierno, con actividades de montaña en verano.\n- **Dino Park (Parque Huellas de Dinosaurios)**: Para los amantes de la paleontología.\n- **Planetario Malargüe**: Ideal para observación astronómica.",
    malargue_activities_recommended: "- Excursiones guiadas a la Caverna de las Brujas.\n- Safari fotográfico en La Payunia (si las edades y el interés lo permiten).\n- Trekking suave o paseos en bicicleta por el Valle de Las Leñas (fuera de temporada de nieve).\n- Visita al Observatorio Pierre Auger (con reserva).\n- Rafting o cabalgatas en los alrededores.\n- Exploración de la Laguna de la Niña Encantada y sus formaciones rocosas.",
    malargue_gastronomy_highlight: "La gastronomía en Malargüe se enfoca en platos patagónicos, carnes a la parrilla, chivito a la llama (plato típico de la zona) y productos regionales. Las opciones para dietas especiales pueden ser más limitadas, por lo que se recomienda preguntar.\n\n### Restaurantes recomendados\n| Restaurante             | Tipo                            | Sin Gluten | Sin Azúcar |\n|-------------------------|:-------------------------------:|:----------:|:----------:|\n| La Posta de Jamón       | Parrilla / Chivito a la llama   | ✔️        | ❌         |\n| El Viejo Retiro         | Comida casera / Regional        | ✔️        | ✔️         |\n| Pizzería La Avenida     | Pizzería tradicional            | ❌         | ❌         |\n\n### Confiterías y cafés\n| Confitería              | Tipo                            | Sin Gluten | Sin Azúcar |\n|-------------------------|:-------------------------------:|:----------:|:----------:|\n| (Opciones limitadas)    | Cafés locales / panaderías      | ❌         | ❌         |\n| Supermercados           | Para abastecerse                | ✔️        | ✔️         |",
    malargue_accommodation_examples: "- Hotel Malargüe\n- Complejo Los Molles (cerca de Las Leñas)\n- Cabañas y hospedajes rurales.\n- Airbnb en el centro de Malargüe.",
    malargue_coordinates: "- 35° 28' S 69° 35' O",
    malargue_events_agenda_text: "- **(Consultar agenda local)**: Fiesta Nacional del Chivo (Enero).\n- **(Consultar agenda local)**: Eventos relacionados con astronomía o geología.",
    malargue_events_agenda_link_text: "Descargar agenda completa en formato iCal (.zip)",
    malargue_events_agenda_link_url: "../docs/agenda/ariflier1970@gmail.com.ical.zip",
    malargue_family_tips: "- Para explorar los atractivos naturales, es casi indispensable contar con un vehículo propio o contratar excursiones organizadas.\n- La Caverna de las Brujas puede ser un poco exigente físicamente para niños muy pequeños o personas con movilidad reducida.\n- Lleven abundante agua y ropa adecuada para cambios bruscos de temperatura, especialmente si visitan áreas de alta montaña o desierto.\n- La señal de celular puede ser limitada fuera de la ciudad.\n- Respeten las indicaciones de los guías en las reservas naturales.",
    malargue_budget_table: "| Concepto                      | Precio estimado (USD) |\n|-------------------------------|:--------------------:|\n| Alojamiento (noche, familia)  | 40–100               |\n| Comida (por día, familia)     | 25–60                |\n| Transporte local (por día)    | 5–15 (excl. alquiler auto) |\n| Actividades y tours (por día) | 20–60 (excl. Payunia) |\n| Entradas museos/atracciones   | 0–15                 |",
    malargue_cultural_tips: "- Malargüe es una región más rural y con una fuerte identidad de campo.\n- La vida nocturna es limitada; el foco está en la naturaleza y el descanso.\n- El chivito a la llama es una tradición culinaria muy arraigada y un imperdible local.\n- La amabilidad y la hospitalidad de su gente son características destacadas.",
    malargue_map_link_text: "Ver mapa más grande de Malargüe",
    malargue_map_link_url: "https://www.openstreetmap.org/#map=12/-35.478/-69.585",
    
    jujuy_dates_duration: "- **Estadía**: 16/10 al 20/10 (5 días)\n- **Cómo llegar**: Vuelo desde Mendoza (con escala) / Bus de larga distancia.",
    jujuy_must_see: "- **Quebrada de Humahuaca**: Patrimonio de la Humanidad, con paisajes como la Paleta del Pintor en Maimará y el Cerro de los Siete Colores en Purmamarca.\n- **Purmamarca**: Pueblo pintoresco al pie del Cerro de los Siete Colores.\n- **Tilcara**: Ciudad con la Pucará (fortaleza prehispánica) y museos.\n- **Humahuaca**: Histórica ciudad con su Monumento a la Independencia y la Torre del Cabildo.\n- **Salinas Grandes**: Desierto de sal inmenso (compartido con Salta, accesible desde Purmamarca).\n- **Garganta del Diablo (Tilcara)**: Formación rocosa con cascada.\n- **San Salvador de Jujuy**: La capital, con su casco histórico y la Casa de Gobierno.",
    jujuy_activities_recommended: "- Recorridos por los pueblos de la Quebrada y sus mercados artesanales.\n- Caminatas suaves en Purmamarca o Tilcara.\n- Visita a la Pucará de Tilcara.\n- Excursión a Salinas Grandes (llevar protector solar y gafas de sol).\n- Observación de estrellas en la Quebrada (poca contaminación lumínica).\n- Disfrutar de la música folclórica y las danzas locales.\n- Probar las empanadas jujeñas y tamales.",
    jujuy_gastronomy_highlight: "La gastronomía jujeña es una fusión de sabores andinos y criollos, con platos a base de maíz, papa, llama y cabra. Las opciones sin gluten y bajas en carbohidratos pueden requerir adaptación en platos tradicionales, pero siempre hay alternativas con carnes y verduras.\n\n### Restaurantes recomendados\n| Restaurante             | Tipo                       | Sin Gluten | Sin Azúcar |\n|-------------------------|:--------------------------:|:----------:|:----------:|\n| El Patio de la Empanada | Comida regional / Empanadas | ✔️        | ❌         |\n| La Cocina del Colorado  | Cocina andina tradicional  | ✔️        | ✔️         |\n| Killa                  | Cocina de autor / Regional | ✔️        | ✔️         |\n\n### Confiterías y cafés\n| Confitería              | Tipo                       | Sin Gluten | Sin Azúcar |\n|-------------------------|:--------------------------:|:----------:|:----------:|\n| (Opciones locales)      | Panaderías / Cafés         | ❌         | ❌         |\n| Mercados artesanales    | Productos locales          | ✔️        | ✔️         |",
    jujuy_accommodation_examples: "- Hoteles boutique en Purmamarca o Tilcara.\n- Estancias y hosterías rurales en la Quebrada.\n- Hoteles en San Salvador de Jujuy para mayor oferta.\n- Airbnb en casas de adobe tradicionales.",
    jujuy_coordinates: "- San Salvador de Jujuy: 24° 11' S 65° 18' O\n- Purmamarca: 23° 44' S 65° 30' O",
    jujuy_events_agenda_text: "- **(Consultar agenda local)**: Carnaval (Febrero/Marzo, muy concurrido).\n- **(Consultar agenda local)**: Festivales folclóricos y religiosos.",
    jujuy_events_agenda_link_text: "Descargar agenda completa en formato iCal (.zip)",
    jujuy_events_agenda_link_url: "../docs/agenda/ariflier1970@gmail.com.ical.zip",
    jujuy_family_tips: "- La altura puede afectar a algunos viajeros (San Salvador está a ~1200m, Purmamarca a ~2300m, Humahuaca a ~3000m, Salinas Grandes a ~3500m). Hidrátense bien y caminen despacio los primeros días.\n- Lleven protector solar, sombrero y gafas de sol, la radiación solar es alta.\n- Vístanse en capas, las temperaturas varían mucho entre el día y la noche.\n- El alquiler de auto es recomendable para recorrer la Quebrada con libertad.\n- Siempre tengan cambio y billetes pequeños, especialmente en mercados locales.",
    jujuy_budget_table: "| Concepto                      | Precio estimado (USD) |\n|-------------------------------|:--------------------:|\n| Alojamiento (noche, familia)  | 40–110               |\n| Comida (por día, familia)     | 25–65                |\n| Transporte local (por día)    | 5–20                 |\n| Actividades y tours (por día) | 15–50                |\n| Entradas museos/atracciones   | 0–10                 |",
    jujuy_cultural_tips: "- La cultura andina es muy presente: respeto a la Pachamama (Madre Tierra), rituales, música (quenas, charangos).\n- El idioma español con influencia quechua es común.\n- La artesanía local es muy rica: textiles de llama/alpaca, cerámicas, trabajos en madera.\n- La amabilidad de la gente es una característica destacada.",
    jujuy_map_link_text: "Ver mapa más grande de Jujuy",
    jujuy_map_link_url: "https://www.openstreetmap.org/#map=10/-23.597/-65.405",
    
    iguazu_dates_duration: "- **Estadía**: 20/10 al 24/10 (5 días)\n- **Cómo llegar**: Vuelo desde Jujuy (con escala en Buenos Aires) / Bus de larga distancia.",
    iguazu_must_see: "- **Parque Nacional Iguazú (lado argentino)**: Con pasarelas sobre las cataratas, la Garganta del Diablo y el Tren Ecológico.\n- **Parque Nacional do Iguaçu (lado brasileño)**: Ofrece una vista panorámica impresionante de las cataratas.\n- **Hito de las Tres Fronteras**: Punto de encuentro de Argentina, Brasil y Paraguay.\n- **Güira Oga (Refugio de Animales Silvestres)**: Centro de rescate y rehabilitación de fauna.\n- **Jardín de los Picaflores**: Un lugar mágico para observar colibríes de cerca.\n- **Aripuca**: Un emprendimiento turístico cultural que revaloriza el bosque misionero.\n- **Museo de Cera**: Atracción familiar.",
    iguazu_activities_recommended: "- Caminatas por las pasarelas del lado argentino y brasileño de las cataratas.\n- Gran Aventura (paseo en gomón bajo las cataratas) – apto para edades adecuadas y sin restricciones de salud.\n- Navegación al atardecer por el río Iguazú.\n- Visita al Hito de las Tres Fronteras al atardecer.\n- Recorrer el Duty Free Shop (lado argentino).\n- Visitar el Parque das Aves (lado brasileño, si se cruza la frontera).\n- Explorar el Parque Nacional por sus diversos senderos.",
    iguazu_gastronomy_highlight: "La gastronomía en Puerto Iguazú ofrece una mezcla de cocina regional (pescados de río, mandioca), con opciones de comida internacional y parrillas. Es importante buscar lugares que ofrezcan variedad y preguntar por opciones para dietas especiales.\n\n### Restaurantes recomendados\n| Restaurante             | Tipo                       | Sin Gluten | Sin Azúcar |\n|-------------------------|:--------------------------:|:----------:|:----------:|\n| La Vaca Enamorada       | Parrilla / Carnes          | ✔️        | ❌         |\n| Aqva Restaurant         | Cocina de autor / Fusión   | ✔️        | ✔️         |\n| Lo de Juan              | Pescados de río / Regional | ✔️        | ❌         |\n| El Quincho del Tío Querido | Parrilla / Show folclórico | ✔️        | ❌         |\n\n### Confiterías y cafés\n| Confitería              | Tipo                       | Sin Gluten | Sin Azúcar |\n|-------------------------|:--------------------------:|:----------:|:----------:|\n| Café Central            | Cafetería / Panadería      | ❌         | ❌         |\n| Heladería Cremolatti    | Helados                    | ✔️        | ✔️         |",
    iguazu_accommodation_examples: "- Gran Meliá Iguazú (dentro del Parque Nacional)\n- Amerian Portal del Iguazú\n- Hoteles y posadas más pequeños en el centro de Puerto Iguazú\n- Airbnb o cabañas en zonas más tranquilas.",
    iguazu_coordinates: "- Puerto Iguazú: 25° 36' S 54° 34' O\n- Cataratas del Iguazú: 25° 40' S 54° 26' O",
    iguazu_events_agenda_text: "- **(Consultar agenda local)**: Eventos culturales o festivales locales.\n- **(Consultar agenda local)**: La principal atracción son las cataratas y la naturaleza.",
    iguazu_events_agenda_link_text: "Descargar agenda completa en formato iCal (.zip)",
    iguazu_events_agenda_link_url: "../docs/agenda/ariflier1970@gmail.com.ical.zip",
    iguazu_family_tips: "- Lleven repelente de insectos (fundamental), protector solar, sombrero y ropa liviana.\n- Usen calzado cómodo y antideslizante para las pasarelas.\n- En la Gran Aventura, se mojarán por completo; lleven ropa de recambio.\n- Si planean cruzar a Brasil, verifiquen los requisitos de visa y pasaporte para todos los integrantes de la familia.\n- Los monos y coatíes son comunes en el parque, no los alimenten ni los toquen.\n- El agua embotellada es recomendable.",
    iguazu_budget_table: "| Concepto                      | Precio estimado (USD) |\n|-------------------------------|:--------------------:|\n| Alojamiento (noche, familia)  | 60–150               |\n| Comida (por día, familia)     | 30–75                |\n| Transporte local (por día)    | 5–20                 |\n| Actividades y tours (por día) | 30–80                |\n| Entradas museos/atracciones   | 25–40 (solo cataratas) |",
    iguazu_cultural_tips: "- La cultura de la región está muy influenciada por las tres fronteras (Argentina, Brasil, Paraguay).\n- El guaraní es un idioma cooficial en algunas zonas, aunque el español es dominante.\n- La mandioca es un alimento básico en la dieta local.\n- La calidez del clima se refleja en el ritmo de vida.",
    iguazu_map_link_text: "Ver mapa más grande de Puerto Iguazú",
    iguazu_map_link_url: "https://www.openstreetmap.org/#map=13/-25.594/-54.467",

    corrientes_dates_duration: "- **Estadía**: 24/10 al 27/10 (4 días) y 29/10 (1 día)\n- **Nota**: El README.md indica regreso a Buenos Aires, el itinerario original de Buenos Aires menciona \"Vuelo desde Corrientes para la última noche\". Adaptado para incluir esa última noche de tránsito.\n- **Cómo llegar**: Vuelo desde Iguazú / Bus de larga distancia.",
    corrientes_must_see: "- **Costanera General San Martín**: Para paseos, atardeceres sobre el río y recreación.\n- **Puente General Belgrano**: Emblemático puente que conecta Corrientes con Resistencia.\n- **Museo Provincial de Bellas Artes \"Dr. Juan Ramón Vidal\"**: Con obras de artistas correntinos.\n- **Teatro Oficial Juan de Vera**: Joya arquitectónica con una importante agenda cultural.\n- **Manzana Franciscana**: Complejo histórico-religioso.\n- **Carnaval de Corrientes**: Si la visita coincide con la temporada (enero/febrero).\n- **Parque Mitre**: Uno de los pulmones verdes de la ciudad.",
    corrientes_activities_recommended: "- Paseos y deportes en la Costanera.\n- Visita al casco histórico y sus iglesias.\n- Disfrutar de un espectáculo de chamamé (música típica).\n- Explorar los mercados artesanales para comprar productos de cuero o cerámica.\n- Pesca deportiva en el río Paraná (con guías habilitados).\n- Visitar el Museo del Carnaval (en temporada baja).\n- Excursión de día completo a los Esteros del Iberá desde Corrientes (aunque pernoctar allí es lo ideal).",
    corrientes_gastronomy_highlight: "La gastronomía correntina está fuertemente influenciada por el río, con platos a base de pescado (dorado, surubí, pacú), y la tradición guaraní (mandioca, chipá). Hay opciones para todos los gustos, incluyendo parrillas y cocina internacional.\n\n### Restaurantes recomendados\n| Restaurante             | Tipo                       | Sin Gluten | Sin Azúcar |\n|-------------------------|:--------------------------:|:----------:|:----------:|\n| La Parrilla del Tío     | Parrilla / Carnes          | ✔️        | ❌         |\n| Pizzería La Previa      | Pizzería                   | ❌         | ❌         |\n| El Solar del Paraná     | Pescados de río / Regional | ✔️        | ❌         |\n| La Rosita               | Cocina casera              | ✔️        | ✔️         |\n\n### Confiterías y cafés\n| Confitería              | Tipo                       | Sin Gluten | Sin Azúcar |\n|-------------------------|:--------------------------:|:----------:|:----------:|\n| La Biela (local)        | Cafetería / Repostería     | ❌         | ❌         |\n| Café Martínez           | Cafetería (cadena)         | ✔️        | ✔️         |\n| Panaderías locales      | Chipá, productos regionales | ✔️        | ✔️         |",
    corrientes_accommodation_examples: "- Hotel de Turismo Corrientes\n- Hostal del Río\n- Apartamentos en el centro o cerca de la Costanera\n- Airbnb en barrios residenciales.",
    corrientes_coordinates: "- 27° 28' S 58° 49' O",
    corrientes_events_agenda_text: "- **(Consultar agenda local)**: Festival Nacional del Chamamé (Enero).\n- **(Consultar agenda local)**: Carnavales correntinos (Enero/Febrero).",
    corrientes_events_agenda_link_text: "Descargar agenda completa en formato iCal (.zip)",
    corrientes_events_agenda_link_url: "../docs/agenda/ariflier1970@gmail.com.ical.zip",
    corrientes_family_tips: "- La ciudad es cálida y húmeda; lleven ropa ligera, sombrero y protector solar.\n- Es fundamental llevar repelente de insectos, especialmente si planean estar cerca del río.\n- Disfruten de la Costanera al atardecer, es un paseo muy popular.\n- Los correntinos son muy amables y hospitalarios.\n- Consideren un viaje en lancha para ver la ciudad desde el río.",
    corrientes_budget_table: "| Concepto                      | Precio estimado (USD) |\n|-------------------------------|:--------------------:|\n| Alojamiento (noche, familia)  | 40–100               |\n| Comida (por día, familia)     | 25–60                |\n| Transporte local (por día)    | 3–10                 |\n| Actividades y tours (por día) | 10–40                |\n| Entradas museos/atracciones   | 0–10                 |",
    corrientes_cultural_tips: "- El chamamé es el ritmo musical y danza por excelencia de la provincia.\n- El guaraní es un idioma cooficial y su influencia se siente en el dialecto local.\n- La devoción a la Virgen de Itatí es muy fuerte.\n- El tereré (mate frío) es una bebida muy popular, especialmente en verano.",
    corrientes_map_link_text: "Ver mapa más grande de Corrientes",
    corrientes_map_link_url: "https://www.openstreetmap.org/#map=13/-27.468/-58.835",

    ibera_dates_duration: "- **Estadía**: 27/10 al 29/10 (3 días)\n- **Cómo llegar**: Desde Corrientes o Posadas en bus/transfer/auto a Colonia Carlos Pellegrini.",
    ibera_must_see: "- **Laguna Iberá**: Principal espejo de agua para las excursiones en lancha.\n- **Pasarelas de la Laguna Iberá**: Senderos elevados para observar la fauna.\n- **Centro de Interpretación de los Esteros**: Información sobre el ecosistema y la fauna.\n- **Miradores de aves**: Puntos estratégicos para la observación de aves.\n- **Pueblo de Colonia Carlos Pellegrini**: El punto de acceso turístico, con sus posadas y tranquilidad.\n- **Senderos de interpretación ambiental**: Para caminar y aprender sobre la flora y fauna local.",
    ibera_activities_recommended: "- Safaris en lancha por la Laguna Iberá para avistar yacarés, carpinchos, ciervos de los pantanos y aves.\n- Caminatas guiadas por los senderos para observar la fauna terrestre.\n- Safaris nocturnos (opcional, para ver animales de hábitos nocturnos).\n- Cabalgatas por los alrededores (para edades adecuadas).\n- Paseos en canoa o kayak (en zonas permitidas y con guía).\n- Avistaje de aves.\n- Disfrutar de la tranquilidad y el contacto con la naturaleza.",
    ibera_gastronomy_highlight: "La gastronomía en Iberá se basa en la cocina casera y regional, con ingredientes frescos de la zona. Las posadas suelen ofrecer pensión completa con platos típicos, a menudo adaptándose a necesidades dietéticas específicas si se avisa con antelación.\n\n### Restaurantes recomendados (Generalmente en Posadas)\n| Restaurante             | Tipo                       | Sin Gluten | Sin Azúcar |\n|-------------------------|:--------------------------:|:----------:|:----------:|\n| Posada de la Laguna     | Comida casera / Regional   | ✔️        | ✔️         |\n| Irupé Lodge             | Comida casera / Regional   | ✔️        | ✔️         |\n| Rincón del Carpincho    | Comida casera / Regional   | ✔️        | ✔️         |\n\n### Confiterías y cafés\n| Confitería              | Tipo                       | Sin Gluten | Sin Azúcar |\n|-------------------------|:--------------------------:|:----------:|:----------:|\n| (Opciones limitadas)    | Principalmente en posadas  | ✔️        | ✔️         |\n| Minimercados            | Para abastecerse           | ✔️        | ✔️         |",
    ibera_accommodation_examples: "- Posada de la Laguna\n- Irupé Lodge\n- Cabañas y hospedajes rurales en Colonia Carlos Pellegrini\n- Camping (para los más aventureros).",
    ibera_coordinates: "- Colonia Carlos Pellegrini: 28° 32' S 57° 11' O",
    ibera_events_agenda_text: "- **(Consultar agenda local)**: El foco es la naturaleza y la vida silvestre.\n- **(Consultar agenda local)**: Posibles charlas o talleres sobre conservación.",
    ibera_events_agenda_link_text: "Descargar agenda completa en formato iCal (.zip)",
    ibera_events_agenda_link_url: "../docs/agenda/ariflier1970@gmail.com.ical.zip",
    ibera_family_tips: "- **Repelente de insectos es ABSOLUTAMENTE CRUCIAL.** Llevar en gran cantidad.\n- Protector solar, sombrero y ropa de manga larga para protegerse del sol y los insectos.\n- Binoculares para observar aves y fauna.\n- Reserven alojamiento y excursiones con mucha anticipación, la oferta es limitada.\n- La mayoría de las actividades son al aire libre; estén preparados para diferentes condiciones climáticas.\n- Ideal para niños interesados en la naturaleza y los animales.",
    ibera_budget_table: "| Concepto                      | Precio estimado (USD) |\n|-------------------------------|:--------------------:|\n| Alojamiento (noche, familia)  | 70–200+ (incl. excursiones/comidas) |\n| Comida (por día, familia)     | Incluido en posada (generalmente) |\n| Transporte local (por día)    | 0–10 (dentro del pueblo) |\n| Actividades y tours (por día) | 50–100+ (según excursiones) |\n| Entradas museos/atracciones   | 0–10                 |",
    ibera_cultural_tips: "- La cultura guaraní y el respeto por la naturaleza son muy fuertes.\n- El ritmo de vida es tranquilo y en contacto con la naturaleza.\n- La hospitalidad de los lugareños es destacada.\n- Aprender algunas palabras en guaraní puede ser divertido para los niños.",
    ibera_map_link_text: "Ver mapa más grande de Esteros del Iberá (Colonia Carlos Pellegrini)",
    ibera_map_link_url: "https://www.openstreetmap.org/#map=13/-28.537/-57.140",
    
    // Transport Leg Specific Keys
    transport_mean_bus: "Bus",
    transport_time_4h: "4 h",
    transport_price_20k_ars: "{price} ARS",
    // ... Add more generic keys for transport means and times as needed ...

    // Itinerary Program Section
    itinerary_program_title: "Análisis y Sugerencias del Itinerario",
    itinerary_program_current_plan_title: "Resumen de tu Plan Actual:",
    itinerary_program_duration_label: "Duración de la estadía en {cityName}:",
    itinerary_program_optimization_tips_title: "Consejos para Optimizar tu Viaje:",
    itinerary_optimization_tip_1: "Considera los tiempos de viaje y descanso entre destinos largos para evitar el agotamiento, especialmente con niños.",
    itinerary_optimization_tip_2: "Reserva vuelos y buses con anticipación, especialmente en temporada alta, para asegurar disponibilidad y mejores precios.",
    itinerary_optimization_tip_3: "Verifica la logística para llegar a destinos remotos como Esteros del Iberá (transfers desde ciudades cercanas).",
    itinerary_optimization_tip_4: "Deja flexibilidad en algunos días. Un día libre o con menos actividades planificadas puede ser beneficioso.",
    itinerary_optimization_tip_5: "Agrupa actividades por zona geográfica dentro de cada ciudad para minimizar tiempos de traslado.",
    itinerary_optimization_tip_6: "Para vuelos internos, revisa las políticas de equipaje, ya que suelen ser más restrictivas que los internacionales.",
  },
  [Language.HE]: {
    // General
    tituloPrincipal: "מסלול משפחתי בארגנטינה",
    idioma: "שפה:",
    moneda: "מטבע:",
    explore_btn: "גלה עוד פרטים",
    volverItinerario: "חזרה למסלול",
    loading: "טוען...",
    error: "שגיאה",
    generating: "יוצר...",
    duration_not_specified: "משך לא צוין",
    // Home Page
    bienvenidaPrincipal: "ברוכים הבאים! לחצו על כל עיר לצפייה במידע, מפות והמלצות.",
    transporte: "תחבורה בין ערים",
    desde: "מאת",
    hasta: "עד",
    medio: "אמצעי",
    tiempo: "זמן",
    precio: "מחיר משוער",
    compania: "חברה",
    mapaInteractivoTitulo: "מפה אינטראקטיבית של הטיול",
    mapaInteractivoBienvenida: "סיירו במסלול המשפחתי בארגנטינה. לחצו על כל עיר לפרטים.",
    // Packing List
    packing_title: "רשימת ציוד",
    packing_add: "הוסף",
    packing_essential: "חיוניים",
    packing_optional: "אופציונליים",
    packing_placeholder: "מה עוד אתם לוקחים?",
    // AI Consultation (Homepage)
    iaTitulo: "ייעוץ בינה מלאכותית כללי",
    iaPlaceholder: "שאלו את שאלתכם על הטיול...",
    consultarBtn: "התייעץ",
    iaError: "שגיאה בתקשורת עם הבינה המלאכותית. נסו שוב מאוחר יותר.",
    iaProcessing: "מעבד את פנייתך...",
    // Currency Converter
    conversorTitulo: "ממיר מטבעות",
    convertirBtn: "המר",
    montoPlaceholder: "סכום",
    
    // Section Titles for Detail Page
    section_title_dates_duration: "תאריכים ומשך זמן",
    section_title_must_see: "מקומות שאסור לפספס",
    section_title_activities_recommended: "פעילויות מומלצות",
    section_title_gastronomy_highlight: "גסטרונומיה מומלצת",
    section_title_accommodation_examples: "לינה (דוגמאות)",
    section_title_coordinates: "קואורדינטות",
    section_title_events_agenda: "לוח אירועים",
    section_title_family_tips: "טיפים למשפחות",
    section_title_cultural_tips: "טיפים תרבותיים",
    section_title_budget_table: "תקציב משוער",
    section_title_city_map: "מפת העיר",
    gastronomy_restaurants_subtitle: "מסעדות מומלצות",
    gastronomy_cafes_subtitle: "קונדיטוריות ובתי קפה",
    table_header_restaurant: "מסעדה",
    table_header_cafe: "קונדיטוריה",
    table_header_type: "סוג",
    table_header_gluten_free: "ללא גלוטן",
    table_header_sugar_free: "ללא סוכר",

    // Footer
    footerText: "© 2025 טיול משפחתי בארגנטינה. כל הזכויות שמורות.",
    // City Detail Page (generic titles)
    activities: "פעילויות מומלצות",
    accommodation: "אפשרויות לינה",
    budget: "תקציב משוער",

    // City Titles
    buenosaires_title: "בואנוס איירס",
    rosario_title: "רוסאריו",
    bariloche_title: "ברילוצ'ה",
    mendoza_title: "מנדוסה",
    malargue_title: "מלרגואה",
    jujuy_title: "חוחוי",
    iguazu_title: "פוארטו איגואסו",
    corrientes_title: "קוריינטס",
    ibera_title: "אסטרוס דל איברה",

    // MAIN DESCRIPTIONS FOR CITY CARDS (HE)
    buenosaires_desc_main: "בואנוס איירס היא בירת הרפובליקה הארגנטינאית, עיר קוסמופוליטית, תוססת ועם הצעות רבות ליהנות עם המשפחה.",
    rosario_desc_main: "רוסאריו, עיר הדגל, מציעה היסטוריה עשירה, פארקים רחבים וחיי תרבות תוססים על גדות נהר פרנה.",
    bariloche_desc_main: "סן קרלוס דה ברילוצ'ה, בירת האגמים, היא יעד הררי בפטגוניה הארגנטינאית, מפורסמת בנופי יערות, אגמים והרים מושלגים.",
    mendoza_desc_main: "מנדוסה, ארץ השמש והיין הטוב, שוכנת למרגלות הרי האנדים, ומציעה תרבות יין והרפתקאות.",
    malargue_desc_main: "מלרגואה, בדרום מנדוסה, ידועה בנופיה הוולקניים, תצורות גאולוגיות ייחודיות והרפתקאות בטבע.",
    jujuy_desc_main: "מחוז חוחוי, בצפון-מערב ארגנטינה, הוא פיצוץ של צבעים ותרבות אנדינית, מפורסם בהריו הרב-גוניים וכפריו העתיקים.",
    iguazu_desc_main: "פוארטו איגואסו היא שער הכניסה למפלי איגואסו המרהיבים, אחד משבעת פלאי הטבע של העולם.",
    corrientes_desc_main: "קוריינטס, על גדות נהר פרנה, היא מרכז תרבותי תוסס, הידוע בקרנבל, בצ'ממה ובהיסטוריה העשירה שלו.",
    ibera_desc_main: "אסטרוס דל איברה הם אחד מבתי הגידול הלחים החשובים בעולם, גן עדן למגוון ביולוגי אידיאלי לתיירות אקולוגית משפחתית.",

    // BUENOS AIRES (Detailed HE content)
    buenosaires_dates_duration: "- **שהייה**: 28/09 עד 02/10 (5 ימים) ו-29/10 (יום אחד)\n- **איך מגיעים**: הגעה בינלאומית (EZE/AEP) / טיסה מקוריינטס ללילה האחרון",
    buenosaires_must_see: "- [האובליסק ושדרת 9 ביולי](https://es.wikipedia.org/wiki/Obelisco_de_Buenos_Aires)\n- [תיאטרון קולון (סיורים מודרכים)](https://teatrocolon.org.ar/es)\n- [קמיניטו ושכונת לה בוקה הצבעונית](https://es.wikipedia.org/wiki/Caminito)\n- [פלרמו: יערות, גן יפני, מוזיאונים, בתי קפה וחנויות](https://es.wikipedia.org/wiki/Palermo_(Buenos_Aires))\n- [פלנטריום גלילאו גליליי](https://planetario.buenosaires.gob.ar/)\n- [פוארטו מאדרו ושמורת טבע אקולוגית](https://es.wikipedia.org/wiki/Puerto_Madero)\n- [המוזיאון הלאומי לאמנויות יפות](https://www.bellasartes.gob.ar/)\n- [רקולטה: בית קברות היסטורי, יריד אומנים ובתי קפה](https://turismo.buenosaires.gob.ar/es/otros-lugares/cementerio-de-la-recoleta)\n- [פלאסה דה מאיו וקאסה רוסדה](https://es.wikipedia.org/wiki/Plaza_de_Mayo)",
    buenosaires_activities_recommended: "- טנגו ומופעים טיפוסיים (סן טלמו או לה בוקה)\n- סיורים מודרכים ברגל או באופניים\n- פיקניק ביערות פלרמו\n- ביקור במוזיאונים וירידי אומנות\n- שייט בנהר ריו דה לה פלטה (פוארטו מאדרו)",
    buenosaires_gastronomy_highlight: "העיר מציעה ממסעדות גריל מסורתיות ועד מסעדות גורמה, אפשרויות צמחוניות/טבעוניות ובתי קפה היסטוריים.\n\n### מסעדות מומלצות\n| מסעדה | סוג | ללא גלוטן | ללא סוכר |\n|---|---|---|---|\n| [דון חוליו](https://www.parrilladonjulio.com/) | גריל קלאסי | ✔️ | ❌ |\n| [סאקרו](https://www.sacro.restaurant/) | טבעוני גורמה | ✔️ | ✔️ |\n| [ביו רסטורנטה](https://www.biorestaurante.com/) | אורגני | ✔️ | ✔️ |\n| [פארו אינקאס סושי וגריל](https://parurestaurant.com/) | פיוז'ן פרואני-יפני | ✔️ | ❌ |\n\n### קונדיטוריות ובתי קפה\n| קונדיטוריה | סוג | ללא גלוטן | ללא סוכר |\n|---|---|---|---|\n| [קפה טורטוני](https://www.cafetortoni.com.ar/) | היסטורי / קלאסי | ❌ | ❌ |\n| [הוואנה](https://www.havanna.com.ar/) | אלפחורס / קפה | ✔️ | ✔️ |\n| [קונפיטריה אידיאל](https://www.confiteriaideal.com/) | קונדיטוריה מסורתית | ❌ | ❌ |",
    buenosaires_accommodation_examples: "- מלון אלביאר פאלאס\n- מלון מאדרו\n- מלון איביס\n- Airbnb בפלרמו",
    buenosaires_coordinates: "- 34° 36' דרום 58° 22' 48\" מערב",
    buenosaires_events_agenda_text: "- **29/09/2025**: פסטיבל טנגו באוויר הפתוח בפלאסה דורגו\n- **01/10/2025**: ליל המוזיאונים (כניסה חופשית למוזיאונים נבחרים)",
    buenosaires_events_agenda_link_text: "הורד לוח אירועים מלא בפורמט iCal (.zip)",
    buenosaires_events_agenda_link_url: "../docs/agenda/ariflier1970@gmail.com.ical.zip",
    buenosaires_family_tips: "- האזורים התיירותיים בטוחים ומחוברים היטב לתחבורה ציבורית (כרטיס SUBE).\n- ישנן פעילויות רבות בחינם ולכל הגילאים.\n- בסופי שבוע יש בדרך כלל מופעי רחוב וירידים.\n- מומלץ להזמין מקומות לינה מראש בפלרמו או רקולטה.",
    buenosaires_budget_table: "| קונספט                      | מחיר משוער (USD) |\n|-------------------------------|:--------------------:|\n| לינה (לילה, משפחה)          | 50–120               |\n| אוכל (ליום, משפחה)          | 30–70                |\n| תחבורה ציבורית (ליום)       | 3–5                  |\n| פעילויות וסיורים (ליום)     | 20–50                |\n| כניסות למוזיאונים/אטרקציות | 0–15                 |",
    buenosaires_cultural_tips: "- השפה הרשמית היא ספרדית (ריו פלטנסה, מאוד ידידותית).\n- נהוג לברך בנשיקה על הלחי.\n- שעות הארוחות הן בדרך כלל מאוחרות יותר מאשר במדינות אחרות (ארוחת ערב החל מ-21:00).\n- מאטה הוא המשקה הלאומי.",
    buenosaires_map_link_text: "צפה במפה גדולה יותר של בואנוס איירס",
    buenosaires_map_link_url: "https://www.openstreetmap.org/#map=12/-34.60/-58.45",
    buenosaires_poi_obelisco_name: "האובליסק",
    buenosaires_poi_obelisco_desc: "אנדרטה היסטורית בשדרת 9 ביולי.",
    buenosaires_poi_teatrocolon_name: "תיאטרון קולון",
    buenosaires_poi_teatrocolon_desc: "אחד מבתי האופרה החשובים בעולם.",
    buenosaires_poi_caminito_name: "קמיניטו",
    buenosaires_poi_caminito_desc: "רחוב מוזיאון צבעוני בלה בוקה.",
    buenosaires_poi_palermo_name: "יערות פלרמו",
    buenosaires_poi_palermo_desc: "פארק עירוני גדול עם אגמים וגן ורדים.",
    buenosaires_poi_planetario_name: "פלנטריום גלילאו גליליי",
    buenosaires_poi_planetario_desc: "מרכז להפצת ידע אסטרונומי.",
    buenosaires_poi_puertomadero_name: "פוארטו מאדרו",
    buenosaires_poi_puertomadero_desc: "רובע נמל מודרני עם מסעדות וגשר האישה.",
    buenosaires_poi_bellasartes_name: "המוזיאון הלאומי לאמנויות יפות",
    buenosaires_poi_bellasartes_desc: "מוזיאון האמנות הראשי של ארגנטינה.",
    buenosaires_poi_recoleta_name: "בית הקברות רקולטה",
    buenosaires_poi_recoleta_desc: "בית קברות היסטורי עם מאוזוליאומים מרשימים.",
    buenosaires_poi_plazamayo_name: "פלאסה דה מאיו",
    buenosaires_poi_plazamayo_desc: "המרכז ההיסטורי והפוליטי של העיר, מול הקאסה רוסדה.",

    // AI Section Titles, Descriptions, Prompts, Placeholders (HE)
    ai_menu_title: "מחולל תפריט בריא",
    ai_menu_description: "קבלו הצעות לתפריט יומי (ארוחת בוקר, צהריים, ערב) המותאמות לדיאטות דלות פחמימות, מתאימות לסוכרתיים, ואם אפשר, ללא גלוטן, בהשראת הגסטרונומיה של {cityName}.",
    ai_menu_button: "ייצר תפריט",
    ai_menu_input_placeholder: "הוסף פרטים (למשל 'צמחוני', 'ללא דגים')...",
    buenosaires_ai_prompt_menu: "אתה מומחה לגסטרונומיה ארגנטינאית ותזונה. צור תוכנית תפריט יומית (ארוחת בוקר, צהריים, ערב) למשפחה המבקרת בבואנוס איירס, ארגנטינה. האפשרויות צריכות להיות מתאימות לסוכרתיים, דלות פחמימות, ואם אפשר, ללא גלוטן. שלב מנות ארגנטינאיות טיפוסיות מותאמות. התחשב בהעדפות נוספות אלה של המשתמש: ", // User input will be appended here
    rosario_ai_prompt_menu: "אתה מומחה לגסטרונומיה ארגנטינאית ותזונה. צור תוכנית תפריט יומית (ארוחת בוקר, צהריים, ערב) למשפחה המבקרת ברוסאריו, ארגנטינה. האפשרויות צריכות להיות מתאימות לסוכרתיים, דלות פחמימות, ללא גלוטן אם אפשר, ובהשראת המטבח המקומי (למשל דג נהר). התחשב בהעדפות נוספות אלה של המשתמש: ",
    bariloche_ai_prompt_menu: "אתה מומחה לגסטרונומיה פטגונית ותזונה. צור תוכנית תפריט יומית (ארוחת בוקר, צהריים, ערב) למשפחה המבקרת בברילוצ'ה, ארגנטינה. האפשרויות צריכות להיות מתאימות לסוכרתיים, דלות פחמימות, ואם אפשר, ללא גלוטן. כלול דוגמאות למאכלים מקומיים כמו פורל או טלה מותאמים. התחשב בהעדפות נוספות אלה של המשתמש: ",
    mendoza_ai_prompt_menu: "אתה מומחה לגסטרונומיה קוז'אנה ותזונה. צור תוכנית תפריט יומית (ארוחת בוקר, צהריים, ערב) למשפחה המבקרת במנדוסה, ארגנטינה. האפשרויות צריכות להיות מתאימות לסוכרתיים, דלות פחמימות, ואם אפשר, ללא גלוטן, תוך הדגשת מרכיבים מקומיים והתאמות יין (למבוגרים, כמובן). התחשב בהעדפות נוספות אלה של המשתמש: ",
    malargue_ai_prompt_menu: "אתה מומחה לגסטרונומיה של מלרגואה ותזונה. צור תוכנית תפריט יומית (ארוחת בוקר, צהריים, ערב) למשפחה המבקרת במלרגואה, ארגנטינה. האפשרויות צריכות להיות מתאימות לסוכרתיים, דלות פחמימות, ואם אפשר, ללא גלוטן. כלול מאכלים כמו צ'יביטו מותאם. התחשב בהעדפות נוספות אלה של המשתמש: ",
    jujuy_ai_prompt_menu: "אתה מומחה לגסטרונומיה אנדינית ותזונה. צור תוכנית תפריט יומית (ארוחת בוקר, צהריים, ערב) למשפחה המבקרת בחוחוי, ארגנטינה. האפשרויות צריכות להיות מתאימות לסוכרתיים, דלות פחמימות, ואם אפשר, ללא גלוטן, תוך שימוש במרכיבים כמו קינואה, לאמה (מותאמת) או תירס. התחשב בהעדפות נוספות אלה של המשתמש: ",
    iguazu_ai_prompt_menu: "אתה מומחה לגסטרונומיה מיסיונרית ותזונה. צור תוכנית תפריט יומית (ארוחת בוקר, צהריים, ערב) למשפחה המבקרת בפוארטו איגואסו, ארגנטינה. האפשרויות צריכות להיות מתאימות לסוכרתיים, דלות פחמימות, ואם אפשר, ללא גלוטן, כולל דגי נהר או פירות טרופיים. התחשב בהעדפות נוספות אלה של המשתמש: ",
    corrientes_ai_prompt_menu: "אתה מומחה לגסטרונומיה ליטורלניה ותזונה. צור תוכנית תפריט יומית (ארוחת בוקר, צהריים, ערב) למשפחה המבקרת בקוריינטס, ארגנטינה. האפשרויות צריכות להיות מתאימות לסוכרתיים, דלות פחמימות, ואם אפשר, ללא גלוטן, עם דגי נהר כמו דוראדו או סורובי. התחשב בהעדפות נוספות אלה של המשתמש: ",
    ibera_ai_prompt_menu: "אתה מומחה לגסטרונומיה אזורית של אסטרוס דל איברה ותזונה. צור תוכנית תפריט יומית (ארוחת בוקר, צהריים, ערב) למשפחה המבקרת באיברה, ארגנטינה. האפשרויות צריכות להיות מתאימות לסוכרתיים, דלות פחמימות, ואם אפשר, ללא גלוטן, המבוססות על בישול ביתי ומוצרים מקומיים. התחשב בהעדפות נוספות אלה של המשתמש: ",
    generic_ai_prompt_menu: "אתה מומחה לגסטרונומיה ארגנטינאית ותזונה. צור תוכנית תפריט יומית (ארוחת בוקר, צהריים, ערב) למשפחה המבקרת ב-{cityName}, ארגנטינה. האפשרויות צריכות להיות מתאימות לסוכרתיים, דלות פחמימות, ואם אפשר, ללא גלוטן. שלב מנות מקומיות טיפוסיות מותאמות. התחשב בהעדפות נוספות אלה של המשתמש: ",

    ai_accommodation_title: "הצעות לינה עם בינה מלאכותית",
    ai_accommodation_description: "קבלו המלצות לינה ב-{cityName}, תוך התחשבות באפשרויות ידידותיות למשפחות, בטוחות וממוקמות היטב.",
    ai_accommodation_button: "ייצר הצעות",
    ai_accommodation_input_placeholder: "פרט העדפות (למשל 'עם בריכה', 'קרוב למרכז')...",
    buenosaires_ai_prompt_accommodation: "אתה סוכן נסיעות מומחה לבואנוס איירס. צור 3-5 הצעות לינה בבואנוס איירס, ארגנטינה, אידיאליות למשפחה עם 2 ילדים. קח בחשבון אפשרויות בטוחות, ממוקמות היטב ועם שירותים מתאימים למשפחות. כלול סוגים שונים (בתי מלון, דירות, Airbnb). קח בחשבון מידע נוסף זה מהמשתמש: ",
    generic_ai_prompt_accommodation: "אתה סוכן נסיעות מומחה. צור 3-5 הצעות לינה ב-{cityName}, ארגנטינה, אידיאליות למשפחה עם 2 ילדים. קח בחשבון אפשרויות בטוחות, ממוקמות היטב ועם שירותים מתאימים למשפחות. כלול סוגים שונים (בתי מלון, דירות, Airbnb). קח בחשבון מידע נוסף זה מהמשתמש: ",
    
    ai_family_tips_title: "טיפים נוספים למשפחות עם בינה מלאכותית",
    ai_family_tips_description: "קבלו טיפים מותאמים אישית לבילוי ב-{cityName} עם המשפחה, כולל פעילויות, בטיחות ולוגיסטיקה.",
    ai_family_tips_button: "ייצר טיפים",
    ai_family_tips_input_placeholder: "ציין גילי ילדים או תחומי עניין ספציפיים...",
    buenosaires_ai_prompt_family_tips: "אתה מדריך טיולים מומחה לבואנוס איירס למשפחות. ספק 5 טיפים מעשיים ומותאמים אישית למשפחה עם ילדים המבקרת בבואנוס איירס. כסה היבטים כמו פעילויות לילדים, בטיחות, תחבורה משפחתית וכיצד למקסם את השהייה. קח בחשבון מידע נוסף זה מהמשתמש: ",
    generic_ai_prompt_family_tips: "אתה מדריך טיולים מומחה למשפחות. ספק 5 טיפים מעשיים ומותאמים אישית למשפחה עם ילדים המבקרת ב-{cityName}, ארגנטינה. כסה היבטים כמו פעילויות לילדים, בטיחות, תחבורה משפחתית וכיצד למקסם את השהייה. קח בחשבון מידע נוסף זה מהמשתמש: ",

    ai_budget_analysis_title: "ניתוח תקציב עם בינה מלאכותית",
    ai_budget_analysis_description: "קבלו ניתוח ופירוט של התקציב המשוער לשהותכם ב-{cityName}, עם אופטימיזציות אפשריות.",
    ai_budget_analysis_button: "נתח תקציב",
    ai_budget_analysis_input_placeholder: "ציין אם יש תקציב כולל או סדרי עדיפויות...",
    buenosaires_ai_prompt_budget_analysis: "אתה יועץ פיננסי לטיולים. נתח את התקציב המשוער למשפחה בבואנוס איירס (USD): לינה (לילה): 50-120, אוכל (יום): 30-70, תחבורה (יום): 3-5, פעילויות (יום): 20-50, כניסות: 0-15. ספק פירוט משוער ליום ולקטגוריה, והצע 2-3 דרכים לייעל תקציב זה מבלי לוותר על החוויה. קח בחשבון הערות אלה מהמשתמש: ",
    generic_ai_prompt_budget_analysis: "אתה יועץ פיננסי לטיולים. נתח את התקציב המשוער למשפחה ב-{cityName}, ארגנטינה. עיין בתקציב המפורט של העיר וספק פירוט משוער ליום ולקטגוריה, והצע 2-3 דרכים לייעל תקציב זה מבלי לוותר על החוויה. קח בחשבון הערות אלה מהמשתמש: ",
    ai_translate_button_text: "תרגם תשובה ל-{lang}",

    // ROSARIO (Detailed HE content) - (and all other cities as per prior full example)
    rosario_dates_duration: "- **שהייה**: 02/10 עד 05/10 (4 ימים)\n- **איך מגיעים**: טיסה מבואנוס איירס / אוטובוס למרחקים ארוכים",
    rosario_must_see: "- [אנדרטת הדגל הלאומית](https://www.monumentoalabandera.gob.ar/)\n- [פארק העצמאות](https://www.rosario.gob.ar/web/ciudad/parques-y-plazas/parque-de-la-independencia)\n- טיילת נהר פרנה\n- [אי ההמצאות](https://www.rosario.gob.ar/web/ciudad/cultura/infancia-y-juventud/isla-de-los-inventos)\n- מוזיאון למדעי הטבע \"ד\"ר אנחל גז'ארדו\"\n- שדרות אורוניו",
    rosario_activities_recommended: "- ביקור באנדרטת הדגל ועלייה לתצפית שלה.\n- שייט בנהר פרנה ובאיים שלו.\n- השכרת אופניים לטיול בטיילת ובפארקים.\n- פעילויות פנאי באי ההמצאות או בחוות הילדות.\n- פיקניק בפארקים הגדולים של העיר.\n- ביקורים במוזיאונים המותאמים לילדים.",
    rosario_gastronomy_highlight: "רוסאריו ידועה בגסטרונומיה המגוונת שלה, עם אפשרויות הנעות מגריל מסורתי ובשר על האש, ועד למנות דגי נהר טריים והיצע גדל והולך של מטבח מודרני ובריא.\n\n### מסעדות מומלצות\n| מסעדה | סוג | ללא גלוטן | ללא סוכר |\n|---|---|---|---|\n| דון פרו | גריל עם נוף לנהר | ✔️ | ❌ |\n| רוק אנד פלר'ס | אמריקאי / משפחתי | ✔️ | ❌ |\n| צ'ינצ'יבירה | מטבח שף / פיוז'ן | ✔️ | ✔️ |\n| אל וייחו בלקון | דגי נהר | ✔️ | ❌ |\n\n### קונדיטוריות ובתי קפה\n| קונדיטוריה | סוג | ללא גלוטן | ללא סוכר |\n|---|---|---|---|\n| אל קהיר | היסטורי / ספרותי | ❌ | ❌ |\n| גופרה | וופלים וקונדיטוריה | ✔️ | ✔️ |\n| סנדרלנד | מסורתי / קלאסי | ❌ | ❌ |",
    rosario_accommodation_examples: "- מלון רוס טאואר\n- אספלנדור ביי ווינדהם סאבוי רוסאריו\n- דירות במרכז או ליד הטיילת\n- Airbnb בשכונות מגורים כמו פישרטון או פיצ'ינצ'ה",
    rosario_coordinates: "- 32° 57' דרום 60° 38' מערב",
    rosario_events_agenda_text: "- **(יש לבדוק לוח אירועים מקומי)**: לרוסאריו חיי תרבות פעילים עם פסטיבלים, ירידים ומופעים.\n- **(יש לבדוק לוח אירועים מקומי)**: אירועי ספורט או מוזיקה בפארק העצמאות.",
    rosario_events_agenda_link_text: "הורד לוח אירועים מלא בפורמט iCal (.zip)",
    rosario_events_agenda_link_url: "../docs/agenda/ariflier1970@gmail.com.ical.zip",
    rosario_family_tips: "- נצלו את המרחבים הירוקים הרחבים והטיילת לפעילויות באוויר הפתוח.\n- התחבורה הציבורית יעילה (כרטיס MOVI).\n- העיר בטוחה באזורים התיירותיים ובמרכז.\n- שקלו שייט כדי לראות את העיר מהנהר.\n- בטיילת יש אפשרויות רבות למסעדות עם משחקים לילדים.",
    rosario_budget_table: "| קונספט                      | מחיר משוער (USD) |\n|-------------------------------|:--------------------:|\n| לינה (לילה, משפחה)          | 50–120               |\n| אוכל (ליום, משפחה)          | 30–70                |\n| תחבורה ציבורית (ליום)       | 3–5                  |\n| פעילויות וסיורים (ליום)     | 20–50                |\n| כניסות למוזיאונים/אטרקציות | 0–15                 |",
    rosario_cultural_tips: "- \"צ'ה\" גווארה נולד ליד רוסאריו.\n- רוסאריו היא מולדתם של כדורגלנים גדולים (מסי, די מריה) ואמנים.\n- הסייסטה נפוצה בשעות הצהריים, ומשפיעה על שעות הפעילות של החנויות.\n- תושבי רוסאריו ידועים בהכנסת האורחים שלהם.",
    rosario_map_link_text: "צפה במפה גדולה יותר של רוסאריו",
    rosario_map_link_url: "https://www.openstreetmap.org/#map=12/-32.944/-60.655",

    bariloche_dates_duration: "- **שהייה**: 05/10 עד 09/10 (5 ימים)\n- **איך מגיעים**: טיסה מרוסאריו / אוטובוס למרחקים ארוכים",
    bariloche_must_see: "- **המרכז האזרחי**: לב העיר עם ארכיטקטורה אלפינית.\n- **אגם נאוול ואפי**: לשייט ופעילויות מים.\n- **סירקuito צ'יקו**: מסלול פנורמי עם נופים מרהיבים.\n- **סרו קתדרל**: מרכז סקי בחורף, טרקים ונופים בקיץ.\n- **סרו קמפנריו**: נבחר בין הנופים הטובים בעולם, עם רכבל כיסאות.\n- **יער אראז'אנס**: יער ייחודי אליו מגיעים בשייט.\n- **פוארטו בלסט ומפל לוס קנטרוס**: טיול שייט באגם.",
    bariloche_activities_recommended: "- טעימות שוקולדים ובירות בוטיק.\n- שייט באגם נאוול ואפי.\n- טרקים והליכה (מותאמים למשפחות).\n- ספורט חורף (סקי, סנובורד, מזחלות).\n- רכיבה על סוסים או קנופי בסביבה.\n- ביקור בקולוניה סוויסה לטעימת קורנטו.\n- נסיעה בסירקuito צ'יקו ברכב או באופניים.",
    bariloche_gastronomy_highlight: "הגסטרונומיה של ברילוצ'ה מפורסמת בשוקולדים, בשר ציד (אייל, חזיר בר), פורלים ומעושנים. יש גם אפשרויות בריאות ולדיאטות מיוחדות.\n\n### מסעדות מומלצות\n| מסעדה                  | סוג                       | ללא גלוטן | ללא סוכר |\n|-------------------------|:--------------------------:|:----------:|:----------:|\n| אל בוליצ'ה דה אלברטו   | גריל / בשרים              | ✔️        | ❌         |\n| לה פונדה דל טיו        | אוכל פטגוני ביתי         | ✔️        | ✔️         |\n| באטרפליי                | מטבח עילית / פורל        | ✔️        | ✔️         |\n| ראפה נוי                | שוקולטריה / קפיטריה      | ✔️        | ✔️         |\n\n### קונדיטוריות ובתי קפה\n| קונדיטוריה              | סוג                       | ללא גלוטן | ללא סוכר |\n|-------------------------|:--------------------------:|:----------:|:----------:|\n| מאמושקה                | שוקולטריה / קונדיטוריה    | ✔️        | ✔️         |\n| אבואלה גוז'ה            | שוקולטריה / קפיטריה      | ✔️        | ✔️         |\n| אל אלמסן דה פלורס     | קפה מיוחד                 | ✔️        | ✔️         |",
    bariloche_accommodation_examples: "- מלון ז'או ז'או (יוקרה)\n- מלון פנאמריקנו ברילוצ'ה\n- בקתות ומתחמי תיירות עם פעילויות לילדים\n- Airbnb במרכז או ליד סירקuito צ'יקו",
    bariloche_coordinates: "- 41° 08' דרום 71° 18' מערב",
    bariloche_events_agenda_text: "- **(יש לבדוק לוח אירועים מקומי)**: אירועי חורף (פסטיבל השלג הלאומי).\n- **(יש לבדוק לוח אירועים מקומי)**: פסטיבלי מוזיקה או גסטרונומיה בעונות אחרות.",
    bariloche_events_agenda_link_text: "הורד לוח אירועים מלא בפורמט iCal (.zip)",
    bariloche_events_agenda_link_url: "../docs/agenda/ariflier1970@gmail.com.ical.zip",
    bariloche_family_tips: "- התלבשו בשכבות (הטמפרטורה יכולה להשתנות מאוד).\n- הזמינו טיולים ולינה מראש, במיוחד בעונת השיא.\n- יש הרבה פעילויות לילדים: פארקי שלג, מסלולי הליכה קלים, שייט.\n- האזור בטוח מאוד לטיולים משפחתיים.\n- טעמו את השוקולדים המקומיים, אך במתינות אם יש מגבלות.",
    bariloche_budget_table: "| קונספט                      | מחיר משוער (USD) |\n|-------------------------------|:--------------------:|\n| לינה (לילה, משפחה)          | 70–180               |\n| אוכל (ליום, משפחה)          | 40–90                |\n| תחבורה מקומית (ליום)        | 5–15                 |\n| פעילויות וסיורים (ליום)     | 30–80                |\n| כניסות למוזיאונים/אטרקציות | 0–20                 |",
    bariloche_cultural_tips: "- לברילוצ'ה השפעה חזקה של מהגרים שוויצרים וגרמנים, הנראית בארכיטקטורה ובגסטרונומיה שלה.\n- זהו יעד פופולרי לטיולי סיום תיכון, כך שייתכנו צעירים רבים בתקופות מסוימות.\n- תרבות ההרים מושרשת מאוד: כבוד לטבע, ספורט באוויר הפתוח.",
    bariloche_map_link_text: "צפה במפה גדולה יותר של ברילוצ'ה",
    bariloche_map_link_url: "https://www.openstreetmap.org/#map=12/-41.133/-71.328",

    mendoza_dates_duration: "- **שהייה**: 09/10 עד 13/10 (5 ימים)\n- **איך מגיעים**: טיסה מברילוצ'ה / אוטובוס למרחקים ארוכים",
    mendoza_must_see: "- **פארק חנרל סן מרטין**: אחד הפארקים העירוניים הגדולים בדרום אמריקה, עם אגם וגן ורדים.\n- **סרו דה לה גלוריה**: תצפית פנורמית על העיר והאנדים.\n- **יקבים בלוחאן דה קוז'ו ומאיפו**: לסיורי יין, וחלקם עם פעילויות לילדים.\n- **כיכרות היסוד**: פלאסה אינדפנדנסיה, פלאסה אספניה, פלאסה איטליה וכו'.\n- **קניון אטואל (מלרגואה)**: לטיול יום מלא (ראו סעיף מלרגואה אם לנים שם).\n- **פואנטה דל אינקה**: תופעת טבע מעניינת בדרך להר הגבוה.",
    mendoza_activities_recommended: "- סיור ביקבים עם טעימות (חלקם מציעים מיצים ופעילויות לילדים).\n- ביקור בהר הגבוה, כולל פארק אקונקגואה (תצפית).\n- רפטינג בנהר מנדוסה (לגילאים מתאימים).\n- טיול אופניים בכרמים.\n- ביקור באקווריום של מנדוסה.\n- הליכות ופיקניקים בפארק סן מרטין.\n- סיור רגלי בעיר, בכיכרות וברחובות המוצלים.",
    mendoza_gastronomy_highlight: "מנדוסה היא גן עדן גסטרונומי, מפורסמת בבשרים על האש, זיתים וכמובן, ההיצע הרחב של יינות. מסעדות רבות ביקבים מציעות מטבח עילית.\n\n### מסעדות מומלצות\n| מסעדה                          | סוג                       | ללא גלוטן | ללא סוכר |\n|---------------------------------|:--------------------------:|:----------:|:----------:|\n| סייטה קוסינאס                  | מטבח אזורי / שף           | ✔️        | ✔️         |\n| אספרן                           | מטבח עילית עם התאמת יין   | ✔️        | ✔️         |\n| לה מרקיחיאנה                   | מטבח איטלקי קלאסי        | ✔️        | ❌         |\n| יקב סוקרדי (פיידרה אינפיניטה) | חוויה גורמה ביקב          | ✔️        | ✔️         |\n\n### קונדיטוריות ובתי קפה\n| קונדיטוריה                     | סוג                       | ללא גלוטן | ללא סוכר |\n|---------------------------------|:--------------------------:|:----------:|:----------:|\n| מאמא מיה                        | קונדיטוריה / קפיטריה      | ✔️        | ✔️         |\n| הוואנה (סניפים שונים)          | אלפחורס / קפה             | ✔️        | ✔️         |\n| דה בזאר בר                     | קפה מיוחד                 | ✔️        | ✔️         |",
    mendoza_accommodation_examples: "- מלון פארק הייאט מנדוסה\n- מלון דיפלומטיק מנדוסה\n- בקתות או לודג'ים בצ'קרס דה קוריה או לוחאן דה קוז'ו (אזור היקבים)\n- Airbnb במרכז או בשכונות מגורים שקטות.",
    mendoza_coordinates: "- 32° 53' דרום 68° 50' מערב",
    mendoza_events_agenda_text: "- **(יש לבדוק לוח אירועים מקומי)**: וונדימיה (פברואר/מרץ).\n- **(יש לבדוק לוח אירועים מקומי)**: ירידי אומנים ושוקי תוצרת מקומית.",
    mendoza_events_agenda_link_text: "הורד לוח אירועים מלא בפורמט iCal (.zip)",
    mendoza_events_agenda_link_url: "../docs/agenda/ariflier1970@gmail.com.ical.zip",
    mendoza_family_tips: "- שקלו לשכור רכב כדי לחקור את היקבים וההר הגבוה בקצב שלכם.\n- תמיד קחו מים וקרם הגנה, האקלים יבש ושמשי.\n- בחלק מהיקבים יש אזורי משחקים או פעילויות לילדים בזמן שהמבוגרים טועמים.\n- העיר מאוד מוצלת עם תעלות השקיה, מה שהופך אותה נעימה להליכה.\n- בהר הגבוה, הטמפרטורות יכולות לרדת משמעותית, גם בקיץ.",
    mendoza_budget_table: "| קונספט                      | מחיר משוער (USD) |\n|-------------------------------|:--------------------:|\n| לינה (לילה, משפחה)          | 60–160               |\n| אוכל (ליום, משפחה)          | 40–80                |\n| תחבורה מקומית (ליום)        | 5–20                 |\n| פעילויות וסיורים (ליום)     | 25–70                |\n| כניסות למוזיאונים/אטרקציות | 0–20                 |",
    mendoza_cultural_tips: "- תרבות היין היא מרכזית במנדוסה.\n- ה\"סייסטה\" היא מנהג מושרש מאוד, עם חנויות רבות שנסגרות בצהריים.\n- תושבי מנדוסה גאים מאוד במחוז שלהם ובייצור היין.\n- חמימות האנשים בולטת.",
    mendoza_map_link_text: "צפה במפה גדולה יותר של מנדוסה",
    mendoza_map_link_url: "https://www.openstreetmap.org/#map=12/-32.889/-68.846",

    malargue_dates_duration: "- **שהייה**: 13/10 עד 16/10 (4 ימים)\n- **איך מגיעים**: אוטובוס ממנדוסה / רכב שכור",
    malargue_must_see: "- **מערת המכשפות (Caverna de las Brujas)**: מערכת מערות מרשימה עם נטיפים וזקיפים (דורש הזמנה וסיור מודרך).\n- **לה פאיוניה**: שמורת טבע של שדות לבה והרי געש (טיול יום מלא, דורש רכב 4x4 ומדריך).\n- **לגונה דה לה ניניה אנקנטדה**: לגונה קטנה עם מים צלולים מוקפת סלעים.\n- **עמק לאס לניאס**: מרכז סקי בחורף, עם פעילויות הרים בקיץ.\n- **פארק דינו (פארק עקבות דינוזאורים)**: לאוהבי פליאונטולוגיה.\n- **פלנטריום מלרגואה**: אידיאלי לתצפיות אסטרונומיות.",
    malargue_activities_recommended: "- טיולים מודרכים למערת המכשפות.\n- ספארי צילום בלה פאיוניה (אם הגילאים והעניין מאפשרים).\n- טרקים קלים או טיולי אופניים בעמק לאס לניאס (מחוץ לעונת השלג).\n- ביקור במצפה פייר אוז'ה (בהזמנה מראש).\n- רפטינג או רכיבה על סוסים בסביבה.\n- חקירת לגונה דה לה ניניה אנקנטדה ותצורות הסלע שלה.",
    malargue_gastronomy_highlight: "הגסטרונומיה במלרגואה מתמקדת במנות פטגוניות, בשרים על האש, צ'יביטו על האש (מנה טיפוסית לאזור) ומוצרים אזוריים. האפשרויות לדיאטות מיוחדות עשויות להיות מוגבלות יותר, ולכן מומלץ לשאול.\n\n### מסעדות מומלצות\n| מסעדה                  | סוג                            | ללא גלוטן | ללא סוכר |\n|-------------------------|:-------------------------------:|:----------:|:----------:|\n| לה פוסטה דה חמון       | גריל / צ'יביטו על האש         | ✔️        | ❌         |\n| אל וייחו רטירו         | אוכל ביתי / אזורי             | ✔️        | ✔️         |\n| פיצרייה לה אבנידה     | פיצרייה מסורתית                | ❌         | ❌         |\n\n### קונדיטוריות ובתי קפה\n| קונדיטוריה              | סוג                            | ללא גלוטן | ללא סוכר |\n|-------------------------|:-------------------------------:|:----------:|:----------:|\n| (אפשרויות מוגבלות)    | בתי קפה מקומיים / מאפיות       | ❌         | ❌         |\n| סופרמרקטים             | להצטיידות                     | ✔️        | ✔️         |",
    malargue_accommodation_examples: "- מלון מלרגואה\n- קומפלקס לוס מוז'ס (ליד לאס לניאס)\n- בקתות ומקומות אירוח כפריים.\n- Airbnb במרכז מלרגואה.",
    malargue_coordinates: "- 35° 28' דרום 69° 35' מערב",
    malargue_events_agenda_text: "- **(יש לבדוק לוח אירועים מקומי)**: פסטיבל הצ'יבו הלאומי (ינואר).\n- **(יש לבדוק לוח אירועים מקומי)**: אירועים הקשורים לאסטרונומיה או גאולוגיה.",
    malargue_events_agenda_link_text: "הורד לוח אירועים מלא בפורמט iCal (.zip)",
    malargue_events_agenda_link_url: "../docs/agenda/ariflier1970@gmail.com.ical.zip",
    malargue_family_tips: "- לחקר אטרקציות הטבע, כמעט הכרחי רכב פרטי או שכירת טיולים מאורגנים.\n- מערת המכשפות יכולה להיות מעט תובענית פיזית לילדים קטנים מאוד או לאנשים עם מוגבלות בניידות.\n- קחו הרבה מים ובגדים מתאימים לשינויי טמפרטורה פתאומיים, במיוחד אם מבקרים באזורי הר גבוה או מדבר.\n- קליטת סלולר עשויה להיות מוגבלת מחוץ לעיר.\n- כבדו את הנחיות המדריכים בשמורות הטבע.",
    malargue_budget_table: "| קונספט                      | מחיר משוער (USD) |\n|-------------------------------|:--------------------:|\n| לינה (לילה, משפחה)          | 40–100               |\n| אוכל (ליום, משפחה)          | 25–60                |\n| תחבורה מקומית (ליום)        | 5–15 (לא כולל רכב שכור) |\n| פעילויות וסיורים (ליום)     | 20–60 (לא כולל פאיוניה) |\n| כניסות למוזיאונים/אטרקציות | 0–15                 |",
    malargue_cultural_tips: "- מלרגואה היא אזור כפרי יותר עם זהות שדה חזקה.\n- חיי הלילה מוגבלים; הדגש הוא על הטבע והמנוחה.\n- הצ'יביטו על האש הוא מסורת קולינרית מושרשת מאוד וחובה מקומית.\n- האדיבות והכנסת האורחים של תושבי המקום הן תכונות בולטות.",
    malargue_map_link_text: "צפה במפה גדולה יותר של מלרגואה",
    malargue_map_link_url: "https://www.openstreetmap.org/#map=12/-35.478/-69.585",
    
    jujuy_dates_duration: "- **שהייה**: 16/10 עד 20/10 (5 ימים)\n- **איך מגיעים**: טיסה ממנדוסה (עם עצירה) / אוטובוס למרחקים ארוכים.",
    jujuy_must_see: "- **קבראדה דה אומאואקה**: אתר מורשת עולמית, עם נופים כמו פאלטה דל פינטור במאימארה וסרו דה לוס סייטה קולורס בפורממרקה.\n- **פורממרקה**: כפר ציורי למרגלות סרו דה לוס סייטה קולורס.\n- **טילקרה**: עיר עם פוקארה (מבצר פרה-היספני) ומוזיאונים.\n- **אומאואקה**: עיר היסטורית עם אנדרטת העצמאות ומגדל הקבילדו.\n- **סלינאס גרנדס**: מדבר מלח עצום (משותף עם סלטה, נגיש מפורממרקה).\n- **גרונטה דל דיאבלו (טילקרה)**: תצורת סלע עם מפל.\n- **סן סלבדור דה חוחוי**: הבירה, עם העיר העתיקה ובית הממשלה.",
    jujuy_activities_recommended: "- סיורים בכפרי הקבראדה ובשווקי האומנות שלהם.\n- הליכות קלות בפורממרקה או טילקרה.\n- ביקור בפוקארה של טילקרה.\n- טיול לסלינאס גרנדס (קחו קרם הגנה ומשקפי שמש).\n- תצפית כוכבים בקבראדה (זיהום אור נמוך).\n- הנאה ממוזיקה פולקלורית וריקודים מקומיים.\n- טעימת אמפנדס חוחויאניות וטמאלס.",
    jujuy_gastronomy_highlight: "הגסטרונומיה של חוחוי היא מיזוג של טעמים אנדיניים וקריאוליים, עם מנות המבוססות על תירס, תפוח אדמה, לאמה ועז. אפשרויות ללא גלוטן ודלות פחמימות עשויות לדרוש התאמה במנות מסורתיות, אך תמיד יש חלופות עם בשרים וירקות.\n\n### מסעדות מומלצות\n| מסעדה                  | סוג                       | ללא גלוטן | ללא סוכר |\n|-------------------------|:--------------------------:|:----------:|:----------:|\n| אל פטיו דה לה אמפנדה  | אוכל אזורי / אמפנדס      | ✔️        | ❌         |\n| לה קוסינה דל קולורדו   | מטבח אנדיני מסורתי       | ✔️        | ✔️         |\n| קילה                   | מטבח שף / אזורי           | ✔️        | ✔️         |\n\n### קונדיטוריות ובתי קפה\n| קונדיטוריה              | סוג                       | ללא גלוטן | ללא סוכר |\n|-------------------------|:--------------------------:|:----------:|:----------:|\n| (אפשרויות מקומיות)     | מאפיות / בתי קפה          | ❌         | ❌         |\n| שווקי אומנות           | מוצרים מקומיים             | ✔️        | ✔️         |",
    jujuy_accommodation_examples: "- מלונות בוטיק בפורממרקה או טילקרה.\n- אחוזות ופונדקים כפריים בקבראדה.\n- מלונות בסן סלבדור דה חוחוי להיצע גדול יותר.\n- Airbnb בבתי טיט מסורתיים.",
    jujuy_coordinates: "- סן סלבדור דה חוחוי: 24° 11' דרום 65° 18' מערב\n- פורממרקה: 23° 44' דרום 65° 30' מערב",
    jujuy_events_agenda_text: "- **(יש לבדוק לוח אירועים מקומי)**: קרנבל (פברואר/מרץ, צפוף מאוד).\n- **(יש לבדוק לוח אירועים מקומי)**: פסטיבלים פולקלוריים ודתיים.",
    jujuy_events_agenda_link_text: "הורד לוח אירועים מלא בפורמט iCal (.zip)",
    jujuy_events_agenda_link_url: "../docs/agenda/ariflier1970@gmail.com.ical.zip",
    jujuy_family_tips: "- הגובה יכול להשפיע על חלק מהמטיילים (סן סלבדור בגובה ~1200 מ', פורממרקה ~2300 מ', אומאואקה ~3000 מ', סלינאס גרנדס ~3500 מ'). שתו הרבה מים והלכו לאט בימים הראשונים.\n- קחו קרם הגנה, כובע ומשקפי שמש, קרינת השמש גבוהה.\n- התלבשו בשכבות, הטמפרטורות משתנות מאוד בין היום ללילה.\n- השכרת רכב מומלצת לטיול בקבראדה בחופשיות.\n- תמיד החזיקו כסף קטן, במיוחד בשווקים מקומיים.",
    jujuy_budget_table: "| קונספט                      | מחיר משוער (USD) |\n|-------------------------------|:--------------------:|\n| לינה (לילה, משפחה)          | 40–110               |\n| אוכל (ליום, משפחה)          | 25–65                |\n| תחבורה מקומית (ליום)        | 5–20                 |\n| פעילויות וסיורים (ליום)     | 15–50                |\n| כניסות למוזיאונים/אטרקציות | 0–10                 |",
    jujuy_cultural_tips: "- התרבות האנדינית נוכחת מאוד: כבוד לפצ'אמאמה (אמא אדמה), טקסים, מוזיקה (קנות, צ'רנגוס).\n- השפה הספרדית עם השפעת קצ'ואה נפוצה.\n- האומנות המקומית עשירה מאוד: טקסטיל מלאמה/אלפקה, קרמיקה, עבודות עץ.\n- האדיבות של האנשים היא תכונה בולטת.",
    jujuy_map_link_text: "צפה במפה גדולה יותר של חוחוי",
    jujuy_map_link_url: "https://www.openstreetmap.org/#map=10/-23.597/-65.405",
    
    iguazu_dates_duration: "- **שהייה**: 20/10 עד 24/10 (5 ימים)\n- **איך מגיעים**: טיסה מחוחוי (עם עצירה בבואנוס איירס) / אוטובוס למרחקים ארוכים.",
    iguazu_must_see: "- **הפארק הלאומי איגואסו (הצד הארגנטינאי)**: עם גשרים מעל המפלים, גרון השטן והרכבת האקולוגית.\n- **הפארק הלאומי איגואסו (הצד הברזילאי)**: מציע נוף פנורמי מרשים של המפלים.\n- **נקודת שלושת הגבולות**: נקודת מפגש של ארגנטינה, ברזיל ופרגוואי.\n- **גוירה אוגה (מקלט לחיות בר)**: מרכז הצלה ושיקום של בעלי חיים.\n- **גן היונקי הדבש**: מקום קסום לצפייה ביונקי דבש מקרוב.\n- **אריפוקה**: מיזם תיירותי-תרבותי המעריך מחדש את יער מיסיונס.\n- **מוזיאון השעווה**: אטרקציה משפחתית.",
    iguazu_activities_recommended: "- הליכה בגשרים בצד הארגנטינאי והברזילאי של המפלים.\n- הרפתקה גדולה (שייט בסירת גומי מתחת למפלים) – מתאים לגילאים מתאימים וללא מגבלות בריאותיות.\n- שייט בשקיעה בנהר איגואסו.\n- ביקור בנקודת שלושת הגבולות בשקיעה.\n- סיור בחנות הדיוטי פרי (הצד הארגנטינאי).\n- ביקור בפארק הציפורים (הצד הברזילאי, אם חוצים את הגבול).\n- חקירת הפארק הלאומי במסלולים השונים שלו.",
    iguazu_gastronomy_highlight: "הגסטרונומיה בפוארטו איגואסו מציעה שילוב של מטבח אזורי (דגי נהר, מנדיוקה), עם אפשרויות למאכלים בינלאומיים וגריל. חשוב לחפש מקומות המציעים מגוון ולשאול על אפשרויות לדיאטות מיוחדות.\n\n### מסעדות מומלצות\n| מסעדה                       | סוג                       | ללא גלוטן | ללא סוכר |\n|------------------------------|:--------------------------:|:----------:|:----------:|\n| לה ואקה אנמורדה             | גריל / בשרים              | ✔️        | ❌         |\n| אקווה רסטורנט                | מטבח שף / פיוז'ן           | ✔️        | ✔️         |\n| לו דה חואן                   | דגי נהר / אזורי           | ✔️        | ❌         |\n| אל קינצ'ו דל טיו קרידו      | גריל / מופע פולקלור       | ✔️        | ❌         |\n\n### קונדיטוריות ובתי קפה\n| קונדיטוריה                   | סוג                       | ללא גלוטן | ללא סוכר |\n|------------------------------|:--------------------------:|:----------:|:----------:|\n| קפה סנטרל                   | קפיטריה / מאפייה          | ❌         | ❌         |\n| גלידרייה קרמולטי            | גלידות                    | ✔️        | ✔️         |",
    iguazu_accommodation_examples: "- מלון גראן מליה איגואסו (בתוך הפארק הלאומי)\n- אמריאן פורטל דל איגואסו\n- מלונות ופונדקים קטנים יותר במרכז פוארטו איגואסו\n- Airbnb או בקתות באזורים שקטים יותר.",
    iguazu_coordinates: "- פוארטו איגואסו: 25° 36' דרום 54° 34' מערב\n- מפלי איגואסו: 25° 40' דרום 54° 26' מערב",
    iguazu_events_agenda_text: "- **(יש לבדוק לוח אירועים מקומי)**: אירועים תרבותיים או פסטיבלים מקומיים.\n- **(יש לבדוק לוח אירועים מקומי)**: האטרקציה העיקרית היא המפלים והטבע.",
    iguazu_events_agenda_link_text: "הורד לוח אירועים מלא בפורמט iCal (.zip)",
    iguazu_events_agenda_link_url: "../docs/agenda/ariflier1970@gmail.com.ical.zip",
    iguazu_family_tips: "- קחו דוחה יתושים (חיוני), קרם הגנה, כובע ובגדים קלים.\n- נעלו נעליים נוחות ומונעות החלקה לגשרים.\n- בהרפתקה הגדולה, תירטבו לחלוטין; קחו בגדים להחלפה.\n- אם מתכננים לחצות לברזיל, בדקו את דרישות הוויזה והדרכון לכל בני המשפחה.\n- קופים וקואטים נפוצים בפארק, אל תאכילו אותם ואל תיגעו בהם.\n- מומלץ לשתות מים מינרליים.",
    iguazu_budget_table: "| קונספט                      | מחיר משוער (USD) |\n|-------------------------------|:--------------------:|\n| לינה (לילה, משפחה)          | 60–150               |\n| אוכל (ליום, משפחה)          | 30–75                |\n| תחבורה מקומית (ליום)        | 5–20                 |\n| פעילויות וסיורים (ליום)     | 30–80                |\n| כניסות למוזיאונים/אטרקציות | 25–40 (רק מפלים)   |",
    iguazu_cultural_tips: "- תרבות האזור מושפעת מאוד משלושת הגבולות (ארגנטינה, ברזיל, פרגוואי).\n- גוארני היא שפה רשמית-משותפת באזורים מסוימים, אם כי ספרדית היא הדומיננטית.\n- מנדיוקה היא מזון בסיסי בתזונה המקומית.\n- חמימות האקלים משתקפת בקצב החיים.",
    iguazu_map_link_text: "צפה במפה גדולה יותר של פוארטו איגואסו",
    iguazu_map_link_url: "https://www.openstreetmap.org/#map=13/-25.594/-54.467",

    corrientes_dates_duration: "- **שהייה**: 24/10 עד 27/10 (4 ימים) ו-29/10 (יום אחד)\n- **הערה**: ה-README.md מציין חזרה לבואנוס איירס, המסלול המקורי של בואנוס איירס מציין \"טיסה מקוריינטס ללילה האחרון\". הותאם לכלול את הלילה האחרון הזה למעבר.\n- **איך מגיעים**: טיסה מאיגואסו / אוטובוס למרחקים ארוכים.",
    corrientes_must_see: "- **טיילת חנרל סן מרטין**: לטיולים, שקיעות מעל הנהר ופנאי.\n- **גשר חנרל בלגרנו**: גשר סמלי המחבר את קוריינטס עם רסיסטנסיה.\n- **המוזיאון המחוזי לאמנויות יפות \"ד\"ר חואן רמון וידאל\"**: עם יצירות של אמנים מקוריינטס.\n- **תיאטרון חואן דה ורה הרשמי**: פנינה ארכיטקטונית עם לוח אירועים תרבותי חשוב.\n- **מנסנה פרנסיסקנה**: מתחם היסטורי-דתי.\n- **קרנבל קוריינטס**: אם הביקור חופף לעונה (ינואר/פברואר).\n- **פארק מיטרה**: אחד הריאות הירוקות של העיר.",
    corrientes_activities_recommended: "- טיולים וספורט בטיילת.\n- ביקור בעיר העתיקה ובכנסיות שלה.\n- הנאה ממופע צ'ממה (מוזיקה טיפוסית).\n- חקירת שווקי האומנות לקניית מוצרי עור או קרמיקה.\n- דיג ספורטיבי בנהר פרנה (עם מדריכים מורשים).\n- ביקור במוזיאון הקרנבל (בעונה הנמוכה).\n- טיול יום מלא לאסטרוס דל איברה מקוריינטס (אם כי לינה שם היא האידיאלית).",
    corrientes_gastronomy_highlight: "הגסטרונומיה של קוריינטס מושפעת מאוד מהנהר, עם מנות המבוססות על דגים (דוראדו, סורובי, פאקו), והמסורת הגוארנית (מנדיוקה, צ'יפה). יש אפשרויות לכל הטעמים, כולל גריל ומטבח בינלאומי.\n\n### מסעדות מומלצות\n| מסעדה                  | סוג                       | ללא גלוטן | ללא סוכר |\n|-------------------------|:--------------------------:|:----------:|:----------:|\n| לה פריז'ה דל טיו      | גריל / בשרים              | ✔️        | ❌         |\n| פיצרייה לה פרביה       | פיצרייה                   | ❌         | ❌         |\n| אל סולר דל פרנה        | דגי נהר / אזורי           | ✔️        | ❌         |\n| לה רוסיטה              | אוכל ביתי                 | ✔️        | ✔️         |\n\n### קונדיטוריות ובתי קפה\n| קונדיטוריה              | סוג                       | ללא גלוטן | ללא סוכר |\n|-------------------------|:--------------------------:|:----------:|:----------:|\n| לה ביילה (מקומי)       | קפיטריה / קונדיטוריה      | ❌         | ❌         |\n| קפה מרטינס             | קפיטריה (רשת)            | ✔️        | ✔️         |\n| מאפיות מקומיות         | צ'יפה, מוצרים אזוריים     | ✔️        | ✔️         |",
    corrientes_accommodation_examples: "- מלון דה טוריסמו קוריינטס\n- הוסטל דל ריו\n- דירות במרכז או ליד הטיילת\n- Airbnb בשכונות מגורים.",
    corrientes_coordinates: "- 27° 28' דרום 58° 49' מערב",
    corrientes_events_agenda_text: "- **(יש לבדוק לוח אירועים מקומי)**: פסטיבל הצ'ממה הלאומי (ינואר).\n- **(יש לבדוק לוח אירועים מקומי)**: קרנבלים בקוריינטס (ינואר/פברואר).",
    corrientes_events_agenda_link_text: "הורד לוח אירועים מלא בפורמט iCal (.zip)",
    corrientes_events_agenda_link_url: "../docs/agenda/ariflier1970@gmail.com.ical.zip",
    corrientes_family_tips: "- העיר חמה ולחה; קחו בגדים קלים, כובע וקרם הגנה.\n- חיוני לקחת דוחה יתושים, במיוחד אם מתכננים להיות ליד הנהר.\n- תיהנו מהטיילת בשקיעה, זהו טיול פופולרי מאוד.\n- תושבי קוריינטס אדיבים ומכניסי אורחים מאוד.\n- שקלו טיול בסירה כדי לראות את העיר מהנהר.",
    corrientes_budget_table: "| קונספט                      | מחיר משוער (USD) |\n|-------------------------------|:--------------------:|\n| לינה (לילה, משפחה)          | 40–100               |\n| אוכל (ליום, משפחה)          | 25–60                |\n| תחבורה מקומית (ליום)        | 3–10                 |\n| פעילויות וסיורים (ליום)     | 10–40                |\n| כניסות למוזיאונים/אטרקציות | 0–10                 |",
    corrientes_cultural_tips: "- הצ'ממה הוא קצב המוזיקה והריקוד המובהק של המחוז.\n- גוארני היא שפה רשמית-משותפת והשפעתה מורגשת בניב המקומי.\n- האדיקות לבתולה מאיטטי חזקה מאוד.\n- טררה (מאטה קר) הוא משקה פופולרי מאוד, במיוחד בקיץ.",
    corrientes_map_link_text: "צפה במפה גדולה יותר של קוריינטס",
    corrientes_map_link_url: "https://www.openstreetmap.org/#map=13/-27.468/-58.835",

    ibera_dates_duration: "- **שהייה**: 27/10 עד 29/10 (3 ימים)\n- **איך מגיעים**: מקוריינטס או פוסאדס באוטובוס/הסעה/רכב לקולוניה קרלוס פלגריני.",
    ibera_must_see: "- **לגונת איברה**: גוף המים העיקרי לטיולי שייט.\n- **גשרי לגונת איברה**: שבילים מוגבהים לצפייה בבעלי חיים.\n- **מרכז המידע של האסטרוס**: מידע על המערכת האקולוגית ובעלי החיים.\n- **מצפי ציפורים**: נקודות אסטרטגיות לצפייה בציפורים.\n- **הכפר קולוניה קרלוס פלגריני**: נקודת הגישה התיירותית, עם הפונדקים והשלווה שבה.\n- **שבילי פרשנות סביבתית**: להליכה ולמידה על הצומח והחי המקומיים.",
    ibera_activities_recommended: "- ספארי שייט בלגונת איברה לצפייה בקיימנים, קפיברות, איילי ביצות וציפורים.\n- הליכות מודרכות בשבילים לצפייה בבעלי חיים יבשתיים.\n- ספארי לילה (אופציונלי, לצפייה בחיות לילה).\n- רכיבה על סוסים בסביבה (לגילאים מתאימים).\n- שייט בקאנו או קיאק (באזורים מותרים ועם מדריך).\n- צפייה בציפורים.\n- הנאה מהשקט והמגע עם הטבע.",
    ibera_gastronomy_highlight: "הגסטרונומיה באיברה מבוססת על בישול ביתי ואזורי, עם מרכיבים טריים מהאזור. הפונדקים בדרך כלל מציעים פנסיון מלא עם מנות טיפוסיות, ולעיתים קרובות מתאימים עצמם לצרכים תזונתיים ספציפיים אם מודיעים מראש.\n\n### מסעדות מומלצות (בדרך כלל בפונדקים)\n| מסעדה                  | סוג                       | ללא גלוטן | ללא סוכר |\n|-------------------------|:--------------------------:|:----------:|:----------:|\n| פוסאדה דה לה לגונה     | אוכל ביתי / אזורי           | ✔️        | ✔️         |\n| אירופה לודג'            | אוכל ביתי / אזורי           | ✔️        | ✔️         |\n| רינקון דל קרפינצ'ו     | אוכל ביתי / אזורי           | ✔️        | ✔️         |\n\n### קונדיטוריות ובתי קפה\n| קונדיטוריה              | סוג                       | ללא גלוטן | ללא סוכר |\n|-------------------------|:--------------------------:|:----------:|:----------:|\n| (אפשרויות מוגבלות)    | בעיקר בפונדקים             | ✔️        | ✔️         |\n| מינימרקטים             | להצטיידות                  | ✔️        | ✔️         |",
    ibera_accommodation_examples: "- פוסאדה דה לה לגונה\n- אירופה לודג'\n- בקתות ומקומות אירוח כפריים בקולוניה קרלוס פלגריני\n- קמפינג (להרפתקנים יותר).",
    ibera_coordinates: "- קולוניה קרלוס פלגריני: 28° 32' דרום 57° 11' מערב",
    ibera_events_agenda_text: "- **(יש לבדוק לוח אירועים מקומי)**: הדגש הוא על הטבע וחיות הבר.\n- **(יש לבדוק לוח אירועים מקומי)**: ייתכנו הרצאות או סדנאות על שימור.",
    ibera_events_agenda_link_text: "הורד לוח אירועים מלא בפורמט iCal (.zip)",
    ibera_events_agenda_link_url: "../docs/agenda/ariflier1970@gmail.com.ical.zip",
    ibera_family_tips: "- **דוחה יתושים הוא קריטי לחלוטין.** קחו כמות גדולה.\n- קרם הגנה, כובע ובגדים עם שרוולים ארוכים להגנה מהשמש והיתושים.\n- משקפת לצפייה בציפורים ובעלי חיים.\n- הזמינו לינה וטיולים מראש, ההיצע מוגבל.\n- רוב הפעילויות הן באוויר הפתוח; היו מוכנים לתנאי מזג אוויר שונים.\n- אידיאלי לילדים המתעניינים בטבע ובבעלי חיים.",
    ibera_budget_table: "| קונספט                      | מחיר משוער (USD) |\n|-------------------------------|:--------------------:|\n| לינה (לילה, משפחה)          | 70–200+ (כולל טיולים/ארוחות) |\n| אוכל (ליום, משפחה)          | כלול בפונדק (בדרך כלל)   |\n| תחבורה מקומית (ליום)        | 0–10 (בתוך הכפר)        |\n| פעילויות וסיורים (ליום)     | 50–100+ (תלוי בטיולים)  |\n| כניסות למוזיאונים/אטרקציות | 0–10                 |",
    ibera_cultural_tips: "- תרבות הגוארני והכבוד לטבע חזקים מאוד.\n- קצב החיים רגוע ובמגע עם הטבע.\n- הכנסת האורחים של המקומיים בולטת.\n- לימוד כמה מילים בגוארני יכול להיות מהנה לילדים.",
    ibera_map_link_text: "צפה במפה גדולה יותר של אסטרוס דל איברה (קולוניה קרלוס פלגריני)",
    ibera_map_link_url: "https://www.openstreetmap.org/#map=13/-28.537/-57.140",
    
    // Transport Leg Specific Keys (HE)
    transport_mean_bus: "אוטובוס",
    transport_time_4h: "4 שעות",
    transport_price_20k_ars: "{price} ARS",
    // ... Add more generic keys for transport means and times as needed, and specific ones from before ...
    aerolineas_argentinas: "אארולינאס ארחנטינס",
    aerolineas_url: "https://www.aerolineas.com.ar/",
    via_bariloche: "ויה ברילוצ'ה",
    viabariloche_url: "https://www.viabariloche.com.ar/",
    flybondi: "פלייבונדי",
    flybondi_url: "https://flybondi.com/",
    jetsmart: "ג'טסמארט",
    jetsmart_url: "https://jetsmart.com/",
    andesmar: "אנדסמאר",
    andesmar_url: "https://www.andesmar.com/",
    crucero_del_norte: "קרוסרו דל נורטה",
    crucerodelnorte_url: "https://www.crucerodelnorte.com.ar/",
    aguape_lodge_transfer: "אגואפה לודג' (דוגמה להסעה ממקום לינה)",
    
    transport_price_ars_generic: "{price} ARS",

    // Itinerary Program Section (HE)
    itinerary_program_title: "ניתוח והצעות למסלול",
    itinerary_program_current_plan_title: "סיכום התוכנית הנוכחית שלך:",
    itinerary_program_duration_label: "משך שהייה ב-{cityName}:",
    itinerary_program_optimization_tips_title: "טיפים לייעול הטיול שלך:",
    itinerary_optimization_tip_1: "קחו בחשבון זמני נסיעה ומנוחה בין יעדים ארוכים למניעת עייפות, במיוחד עם ילדים.",
    itinerary_optimization_tip_2: "הזמינו טיסות ואוטובוסים מראש, במיוחד בעונת השיא, כדי להבטיח זמינות ומחירים טובים יותר.",
    itinerary_optimization_tip_3: "בדקו את הלוגיסטיקה להגעה ליעדים מרוחקים כמו אסטרוס דל איברה (הסעות מערים קרובות).",
    itinerary_optimization_tip_4: "השאירו גמישות בימים מסוימים. יום חופשי או עם פחות פעילויות מתוכננות יכול להועיל.",
    itinerary_optimization_tip_5: "קבצו פעילויות לפי אזור גאוגרפי בתוך כל עיר כדי למזער זמני נסיעה.",
    itinerary_optimization_tip_6: "בטיסות פנים, בדקו את מדיניות הכבודה, שכן הן נוטות להיות מגבילות יותר מטיסות בינלאומיות.",
  },
};


const userProvidedTransportData: (string | number | (string | number)[])[] = [
    ["Buenos Aires", "Rosario", "Bus", "4 h", 20000, "<a href=\"https://busplus.com.ar/\" target=\"_blank\">BusPlus</a>"],
    ["Rosario", "Mendoza", "Bus", "13 h", 50000, "<a href=\"https://www.andesmar.com/\" target=\"_blank\">Andesmar</a>"],
    ["Mendoza", "Malargüe", "Bus", "6 h", 18000, "<a href=\"https://www.catainternacional.com/\" target=\"_blank\">CATA</a>"],
    ["Malargüe", "Jujuy", "Vuelo + Bus", "10 h", 110000, "<a href=\"https://www.centraldepasajes.com.ar/cdp/pasajes-micro/mendoza/san-salvador-de-jujuy\" target=\"_blank\">Central de Pasajes</a>"], // Company name simplified
    ["Jujuy", "Iguazú", "Vuelo", "2 h", 85000, "<a href=\"https://www.aerolineas.com.ar/\" target=\"_blank\">Aerolíneas Argentinas</a>"],
    ["Iguazú", "Corrientes", "Bus", "9 h", 40000, "<a href=\"https://www.crucerodelnorte.com.ar/\" target=\"_blank\">Crucero del Norte</a>"],
    ["Corrientes", "Iberá", "Remis/Transfer", "4 h", 60000, "<a href=\"https://corrientes.tur.ar/producto/esterosdelibera/\" target=\"_blank\">Transfers Iberá</a>"] // Company name simplified
  ];

const cityNameToKeyMap: Record<string, string> = {
    "Buenos Aires": "buenosaires_title",
    "Rosario": "rosario_title",
    "Mendoza": "mendoza_title",
    "Malargüe": "malargue_title",
    "Jujuy": "jujuy_title",
    "Iguazú": "iguazu_title",
    "Corrientes": "corrientes_title",
    "Iberá": "ibera_title"
};

export const TRANSPORT_DATA: TransportLeg[] = userProvidedTransportData.map((item, index) => ({
    id: (index + 1).toString(),
    fromKey: cityNameToKeyMap[item[0] as string] || (item[0] as string),
    toKey: cityNameToKeyMap[item[1] as string] || (item[1] as string),
    meanKey: `transport_mean_${(item[2] as string).toLowerCase().replace(/\s*\+\s*/, '_').replace(/\s+/, '_')}`, // e.g. transport_mean_bus or transport_mean_vuelo_bus
    timeKey: `transport_time_${(item[3] as string).toLowerCase().replace(/\s+/, '')}`, // e.g. transport_time_4h
    priceKey: 'transport_price_ars_generic', // Use a generic key for ARS prices
    company: item[5] as string, // This now directly holds the HTML string
    basePriceARS: item[4] as number,
    // companyUrlKey is not used if company field has HTML directly
}));

// Add dynamic translation keys for means and times if not already present
userProvidedTransportData.forEach(item => {
    const meanKey = `transport_mean_${(item[2] as string).toLowerCase().replace(/\s*\+\s*/, '_').replace(/\s+/, '_')}`;
    const timeKey = `transport_time_${(item[3] as string).toLowerCase().replace(/\s+/, '')}`;
    if (!translations.es[meanKey]) {
        translations.es[meanKey] = item[2] as string;
        translations.he[meanKey] = item[2] as string; // Placeholder, translate properly
    }
    if (!translations.es[timeKey]) {
        translations.es[timeKey] = item[3] as string;
        translations.he[timeKey] = item[3] as string; // Placeholder, translate properly
    }
});
// This was already done manually in the translations object, but this generic key is good
if (!translations.es['transport_price_ars_generic']) {
    translations.es['transport_price_ars_generic'] = "{price} ARS";
}
if (!translations.he['transport_price_ars_generic']) {
    translations.he['transport_price_ars_generic'] = "{price} ARS";
}


// Ensure Hebrew translations for dynamic keys if not provided by user
// This is a simplified example; for a real app, these would be properly translated.
// For 'Vuelo + Bus'
if (!translations.he['transport_mean_vuelo_bus']) translations.he['transport_mean_vuelo_bus'] = "טיסה + אוטובוס";
// For 'Remis/Transfer'
if (!translations.he['transport_mean_remis/transfer']) translations.he['transport_mean_remis/transfer'] = "מונית/הסעה";
// For '10 h'
if (!translations.he['transport_time_10h']) translations.he['transport_time_10h'] = "10 שעות";
// For '2 h'
if (!translations.he['transport_time_2h']) translations.he['transport_time_2h'] = "שעתיים";
// For '9 h'
if (!translations.he['transport_time_9h']) translations.he['transport_time_9h'] = "9 שעות";
// For '13 h'
if (!translations.he['transport_time_13h']) translations.he['transport_time_13h'] = "13 שעות";
// For '6 h'
if (!translations.he['transport_time_6h']) translations.he['transport_time_6h'] = "6 שעות";


// For placeholder images if real ones are missing
export const DEFAULT_CITY_IMAGE = 'https://picsum.photos/seed/argentina/600/400';

export const POLYGON_API_KEY = process.env.REACT_APP_POLYGON_API_KEY || ""; 
export const GEMINI_API_KEY = process.env.API_KEY || "";
// Ensure all city detail markdowns are present in translations.es and translations.he
// Example for Mendoza (add others similarly if not already present)
// translations.es.mendoza_dates_duration = "- **Estadía**: ..."; (already done by previous inputs)
// ...and so on for all cities and all detailed fields.
// This file is now quite large. Ensure all keys used in components are defined here for ES and HE.
