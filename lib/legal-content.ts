/**
 * Textos legales de la web (LSSI-CE / RGPD).
 *
 * Fuente: PDF entregados por Ana Iris Domínguez Morales el 25/08/2026 y
 * reenviados el 04/09/2026, archivados en
 * `PM/projects/autoescuela/docs/legal-lssi/`. Documentos actualizados a
 * fecha 2026-08-17.
 *
 * El castellano es la versión de referencia: las traducciones al catalán y al
 * inglés son de cortesía y, en caso de discrepancia, prevalece el castellano.
 *
 * Se han omitido los apartados de los PDF que describen funcionalidad que esta
 * web no tiene (venta online, pedidos, pasarelas de pago, transportistas): el
 * propio índice legal los condiciona a que exista comercio electrónico.
 */

export type Language = 'ca' | 'es' | 'en'

export interface LegalTable {
  headers: string[]
  rows: string[][]
}

export interface LegalBlock {
  title?: string
  paragraphs?: string[]
  list?: string[]
  table?: LegalTable
}

export interface LegalDoc {
  title: string
  updated: string
  intro?: string[]
  sections: LegalBlock[]
  prevalenceNote?: string
}

export const LEGAL_HOLDER = {
  name: 'ANA IRIS DOMINGUEZ MORALES',
  nif: '49424840W',
  address: 'Calle Barcelona, 35 local 3, 43840 Salou (Tarragona)',
  email: 'autoescolafransalou@gmail.com',
  phone: '610 777 027',
} as const

const holderLine = `${LEGAL_HOLDER.name}, con CIF/NIF ${LEGAL_HOLDER.nif}`

/* ------------------------------------------------------------------ */
/* Política de privacidad y aviso legal                                */
/* ------------------------------------------------------------------ */

