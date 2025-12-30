# Configuración del Formulario de Contacto

El formulario de contacto está configurado para enviar emails directamente usando Gmail con Nodemailer.

## ✅ Configuración Actual

### Tecnologías Utilizadas:
- **Nodemailer**: Para envío de emails
- **Gmail SMTP**: Como servicio de email
- **Next.js API Routes**: Para el backend

### Credenciales Configuradas:
- **Email**: autoescolafransalou@gmail.com
- **Contraseña de Aplicación**: Ya configurada en `.env.local`

## 📧 Funcionamiento

1. El usuario rellena el formulario en `/contacte`
2. Al enviar, los datos se envían a `/api/contact`
3. La API route usa Nodemailer para enviar el email
4. El email llega a `autoescolafransalou@gmail.com`
5. El usuario ve un mensaje de confirmación

## 🔧 Características Implementadas

### Frontend (`/app/contacte/page.tsx`):
- ✅ Formulario con validación HTML5
- ✅ Estados de carga (spinner mientras envía)
- ✅ Mensajes de éxito/error multiidioma
- ✅ Limpieza automática tras envío exitoso
- ✅ Botón deshabilitado durante el envío

### Backend (`/app/api/contact/route.ts`):
- ✅ Validación de campos requeridos
- ✅ Formato HTML y texto plano
- ✅ Reply-To configurado con el email del remitente
- ✅ Manejo de errores

## 🔒 Seguridad

- Las credenciales están en `.env.local` (no se suben a Git)
- La contraseña de aplicación es específica para este servicio
- No se exponen credenciales en el cliente

## 📝 Formato del Email Recibido

```
Asunto: Nuevo mensaje de [Asunto] - Autoescola Fran

Contenido:
- Nombre: [Nombre del remitente]
- Email: [Email del remitente]
- Teléfono: [Teléfono o "No especificado"]
- Asunto: [Asunto del mensaje]
- Mensaje: [Contenido completo del mensaje]
```

## 🚀 Para Producción

### Vercel (Recomendado):
1. Sube el código a GitHub
2. Conecta el repositorio con Vercel
3. Añade las variables de entorno en Vercel:
   - `GMAIL_USER`: autoescolafransalou@gmail.com
   - `GMAIL_APP_PASSWORD`: mljc upyh wqzg bkun
4. Despliega

### Otros Hostings:
Asegúrate de configurar las mismas variables de entorno.

## ⚠️ Límites de Gmail

- **Límite diario**: 500 emails/día
- **Límite por minuto**: ~20 emails
- Para mayor volumen, considera servicios como SendGrid o Mailgun

## 🔍 Solución de Problemas

### El formulario no envía emails:
1. Verifica que el servidor esté corriendo (`pnpm dev`)
2. Revisa la consola del navegador por errores
3. Revisa los logs del servidor

### Error de autenticación:
1. Verifica que la contraseña de aplicación sea correcta
2. Asegúrate de que no haya espacios extra en las credenciales

### Los emails van a spam:
- Es normal con Gmail SMTP
- Los destinatarios pueden marcar como "No es spam"

## 📱 Prueba el Formulario

1. Ejecuta: `pnpm dev`
2. Ve a: http://localhost:3001/contacte
3. Rellena y envía un mensaje de prueba
4. Verifica en autoescolafransalou@gmail.com