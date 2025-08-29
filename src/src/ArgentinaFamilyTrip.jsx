import { useState } from "react";
import { Card, CardContent } from './components/ui/Card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './components/ui/Tabs';
import { Languages } from "lucide-react";

export default function ArgentinaFamilyTrip() {
  const [language, setLanguage] = useState("es");
  // const [currency, setCurrency] = useState("USD"); // Currency state is defined but not used in this snippet

  const translations = {
    es: {
      days: "días",
      from: "Del",
      to: "al",
      title: "Argentina: Aventura Familiar de 30 Días",
      activitiesLabel: "Actividades"
    },
    en: {
      days: "days",
      from: "From",
      to: "to",
      title: "Argentina: 30-Day Family Adventure",
      activitiesLabel: "Activities"
    },
    he: {
      days: "ימים",
      from: "מ",
      to: "עד",
      title: "ארגנטינה: הרפתקה משפחתית של 30 יום",
      activitiesLabel: "פעילויות"
    }
  };

  const t = translations[language];

  const itinerary = [
    {
      city: "Buenos Aires",
      days: 5,
      dateRange: "29/09 - 03/10",
      activities: [
        "<a href='https://turismo.buenosaires.gob.ar/es/atractivo/espectaculo-de-tango' target='_blank'>Espectáculo de tango</a>",
        "<a href='https://turismo.buenosaires.gob.ar/es/atractivo/puerto-madero' target='_blank'>Puerto Madero</a>",
        "<a href='https://museobellasartes.gob.ar/' target='_blank'>Museo Nacional de Bellas Artes</a>",
        "<a href='https://turismo.buenosaires.gob.ar/es/atractivo/caminito' target='_blank'>Barrio La Boca</a>",
        "<a href='https://turismo.buenosaires.gob.ar/es/atractivo/jardin-japones' target='_blank'>Palermo y Jardín Japonés</a>"
      ]
    },
    {
      city: "Rosario",
      days: 3,
      dateRange: "04/10 - 06/10",
      activities: [
        "<a href='https://www.rosario.gob.ar/web/ciudad/monumento-a-la-bandera' target='_blank'>Monumento a la Bandera</a>",
        "<a href='https://rosario.tur.ar/que-hacer/costanera' target='_blank'>Costanera del Río Paraná</a>",
        "Visita a la familia"
      ]
    },
    {
      city: "Bariloche",
      days: 4,
      dateRange: "07/10 - 10/10",
      activities: [
        "<a href='https://www.argentina.gob.ar/parquesnacionales/nahuelhuapi' target='_blank'>Parque Nacional Nahuel Huapi</a>",
        "<a href='https://barilocheturismo.gob.ar/cerro-campanario' target='_blank'>Cerro Campanario</a>",
        "<a href='https://barilocheturismo.gob.ar/cerro-tronador' target='_blank'>Cerro Tronador</a>",
        "<a href='https://frantomchocolates.com/' target='_blank'>Clase de chocolate</a>"
      ]
    },
    {
      city: "Mendoza",
      days: 3,
      dateRange: "11/10 - 13/10",
      activities: [
        "<a href='https://www.mendoza.tur.ar/' target='_blank'>Viñedos</a>",
        "<a href='https://www.mendoza.tur.ar/andinos' target='_blank'>Andes</a>",
        "Ciclismo"
      ]
    },
    {
      city: "Malargüe",
      days: 2,
      dateRange: "14/10 - 15/10",
      activities: [
        "Paisajes rurales"
      ]
    },
    {
      city: "Jujuy",
      days: 3,
      dateRange: "16/10 - 18/10",
      activities: [
        "<a href='https://www.argentina.gob.ar/turismonaturaleza/jujuy/purmamarca' target='_blank'>Cerro de Siete Colores</a>",
        "<a href='https://www.argentina.gob.ar/turismonaturaleza/jujuy/purmamarca' target='_blank'>Purmamarca</a>"
      ]
    }
  ];

  return (
    <div className="p-4">
      <div className="flex items-center mb-4">
        <Languages className="mr-2" />
        <Tabs value={language} onValueChange={setLanguage}>
          <TabsList>
            <TabsTrigger value="es">Español</TabsTrigger>
            <TabsTrigger value="en">English</TabsTrigger>
            <TabsTrigger value="he">עברית</TabsTrigger>
          </TabsList>
        </Tabs>
        {/* Currency selection could be added here similarly */}
      </div>
      <h1 className="text-2xl font-bold mb-4">{t?.title}</h1>
      <h2 className="text-xl font-semibold mb-2">{t?.activitiesLabel}</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {itinerary.map((item, index) => (
          <Card key={index}>
            <CardContent className="p-4">
              <h3 className="font-semibold">{item.city}</h3>
              <p className="text-sm text-gray-500">{t?.from} {item.dateRange.split(' - ')[0]} {t?.to} {item.dateRange.split(' - ')[1]}</p>
              <p className="text-sm text-gray-500">{item.days} {t?.days}</p>
              <ul className="mt-2 list-disc list-inside">
                {item.activities.map((activity, i) => (
                  <li key={i} dangerouslySetInnerHTML={{ __html: activity }} />
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}