export const privacyPolicy: Record<Language, LegalDoc> = {
  es: {
    title: 'Política de privacidad y aviso legal',
    updated: 'Documento actualizado a fecha 17 de agosto de 2026',
    sections: [
      {
        title: 'Titular de la web',
        paragraphs: [
          `${LEGAL_HOLDER.name}, con CIF/NIF ${LEGAL_HOLDER.nif}, y domicilio en ${LEGAL_HOLDER.address}, con correo electrónico ${LEGAL_HOLDER.email} y teléfono ${LEGAL_HOLDER.phone}.`,
          'La finalidad de esta web es informar sobre los servicios de la autoescuela (permisos de conducir, cursos intensivos de teórica y clases prácticas) y permitir que los usuarios se pongan en contacto con nosotros.',
        ],
      },
      {
        title: 'Responsable de protección de datos',
        paragraphs: [
          'El titular es el responsable de los datos personales que son recabados por la navegación y uso de esta web conforme a los requisitos establecidos por el REGLAMENTO (UE) 2016/679 relativo a la protección de datos de las personas físicas, así como conforme a la Ley 34/2002 de 11 de julio de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSI-CE).',
          'Al utilizar este sitio web entendemos que ha leído y comprendido la información que se expone en relación con el tratamiento de sus datos de carácter personal.',
        ],
      },
      {
        title: 'Política de protección de datos',
        paragraphs: [
          'El responsable aplica el principio de responsabilidad activa en el tratamiento de los datos de carácter personal, manteniendo una constante puesta al día y una promoción de la mejora continua del sistema de protección de datos conforme a los requisitos legales exigibles, garantizando en todo caso:',
        ],
        list: [
          'el respeto a las libertades y los derechos fundamentales de las personas físicas',
          'que los datos son tratados de manera lícita, leal y transparente',
          'que los datos tratados son exactos, adecuados, pertinentes y limitados en relación con los fines para los que son recogidos',
          'que los fines para los que son recogidos son explícitos y legítimos y que no son tratados de manera incompatible con dichos fines',
        ],
      },
      {
        title: 'Datos recabados, finalidad y licitud',
        paragraphs: [
          'Los datos de carácter personal tratados son los aportados por los usuarios a través de los formularios disponibles en este sitio web y son los mínimos exigibles para poder:',
        ],
        list: [
          'atender las consultas realizadas a través del formulario de contacto',
          'enviarle información sobre nuestros servicios, cuando usted lo haya solicitado expresamente',
        ],
      },
      {
        title: 'Formularios web',
        paragraphs: [
          'Los datos personales recabados a través del formulario web de contacto se usan para poder atender cualquier consulta que el usuario realice a través del mismo.',
          'El tratamiento de los datos está legitimado por el consentimiento que usted nos presta al aceptar expresamente las condiciones del tratamiento informadas a través de esta política de privacidad.',
        ],
      },
      {
        title: 'Destinatarios de los datos',
        paragraphs: [
          'Los datos de carácter personal obtenidos a través de los formularios web son registrados y conservados en soportes electrónicos controlados y supervisados por el responsable del tratamiento.',
          'Sus datos personales no serán comunicados a terceros, con la salvedad de que dicha comunicación de datos esté amparada en una obligación legal.',
          'Se mantienen unos criterios estrictos de selección de encargados de tratamiento y el compromiso contractual con cada uno de ellos para cumplir y hacer cumplir las obligaciones establecidas en materia de protección de datos.',
          `En el caso de que existan transferencias internacionales de datos, ${LEGAL_HOLDER.name} garantizará que la transferencia de sus datos personales se realiza de conformidad con las leyes de privacidad aplicables y, en particular, que se apliquen las medidas contractuales, técnicas y organizativas necesarias, como las cláusulas contractuales estándar aprobadas por la Comisión Europea.`,
          `Puede obtener más información sobre el tratamiento de los datos personales de nuestra organización solicitándola en el correo electrónico ${LEGAL_HOLDER.email}.`,
        ],
      },
      {
        title: 'Medidas técnicas y organizativas de protección de datos',
        paragraphs: [
          'Los soportes cuentan con las medidas técnicas y organizativas necesarias que garantizan la confidencialidad y la conservación de los datos personales obtenidos a través de la web.',
          'Los datos personales recabados desde la web se transmiten mediante conexión cifrada con certificado SSL válido.',
          'El personal implicado en las operaciones de tratamiento de datos (acceso, edición, borrado, etc.) está capacitado para ello, formado y comprometido con esta política de protección de datos.',
        ],
      },
      {
        title: 'Conservación de los datos',
        paragraphs: [
          'Los datos de carácter personal obtenidos a través del formulario de contacto serán conservados el tiempo necesario para atender la solicitud o consulta realizada.',
          'Mantendremos la información debidamente bloqueada, sin darle ningún uso, mientras pueda ser necesaria para el ejercicio o defensa de reclamaciones o pueda derivarse algún tipo de responsabilidad judicial, legal o contractual de su tratamiento.',
          'En caso de que haya aceptado expresamente el envío de información comercial, conservaremos sus datos de contacto hasta que nos comunique su decisión de anular dichos envíos comerciales.',
        ],
      },
      {
        title: 'Decisiones automatizadas y elaboración de perfiles',
        paragraphs: [
          'Esta web no adopta decisiones automatizadas ni elabora perfiles de navegación de los usuarios. Si en algún momento se implantara este tipo de tratamiento, se informaría previamente y de forma clara al usuario.',
        ],
      },
      {
        title: 'Oposición a que los datos sean tratados con fines publicitarios',
        paragraphs: [
          `Si dio su consentimiento para que utilizáramos sus datos con fines publicitarios y no desea seguir recibiendo publicidad, puede revocar el consentimiento prestado en cualquier momento mediante el envío de un correo electrónico a ${LEGAL_HOLDER.email}.`,
        ],
      },
      {
        title: 'Cambios en la política de privacidad',
        paragraphs: [
          'Es posible que modifiquemos la información contenida en esta política de privacidad y cookies cuando lo estimemos conveniente. En caso de que lo hagamos, se lo notificaremos a través de la propia web (por ejemplo, mediante un banner o un aviso), o incluso se lo comunicaremos a su dirección de correo electrónico cuando el cambio en cuestión sea significativo para su privacidad, de manera que pueda revisar los cambios, valorarlos y, en su caso, oponerse o darse de baja en algún servicio. En cualquier caso, le sugerimos que revise esta política de vez en cuando.',
        ],
      },
      {
        title: 'Aviso legal · Propiedad intelectual e industrial',
        paragraphs: [
          `El diseño del portal y sus códigos fuente, así como los logos, marcas y demás signos distintivos que aparecen en el mismo, pertenecen a ${LEGAL_HOLDER.name} y están protegidos por los correspondientes derechos de propiedad intelectual e industrial.`,
        ],
      },
      {
        title: 'Responsabilidad de los contenidos',
        paragraphs: [
          `${holderLine} no se hace responsable de la legalidad de otros sitios web de terceros desde los que pueda accederse al portal. Tampoco responde por la legalidad de otros sitios web de terceros que pudieran estar vinculados o enlazados desde este portal.`,
          `${holderLine} no será responsable del uso que terceros hagan de la información publicada en el portal, ni tampoco de los daños sufridos o pérdidas económicas que, de forma directa o indirecta, produzcan o puedan producir perjuicios económicos, materiales o sobre datos, provocados por el uso de dicha información.`,
        ],
      },
      {
        title: 'Reproducción de contenidos',
        paragraphs: [
          `En virtud de lo dispuesto en la Ley de Propiedad Intelectual, quedan expresamente prohibidas la reproducción, la distribución y la comunicación pública de la totalidad o parte de los contenidos de esta página web, con fines comerciales, en cualquier soporte y por cualquier medio técnico, sin la autorización de ${LEGAL_HOLDER.name}.`,
        ],
      },
      {
        title: 'Ley aplicable y jurisdicción',
        paragraphs: [
          `${holderLine} se reserva la facultad de presentar las acciones civiles o penales que considere necesarias por la utilización indebida del sitio web y sus contenidos, o por el incumplimiento de las presentes condiciones.`,
          `La relación entre el usuario y ${holderLine} se regirá por la normativa vigente y de aplicación en el territorio nacional. De surgir cualquier controversia en relación con la interpretación y/o la aplicación de estas condiciones, las partes someterán los conflictos a la jurisdicción ordinaria, sometiéndose a los jueces y tribunales que correspondan conforme a Derecho.`,
          'Asimismo le informamos de que dispone de un procedimiento de resolución extrajudicial de controversias gratuito y accesible a todos los ciudadanos: la plataforma de resolución de litigios en línea de la Unión Europea, accesible en https://ec.europa.eu/consumers/odr/.',
        ],
      },
      {
        title: 'Cookies',
        paragraphs: [
          'Esta web utiliza cookies y tecnologías similares. Dispone de toda la información en el apartado «Política de cookies».',
        ],
      },
      {
        title: 'Datos personales de menores',
        paragraphs: [
          'Esta página web no está dirigida a usuarios menores de edad. Si usted es menor de edad, por favor no facilite sus datos a través de los formularios. Si descubrimos que por error hemos obtenido información personal de un menor, eliminaremos dicha información lo antes posible.',
        ],
      },
      {
        title: 'Ejercicio de los derechos de protección de datos',
        paragraphs: [
          `De acuerdo con los derechos que confiere la normativa vigente en materia de protección de datos de carácter personal, el usuario podrá ejercer los derechos de acceso, rectificación, limitación de tratamiento, supresión, portabilidad y oposición al tratamiento de sus datos dirigiendo su petición a la dirección postal indicada o al correo electrónico ${LEGAL_HOLDER.email}.`,
          'Para el ejercicio de estos derechos el solicitante deberá estar suficientemente identificado en la solicitud.',
        ],
      },
      {
        title: 'Reclamaciones',
        paragraphs: [
          `Para cualquier reclamación puede dirigirse al correo electrónico ${LEGAL_HOLDER.email}. Igualmente podrá dirigirse a la Agencia Española de Protección de Datos: https://www.aepd.es.`,
        ],
      },
    ],
  },

  ca: {
    title: 'Política de privacitat i avís legal',
    updated: 'Document actualitzat a data 17 d’agost de 2026',
    prevalenceNote:
      'Traducció de cortesia. En cas de discrepància, preval la versió en castellà d’aquest document.',
    sections: [
      {
        title: 'Titular del web',
        paragraphs: [
          `${LEGAL_HOLDER.name}, amb CIF/NIF ${LEGAL_HOLDER.nif}, i domicili a ${LEGAL_HOLDER.address}, amb correu electrònic ${LEGAL_HOLDER.email} i telèfon ${LEGAL_HOLDER.phone}.`,
          'La finalitat d’aquest web és informar sobre els serveis de l’autoescola (permisos de conduir, cursos intensius de teòrica i classes pràctiques) i permetre que els usuaris es posin en contacte amb nosaltres.',
        ],
      },
      {
        title: 'Responsable de protecció de dades',
        paragraphs: [
          'El titular és el responsable de les dades personals que es recullen per la navegació i l’ús d’aquest web, d’acord amb els requisits establerts pel REGLAMENT (UE) 2016/679 relatiu a la protecció de dades de les persones físiques, així com per la Llei 34/2002, d’11 de juliol, de Serveis de la Societat de la Informació i del Comerç Electrònic (LSSI-CE).',
          'En utilitzar aquest lloc web entenem que ha llegit i comprès la informació que s’exposa en relació amb el tractament de les seves dades de caràcter personal.',
        ],
      },
      {
        title: 'Política de protecció de dades',
        paragraphs: [
          'El responsable aplica el principi de responsabilitat activa en el tractament de les dades de caràcter personal, mantenint una posada al dia constant i una promoció de la millora contínua del sistema de protecció de dades d’acord amb els requisits legals exigibles, garantint en tot cas:',
        ],
        list: [
          'el respecte a les llibertats i els drets fonamentals de les persones físiques',
          'que les dades es tracten de manera lícita, lleial i transparent',
          'que les dades tractades són exactes, adequades, pertinents i limitades en relació amb les finalitats per a les quals es recullen',
          'que les finalitats per a les quals es recullen són explícites i legítimes i que no es tracten de manera incompatible amb aquestes finalitats',
        ],
      },
      {
        title: 'Dades recollides, finalitat i licitud',
        paragraphs: [
          'Les dades de caràcter personal tractades són les aportades pels usuaris a través dels formularis disponibles en aquest lloc web i són les mínimes exigibles per poder:',
        ],
        list: [
          'atendre les consultes fetes a través del formulari de contacte',
          'enviar-li informació sobre els nostres serveis, quan vostè ho hagi sol·licitat expressament',
        ],
      },
      {
        title: 'Formularis web',
        paragraphs: [
          'Les dades personals recollides a través del formulari web de contacte s’utilitzen per poder atendre qualsevol consulta que l’usuari faci a través seu.',
          'El tractament de les dades està legitimat pel consentiment que vostè ens dona en acceptar expressament les condicions del tractament informades a través d’aquesta política de privacitat.',
        ],
      },
      {
        title: 'Destinataris de les dades',
        paragraphs: [
          'Les dades de caràcter personal obtingudes a través dels formularis web es registren i es conserven en suports electrònics controlats i supervisats pel responsable del tractament.',
          'Les seves dades personals no seran comunicades a tercers, llevat que aquesta comunicació estigui emparada en una obligació legal.',
          'Es mantenen uns criteris estrictes de selecció d’encarregats de tractament i el compromís contractual amb cadascun d’ells per complir i fer complir les obligacions establertes en matèria de protecció de dades.',
          `En cas que hi hagi transferències internacionals de dades, ${LEGAL_HOLDER.name} garantirà que la transferència de les seves dades personals es fa de conformitat amb les lleis de privacitat aplicables i, en particular, que s’apliquen les mesures contractuals, tècniques i organitzatives necessàries, com les clàusules contractuals estàndard aprovades per la Comissió Europea.`,
          `Pot obtenir més informació sobre el tractament de les dades personals de la nostra organització sol·licitant-la al correu electrònic ${LEGAL_HOLDER.email}.`,
        ],
      },
      {
        title: 'Mesures tècniques i organitzatives de protecció de dades',
        paragraphs: [
          'Els suports compten amb les mesures tècniques i organitzatives necessàries que garanteixen la confidencialitat i la conservació de les dades personals obtingudes a través del web.',
          'Les dades personals recollides des del web es transmeten mitjançant connexió xifrada amb certificat SSL vàlid.',
          'El personal implicat en les operacions de tractament de dades (accés, edició, esborrat, etc.) està capacitat per fer-ho, format i compromès amb aquesta política de protecció de dades.',
        ],
      },
      {
        title: 'Conservació de les dades',
        paragraphs: [
          'Les dades de caràcter personal obtingudes a través del formulari de contacte es conservaran el temps necessari per atendre la sol·licitud o consulta feta.',
          'Mantindrem la informació degudament bloquejada, sense donar-li cap ús, mentre pugui ser necessària per a l’exercici o la defensa de reclamacions o pugui derivar-se algun tipus de responsabilitat judicial, legal o contractual del seu tractament.',
          'En cas que hagi acceptat expressament l’enviament d’informació comercial, conservarem les seves dades de contacte fins que ens comuniqui la seva decisió d’anul·lar aquests enviaments comercials.',
        ],
      },
      {
        title: 'Decisions automatitzades i elaboració de perfils',
        paragraphs: [
          'Aquest web no adopta decisions automatitzades ni elabora perfils de navegació dels usuaris. Si en algun moment s’implantés aquest tipus de tractament, s’informaria prèviament i de manera clara l’usuari.',
        ],
      },
      {
        title: 'Oposició al tractament amb finalitats publicitàries',
        paragraphs: [
          `Si va donar el seu consentiment perquè utilitzéssim les seves dades amb finalitats publicitàries i no vol continuar rebent publicitat, pot revocar el consentiment prestat en qualsevol moment enviant un correu electrònic a ${LEGAL_HOLDER.email}.`,
        ],
      },
      {
        title: 'Canvis en la política de privacitat',
        paragraphs: [
          'És possible que modifiquem la informació continguda en aquesta política de privacitat i cookies quan ho considerem convenient. Si ho fem, l’hi notificarem a través del mateix web (per exemple, mitjançant un bàner o un avís), o fins i tot l’hi comunicarem a la seva adreça de correu electrònic quan el canvi sigui significatiu per a la seva privacitat, de manera que pugui revisar els canvis, valorar-los i, si escau, oposar-s’hi o donar-se de baixa d’algun servei. En qualsevol cas, li suggerim que revisi aquesta política de tant en tant.',
        ],
      },
      {
        title: 'Avís legal · Propietat intel·lectual i industrial',
        paragraphs: [
          `El disseny del portal i els seus codis font, així com els logotips, marques i altres signes distintius que hi apareixen, pertanyen a ${LEGAL_HOLDER.name} i estan protegits pels corresponents drets de propietat intel·lectual i industrial.`,
        ],
      },
      {
        title: 'Responsabilitat dels continguts',
        paragraphs: [
          `${LEGAL_HOLDER.name}, amb CIF/NIF ${LEGAL_HOLDER.nif}, no es fa responsable de la legalitat d’altres llocs web de tercers des dels quals es pugui accedir al portal. Tampoc respon de la legalitat d’altres llocs web de tercers que puguin estar vinculats o enllaçats des d’aquest portal.`,
          `${LEGAL_HOLDER.name}, amb CIF/NIF ${LEGAL_HOLDER.nif}, no serà responsable de l’ús que tercers facin de la informació publicada al portal, ni tampoc dels danys soferts o les pèrdues econòmiques que, de forma directa o indirecta, produeixin o puguin produir perjudicis econòmics, materials o sobre dades, provocats per l’ús d’aquesta informació.`,
        ],
      },
      {
        title: 'Reproducció de continguts',
        paragraphs: [
          `En virtut del que disposa la Llei de Propietat Intel·lectual, queden expressament prohibides la reproducció, la distribució i la comunicació pública de la totalitat o part dels continguts d’aquesta pàgina web, amb finalitats comercials, en qualsevol suport i per qualsevol mitjà tècnic, sense l’autorització de ${LEGAL_HOLDER.name}.`,
        ],
      },
      {
        title: 'Llei aplicable i jurisdicció',
        paragraphs: [
          `${LEGAL_HOLDER.name}, amb CIF/NIF ${LEGAL_HOLDER.nif}, es reserva la facultat de presentar les accions civils o penals que consideri necessàries per la utilització indeguda del lloc web i els seus continguts, o per l’incompliment d’aquestes condicions.`,
          'La relació entre l’usuari i el titular es regirà per la normativa vigent i d’aplicació al territori nacional. Si sorgeix qualsevol controvèrsia en relació amb la interpretació i/o l’aplicació d’aquestes condicions, les parts sotmetran els conflictes a la jurisdicció ordinària, sotmetent-se als jutges i tribunals que corresponguin conforme a Dret.',
          'Així mateix, l’informem que disposa d’un procediment de resolució extrajudicial de controvèrsies gratuït i accessible a tots els ciutadans: la plataforma de resolució de litigis en línia de la Unió Europea, accessible a https://ec.europa.eu/consumers/odr/.',
        ],
      },
      {
        title: 'Cookies',
        paragraphs: [
          'Aquest web utilitza cookies i tecnologies similars. Disposa de tota la informació a l’apartat «Política de cookies».',
        ],
      },
      {
        title: 'Dades personals de menors',
        paragraphs: [
          'Aquesta pàgina web no està dirigida a usuaris menors d’edat. Si vostè és menor d’edat, si us plau no faciliti les seves dades a través dels formularis. Si descobrim que per error hem obtingut informació personal d’un menor, eliminarem aquesta informació al més aviat possible.',
        ],
      },
      {
        title: 'Exercici dels drets de protecció de dades',
        paragraphs: [
          `D’acord amb els drets que confereix la normativa vigent en matèria de protecció de dades de caràcter personal, l’usuari podrà exercir els drets d’accés, rectificació, limitació del tractament, supressió, portabilitat i oposició al tractament de les seves dades dirigint la seva petició a l’adreça postal indicada o al correu electrònic ${LEGAL_HOLDER.email}.`,
          'Per a l’exercici d’aquests drets el sol·licitant haurà d’estar prou identificat en la sol·licitud.',
        ],
      },
      {
        title: 'Reclamacions',
        paragraphs: [
          `Per a qualsevol reclamació pot dirigir-se al correu electrònic ${LEGAL_HOLDER.email}. Igualment podrà dirigir-se a l’Agència Espanyola de Protecció de Dades: https://www.aepd.es.`,
        ],
      },
    ],
  },

  en: {
    title: 'Privacy policy and legal notice',
    updated: 'Document last updated on 17 August 2026',
    prevalenceNote:
      'Courtesy translation. In the event of any discrepancy, the Spanish version of this document prevails.',
    sections: [
      {
        title: 'Website owner',
        paragraphs: [
          `${LEGAL_HOLDER.name}, Spanish tax ID (NIF) ${LEGAL_HOLDER.nif}, registered address at ${LEGAL_HOLDER.address}, email ${LEGAL_HOLDER.email}, phone ${LEGAL_HOLDER.phone}.`,
          'The purpose of this website is to provide information about the driving school’s services (driving licences, intensive theory courses and practical lessons) and to allow users to get in touch with us.',
        ],
      },
      {
        title: 'Data protection controller',
        paragraphs: [
          'The owner is the controller of the personal data collected through the browsing and use of this website, in accordance with REGULATION (EU) 2016/679 on the protection of natural persons with regard to the processing of personal data, and with Spanish Act 34/2002 of 11 July on Information Society Services and Electronic Commerce (LSSI-CE).',
          'By using this website we understand that you have read and understood the information set out here regarding the processing of your personal data.',
        ],
      },
      {
        title: 'Data protection policy',
        paragraphs: [
          'The controller applies the principle of accountability to the processing of personal data, keeping the data protection system constantly up to date and continuously improved in line with applicable legal requirements, guaranteeing at all times:',
        ],
        list: [
          'respect for the fundamental rights and freedoms of natural persons',
          'that data is processed lawfully, fairly and transparently',
          'that the data processed is accurate, adequate, relevant and limited to the purposes for which it is collected',
          'that the purposes for which it is collected are explicit and legitimate, and that it is not processed in a manner incompatible with those purposes',
        ],
      },
      {
        title: 'Data collected, purpose and lawful basis',
        paragraphs: [
          'The personal data processed is that provided by users through the forms available on this website, and is the minimum required in order to:',
        ],
        list: [
          'respond to enquiries made through the contact form',
          'send you information about our services, where you have expressly requested it',
        ],
      },
      {
        title: 'Web forms',
        paragraphs: [
          'The personal data collected through the contact form is used solely to respond to any enquiry the user submits through it.',
          'The processing is based on the consent you give us by expressly accepting the processing conditions set out in this privacy policy.',
        ],
      },
      {
        title: 'Recipients of the data',
        paragraphs: [
          'The personal data obtained through the web forms is recorded and kept on electronic media controlled and supervised by the controller.',
          'Your personal data will not be disclosed to third parties, except where such disclosure is required by a legal obligation.',
          'We apply strict selection criteria for data processors and maintain a contractual commitment with each of them to comply with and enforce data protection obligations.',
          `Should any international data transfers take place, ${LEGAL_HOLDER.name} will ensure that the transfer of your personal data is carried out in accordance with applicable privacy laws and, in particular, that the necessary contractual, technical and organisational measures are applied, such as the standard contractual clauses approved by the European Commission.`,
          `You can obtain further information about how our organisation processes personal data by requesting it at ${LEGAL_HOLDER.email}.`,
        ],
      },
      {
        title: 'Technical and organisational data protection measures',
        paragraphs: [
          'Our systems have the technical and organisational measures required to guarantee the confidentiality and preservation of the personal data obtained through the website.',
          'Personal data collected through the website is transmitted over an encrypted connection with a valid SSL certificate.',
          'Staff involved in data processing operations (access, editing, deletion, etc.) are qualified, trained and committed to this data protection policy.',
        ],
      },
      {
        title: 'Data retention',
        paragraphs: [
          'Personal data obtained through the contact form is kept for as long as necessary to deal with the request or enquiry made.',
          'We will keep the information duly blocked, without using it, for as long as it may be needed to bring or defend claims, or while any judicial, legal or contractual liability may arise from its processing.',
          'If you have expressly agreed to receive commercial information, we will keep your contact details until you tell us you wish to stop receiving such communications.',
        ],
      },
      {
        title: 'Automated decision-making and profiling',
        paragraphs: [
          'This website does not carry out automated decision-making and does not build browsing profiles of its users. Should such processing ever be introduced, users would be clearly informed beforehand.',
        ],
      },
      {
        title: 'Objecting to the use of your data for advertising',
        paragraphs: [
          `If you consented to the use of your data for advertising purposes and no longer wish to receive it, you may withdraw your consent at any time by sending an email to ${LEGAL_HOLDER.email}.`,
        ],
      },
      {
        title: 'Changes to this privacy policy',
        paragraphs: [
          'We may change the information contained in this privacy and cookie policy whenever we consider it appropriate. If we do, we will notify you through the website itself (for example, by means of a banner or a notice), or even at your email address where the change is significant for your privacy, so that you can review the changes, assess them and, where applicable, object or unsubscribe from a service. In any case, we suggest you review this policy from time to time.',
        ],
      },
      {
        title: 'Legal notice · Intellectual and industrial property',
        paragraphs: [
          `The design of the website and its source code, as well as the logos, trade marks and other distinctive signs appearing on it, belong to ${LEGAL_HOLDER.name} and are protected by the corresponding intellectual and industrial property rights.`,
        ],
      },
      {
        title: 'Liability for content',
        paragraphs: [
          `${LEGAL_HOLDER.name}, NIF ${LEGAL_HOLDER.nif}, is not responsible for the lawfulness of third-party websites from which this website may be accessed, nor for the lawfulness of third-party websites that may be linked from this site.`,
          `${LEGAL_HOLDER.name}, NIF ${LEGAL_HOLDER.nif}, shall not be liable for the use third parties make of the information published on the website, nor for any damage or financial loss that, directly or indirectly, causes or may cause economic, material or data-related harm arising from the use of that information.`,
        ],
      },
      {
        title: 'Reproduction of content',
        paragraphs: [
          `Under Spanish intellectual property law, the reproduction, distribution and public communication of all or part of the content of this website for commercial purposes, in any medium and by any technical means, is expressly prohibited without the authorisation of ${LEGAL_HOLDER.name}.`,
        ],
      },
      {
        title: 'Applicable law and jurisdiction',
        paragraphs: [
          `${LEGAL_HOLDER.name}, NIF ${LEGAL_HOLDER.nif}, reserves the right to bring any civil or criminal actions deemed necessary for the improper use of the website and its content, or for breach of these terms.`,
          'The relationship between the user and the owner shall be governed by the legislation in force in Spain. Should any dispute arise regarding the interpretation and/or application of these terms, the parties shall submit to the ordinary courts and tribunals with jurisdiction under the law.',
          'We also inform you that a free out-of-court dispute resolution procedure is available to all citizens: the European Union online dispute resolution platform, accessible at https://ec.europa.eu/consumers/odr/.',
        ],
      },
      {
        title: 'Cookies',
        paragraphs: [
          'This website uses cookies and similar technologies. Full information is available in the "Cookie policy" section.',
        ],
      },
      {
        title: 'Personal data of minors',
        paragraphs: [
          'This website is not aimed at users under the age of 18. If you are a minor, please do not submit your data through the forms. If we discover that we have mistakenly obtained personal information from a minor, we will delete it as soon as possible.',
        ],
      },
      {
        title: 'Exercising your data protection rights',
        paragraphs: [
          `In accordance with the rights granted by data protection legislation, users may exercise their rights of access, rectification, restriction of processing, erasure, portability and objection by sending their request to the postal address indicated above or to ${LEGAL_HOLDER.email}.`,
          'To exercise these rights, the applicant must be sufficiently identified in the request.',
        ],
      },
      {
        title: 'Complaints',
        paragraphs: [
          `For any complaint you may write to ${LEGAL_HOLDER.email}. You may also contact the Spanish Data Protection Agency: https://www.aepd.es.`,
        ],
      },
    ],
  },
}

