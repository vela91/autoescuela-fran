export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') || 'https://autoescuelafran.com'

export const SITE_NAME = 'Autoescola Fran'

export const SITE_DESCRIPTION =
  'Autoescola Fran en Salou: autoescuela líder con cursos intensivos, clases prácticas personalizadas y profesorado multilingüe en castellano, catalán e inglés.'

export const SITE_LOCALE = 'es_ES'

export const SITE_DEFAULT_OG_IMAGE = '/images/logo.png'

export const SITE_KEYWORDS = [
  'autoescuela en Salou',
  'autoescola a Salou',
  'driving school in Salou',
  'cursos intensivos Salou',
  'clases prácticas carnet conducir Salou',
  'autoescuela Costa Dorada',
  'carnet de conducir Salou',
]

export const SITE_ALTERNATE_NAMES = [
  'Autoescuela Fran Salou',
  'Autoescola Fran Salou',
  'Salou Driving School Fran',
]

export const SITE_ADDRESS = {
  streetAddress: 'Calle Barcelona 35, local 3',
  postalCode: '43840',
  addressLocality: 'Salou',
  addressRegion: 'Tarragona',
  addressCountry: 'ES',
} as const

export const SITE_GEO = {
  latitude: 41.0784008,
  longitude: 1.1310763,
} as const

export const SITE_CONTACT = {
  telephone: '+34 977 017 165',
  whatsapp: '+34 610 777 027',
  email: 'autoescolafransalou@gmail.com',
} as const
