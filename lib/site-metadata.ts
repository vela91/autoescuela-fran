export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') || 'https://autoescuelafran.com'

export const SITE_NAME = 'Autoescola Fran'

export const SITE_DESCRIPTION =
  'Autoescola Fran en Salou: cursos intensivos, clases prácticas y preparación personalizada para aprobar tus exámenes de conducir.'

export const SITE_LOCALE = 'es_ES'

const isAbsoluteUrl = (value: string) => /^https?:\/\//i.test(value)

const toAbsoluteUrl = (path: string) =>
  isAbsoluteUrl(path)
    ? path
    : `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`

export const SITE_LOGO_PATH = '/images/logo.png'
export const SITE_DEFAULT_OG_IMAGE_PATH = '/driving-school-team.png'

export const SITE_LOGO = toAbsoluteUrl(SITE_LOGO_PATH)

export const SITE_DEFAULT_OG_IMAGE = toAbsoluteUrl(SITE_DEFAULT_OG_IMAGE_PATH)
