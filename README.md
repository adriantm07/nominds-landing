# nominds — Landing Page

Landing page completa de nominds construida con **Next.js 14 + TypeScript + Tailwind CSS**.

---

## ⚡ Requisitos

- **Node.js** 18 o superior  
  → Descarga: https://nodejs.org/

- **npm** (viene incluido con Node.js)

Verifica que los tengas instalados:
```bash
node -v   # debe mostrar v18.x.x o superior
npm -v    # debe mostrar 9.x.x o superior
```

---

## 🚀 Instalación y arranque local

### 1. Entra a la carpeta del proyecto

```bash
cd nominds
```

### 2. Instala las dependencias

```bash
npm install
```

Este paso puede tomar 1–2 minutos la primera vez.

### 3. Inicia el servidor de desarrollo

```bash
npm run dev
```

### 4. Abre el navegador

Visita: **http://localhost:3000**

El sitio se actualiza automáticamente cada vez que guardas un archivo. ✅

---

## 📁 Estructura del proyecto

```
nominds/
├── src/
│   ├── app/
│   │   ├── layout.tsx          ← HTML raíz, metadata SEO
│   │   ├── page.tsx            ← Página principal (compone todas las secciones)
│   │   └── globals.css         ← Estilos globales + fuentes Google
│   │
│   ├── components/
│   │   ├── Header.tsx          ← Navbar sticky con logo y CTA
│   │   ├── Hero.tsx            ← Sección hero con copy + animación
│   │   ├── ScanAnimation.tsx   ← 🎬 Animación de escaneo de documento (LASER)
│   │   ├── Problem.tsx         ← Diagrama Antes/Después (fondo oscuro)
│   │   ├── Features.tsx        ← Grid 3x2 de funcionalidades
│   │   ├── UseCases.tsx        ← 4 casos de uso con preview de documentos
│   │   ├── Benefits.tsx        ← Lista numerada + panel de métricas
│   │   ├── WhyNominds.tsx      ← 4 columnas con líneas verdes
│   │   ├── FinalCTA.tsx        ← Call to action final (fondo oscuro)
│   │   └── Footer.tsx          ← Pie de página
│   │
│   └── lib/
│       └── tokens.ts           ← 🎨 Colores, estilos y datos de la marca
│
├── tailwind.config.js          ← Configuración de Tailwind + tokens
├── next.config.js
├── tsconfig.json
├── package.json
└── README.md
```

---

## ✏️ Cómo hacer cambios

### Cambiar textos / copy

Todos los textos están en sus componentes correspondientes dentro de `src/components/`.
Por ejemplo, para cambiar el headline del hero:

```
src/components/Hero.tsx  →  busca el <h1> y edita el texto
```

### Cambiar colores de la marca

Abre `src/lib/tokens.ts` — ahí están **todos los colores** en un solo lugar:

```ts
export const C = {
  green:     "#2F4F3E",   // ← color principal (botones, acentos)
  greenL:    "#3D6350",   // ← hover de botones
  greenPale: "#E8EFEB",   // ← fondos suaves
  dark:      "#1A1D19",   // ← texto principal y fondos oscuros
  // ...
};
```

Cambia un valor y se actualiza en toda la página automáticamente.

### Cambiar la animación de escaneo

El componente de animación es `src/components/ScanAnimation.tsx`.

Los campos que aparecen durante el escaneo se configuran en `src/lib/tokens.ts`:

```ts
export const SCAN_FIELDS = [
  { id: "name", icon: "👤", label: "Nombre completo", value: "JORGE ANTONIO...", conf: 97, tier: "high", t: 620 },
  // t = tiempo en ms desde que empieza el barrido
];

export const LASER_MS = 1900; // duración total del barrido en ms
```

### Agregar una nueva sección

1. Crea un nuevo archivo en `src/components/MiSeccion.tsx`
2. Impórtalo en `src/app/page.tsx`
3. Agrégalo donde quieras en el orden de la página

---

## 🏗️ Build para producción

```bash
npm run build
npm start
```

O para desplegar en Vercel (gratis):

```bash
npm i -g vercel
vercel
```

---

## 🎨 Fuentes utilizadas

- **DM Serif Display** — Títulos y headlines (Google Fonts)
- **DM Sans** — Texto de cuerpo y UI (Google Fonts)  
- **DM Mono** — Valores de datos y código (Google Fonts)

---

## 📦 Dependencias principales

| Paquete | Versión | Para qué |
|---------|---------|----------|
| next | 14.2.5 | Framework React con App Router |
| react | ^18 | UI library |
| tailwindcss | ^3.4 | Utilidades CSS |
| typescript | ^5 | Tipado estático |

---

## 🐛 Problemas comunes

**Puerto 3000 ocupado:**
```bash
npm run dev -- -p 3001
```

**Error de Node.js version:**
Asegúrate de tener Node 18+. Puedes usar [nvm](https://github.com/nvm-sh/nvm) para manejar versiones.

**Fuentes no cargan:**
Necesitas conexión a internet para cargar las fuentes de Google Fonts la primera vez.
