# Configuración de EmailJS para el Formulario de Contacto

## Pasos para configurar EmailJS:

### 1. Crear cuenta en EmailJS
1. Ve a [https://www.emailjs.com/](https://www.emailjs.com/)
2. Haz clic en "Sign Up Free" y crea una cuenta gratuita
3. Confirma tu email

### 2. Configurar un Servicio de Email
1. En el dashboard de EmailJS, ve a "Email Services"
2. Haz clic en "Add New Service"
3. Selecciona "Gmail" (o el servicio que prefieras)
4. Conecta tu cuenta de Gmail:
   - Si usas Gmail, puedes usar la contraseña de aplicación que ya tienes
   - O puedes autorizar con OAuth
5. Guarda el **Service ID** (ejemplo: `service_abc123`)

### 3. Crear una Plantilla de Email
1. Ve a "Email Templates"
2. Haz clic en "Create New Template"
3. Configura la plantilla con estos campos:

**Subject:**
```
Nuevo mensaje de {{subject}} - Autoescola Fran
```

**Content:**
```
Has recibido un nuevo mensaje desde el formulario de contacto de la web:

Nombre: {{from_name}}
Email: {{from_email}}
Teléfono: {{from_phone}}
Asunto: {{subject}}

Mensaje:
{{message}}

---
Este mensaje fue enviado desde el formulario de contacto de autoescolafran.com
```

**To Email:**
```
autoescolafransalou@gmail.com
```

**From Name:**
```
{{from_name}}
```

**Reply To:**
```
{{from_email}}
```

4. Guarda la plantilla y copia el **Template ID** (ejemplo: `template_xyz789`)

### 4. Obtener tu Public Key
1. Ve a "Account" en el menú lateral
2. En la pestaña "General", encontrarás tu **Public Key**
3. Cópialo (ejemplo: `AbCdEfGhIjKlMnOp`)

### 5. Actualizar el archivo de configuración
Edita el archivo `/lib/emailjs-config.ts` y reemplaza los valores:

```typescript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'tu_service_id_aqui',
  TEMPLATE_ID: 'tu_template_id_aqui',
  PUBLIC_KEY: 'tu_public_key_aqui'
};
```

### 6. Probar el formulario
1. Ejecuta el proyecto: `pnpm dev`
2. Ve a la página de contacto
3. Rellena el formulario y envíalo
4. Deberías recibir el email en `autoescolafransalou@gmail.com`

## Límites del Plan Gratuito
- 200 emails por mes
- 2 plantillas de email
- Historial de 7 días

## Solución de Problemas

### Error: "The Public Key is invalid"
- Verifica que has copiado correctamente tu Public Key en el archivo de configuración

### Error: "The Service ID is invalid"
- Asegúrate de que el Service ID corresponde al servicio que creaste en EmailJS

### Error: "The Template ID is invalid"
- Verifica que el Template ID corresponde a la plantilla que creaste

### Los emails no llegan
1. Verifica en la sección "Email History" de EmailJS si el email fue enviado
2. Revisa la carpeta de spam
3. Asegúrate de que el email de destino es correcto

## Notas de Seguridad
- El Public Key puede ser visible en el código del cliente (es seguro)
- NUNCA expongas tu Private Key
- Los datos sensibles se manejan en el servidor de EmailJS