/* ------------------------------------------------------------------ */
/* Política de cookies                                                 */
/* ------------------------------------------------------------------ */

export const cookiePolicy: Record<Language, LegalDoc> = {
  es: {
    title: 'Política de cookies',
    updated: 'Documento actualizado a fecha 17 de agosto de 2026',
    sections: [
      {
        title: '¿Qué son las cookies?',
        paragraphs: [
          'Cuando accedes a nuestra web, en el navegador de tu dispositivo se almacena una pequeña cantidad de texto que se denomina «cookie». Este texto contiene información variada sobre tu navegación, hábitos, preferencias, personalizaciones de contenidos, etc.',
          'Existen otras tecnologías que funcionan de manera similar y que también se usan para recopilar datos sobre tu actividad de navegación (por ejemplo, el almacenamiento local del navegador). Llamaremos «cookies» a todas estas tecnologías en su conjunto.',
        ],
      },
      {
        title: '¿Para qué se utilizan las cookies en esta web?',
        paragraphs: [
          'El objetivo principal de nuestras cookies es que la web funcione y mejorar tu experiencia de navegación: por ejemplo, recordar el idioma que has elegido y si has aceptado o rechazado las cookies.',
          'Además, esta web incluye un mapa de Google Maps para mostrarte dónde estamos. Ese mapa lo sirve un tercero (Google) y solo se carga si tú lo autorizas.',
        ],
      },
      {
        title: '¿Para qué NO se utilizan las cookies en esta web?',
        paragraphs: [
          'En las cookies que utilizamos no se almacena información sensible de identificación personal como tu nombre, dirección o contraseñas.',
          'Esta web no utiliza cookies analíticas ni publicitarias, ni elabora perfiles de navegación.',
        ],
      },
      {
        title: '¿Quién utiliza la información almacenada en las cookies?',
        paragraphs: [
          'La información almacenada en las cookies propias es utilizada exclusivamente por nosotros y no sale de tu navegador. Las cookies de terceros identificadas más abajo son gestionadas por Google, que las instala cuando decides cargar el mapa.',
        ],
      },
      {
        title: '¿Cómo puedo evitar el uso de cookies en este sitio web?',
        paragraphs: [
          'Al entrar por primera vez en la web te mostramos un aviso donde puedes ACEPTAR o RECHAZAR las cookies no esenciales. Si no pulsas ninguna opción no se utilizará ninguna cookie no esencial y volveremos a preguntarte cuando accedas de nuevo.',
          'Si las has aceptado, no volveremos a preguntarte. Si quieres revocar el consentimiento, borra las cookies y el almacenamiento local de este sitio en tu navegador y vuelve a configurarlas, o escríbenos a ' + LEGAL_HOLDER.email + '.',
        ],
      },
      {
        title: '¿Cómo deshabilito y elimino la utilización de cookies?',
        paragraphs: [
          'Para restringir, bloquear o borrar las cookies de este sitio web (y las usadas por terceros) puedes hacerlo en cualquier momento modificando la configuración de tu navegador. Ten en cuenta que esta configuración es diferente en cada navegador, si bien es habitual encontrarla en el menú «Preferencias», «Herramientas» u «Opciones» y después en «Privacidad y seguridad» o en «Borrar datos de navegación».',
          'Para más detalle sobre la configuración de las cookies en cada navegador, puedes consultar el menú «Ayuda» del mismo.',
        ],
      },
      {
        title: 'Clasificación de cookies',
        paragraphs: [
          'Según la entidad que las gestiona, las cookies pueden ser propias (enviadas desde un dominio gestionado por el propio editor) o de terceros (enviadas desde un dominio gestionado por otra entidad que trata los datos obtenidos).',
          'Según su finalidad, pueden ser técnicas (necesarias para la navegación y el buen funcionamiento de la web), de análisis (permiten cuantificar el número de usuarios y medir el uso del servicio), de preferencias o personalización (recuerdan información como el idioma) y publicitarias comportamentales (analizan tus hábitos de navegación para mostrarte publicidad relacionada con tu perfil).',
          'Según el plazo de tiempo que permanecen activadas, pueden ser de sesión (desaparecen al terminar la sesión) o persistentes (los datos siguen almacenados en el terminal durante un periodo definido).',
        ],
      },
      {
        title: 'Cookies utilizadas en esta web',
        paragraphs: [
          'Cookies y tecnologías propias, exentas de consentimiento por ser técnicas o de preferencias solicitadas por el usuario:',
        ],
        table: {
          headers: ['Nombre', 'Finalidad', 'Tipo', 'Duración', 'Gestión'],
          rows: [
            [
              'autoescola-language',
              'Recordar el idioma que has elegido (catalán, castellano o inglés) para no volver a preguntártelo.',
              'Técnica / preferencias',
              'Persistente',
              'Propia',
            ],
            [
              'autoescola-cookie-consent',
              'Recordar si has aceptado o rechazado las cookies no esenciales, para no mostrarte el aviso en cada visita.',
              'Técnica',
              'Persistente',
              'Propia',
            ],
          ],
        },
      },
      {
        paragraphs: [
          'Cookies de terceros, que solo se instalan si aceptas el aviso de cookies:',
        ],
        table: {
          headers: ['Proveedor', 'Finalidad', 'Tipo', 'Duración', 'Gestión'],
          rows: [
            [
              'Google Maps (Google Ireland Ltd.)',
              'Mostrar el mapa con la ubicación de la autoescuela en la página de inicio y en la de contacto. Google puede instalar cookies propias para seguridad, preferencias del mapa y medición de uso. Consulta su política de privacidad en https://policies.google.com/privacy.',
              'Técnica y de preferencias del proveedor',
              'Sesión y persistentes',
              'Terceros',
            ],
          ],
        },
      },
    ],
  },

  ca: {
    title: 'Política de cookies',
    updated: 'Document actualitzat a data 17 d’agost de 2026',
    prevalenceNote:
      'Traducció de cortesia. En cas de discrepància, preval la versió en castellà d’aquest document.',
    sections: [
      {
        title: 'Què són les cookies?',
        paragraphs: [
          'Quan accedeixes al nostre web, al navegador del teu dispositiu s’emmagatzema una petita quantitat de text que s’anomena «cookie». Aquest text conté informació diversa sobre la teva navegació, hàbits, preferències, personalitzacions de continguts, etc.',
          'Hi ha altres tecnologies que funcionen de manera similar i que també s’utilitzen per recollir dades sobre la teva activitat de navegació (per exemple, l’emmagatzematge local del navegador). Anomenarem «cookies» totes aquestes tecnologies en conjunt.',
        ],
      },
      {
        title: 'Per a què s’utilitzen les cookies en aquest web?',
        paragraphs: [
          'L’objectiu principal de les nostres cookies és que el web funcioni i millorar la teva experiència de navegació: per exemple, recordar l’idioma que has triat i si has acceptat o rebutjat les cookies.',
          'A més, aquest web inclou un mapa de Google Maps per mostrar-te on som. Aquest mapa el serveix un tercer (Google) i només es carrega si tu ho autoritzes.',
        ],
      },
      {
        title: 'Per a què NO s’utilitzen les cookies en aquest web?',
        paragraphs: [
          'A les cookies que utilitzem no s’emmagatzema informació sensible d’identificació personal com el teu nom, adreça o contrasenyes.',
          'Aquest web no utilitza cookies analítiques ni publicitàries, ni elabora perfils de navegació.',
        ],
      },
      {
        title: 'Qui utilitza la informació emmagatzemada a les cookies?',
        paragraphs: [
          'La informació emmagatzemada a les cookies pròpies l’utilitzem exclusivament nosaltres i no surt del teu navegador. Les cookies de tercers identificades més avall les gestiona Google, que les instal·la quan decideixes carregar el mapa.',
        ],
      },
      {
        title: 'Com puc evitar l’ús de cookies en aquest lloc web?',
        paragraphs: [
          'En entrar per primera vegada al web et mostrem un avís on pots ACCEPTAR o REBUTJAR les cookies no essencials. Si no prems cap opció no s’utilitzarà cap cookie no essencial i et tornarem a preguntar quan hi accedeixis de nou.',
          'Si les has acceptat, no et tornarem a preguntar. Si vols revocar el consentiment, esborra les cookies i l’emmagatzematge local d’aquest lloc al teu navegador i torna a configurar-les, o escriu-nos a ' + LEGAL_HOLDER.email + '.',
        ],
      },
      {
        title: 'Com deshabilito i elimino la utilització de cookies?',
        paragraphs: [
          'Per restringir, bloquejar o esborrar les cookies d’aquest lloc web (i les utilitzades per tercers) pots fer-ho en qualsevol moment modificant la configuració del teu navegador. Tingues en compte que aquesta configuració és diferent a cada navegador, tot i que és habitual trobar-la al menú «Preferències», «Eines» o «Opcions» i després a «Privacitat i seguretat» o a «Esborra les dades de navegació».',
          'Per a més detall sobre la configuració de les cookies a cada navegador, pots consultar-ne el menú «Ajuda».',
        ],
      },
      {
        title: 'Classificació de cookies',
        paragraphs: [
          'Segons l’entitat que les gestiona, les cookies poden ser pròpies (enviades des d’un domini gestionat pel mateix editor) o de tercers (enviades des d’un domini gestionat per una altra entitat que tracta les dades obtingudes).',
          'Segons la seva finalitat, poden ser tècniques (necessàries per a la navegació i el bon funcionament del web), d’anàlisi (permeten quantificar el nombre d’usuaris i mesurar l’ús del servei), de preferències o personalització (recorden informació com l’idioma) i publicitàries comportamentals (analitzen els teus hàbits de navegació per mostrar-te publicitat relacionada amb el teu perfil).',
          'Segons el termini de temps que romanen activades, poden ser de sessió (desapareixen en acabar la sessió) o persistents (les dades continuen emmagatzemades al terminal durant un període definit).',
        ],
      },
      {
        title: 'Cookies utilitzades en aquest web',
        paragraphs: [
          'Cookies i tecnologies pròpies, exemptes de consentiment per ser tècniques o de preferències sol·licitades per l’usuari:',
        ],
        table: {
          headers: ['Nom', 'Finalitat', 'Tipus', 'Durada', 'Gestió'],
          rows: [
            [
              'autoescola-language',
              'Recordar l’idioma que has triat (català, castellà o anglès) per no tornar a preguntar-t’ho.',
              'Tècnica / preferències',
              'Persistent',
              'Pròpia',
            ],
            [
              'autoescola-cookie-consent',
              'Recordar si has acceptat o rebutjat les cookies no essencials, per no mostrar-te l’avís a cada visita.',
              'Tècnica',
              'Persistent',
              'Pròpia',
            ],
          ],
        },
      },
      {
        paragraphs: ['Cookies de tercers, que només s’instal·len si acceptes l’avís de cookies:'],
        table: {
          headers: ['Proveïdor', 'Finalitat', 'Tipus', 'Durada', 'Gestió'],
          rows: [
            [
              'Google Maps (Google Ireland Ltd.)',
              'Mostrar el mapa amb la ubicació de l’autoescola a la pàgina d’inici i a la de contacte. Google pot instal·lar cookies pròpies de seguretat, preferències del mapa i mesura d’ús. Consulta la seva política de privacitat a https://policies.google.com/privacy.',
              'Tècnica i de preferències del proveïdor',
              'Sessió i persistents',
              'Tercers',
            ],
          ],
        },
      },
    ],
  },

  en: {
    title: 'Cookie policy',
    updated: 'Document last updated on 17 August 2026',
    prevalenceNote:
      'Courtesy translation. In the event of any discrepancy, the Spanish version of this document prevails.',
    sections: [
      {
        title: 'What are cookies?',
        paragraphs: [
          'When you visit our website, a small amount of text called a "cookie" is stored in your device’s browser. This text contains various information about your browsing, habits, preferences, content personalisation, and so on.',
          'Other technologies work in a similar way and are also used to collect data about your browsing activity (for example, the browser’s local storage). We refer to all of these technologies collectively as "cookies".',
        ],
      },
      {
        title: 'What are cookies used for on this website?',
        paragraphs: [
          'The main purpose of our cookies is to make the website work and to improve your browsing experience: for example, remembering the language you chose and whether you accepted or rejected cookies.',
          'In addition, this website includes a Google Maps map showing where we are. That map is served by a third party (Google) and is only loaded if you allow it.',
        ],
      },
      {
        title: 'What are cookies NOT used for on this website?',
        paragraphs: [
          'The cookies we use do not store sensitive personally identifying information such as your name, address or passwords.',
          'This website does not use analytics or advertising cookies, and does not build browsing profiles.',
        ],
      },
      {
        title: 'Who uses the information stored in cookies?',
        paragraphs: [
          'The information stored in our own cookies is used exclusively by us and never leaves your browser. The third-party cookies listed below are managed by Google, which sets them when you choose to load the map.',
        ],
      },
      {
        title: 'How can I avoid the use of cookies on this website?',
        paragraphs: [
          'The first time you visit the website we show you a notice where you can ACCEPT or REJECT non-essential cookies. If you do not choose any option, no non-essential cookie will be used and we will ask you again on your next visit.',
          'If you have accepted them, we will not ask you again. To withdraw your consent, clear this site’s cookies and local storage in your browser and set your preferences again, or write to us at ' + LEGAL_HOLDER.email + '.',
        ],
      },
      {
        title: 'How do I disable and delete cookies?',
        paragraphs: [
          'You can restrict, block or delete this website’s cookies (and those used by third parties) at any time by changing your browser settings. Note that these settings differ from browser to browser, although they are usually found under "Preferences", "Tools" or "Options" and then "Privacy and security" or "Clear browsing data".',
          'For more detail on cookie settings in each browser, please refer to its "Help" menu.',
        ],
      },
      {
        title: 'Cookie classification',
        paragraphs: [
          'By the entity that manages them, cookies may be first-party (sent from a domain managed by the publisher) or third-party (sent from a domain managed by another entity that processes the data obtained).',
          'By purpose, they may be strictly necessary (required for browsing and the proper functioning of the website), analytics (allowing user numbers and service usage to be measured), preference or personalisation cookies (remembering information such as the language), and behavioural advertising cookies (analysing your browsing habits to show you advertising related to your profile).',
          'By how long they remain active, they may be session cookies (deleted when the session ends) or persistent cookies (data remains stored on the device for a defined period).',
        ],
      },
      {
        title: 'Cookies used on this website',
        paragraphs: [
          'First-party cookies and technologies, exempt from consent as they are strictly necessary or preference settings requested by the user:',
        ],
        table: {
          headers: ['Name', 'Purpose', 'Type', 'Duration', 'Managed by'],
          rows: [
            [
              'autoescola-language',
              'Remember the language you chose (Catalan, Spanish or English) so we do not ask again.',
              'Strictly necessary / preferences',
              'Persistent',
              'First party',
            ],
            [
              'autoescola-cookie-consent',
              'Remember whether you accepted or rejected non-essential cookies, so the notice is not shown on every visit.',
              'Strictly necessary',
              'Persistent',
              'First party',
            ],
          ],
        },
      },
      {
        paragraphs: ['Third-party cookies, set only if you accept the cookie notice:'],
        table: {
          headers: ['Provider', 'Purpose', 'Type', 'Duration', 'Managed by'],
          rows: [
            [
              'Google Maps (Google Ireland Ltd.)',
              'Show the map with the driving school’s location on the home and contact pages. Google may set its own cookies for security, map preferences and usage measurement. See its privacy policy at https://policies.google.com/privacy.',
              'Provider’s necessary and preference cookies',
              'Session and persistent',
              'Third party',
            ],
          ],
        },
      },
    ],
  },
}

