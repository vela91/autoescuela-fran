import type { BlogCategory, ContentBlock, Language } from './blog-types'

export interface BlogPostTranslation {
  title: string
  excerpt: string
  date: string
  readingTime: string
  content: ContentBlock[]
}

export interface BlogPost {
  slug: string
  category: BlogCategory
  author: string
  image: string
  publishedAt: string
  updatedAt?: string
  keywords: string[]
  translations: Record<Language, BlogPostTranslation>
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'consejos-aprobar-teorico',
    category: 'tips',
    author: 'Equipo Autoescola Fran',
    image: '/blog/consejos-aprobar-teorico.svg',
    publishedAt: '2024-01-15',
    updatedAt: '2024-01-15',
    keywords: [
      'autoescuela salou',
      'aprobado examen teorico',
      'consejos carnet coche',
      'teoria permiso b',
    ],
    translations: {
      es: {
        title: 'Consejos para aprobar el teórico a la primera',
        excerpt:
          'Descubre las mejores estrategias para estudiar y aprobar el examen teórico de conducir sin complicaciones.',
        date: '15 de Enero, 2024',
        readingTime: '7 minutos de lectura',
        content: [
          {
            type: 'paragraph',
            text: 'El examen teórico es el primer gran paso hacia tu carnet de conducir. Prepararte con método y constancia marca la diferencia entre repetir la prueba o aprobar a la primera. Estas recomendaciones condensan la experiencia de nuestros instructores y de cientos de alumnos que ya lo consiguieron.',
          },
          {
            type: 'heading',
            text: 'Organiza un plan de estudio realista',
          },
          {
            type: 'paragraph',
            text: 'Divide el temario por bloques semanales y fija objetivos alcanzables. Alterna la lectura del manual con resúmenes propios o fichas de repaso para reforzar los conceptos más complejos.',
          },
          {
            type: 'list',
            items: [
              'Reserva al menos 30 minutos diarios para el manual.',
              'Crea un calendario visible con los temas ya repasados.',
              'Refuerza lo aprendido explicando los conceptos a otra persona.',
            ],
          },
          {
            type: 'heading',
            text: 'Practica test oficiales desde el inicio',
          },
          {
            type: 'paragraph',
            text: 'Hacer test no es solo una fase final: te ayuda a detectar lagunas y familiarizarte con la dinámica real del examen. Empieza con series cortas y ve aumentando la dificultad conforme ganes seguridad.',
          },
          {
            type: 'list',
            items: [
              'Identifica los errores recurrentes y vuelve al manual para aclararlos.',
              'Simula el examen completo al menos dos veces por semana.',
              'Controla el tiempo y practica a comprender la pregunta antes de responder.',
            ],
          },
          {
            type: 'heading',
            text: 'Cuida tu concentración el día del examen',
          },
          {
            type: 'paragraph',
            text: 'La noche anterior repasa ligeras notas, descansa bien y evita el estudio intensivo de última hora. Llega con antelación, respira profundo y lee cada pregunta hasta el final antes de marcar tu respuesta.',
          },
        ],
      },
      ca: {
        title: "Consells per aprovar el teòric a la primera",
        excerpt:
          "Descobreix les millors estratègies per estudiar i aprovar l'examen teòric de conduir sense complicacions.",
        date: '15 de Gener, 2024',
        readingTime: '7 minuts de lectura',
        content: [
          {
            type: 'paragraph',
            text: "L'examen teòric és el primer gran pas cap al teu permís de conduir. Preparar-te amb mètode i constància marca la diferència entre repetir la prova o aprovar a la primera. Aquests consells recullen l'experiència dels nostres instructors i de centenars d'alumnes que ja ho han aconseguit.",
          },
          {
            type: 'heading',
            text: 'Organitza un pla d’estudi realista',
          },
          {
            type: 'paragraph',
            text: 'Divideix el temari per blocs setmanals i fixa objectius assolibles. Alterna la lectura del manual amb resums propis o fitxes de repàs per reforçar els conceptes més complexos.',
          },
          {
            type: 'list',
            items: [
              'Reserva com a mínim 30 minuts diaris per al manual.',
              'Crea un calendari visible amb els temes ja repassats.',
              'Reforça el que has après explicant els conceptes a una altra persona.',
            ],
          },
          {
            type: 'heading',
            text: 'Practica tests oficials des del primer dia',
          },
          {
            type: 'paragraph',
            text: "Fer tests no és només una fase final: t'ajuda a detectar mancances i a familiaritzar-te amb la dinàmica real de l'examen. Comença amb sèries curtes i augmenta la dificultat a mesura que guanyis seguretat.",
          },
          {
            type: 'list',
            items: [
              'Identifica els errors recurrents i torna al manual per aclarir-los.',
              'Simula l’examen complet almenys dues vegades per setmana.',
              'Controla el temps i llegeix bé la pregunta abans de respondre.',
            ],
          },
          {
            type: 'heading',
            text: 'Cuida la concentració el dia de la prova',
          },
          {
            type: 'paragraph',
            text: "La nit anterior repassa només apunts lleugers, descansa bé i evita estudiar de manera intensiva a última hora. Arriba amb antelació, respira profundament i llegeix cada pregunta fins al final abans de marcar la resposta.",
          },
        ],
      },
      en: {
        title: 'Tips to pass the theory test on the first try',
        excerpt:
          'Discover the best strategies to study and pass the driving theory exam without complications.',
        date: 'January 15, 2024',
        readingTime: '7 minute read',
        content: [
          {
            type: 'paragraph',
            text: 'The theory test is the first big milestone on your way to a driving licence. Preparing with structure and consistency is what separates repeating the test from passing it on the first attempt. These guidelines summarize the knowledge of our instructors and hundreds of successful students.',
          },
          {
            type: 'heading',
            text: 'Create a realistic study schedule',
          },
          {
            type: 'paragraph',
            text: 'Break the syllabus into weekly blocks and set attainable goals. Alternate reading the manual with your own summaries or flashcards to reinforce the trickiest topics.',
          },
          {
            type: 'list',
            items: [
              'Block at least 30 minutes per day for the handbook.',
              'Keep a visible calendar with the chapters you have completed.',
              'Explain key concepts to someone else to confirm you understand them.',
            ],
          },
          {
            type: 'heading',
            text: 'Practice official mock tests from day one',
          },
          {
            type: 'paragraph',
            text: 'Mock tests are not only a final step: they help you spot weak areas and get used to the real exam format. Start with short sessions and increase the challenge as your confidence grows.',
          },
          {
            type: 'list',
            items: [
              'Track recurring mistakes and revisit the manual to clarify them.',
              'Simulate the full exam at least twice per week.',
              'Time yourself and read each question carefully before answering.',
            ],
          },
          {
            type: 'heading',
            text: 'Protect your focus on exam day',
          },
          {
            type: 'paragraph',
            text: 'The night before, skim light notes, rest properly and avoid last-minute cramming. Arrive early, take deep breaths and read every question all the way through before confirming your choice.',
          },
        ],
      },
    },
  },
  {
    slug: 'rutas-practicas-salou',
    category: 'practical',
    author: 'Instructor Fran',
    image: '/blog/rutas-practicas-salou.svg',
    publishedAt: '2024-01-10',
    updatedAt: '2024-01-10',
    keywords: [
      'practicas salou',
      'rutas examen practico',
      'conducir costa dorada',
      'autoescuela fran practicas',
    ],
    translations: {
      es: {
        title: 'Rutas prácticas por Salou y alrededores',
        excerpt:
          'Las mejores rutas para practicar la conducción en Salou, Cambrils y la zona de la Costa Dorada.',
        date: '10 de Enero, 2024',
        readingTime: '6 minutos de lectura',
        content: [
          {
            type: 'paragraph',
            text: 'Practicar en escenarios variados es clave para llegar al examen práctico con seguridad. Las rutas que proponemos combinan tráfico real, maniobras exigentes y condiciones que el examinador valora positivamente.',
          },
          {
            type: 'heading',
            text: 'Planifica cada sesión con objetivos concretos',
          },
          {
            type: 'paragraph',
            text: 'Antes de arrancar el motor define qué quieres trabajar: giros cerrados, glorietas, aparcamientos o gestión de prioridades. Así aprovecharás mejor el tiempo y los instructores podrán darte indicaciones específicas.',
          },
          {
            type: 'heading',
            text: 'Circuito urbano en Salou',
          },
          {
            type: 'list',
            items: [
              'Zona de la Via Roma para practicar semáforos consecutivos y pasos de peatones.',
              'Calles del barrio de Ponent, con estacionamientos en línea y en batería.',
              'Glorietas de la Plaça Europa para perfeccionar la observación y el cambio de carril.',
            ],
          },
          {
            type: 'heading',
            text: 'Tramos interurbanos recomendados',
          },
          {
            type: 'paragraph',
            text: 'Es importante acostumbrarse a vías rápidas y carreteras secundarias. Combina los itinerarios urbanos con estos tramos para ganar visión periférica y control del vehículo a distintas velocidades.',
          },
          {
            type: 'list',
            items: [
              'C-31B hasta Cambrils para trabajar incorporaciones y salidas seguras.',
              'TV-3146 hacia Vila-seca, ideal para practicar adelantamientos controlados.',
              'Camino de la Pedrera para progresar con curvas enlazadas y gestión de marchas.',
            ],
          },
          {
            type: 'heading',
            text: 'Consejos finales para aprovechar la ruta',
          },
          {
            type: 'list',
            items: [
              'Analiza con tu instructor los puntos a mejorar al final de cada trayecto.',
              'Varía los horarios para experimentar diferentes niveles de tráfico.',
              'Repite las zonas que más se te resisten hasta que las resuelvas con calma.',
            ],
          },
        ],
      },
      ca: {
        title: 'Rutes pràctiques per Salou i voltants',
        excerpt:
          'Les millors rutes per practicar la conducció a Salou, Cambrils i la zona de la Costa Daurada.',
        date: '10 de Gener, 2024',
        readingTime: '6 minuts de lectura',
        content: [
          {
            type: 'paragraph',
            text: 'Practicar en escenaris variats és clau per arribar a l’examen pràctic amb seguretat. Les rutes que proposem combinen trànsit real, maniobres exigents i condicions que l’examinador valora molt positivament.',
          },
          {
            type: 'heading',
            text: 'Planifica cada sessió amb objectius concrets',
          },
          {
            type: 'paragraph',
            text: 'Abans d’engegar el motor defineix què vols treballar: girs tancats, rotondes, estacionaments o gestió de prioritats. Així aprofitaràs millor el temps i els instructors podran donar-te indicacions específiques.',
          },
          {
            type: 'heading',
            text: 'Circuit urbà a Salou',
          },
          {
            type: 'list',
            items: [
              'Zona de la Via Roma per practicar semàfors consecutius i passos de vianants.',
              'Carrers del barri de Ponent, amb estacionaments en línia i en bateria.',
              'Rotondes de la Plaça Europa per perfeccionar l’observació i el canvi de carril.',
            ],
          },
          {
            type: 'heading',
            text: 'Trams interurbans recomanats',
          },
          {
            type: 'paragraph',
            text: 'És important acostumar-se a vies ràpides i carreteres secundàries. Combina els itineraris urbans amb aquests trams per guanyar visió perifèrica i control del vehicle a diferents velocitats.',
          },
          {
            type: 'list',
            items: [
              'C-31B fins a Cambrils per treballar incorporacions i sortides segures.',
              'TV-3146 cap a Vila-seca, ideal per practicar avançaments controlats.',
              'Camí de la Pedrera per progressar amb corbes enllaçades i gestió de marxes.',
            ],
          },
          {
            type: 'heading',
            text: 'Consells finals per aprofitar la ruta',
          },
          {
            type: 'list',
            items: [
              'Analitza amb el teu instructor els punts a millorar al final de cada trajecte.',
              'Varia els horaris per experimentar diferents nivells de trànsit.',
              'Repeteix les zones que et costen fins que les resolguis amb calma.',
            ],
          },
        ],
      },
      en: {
        title: 'Practice routes around Salou and the Costa Daurada',
        excerpt:
          'The best routes to practice driving in Salou, Cambrils and the Costa Daurada area.',
        date: 'January 10, 2024',
        readingTime: '6 minute read',
        content: [
          {
            type: 'paragraph',
            text: 'Training in different scenarios is essential to face the practical exam with confidence. The routes below mix real traffic, demanding manoeuvres and the kinds of situations examiners like to see.',
          },
          {
            type: 'heading',
            text: 'Set clear goals for every session',
          },
          {
            type: 'paragraph',
            text: 'Before starting the engine decide what you want to practise: tight turns, roundabouts, parking or priority rules. This helps you make the most of your time and lets instructors focus their feedback.',
          },
          {
            type: 'heading',
            text: 'Urban circuit in Salou',
          },
          {
            type: 'list',
            items: [
              'Via Roma area to work on consecutive traffic lights and pedestrian crossings.',
              'Ponent neighbourhood streets for parallel and angle parking drills.',
              'Roundabouts at Plaça Europa to refine observation and lane changes.',
            ],
          },
          {
            type: 'heading',
            text: 'Recommended interurban stretches',
          },
          {
            type: 'paragraph',
            text: 'Getting used to fast roads and secondary highways is just as important. Combine the city itineraries with these sections to improve peripheral vision and vehicle control at different speeds.',
          },
          {
            type: 'list',
            items: [
              'C-31B towards Cambrils to practise safe entries and exits.',
              'TV-3146 towards Vila-seca, great for controlled overtaking exercises.',
              'Camí de la Pedrera to progress with linked bends and gear management.',
            ],
          },
          {
            type: 'heading',
            text: 'Final tips to get the most from each route',
          },
          {
            type: 'list',
            items: [
              'Review improvement points with your instructor after every drive.',
              'Change the time of day to experience different traffic density.',
              'Repeat the areas you find hardest until you complete them calmly.',
            ],
          },
        ],
      },
    },
  },
  {
    slug: 'novedades-codigo-2024',
    category: 'news',
    author: 'Equipo Autoescola Fran',
    image: '/blog/novedades-codigo-2024.svg',
    publishedAt: '2024-01-05',
    updatedAt: '2024-01-05',
    keywords: [
      'cambios codigo circulacion',
      'novedades dgt 2024',
      'normativa trafico 2024',
      'seguridad vial salou',
    ],
    translations: {
      es: {
        title: 'Novedades en el código de circulación 2024',
        excerpt:
          'Todos los cambios importantes en la normativa de tráfico que debes conocer este año.',
        date: '5 de Enero, 2024',
        readingTime: '8 minutos de lectura',
        content: [
          {
            type: 'paragraph',
            text: 'El nuevo año llega con ajustes en el Reglamento General de Circulación pensados para mejorar la seguridad vial y la convivencia entre todos los usuarios de la vía. Resumimos los puntos que debes dominar antes de subirte al coche.',
          },
          {
            type: 'heading',
            text: 'Límites de velocidad adaptados',
          },
          {
            type: 'paragraph',
            text: 'En vías urbanas de un único carril por sentido, el límite genérico se mantiene en 30 km/h. Se amplían, sin embargo, las excepciones para calles con plataforma única, donde el límite baja a 20 km/h y la prioridad es peatonal.',
          },
          {
            type: 'heading',
            text: 'Protección de usuarios vulnerables',
          },
          {
            type: 'list',
            items: [
              'Obligatoriedad de reducir a 20 km/h al adelantar bicicletas en núcleos urbanos.',
              'Nuevos carriles compartidos señalizados entre patinetes y bicicletas.',
              'Multas más severas por estacionar en carriles bici o aceras sin autorización.',
            ],
          },
          {
            type: 'heading',
            text: 'Impulso a los vehículos de bajas emisiones',
          },
          {
            type: 'paragraph',
            text: 'Los municipios de más de 50.000 habitantes deben delimitar zonas de bajas emisiones. Circular por ellas exige distintivo ambiental en vigor y, en algunos casos, registro previo del vehículo.',
          },
          {
            type: 'heading',
            text: 'Digitalización de documentación',
          },
          {
            type: 'paragraph',
            text: 'Se admite presentar el permiso en formato digital mediante la aplicación oficial miDGT. Aun así, es recomendable llevar el documento físico y comprobar periódicamente la vigencia de la ITV y del seguro.',
          },
        ],
      },
      ca: {
        title: 'Novetats en el codi de circulació 2024',
        excerpt:
          'Tots els canvis importants en la normativa de trànsit que has de conèixer aquest any.',
        date: '5 de Gener, 2024',
        readingTime: '8 minuts de lectura',
        content: [
          {
            type: 'paragraph',
            text: "L'any nou arriba amb ajustos al Reglament General de Circulació pensats per millorar la seguretat viària i la convivència entre tots els usuaris de la via. Resumim els punts que has de dominar abans de posar-te al volant.",
          },
          {
            type: 'heading',
            text: 'Límits de velocitat adaptats',
          },
          {
            type: 'paragraph',
            text: 'En vies urbanes d’un únic carril per sentit, el límit genèric es manté en 30 km/h. S’amplien, però, les excepcions per a carrers amb plataforma única, on el límit baixa a 20 km/h i la prioritat és per als vianants.',
          },
          {
            type: 'heading',
            text: 'Protecció d’usuaris vulnerables',
          },
          {
            type: 'list',
            items: [
              'Obligació de reduir a 20 km/h en avançar bicicletes dins de nuclis urbans.',
              'Nous carrils compartits senyalitzats entre patinets i bicicletes.',
              'Sancions més severes per estacionar en carrils bici o voreres sense permís.',
            ],
          },
          {
            type: 'heading',
            text: 'Impuls als vehicles de baixes emissions',
          },
          {
            type: 'paragraph',
            text: 'Els municipis de més de 50.000 habitants han de delimitar zones de baixes emissions. Per circular-hi cal distintiu ambiental vigent i, en alguns casos, registrar prèviament el vehicle.',
          },
          {
            type: 'heading',
            text: 'Digitalització de la documentació',
          },
          {
            type: 'paragraph',
            text: "Es permet presentar el permís en format digital mitjançant l'aplicació oficial miDGT. Tot i així, és recomanable portar el document físic i comprovar periòdicament la vigència de l'ITV i de l'assegurança.",
          },
        ],
      },
      en: {
        title: 'New traffic code regulations in 2024',
        excerpt:
          'All the important changes in traffic regulations you need to know this year.',
        date: 'January 5, 2024',
        readingTime: '8 minute read',
        content: [
          {
            type: 'paragraph',
            text: 'The new year brings adjustments to the Spanish traffic code aimed at improving road safety and coexistence among all road users. We have highlighted the key topics you should master before getting behind the wheel.',
          },
          {
            type: 'heading',
            text: 'Updated speed limits',
          },
          {
            type: 'paragraph',
            text: 'On urban roads with a single lane in each direction, the general limit remains 30 km/h. More exceptions are introduced for single-platform streets where the limit drops to 20 km/h and pedestrians have priority.',
          },
          {
            type: 'heading',
            text: 'Protection for vulnerable users',
          },
          {
            type: 'list',
            items: [
              'Mandatory reduction to 20 km/h when overtaking bicycles in urban areas.',
              'New shared lanes signposted for e-scooters and bicycles.',
              'Heavier fines for parking on cycle lanes or pavements without permission.',
            ],
          },
          {
            type: 'heading',
            text: 'Boosting low-emission vehicles',
          },
          {
            type: 'paragraph',
            text: 'Cities with more than 50,000 inhabitants must set up low emission zones. Driving in them requires a valid environmental sticker and, in some cases, prior vehicle registration.',
          },
          {
            type: 'heading',
            text: 'Digital documentation',
          },
          {
            type: 'paragraph',
            text: 'Drivers can now show their licence using the official miDGT mobile app. Even so, we recommend carrying the physical document and checking your MOT and insurance expiry dates regularly.',
          },
        ],
      },
    },
  },
  {
    slug: 'superar-nervios-examen',
    category: 'tips',
    author: 'Psicóloga Maria López',
    image: '/blog/superar-nervios-examen.svg',
    publishedAt: '2023-12-28',
    updatedAt: '2023-12-28',
    keywords: [
      'nervios examen practico',
      'control ansiedad conducir',
      'consejos examen autoescuela',
      'gestion emocional autoescuela',
    ],
    translations: {
      es: {
        title: 'Cómo superar los nervios del examen práctico',
        excerpt:
          'Técnicas y consejos para mantener la calma durante el examen práctico de conducir.',
        date: '28 de Diciembre, 2023',
        readingTime: '6 minutos de lectura',
        content: [
          {
            type: 'paragraph',
            text: 'Los nervios son una reacción normal ante situaciones evaluadas. El objetivo no es eliminarlos por completo, sino aprender a gestionarlos para que jueguen a tu favor y mantengas el control del vehículo.',
          },
          {
            type: 'heading',
            text: 'Prepárate mentalmente la noche anterior',
          },
          {
            type: 'paragraph',
            text: 'Dedica unos minutos a visualizar la ruta, las maniobras básicas y tu reacción ante posibles imprevistos. Esta práctica reduce la incertidumbre y refuerza la sensación de estar preparado.',
          },
          {
            type: 'heading',
            text: 'Respiración y anclajes de calma',
          },
          {
            type: 'list',
            items: [
              'Inhala durante cuatro segundos, mantén el aire dos segundos y exhala en seis.',
              'Practica esta respiración tres veces antes de subirte al coche.',
              'Elige una palabra breve que asocies con seguridad y repítela en silencio cuando te pongas nervioso.',
            ],
          },
          {
            type: 'heading',
            text: 'Gestiona la comunicación con el examinador',
          },
          {
            type: 'paragraph',
            text: 'Escucha las instrucciones con atención y confirma si no las has entendido. Los examinadores valoran más una aclaración a tiempo que una maniobra dudosa.',
          },
          {
            type: 'heading',
            text: 'Aprende de cada intento',
          },
          {
            type: 'paragraph',
            text: 'Si por cualquier motivo no superas la prueba, anota lo sucedido en cuanto termines. Convertir los nervios en información útil hace que en la siguiente ocasión te sientas con más control.',
          },
        ],
      },
      ca: {
        title: "Com superar els nervis de l'examen pràctic",
        excerpt:
          "Tècniques i consells per mantenir la calma durant l'examen pràctic de conduir.",
        date: '28 de Desembre, 2023',
        readingTime: '6 minuts de lectura',
        content: [
          {
            type: 'paragraph',
            text: 'Els nervis són una reacció normal davant les situacions d’avaluació. L’objectiu no és eliminar-los del tot, sinó aprendre a gestionar-los perquè juguin a favor teu i mantinguis el control del vehicle.',
          },
          {
            type: 'heading',
            text: 'Prepara la ment la nit anterior',
          },
          {
            type: 'paragraph',
            text: 'Dedica uns minuts a visualitzar la ruta, les maniobres bàsiques i la teva resposta davant possibles imprevistos. Aquesta pràctica redueix la incertesa i reforça la sensació d’estar preparat.',
          },
          {
            type: 'heading',
            text: 'Respiració i ancoratges de calma',
          },
          {
            type: 'list',
            items: [
              'Inspira durant quatre segons, mantén l’aire dos segons i espira en sis.',
              'Practica aquesta respiració tres vegades abans de pujar al cotxe.',
              'Escull una paraula breu associada a seguretat i repeteix-la en silenci quan t’alteris.',
            ],
          },
          {
            type: 'heading',
            text: 'Gestiona la comunicació amb l’examinador',
          },
          {
            type: 'paragraph',
            text: 'Escolta les instruccions amb atenció i demana que les repeteixin si no les has entès. Els examinadors valoren més una aclariment a temps que una maniobra dubtosa.',
          },
          {
            type: 'heading',
            text: 'Aprèn de cada intent',
          },
          {
            type: 'paragraph',
            text: 'Si per qualsevol motiu no superes la prova, anota el que ha passat tan bon punt acabis. Convertir els nervis en informació útil farà que la propera vegada tinguis més control.',
          },
        ],
      },
      en: {
        title: 'How to overcome practical exam nerves',
        excerpt:
          'Techniques and tips to stay calm during the practical driving exam.',
        date: 'December 28, 2023',
        readingTime: '6 minute read',
        content: [
          {
            type: 'paragraph',
            text: 'Feeling nervous before being evaluated is completely normal. The goal is not to eliminate nerves but to manage them so they work in your favour and you stay in control of the vehicle.',
          },
          {
            type: 'heading',
            text: 'Prepare your mindset the night before',
          },
          {
            type: 'paragraph',
            text: 'Spend a few minutes visualising the route, the key manoeuvres and how you will react to unexpected situations. This practice reduces uncertainty and reinforces the feeling that you are ready.',
          },
          {
            type: 'heading',
            text: 'Breathing and calm anchors',
          },
          {
            type: 'list',
            items: [
              'Inhale for four seconds, hold for two and exhale for six.',
              'Repeat this breathing cycle three times before getting in the car.',
              'Choose a short word you associate with safety and repeat it silently when you feel tense.',
            ],
          },
          {
            type: 'heading',
            text: 'Manage communication with the examiner',
          },
          {
            type: 'paragraph',
            text: 'Listen carefully to the instructions and ask for clarification if needed. Examiners appreciate a timely question more than a hesitant manoeuvre.',
          },
          {
            type: 'heading',
            text: 'Learn from every attempt',
          },
          {
            type: 'paragraph',
            text: 'If you do not pass, write down what happened as soon as the test finishes. Turning nerves into useful information ensures you feel more in control next time.',
          },
        ],
      },
    },
  },
  {
    slug: 'mantenimiento-basico-vehiculo',
    category: 'practical',
    author: 'Mecánico Joan Martí',
    image: '/blog/mantenimiento-basico-vehiculo.svg',
    publishedAt: '2023-12-20',
    updatedAt: '2023-12-20',
    keywords: [
      'mantenimiento coche basico',
      'autoescuela consejos coche',
      'revisiones preventivas vehiculo',
      'seguridad mantenimiento auto',
    ],
    translations: {
      es: {
        title: 'Mantenimiento básico del vehículo',
        excerpt:
          'Todo lo que necesitas saber sobre el mantenimiento preventivo de tu coche.',
        date: '20 de Diciembre, 2023',
        readingTime: '7 minutos de lectura',
        content: [
          {
            type: 'paragraph',
            text: 'Un buen mantenimiento alarga la vida del vehículo, reduce averías y aumenta tu seguridad. Incorpora estas rutinas sencillas a tu calendario mensual y ahorrarás visitas inesperadas al taller.',
          },
          {
            type: 'heading',
            text: 'Revisa niveles de fluidos',
          },
          {
            type: 'list',
            items: [
              'Aceite del motor: comprueba el nivel con el motor frío y rellena si es necesario.',
              'Líquido refrigerante: respeta las marcas del vaso de expansión y usa la mezcla adecuada.',
              'Líquido de frenos: si baja de golpe, acude al taller para descartar fugas.',
            ],
          },
          {
            type: 'heading',
            text: 'Vigila neumáticos y frenos',
          },
          {
            type: 'paragraph',
            text: 'Un dibujo por debajo de 1,6 mm reduce el agarre y es motivo de sanción. Comprueba también la presión recomendada por el fabricante y escucha ruidos extraños al frenar.',
          },
          {
            type: 'heading',
            text: 'Iluminación y visibilidad',
          },
          {
            type: 'paragraph',
            text: 'Revisa que todas las luces funcionen y limpia los faros con frecuencia. Cambia las escobillas del limpiaparabrisas si dejan marcas o hacen ruido.',
          },
          {
            type: 'heading',
            text: 'Interior ordenado y seguro',
          },
          {
            type: 'paragraph',
            text: 'Mantén el habitáculo libre de objetos sueltos que puedan interferir con los pedales. Asegúrate de llevar el chaleco reflectante y los triángulos o dispositivo homologado en un lugar accesible.',
          },
        ],
      },
      ca: {
        title: 'Manteniment bàsic del vehicle',
        excerpt:
          'Tot el que necessites saber sobre el manteniment preventiu del teu cotxe.',
        date: '20 de Desembre, 2023',
        readingTime: '7 minuts de lectura',
        content: [
          {
            type: 'paragraph',
            text: 'Un bon manteniment allarga la vida del vehicle, redueix les avaries i augmenta la seguretat. Incorpora aquestes rutines senzilles al teu calendari mensual i estalviaràs visites inesperades al taller.',
          },
          {
            type: 'heading',
            text: 'Revisa els nivells de fluids',
          },
          {
            type: 'list',
            items: [
              'Oli del motor: comprova el nivell amb el motor fred i omple si cal.',
              'Líquid refrigerant: respecta les marques del vas d’expansió i utilitza la barreja adequada.',
              'Líquid de frens: si baixa de cop, ves al taller per descartar fuites.',
            ],
          },
          {
            type: 'heading',
            text: 'Controla pneumàtics i frens',
          },
          {
            type: 'paragraph',
            text: 'Un dibuix per sota d’1,6 mm redueix l’adherència i és motiu de sanció. Comprova també la pressió recomanada pel fabricant i escolta sorolls estranys en frenar.',
          },
          {
            type: 'heading',
            text: 'Il·luminació i visibilitat',
          },
          {
            type: 'paragraph',
            text: 'Revisa que tots els llums funcionin i neteja els fars sovint. Canvia les escombretes del parabrisa si deixen marques o fan soroll.',
          },
          {
            type: 'heading',
            text: 'Interior ordenat i segur',
          },
          {
            type: 'paragraph',
            text: 'Mantingues l’habitacle lliure d’objectes solts que puguin interferir amb els pedals. Assegura’t de portar el xaleco reflectant i els triangles o dispositiu homologat en un lloc accessible.',
          },
        ],
      },
      en: {
        title: 'Basic vehicle maintenance',
        excerpt:
          'Everything you need to know about preventive maintenance for your car.',
        date: 'December 20, 2023',
        readingTime: '7 minute read',
        content: [
          {
            type: 'paragraph',
            text: 'Regular maintenance extends the life of your car, avoids breakdowns and keeps you safer on the road. Add these simple routines to your monthly checklist and you will save unexpected trips to the garage.',
          },
          {
            type: 'heading',
            text: 'Check fluid levels',
          },
          {
            type: 'list',
            items: [
              'Engine oil: check with the engine cold and top up if needed.',
              'Coolant: respect the marks on the expansion tank and use the right mixture.',
              'Brake fluid: a sudden drop means you should visit a mechanic to rule out leaks.',
            ],
          },
          {
            type: 'heading',
            text: 'Watch tyres and brakes',
          },
          {
            type: 'paragraph',
            text: 'Tread depth below 1.6 mm reduces grip and may lead to fines. Also monitor the manufacturer-recommended pressure and listen for unusual noises when braking.',
          },
          {
            type: 'heading',
            text: 'Lighting and visibility',
          },
          {
            type: 'paragraph',
            text: 'Make sure all lights work and clean the headlights regularly. Replace wiper blades if they leave streaks or make noise.',
          },
          {
            type: 'heading',
            text: 'Keep the interior safe and tidy',
          },
          {
            type: 'paragraph',
            text: 'Remove loose objects that could interfere with the pedals. Carry the reflective vest and emergency triangles or approved safety device where you can reach them quickly.',
          },
        ],
      },
    },
  },
  {
    slug: 'conduccion-condiciones-adversas',
    category: 'tips',
    author: 'Instructor Carles',
    image: '/blog/conduccion-condiciones-adversas.svg',
    publishedAt: '2023-12-15',
    updatedAt: '2023-12-15',
    keywords: [
      'conducir lluvia niebla',
      'seguridad vial condiciones adversas',
      'consejos conducir nieve',
      'prevencion accidentes clima',
    ],
    translations: {
      es: {
        title: 'Conducción segura en condiciones adversas',
        excerpt:
          'Consejos para conducir con seguridad cuando llueve, hay niebla o condiciones meteorológicas difíciles.',
        date: '15 de Diciembre, 2023',
        readingTime: '7 minutos de lectura',
        content: [
          {
            type: 'paragraph',
            text: 'Las condiciones meteorológicas adversas exigen anticipación y suavidad al volante. Conocer las técnicas adecuadas evita reacciones bruscas y te ayuda a tomar decisiones más seguras.',
          },
          {
            type: 'heading',
            text: 'Cuando llueve',
          },
          {
            type: 'list',
            items: [
              'Reduce la velocidad y aumenta la distancia de seguridad para compensar la menor adherencia.',
              'Evita frenadas bruscas: utiliza el freno motor y presiona el pedal progresivamente.',
              'Comprueba que los neumáticos evacúan bien el agua para reducir el riesgo de aquaplanning.',
            ],
          },
          {
            type: 'heading',
            text: 'Con niebla o baja visibilidad',
          },
          {
            type: 'paragraph',
            text: 'Activa las luces antiniebla y evita las largas, ya que reflejan en la humedad. Vigila las marcas viales y utiliza como referencia el borde derecho de la calzada.',
          },
          {
            type: 'heading',
            text: 'Conducción nocturna',
          },
          {
            type: 'paragraph',
            text: 'Planifica descansos cada dos horas y mantén el interior bien ventilado para no adormecerte. Aumenta ligeramente la distancia de seguridad y presta atención a los animales en calzada secundaria.',
          },
          {
            type: 'heading',
            text: 'Prepara un kit de emergencia',
          },
          {
            type: 'list',
            items: [
              'Linterna, mantas y guantes impermeables.',
              'Cables de arranque y rascador para el hielo.',
              'Bebida caliente en termo y algo de comida energética.',
            ],
          },
        ],
      },
      ca: {
        title: 'Conducció segura en condicions adverses',
        excerpt:
          'Consells per conduir amb seguretat quan plou, hi ha boira o condicions meteorològiques difícils.',
        date: '15 de Desembre, 2023',
        readingTime: '7 minuts de lectura',
        content: [
          {
            type: 'paragraph',
            text: 'Les condicions meteorològiques adverses requereixen anticipació i suavitat al volant. Conèixer les tècniques adequades evita reaccions brusques i t’ajuda a prendre decisions més segures.',
          },
          {
            type: 'heading',
            text: 'Quan plou',
          },
          {
            type: 'list',
            items: [
              'Redueix la velocitat i augmenta la distància de seguretat per compensar la menor adherència.',
              'Evita frenades brusques: utilitza el fre motor i pressiona el pedal de manera progressiva.',
              'Comprova que els pneumàtics evacuen bé l’aigua per minimitzar l’aquaplaning.',
            ],
          },
          {
            type: 'heading',
            text: 'Amb boira o baixa visibilitat',
          },
          {
            type: 'paragraph',
            text: 'Activa els llums antiboira i evita les llargues, perquè reflecteixen a la humitat. Vigila les marques viàries i utilitza com a referència la vora dreta de la calçada.',
          },
          {
            type: 'heading',
            text: 'Conducció nocturna',
          },
          {
            type: 'paragraph',
            text: 'Planifica descansos cada dues hores i mantén l’interior ventilat per no adormir-te. Augmenta lleugerament la distància de seguretat i para atenció als animals en carreteres secundàries.',
          },
          {
            type: 'heading',
            text: "Prepara un kit d'emergència",
          },
          {
            type: 'list',
            items: [
              'Llanterna, mantes i guants impermeables.',
              'Cables d’arrencada i rascador per al gel.',
              'Beguda calenta en termo i una mica de menjar energètic.',
            ],
          },
        ],
      },
      en: {
        title: 'Safe driving in adverse weather conditions',
        excerpt:
          'Tips for safe driving when it rains, there is fog or the weather turns difficult.',
        date: 'December 15, 2023',
        readingTime: '7 minute read',
        content: [
          {
            type: 'paragraph',
            text: 'Bad weather demands anticipation and smooth inputs at the wheel. Knowing the right techniques prevents sudden reactions and helps you make safer decisions.',
          },
          {
            type: 'heading',
            text: 'Driving in the rain',
          },
          {
            type: 'list',
            items: [
              'Slow down and increase your safety distance to compensate for reduced grip.',
              'Avoid harsh braking: use engine braking and apply the pedal progressively.',
              'Check that your tyres disperse water properly to limit the risk of aquaplaning.',
            ],
          },
          {
            type: 'heading',
            text: 'Fog or poor visibility',
          },
          {
            type: 'paragraph',
            text: 'Switch on the fog lights and avoid high beams because they reflect on moisture. Follow the road markings and use the right-hand edge of the road as a guide.',
          },
          {
            type: 'heading',
            text: 'Night driving',
          },
          {
            type: 'paragraph',
            text: 'Plan breaks every two hours and keep the cabin ventilated to stay alert. Increase the safety gap slightly and watch out for wildlife on secondary roads.',
          },
          {
            type: 'heading',
            text: 'Prepare an emergency kit',
          },
          {
            type: 'list',
            items: [
              'Torch, blankets and waterproof gloves.',
              'Jump leads and an ice scraper.',
              'Hot drink in a thermos and some energy snacks.',
            ],
          },
        ],
      },
    },
  },
]

export function getBlogPosts(language: Language) {
  return blogPosts.map((post) => {
    const translation = post.translations[language] ?? post.translations.en
    return {
      slug: post.slug,
      category: post.category,
      author: post.author,
      image: post.image,
      title: translation.title,
      excerpt: translation.excerpt,
      date: translation.date,
      readingTime: translation.readingTime,
      publishedAt: post.publishedAt,
      updatedAt: post.updatedAt ?? post.publishedAt,
      keywords: post.keywords,
    }
  })
}

export function getBlogPost(language: Language, slug: string) {
  const post = blogPosts.find((item) => item.slug === slug)
  if (!post) {
    return null
  }

  const translation = post.translations[language] ?? post.translations.en

  return {
    slug: post.slug,
    category: post.category,
    author: post.author,
    image: post.image,
    title: translation.title,
    excerpt: translation.excerpt,
    date: translation.date,
    readingTime: translation.readingTime,
    content: translation.content,
    publishedAt: post.publishedAt,
    updatedAt: post.updatedAt ?? post.publishedAt,
    keywords: post.keywords,
  }
}

export function getAllBlogSlugs() {
  return blogPosts.map((post) => post.slug)
}

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug)
}