/* ------------------------------------------------------------------ */
/* Cláusula de los formularios web                                     */
/* ------------------------------------------------------------------ */

export const contactFormClause: Record<
  Language,
  {
    info: string
    privacyLabel: string
    privacyLink: string
    marketingLabel: string
    privacyRequired: string
  }
> = {
  es: {
    info: `Los datos personales solicitados a través de este formulario son los mínimos necesarios para atender su solicitud y serán tratados por ${LEGAL_HOLDER.name}, con CIF/NIF ${LEGAL_HOLDER.nif}, y dirección en ${LEGAL_HOLDER.address}, de acuerdo con lo establecido en nuestra política de privacidad, con la finalidad de poder atender cualquier consulta que realice desde este formulario. Los datos recabados por este formulario no se cederán a terceros salvo por obligación legal. Le recordamos que usted tiene derecho al acceso, rectificación, limitación de tratamiento, supresión, portabilidad y oposición al tratamiento de sus datos dirigiendo su petición a la dirección postal indicada o al correo electrónico ${LEGAL_HOLDER.email}. Igualmente puede dirigirse a nosotros para cualquier aclaración adicional.`,
    privacyLabel: 'He leído y acepto la',
    privacyLink: 'política de privacidad',
    marketingLabel: 'Deseo recibir información comercial de productos y servicios',
    privacyRequired: 'Debes aceptar la política de privacidad para enviar el formulario.',
  },
  ca: {
    info: `Les dades personals sol·licitades a través d’aquest formulari són les mínimes necessàries per atendre la seva sol·licitud i seran tractades per ${LEGAL_HOLDER.name}, amb CIF/NIF ${LEGAL_HOLDER.nif}, i adreça a ${LEGAL_HOLDER.address}, d’acord amb el que estableix la nostra política de privacitat, amb la finalitat de poder atendre qualsevol consulta que faci des d’aquest formulari. Les dades recollides per aquest formulari no se cediran a tercers llevat d’obligació legal. Li recordem que té dret a l’accés, rectificació, limitació del tractament, supressió, portabilitat i oposició al tractament de les seves dades dirigint la seva petició a l’adreça postal indicada o al correu electrònic ${LEGAL_HOLDER.email}. Igualment pot adreçar-se a nosaltres per a qualsevol aclariment addicional.`,
    privacyLabel: 'He llegit i accepto la',
    privacyLink: 'política de privacitat',
    marketingLabel: 'Vull rebre informació comercial de productes i serveis',
    privacyRequired: 'Has d’acceptar la política de privacitat per enviar el formulari.',
  },
  en: {
    info: `The personal data requested through this form is the minimum needed to handle your enquiry and will be processed by ${LEGAL_HOLDER.name}, NIF ${LEGAL_HOLDER.nif}, address ${LEGAL_HOLDER.address}, in accordance with our privacy policy, for the purpose of answering any enquiry you make through this form. The data collected through this form will not be shared with third parties except where required by law. You have the right of access, rectification, restriction of processing, erasure, portability and objection to the processing of your data by sending your request to the postal address indicated or to ${LEGAL_HOLDER.email}. You may also contact us for any further clarification.`,
    privacyLabel: 'I have read and accept the',
    privacyLink: 'privacy policy',
    marketingLabel: 'I would like to receive commercial information about products and services',
    privacyRequired: 'You must accept the privacy policy to submit the form.',
  },
}

/* ------------------------------------------------------------------ */
/* Aviso de cookies (banner)                                           */
/* ------------------------------------------------------------------ */

export const cookieBanner: Record<
  Language,
  {
    title: string
    text: string
    moreInfo: string
    policyLink: string
    accept: string
    reject: string
  }
> = {
  ca: {
    title: 'Avís de cookies',
    text: 'Aquest web utilitza cookies pròpies imprescindibles per al seu funcionament (recordar l’idioma i aquesta mateixa elecció) i cookies de tercers de Google Maps per mostrar-te el mapa d’on som. Si prems ACCEPTAR, acceptes totes les cookies. Si prems REBUTJAR, no se’n farà servir cap de no essencial i el mapa no es carregarà. Si no prems cap opció, no s’utilitzarà cap cookie no essencial i et tornarem a preguntar quan tornis a entrar.',
    moreInfo: 'Més informació a la',
    policyLink: 'política de cookies',
    accept: 'ACCEPTAR',
    reject: 'REBUTJAR',
  },
  es: {
    title: 'Aviso de cookies',
    text: 'Esta web utiliza cookies propias imprescindibles para su funcionamiento (recordar el idioma y esta misma elección) y cookies de terceros de Google Maps para mostrarte el mapa de dónde estamos. Si pulsas ACEPTAR, aceptas todas las cookies. Si pulsas RECHAZAR, no se usará ninguna cookie no esencial y el mapa no se cargará. Si no pulsas ninguna opción, no se utilizará ninguna cookie no esencial y volveremos a preguntarte cuando accedas de nuevo.',
    moreInfo: 'Más información en la',
    policyLink: 'política de cookies',
    accept: 'ACEPTAR',
    reject: 'RECHAZAR',
  },
  en: {
    title: 'Cookie notice',
    text: 'This website uses first-party cookies that are strictly necessary for it to work (remembering your language and this very choice) and third-party Google Maps cookies to show you the map of where we are. If you click ACCEPT, you accept all cookies. If you click REJECT, no non-essential cookie will be used and the map will not load. If you do not choose any option, no non-essential cookie will be used and we will ask you again on your next visit.',
    moreInfo: 'More information in the',
    policyLink: 'cookie policy',
    accept: 'ACCEPT',
    reject: 'REJECT',
  },
}

/* ------------------------------------------------------------------ */
/* Enlaces legales del footer                                          */
/* ------------------------------------------------------------------ */

export const LEGAL_ROUTES = {
  privacy: '/avis-legal',
  cookies: '/politica-cookies',
} as const

export const legalLinks: Record<Language, { legal: string; privacy: string; cookies: string }> = {
  ca: {
    legal: 'Legal',
    privacy: 'Avís legal i privacitat',
    cookies: 'Política de cookies',
  },
  es: {
    legal: 'Legal',
    privacy: 'Aviso legal y privacidad',
    cookies: 'Política de cookies',
  },
  en: {
    legal: 'Legal',
    privacy: 'Legal notice and privacy',
    cookies: 'Cookie policy',
  },
}
