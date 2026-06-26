# nominds — Brand Guidelines

**Version 1.1.0** · Junio 2026 · Brand owner: Adrián TM

> Inteligencia documental para el mundo legal y notarial de México.

---

## Tabla de contenido

1. [Introducción](#1-introducción)
2. [Esencia de marca](#2-esencia-de-marca)
3. [Audiencias y casos de uso](#3-audiencias-y-casos-de-uso)
4. [Logo](#4-logo)
5. [Paleta de color](#5-paleta-de-color)
6. [Tipografía](#6-tipografía)
7. [Sistema de espaciado](#7-sistema-de-espaciado)
8. [Iconografía](#8-iconografía)
9. [Componentes de UI](#9-componentes-de-ui)
10. [Patrones nativos de nominds](#10-patrones-nativos-de-nominds)
11. [Animación y movimiento](#11-animación-y-movimiento)
12. [Fotografía e ilustración](#12-fotografía-e-ilustración)
13. [Voz y tono](#13-voz-y-tono)
14. [Aplicaciones por canal](#14-aplicaciones-por-canal)
15. [Design tokens](#15-design-tokens)
16. [Accesibilidad](#16-accesibilidad)
17. [Gobernanza](#17-gobernanza)
18. [Anexo · Resumen ejecutivo](#18-anexo--resumen-ejecutivo)

---

## 1. Introducción

### Qué es nominds

nominds es una plataforma que **lee, extrae y estructura** automáticamente la información de documentos mexicanos —INE, actas de nacimiento, constancias de situación fiscal (CSF/SAT), escrituras, licencias de conducir y actas del Registro Civil— para notarías, despachos jurídicos y empresas con alto volumen de KYC.

El producto convierte documentos en papel o imagen en **datos estructurados, listos para usar**, eliminando la captura manual campo por campo.

### Propósito de este documento

Este es el sistema de diseño y la guía de marca oficial de nominds. Codifica decisiones que **ya existen** en el producto (paleta, tipografía, componentes, patrones, voz) y llena los vacíos para que diseño y desarrollo trabajen sin ambigüedad. No reinventa la marca: la documenta y la sistematiza.

La fuente de verdad técnica vive en:
- `tailwind.config.js` — tokens `nm.*`, keyframes y animaciones
- `src/lib/tokens.ts` — colores `C.*`, estilos `S.*`, datos de animación
- `src/app/globals.css` — declaraciones `@font-face`
- `src/app/brand/` — esta guía, renderizada y viva (`/brand`)

Cuando este documento y el código difieran, **el código es la verdad y este documento debe actualizarse** (ver §17 Gobernanza).

### Audiencias de esta guía

| Audiencia | Qué busca aquí |
|---|---|
| **Diseñadores** | Paleta, tipografía, espaciado, componentes, patrones, do's & don'ts |
| **Desarrollo** | Tokens consumibles (CSS / Tailwind / JSON), specs de componentes, motion |
| **Marketing / ventas** | Voz, tono, glosario, aplicaciones por canal, uso del logo |
| **Aliados externos** (agencias, freelancers) | Reglas de logo, color, tipografía y misusos |

### Cómo usar esta guía

- Para **construir UI**: §6 Tipografía → §7 Espaciado → §9 Componentes → §15 Tokens.
- Para **piezas de marca** (deck, one-pager, redes): §4 Logo → §5 Color → §13 Voz → §14 Canales.
- Para **escribir copy**: §13 Voz y tono (glosario incluido).
- Antes de **publicar cualquier pieza externa**: revisa §4 misusos, §13 voz, §16 accesibilidad.

### Versión y changelog

| Versión | Fecha | Cambios |
|---|---|---|
| **1.1.0** | Jun 2026 | **Cambio de tipografía:** display + body migran de NeueHaas + Satoshi a **DM Serif Display + DM Sans** (decisión del brand owner). DM Mono sin cambio. Las tres familias pasan a Google Fonts (`@import` en `globals.css`); se retiran los `@font-face` locales. Código y `/brand` sincronizados. |
| **1.0.0** | Jun 2026 | Versión inicial. Sistematiza paleta de 17 tokens, tipografía (NeueHaas + Satoshi + DM Mono), 11 componentes en producción, 5 patrones nativos, voz y motion. |

Versionado semántico del documento: ver §17.

---

## 2. Esencia de marca

### Misión

Liberar a los equipos legales del trabajo manual repetitivo para que dediquen su tiempo a lo que sí requiere criterio profesional.

### Posicionamiento (en una línea)

> **nominds es inteligencia documental construida desde cero para el contexto legal y notarial mexicano.** No es un OCR genérico.

### Promesa de marca

Tus documentos, extraídos y estructurados en segundos, con un porcentaje de confianza por cada dato para que tu equipo revise solo lo que importa.

### Valores (5)

1. **Honestidad de producto.** nominds extrae y estructura. Comunicamos lo que hace, con datos citados con humildad. Nunca prometemos lo que no entregamos.
2. **Especialización legal.** Cada decisión —modelos, UI, copy— parte de los documentos y flujos reales de notarías y despachos. *Legal-first*, no *legal-after*.
3. **Sobriedad editorial.** Diseño pensado, no decorado. Mucho aire, jerarquía clara, acento medido. Serio sin ser rígido.
4. **Confianza verificable.** Cada extracción trae su nivel de confianza. La máquina propone; el profesional decide.
5. **Cercanía mexicana sin folclor.** Hablamos español neutro de México y entendemos el sistema notarial mexicano, pero la estética es contemporánea, no patriótica.

### Arquetipo de marca

**El Sabio + el Artesano** (Sage + Craftsman). El Sabio aporta autoridad y precisión ("entendemos tus documentos mejor que cualquier herramienta genérica"); el Artesano aporta el "construido mano a mano con notarías reales". Evitamos por completo el arquetipo del Mago/SaaS evangélico americano ("transforma tu negocio, magia, revolución").

### Cómo se siente la marca

| Sí es | No es |
|---|---|
| Sobria, precisa, editorial | Vibrante, lúdica, ruidosa |
| Confiada y específica | Grandilocuente o vaga |
| Contemporánea | Corporativa-acartonada / folclórica |
| Cálida en el detalle (amber, off-white) | Fría o estéril |

---

## 3. Audiencias y casos de uso

nominds sirve a cuatro audiencias. El producto es el mismo; **el tono y los ejemplos cambian** según a quién le hablamos.

| Audiencia | Dolor principal | Documentos clave | Ajuste de tono |
|---|---|---|---|
| **Notarías** | Captura manual de comparecencias, escrituras de muchas páginas, presión de tiempo por trámite | INE, escrituras, CSF, actas, Registro Civil | Respeto a la figura del notario. nominds **agiliza**, no reemplaza ni firma. Mencionar ESN, Registro Público de la Propiedad con naturalidad. |
| **Despachos jurídicos** | Volumen de expedientes, KYC de clientes, due diligence | INE, CSF, actas, contratos | Énfasis en velocidad, expediente digital, búsqueda. Tono de eficiencia profesional. |
| **Empresas con alto KYC/onboarding** | Onboarding masivo, cumplimiento, errores de captura | INE, CSF, comprobantes | Énfasis en escala, integración y consistencia de datos. Tono más "ops/producto". |
| **Inmobiliario / real estate** | Escrituras complejas, datos de inmuebles, partes y montos | Escrituras, INE | Énfasis en extracción de tablas (lote, medidas, colindancias) y datos de operación. |

**Regla transversal:** sin importar la audiencia, nunca prometemos validación oficial automática como sustituto del criterio profesional, ni que nominds reemplaza al notario.

---

## 4. Logo

### El símbolo

El símbolo de nominds es un **nudo entrelazado infinito** (quatrefoil de tres listones paralelos que se cruzan sin principio ni fin). Representa documentos y datos que se enlazan y estructuran de forma continua. Es geométrico, sobrio y reconocible a escala pequeña.

El logotipo completo (lockup) combina el símbolo + el **wordmark `nominds`** en una grotesca geométrica de minúsculas.

**Archivos oficiales:** `public/Brand guidelines/Logo/Logo Files/` (`svg/`, `png/`, `pdf/`, `Favicons/`, `Linkedin/`).
**Proporción del lockup:** 3162 × 863 px ≈ **3.66 : 1**.

### El wordmark

**`nominds` siempre en minúsculas.** Nunca `Nominds`, nunca `NOMINDS`, nunca `noMinds`. Es una palabra, no dos.

### Variantes

| Variante | Archivo | Uso |
|---|---|---|
| **Dark (full color canónico)** | `Black logo - no background.{svg,png,pdf}` | **Logo primario.** Sobre fondos claros (`nm-white`, `nm-off-white`, `green-pale`, `sand-l`). Es el que usa el Header. |
| **White (monocromo claro)** | `White logo - no background.{svg,png,pdf}` | Sobre fondos oscuros (`nm-dark`, `nm-dark-2`, `nm-green`). Es el que usa el Footer. |
| **Con fondo** | `Color logo with background.{svg,png,pdf}` | Cuando se necesita un contenedor sólido sobre fotografía o fondos inestables. |
| **Símbolo solo** | derivar del SVG (grupo `symbolFeature`) | Favicon, avatar, app icon, espacios cuadrados. `Favicons/` (Android, iPhone, browser). |

> **Nota sobre "color":** los archivos `Color logo` entregados son monocromos idénticos al negro. La definición canónica de "full color" en esta marca es **monocromo `nm-dark #1A1D19`**. No existe (aún) una versión multicolor; no inventar una sin aprobación de marca (§17).

### Clearspace

El espacio libre mínimo alrededor del logo se define con **X = la altura de la "n"** del wordmark.

```
        ┌───────────────────────────────────┐
        │            ↕ X                     │
        │   ┌───────────────────────────┐   │
   X →  │   │  [símbolo]  nominds       │   │  ← X
        │   └───────────────────────────┘   │
        │            ↕ X                     │
        └───────────────────────────────────┘
                       X = altura de la "n"
```

Ningún otro elemento (texto, borde, otro logo, imagen) debe invadir esa zona de **1X por cada lado**.

### Tamaños mínimos

| Medio | Lockup completo | Símbolo solo |
|---|---|---|
| **Digital** | 24 px de alto (en Header se usa **28 px**) | 16 px |
| **Impreso** | 8 mm de alto | 5 mm |

Por debajo del mínimo, usar solo el símbolo.

### Usos prohibidos (misusos)

1. **No rotar** el logo ni el símbolo (sin ángulos, sin diagonal).
2. **No deformar** — nunca estirar, comprimir ni cambiar la proporción 3.66:1.
3. **No recolorear** fuera de las variantes definidas (dark, white). Nada de degradados, ni amber, ni colores ajenos a la paleta.
4. **No aplicar efectos** — sin sombras paralelas, bisel, glow, contorno, neón.
5. **No usar sobre fondos de bajo contraste** — el dark sobre verde oscuro o el white sobre claro están prohibidos.
6. **No colocar sobre foto sin contenedor** — usar la variante "con fondo" o un recuadro sólido.
7. **No reescribir el wordmark** en otra tipografía (no recrear "nominds" en NeueHaas ni Satoshi; usar el archivo oficial).
8. **No capitalizar** — `Nominds`, `NOMINDS`, `NoMinds` están prohibidos.
9. **No reorganizar** — no separar símbolo y wordmark con líneas, no apilarlos en vertical sin una versión aprobada.
10. **No encajonar** con bordes, cápsulas o badges decorativos que compitan con el símbolo.

---

## 5. Paleta de color

17 tokens. La fuente de verdad es `src/lib/tokens.ts` (`C.*`) y `tailwind.config.js` (`nm.*`).

> CMYK es aproximación para impresión (coated). Los contrastes WCAG se calculan contra el par de uso más común.

### Neutros y fondos

| Token | HEX | RGB | CMYK aprox. | Uso | Contraste |
|---|---|---|---|---|---|
| `white` | `#FAFAF8` | 250 250 248 | 0 0 1 2 | **Fondo primario** (no es blanco puro) | base |
| `off-white` | `#F4F2EE` | 244 242 238 | 0 1 2 4 | Fondo secundario, secciones alternas, fills suaves | base |
| `border` | `#E6E8E3` | 230 232 227 | 1 0 2 9 | Bordes, divisores, hairlines | — |
| `sand` | `#D4DBD6` | 212 219 214 | 3 0 2 14 | Avatares placeholder, fills neutros, hover de borde | — |
| `sand-l` | `#ECF0ED` | 236 240 237 | 2 0 1 6 | Fondo de chips/tags neutros, headers de tabla | base |

### Texto

| Token | HEX | RGB | CMYK aprox. | Uso | Contraste sobre `white` |
|---|---|---|---|---|---|
| `dark` | `#1A1D19` | 26 29 25 | 70 60 65 75 | **Texto primario**, titulares, logo dark | **15.8:1** ✅ AAA |
| `dark-2` | `#272B25` | 39 43 37 | 68 58 68 60 | Texto secundario fuerte, body en cards | **13.0:1** ✅ AAA |
| `dark-3` | `#383D35` | 56 61 53 | 65 52 67 45 | Texto terciario, fondos oscuros sutiles | **9.6:1** ✅ AAA |
| `warm-gray` | `#717870` | 113 120 112 | 40 28 40 18 | **Subtítulos, descripciones**, texto muted cálido | **4.6:1** ✅ AA |
| `muted` | `#969C92` | 150 156 146 | 28 18 30 8 | Labels, captions, texto de menor jerarquía | **2.9:1** ⚠️ solo texto grande / decorativo |

### Verdes de marca — "bosque vivo"

El verde es **el color principal de nominds**. No es un verde apagado ni café-terra: es un **verde tierra vivo** que transmite confianza, seguridad, profesionalismo y evolución —tierra pero "prendido"—. Es el color que da vida a la marca y el ancla de toda la identidad.

| Token | HEX | RGB | CMYK aprox. | Uso | Contraste |
|---|---|---|---|---|---|
| `green` | `#2E6B4E` | 46 107 78 | 78 28 70 12 | **Acción primaria** (botones), color de marca principal, fondo de cards destacadas | blanco sobre green: **5.9:1** ✅ AA |
| `green-l` | `#3C8264` | 60 130 100 | 70 22 64 6 | Variante clara, estados, gráficos | blanco sobre: 4.0:1 (usar ≥18px) |
| `green-p` *(greenPale)* | `#E4EFE8` | 228 239 232 | 6 0 4 6 | **Fondo suave** de badges/áreas de éxito, fills de iconos | base; `green` sobre: ~5.5:1 ✅ |
| `green-d` *(greenDeep)* | `#245840` | 36 88 64 | 78 32 72 26 | Hover/estado activo del botón primario, fondos profundos | blanco sobre: **8.2:1** ✅ AAA |
| `scan` | `#4CAF7A` | 76 175 122 | 65 5 65 0 | **Verde de escaneo/progreso**: láser, barras de confianza, dots de estado | sobre `dark`: 6.4:1 ✅ |

> **Migración v1.0.0:** la familia verde se actualizó de pino oscuro (`#2F4F3E`) a "bosque vivo" (`#2E6B4E`) para que el primario se sienta con más vida y confianza sin perder la base de tierra. Los neutros, el `dark` y el ámbar **no cambian** —ya leen earth-tone—. `scan` se mantiene.

### Acento ámbar (color de marca distintivo)

| Token | HEX | RGB | CMYK aprox. | Uso | Contraste |
|---|---|---|---|---|---|
| `amber` | `#C8922A` | 200 146 42 | 18 42 95 5 | **Eyebrows**, acentos puntuales, marcas OCR "dudoso", confianza media | sobre `white`: **3.4:1** ⚠️ usar ≥18px/bold o como decorativo |
| `amber-pale` | `#F5EDD8` | 245 237 216 | 3 5 18 4 | Fondo suave de badges ámbar | base; `amber` sobre: 3.2:1 |

### Colores de estado (semánticos)

Tokens formalizados en v1.0.0 para sustituir los hardcodes off-system del código (`#E05252`, `rgba(0,100,255,…)`).

| Token | HEX | RGB | CMYK aprox. | Uso |
|---|---|---|---|---|
| `error` | `#B84E2F` | 184 78 47 | 18 75 88 6 | **Error / probable error.** Rojo tierra (alineado a la paleta, no un rojo puro). Confianza baja OCR, validaciones fallidas, marcas "probable error". |
| `info` | `#2D6CC4` | 45 108 196 | 80 50 0 0 | **Info / selección.** Azul para selección estilo Word, info neutral, highlights de "copiado". |

> Estado de éxito = `green` (#2E6B4E) · advertencia = `amber` (#C8922A). No se crean tokens nuevos para esos dos: reutilizan marca.

### El ámbar como acento de marca

El ámbar (`#C8922A`, "amarillo tierra") es **el único acento cromático de la marca** fuera de la familia verde. Su función es **dirigir la atención con sobriedad**, nunca decorar.

**Usos correctos del ámbar:**
- **Eyebrows**: texto mayúsculo tracked de 11px sobre títulos de sección (ver `S.eyebrow`).
- **Confianza media** en datos extraídos (tier `med`): badge `amber-pale` + texto `amber`.
- **Marcas OCR "dudoso"** a nivel de letra (fondo translúcido ámbar + subrayado).
- **Callouts puntuales** ("Empieza hoy", badges de estado en CTAs).

**Reglas del ámbar:**
- Máximo **un foco ámbar por vista**. Si todo es acento, nada lo es.
- El ámbar **nunca es color de acción** (los botones son `green`, no ámbar).
- Para texto pequeño sobre claro, usar `amber` solo en ≥18px o peso bold; de lo contrario el contraste no alcanza AA.

### Reglas de combinación

**Permitido ✅**
- `dark` / `dark-2` / `warm-gray` sobre `white`, `off-white`, `green-pale`, `sand-l`.
- `white` (texto) sobre `green`, `green-deep`, `dark`, `dark-2`.
- `green` (texto/icono) sobre `white`, `green-pale`, `sand-l`.
- `scan` sobre `dark` / `green-deep` (estados de progreso).
- `amber` (eyebrow) sobre `white` / `off-white` / `dark` (en oscuro sí alcanza AA: 5.6:1).

**Prohibido ❌**
- `green` (texto) sobre `dark` o `green-deep` → contraste insuficiente; usar `scan` o `white`.
- `muted` para texto de lectura sobre `white` → solo labels/captions grandes.
- `amber` en texto pequeño regular sobre fondo claro.
- Verde de acción (`green`) como fondo de página completa (es acento, no lienzo).
- Mezclar `scan` y `green` en el mismo rol semántico (scan = progreso/animación; green = acción/marca).

---

## 6. Tipografía

Tres familias, cada una con un rol exclusivo. Todas servidas desde Google Fonts, cargadas con un `@import` en `globals.css`.

| Familia | Rol | Pesos disponibles | Fuente |
|---|---|---|---|
| **DM Serif Display** | Display y headings | 400 (regular + itálica) | Google Fonts |
| **DM Sans** | Body, UI, todo lo demás | Variable 100–1000 + itálicas | Google Fonts |
| **DM Mono** | Datos, código, OCR, IDs | 400, 500 | Google Fonts |

> **Migración v1.1.0:** la tipografía de display + body se cambió de **NeueHaas + Satoshi** a **DM Serif Display + DM Sans** (decisión del brand owner). El sistema pasa de grotesca geométrica a una serif editorial para titulares sobre una humanista para texto. DM Mono **no cambia**. Las tres familias ahora viven en Google Fonts (un solo `@import`), por lo que ya no hay `@font-face` locales ni archivos `.ttf`/`.woff2` de fuente en `public/`.

> **Nota de pesos:** DM Serif Display solo existe en **400**. Donde la escala pide 500/700 para display, el navegador renderiza 400 (no hay sintético recomendado). El énfasis en titulares se logra por tamaño y tracking, no por peso. DM Sans sí es variable (100–1000), así que el body conserva sus pesos.

### Reglas de uso (inquebrantables)

1. **DM Serif Display** → solo display y headings. Nunca para body.
2. **DM Sans** → todo el body, UI, labels, botones, formularios.
3. **DM Mono** → solo datos extraídos, OCR, IDs (CURP, folios, claves), código. Nunca para prosa.

### Escala tipográfica definitiva

| Nivel | Tamaño | Line-height | Tracking | Peso | Familia | Uso |
|---|---|---|---|---|---|---|
| **Display XL** | 60–72px | 1.05 | −2px | 400 | DM Serif Display | Hero principal, portadas de deck |
| **Display L** | 44–56px | 1.07 | −1.5px | 400 | DM Serif Display | Títulos de sección grandes, stat chips grandes |
| **Display M** | 32–40px | 1.1 | −0.8px | 400 | DM Serif Display | Títulos de sección estándar (`S.sectionTitle`) |
| **H1** | 28–36px | 1.1 | −0.5px | 400 | DM Serif Display | Encabezado de página/app |
| **H2** | 22–28px | 1.15 | −0.4px | 400 | DM Serif Display | Subsección, títulos de card destacada |
| **H3** | 18–22px | 1.2 | −0.3px | 400 | DM Serif Display | Card headers |
| **H4** | 16–18px | 1.3 | 0 | 600 | DM Sans | Títulos menores, labels fuertes |
| **Body L** | 17–18px | 1.6 | 0 | 300 / 400 | DM Sans | Intro, párrafos destacados |
| **Body M** | 15–16px | 1.6–1.7 | 0 | 300 / 400 | DM Sans | Body estándar, descripciones |
| **Body S** | 13–14px | 1.55 | 0 | 300 / 400 | DM Sans | Texto secundario, items de lista |
| **Body XS** | 11–12px | 1.5 | 0.1px | 400 | DM Sans | Notas al pie, metadatos |
| **Caption / Eyebrow** | 11px | 1.2 | 1.5px **mayúsculas** | 600 | DM Sans | Eyebrows (`S.eyebrow`), labels de campo |
| **Code / Mono** | 13–15px | 1.4 | 0.5–0.9px | 400 / 500 | DM Mono | Datos extraídos, CURP, folios, IDs |

**Notas:**
- Los titulares DM Serif Display usan tracking **negativo** (más apretado a mayor tamaño). Es la firma tipográfica de la marca.
- El body DM Sans por defecto va en **300 (Light)** para descripciones y **400** para texto funcional. El peso ligero sobre mucho aire es central a la sobriedad editorial.
- Las cifras "duras" en stats (50×, 96%, <90s) van en **DM Serif Display**, tracking negativo fuerte.

### Especímenes

```
Display XL · DM Serif Display · −2px
De documentos en papel a datos estructurados

Display M · DM Serif Display · −0.8px
Por qué las notarías eligen nominds

Body M · DM Sans 400
nominds lee, extrae y estructura la información de
documentos legales con inteligencia artificial.

Eyebrow · DM Sans 600 · 11px · 1.5px · MAYÚSCULAS · amber
EL PROBLEMA ACTUAL

Mono · DM Mono · datos extraídos
CURP   PEGA850912HDFSRN03
FOLIO  NL/2024/00341
```

---

## 7. Sistema de espaciado

**Base de 4px.** Toda medida de layout (padding, margin, gap) sale de esta escala.

| Token | Valor | Uso típico |
|---|---|---|
| `space-1` | 4px | Gaps mínimos, separación icono-texto apretada |
| `space-2` | 8px | Gap entre chips, padding interno pequeño |
| `space-3` | 12px | Gap de grids compactos, gap de cards en cluster |
| `space-4` | 16px | Padding estándar, gap entre elementos relacionados |
| `space-5` | 20px | Gap de secciones internas |
| `space-6` | 24px | **Padding horizontal de sección** (mobile), padding de card |
| `space-8` | 32px | Gap entre bloques, margin-bottom de headers |
| `space-10` | 40px | Margin de header de sección |
| `space-12` | 48px | Gap de columnas grandes, **padding vertical de sección** (actual) |
| `space-16` | 64px | Separación de bloques mayores |
| `space-20` | 80px | Gap de columnas hero/CTA |
| `space-24` | 96px | Aire de sección amplio |
| `space-32` | 128px | Separadores de capítulo (deck, landing larga) |

### Reglas

- **Padding horizontal de sección:** 24–28px (`S.section` usa 28px; componentes bajan a 24px en mobile).
- **Padding vertical de sección:** la marca define **88px** como ideal editorial (`S.section`), aunque la landing actual lo comprime a **48px** (32px mobile) por densidad. Documentamos ambos: *editorial* = 88px, *compacto* = 48px.
- **Padding interno de card:** 24–36px según jerarquía (28×24 estándar, 36×32 destacada).
- **Gap entre cards:** 12–20px en clusters, 16px en grids de casos.
- **Radio + espaciado** se alinean: cards grandes (radio 16–20) → padding ≥24.

---

## 8. Iconografía

### Estilo

- **Outline, no filled.** Líneas, nunca rellenos sólidos (salvo dots de estado y checks).
- **Grosor de trazo: 1.8px** (rango 1.6–1.8 según tamaño; el código usa 1.6, 1.7 y 1.8 — estandarizar a **1.8** a 24px).
- **Remates redondeados:** `stroke-linecap="round"`, `stroke-linejoin="round"`.
- **Color:** `nm-dark` (neutro) o `nm-green` (contexto de marca/acción). Sobre oscuro: `white` o `scan`.

### Tamaños base

| Tamaño | Uso |
|---|---|
| 16px | Inline en listas, dentro de chips |
| 20px | Iconos de feature, benefit |
| 24px | Iconos destacados, headers |

Los contenedores de icono usan fills suaves: `green-pale` (hover), `off-white` (reposo), o `white` con borde `border`.

### Librería base

**Lucide** como librería base (ya es el estilo de los SVGs inline en `Problem.tsx`, `Features.tsx`, `WhyNominds.tsx`). Para iconos custom:
- Viewbox 24×24, grid de 24.
- Trazo 1.8, remates redondeados.
- Sin detalles a < 2px (no sobreviven el tamaño chico).
- Exportar como SVG optimizado, `stroke="currentColor"` para heredar color.

---

## 9. Componentes de UI

Specs basadas en los componentes en producción. Clases Tailwind asumen los tokens `nm.*`; los ejemplos de estilo inline reflejan `S.*`/`C.*` actuales.

### 9.1 Botones

**Primario** (`S.btnPrimary`)
```jsx
// bg-nm-green text-white, radio 8, padding 11×22, 14.5px/500
<a className="inline-flex items-center gap-[7px] bg-nm-green text-white
              rounded-lg px-[22px] py-[11px] text-[14.5px] font-medium
              transition hover:bg-nm-green-d hover:-translate-y-px">
  Agendar demo →
</a>
```

| Estado | Spec |
|---|---|
| Default | `bg-nm-green` (#2E6B4E), texto blanco |
| Hover | `bg-nm-green-d` (#245840) + `translateY(-1px)` |
| Active | `translateY(0)`, sin sombra |
| Disabled | `opacity 0.5`, `cursor: not-allowed`, sin hover |
| Loading | spinner 14px + texto, mismo fondo, `pointer-events: none` |

**Outline** (`S.btnOutline`)
- `bg transparent`, `border 1px nm-border`, texto `nm-dark`, hover `bg nm-off-white`.

**Ghost**
- `bg transparent`, sin borde, texto `nm-dark`, hover `bg nm-off-white`. Para acciones terciarias.

**Tamaños:** sm (`9×16`, 13px) · md (`11×22`, 14.5px — default) · lg (`13×26`, 16px).

### 9.2 Cards

| Tipo | Spec |
|---|---|
| **Default** | `border 1px nm-border`, `radius 16`, `bg white` o `sand-l`, padding 24 |
| **Elevated** | igual + `shadow-md` (`0 8px 32px rgba(26,25,22,0.07)`) |
| **Interactive** | hover: `border-color nm-sand` + `shadow` + lift sutil (ver `UseCases.tsx`) |
| **Destacada (verde)** | `bg nm-green`, texto blanco, radio 16, para trust/CTA |

### 9.3 Chips / Badges

| Variante | Fondo | Texto | Uso |
|---|---|---|---|
| **Neutro** | `sand-l` | `dark-2` | Tags de categoría (casos de uso) |
| **Éxito / OK** | `green-pale` | `green` | Estado validado, alta confianza |
| **Advertencia / med** | `amber-pale` | `amber` | Confianza media, "dudoso" |
| **Error / low** | `rgba(220,60,60,.15)` | `#B84E2F` | Confianza baja, probable error |
| **Info** | `rgba(74,144,226,.12)` | `#2D6CC4` | Selección, info neutral |
| **Acento audiencia** | `green-pale` o `amber-pale` | según contexto | Tag de segmento |

**Confianza (con barra `grow-bar`):** badge con `%` + barra de 2px (`green` para high, `amber` para med, error para low) que crece con `growBar 0.7s`.

### 9.4 Dark stat chip (el patrón `50×`)

Patrón del one-pager. Card sobre fondo verde/oscuro con cifra grande DM Serif Display.

```jsx
<div className="bg-nm-green rounded-[14px] p-4">
  <div className="font-display text-[40px] leading-none text-nm-white">
    50<span className="text-[18px] font-semibold align-top ml-0.5">×</span>
  </div>
  <h4 className="text-nm-white text-[14.5px] font-bold mt-1">
    más rápido que la captura manual
  </h4>
  <p className="text-[rgba(250,250,248,0.78)] text-[12.5px] leading-snug">
    Tu equipo se enfoca en validar, no en teclear.
  </p>
</div>
```

Variantes de cifra: `green` bg (chip duro), `dark` bg (stat bar). Cifra siempre DM Serif Display, unidad (`×`, `%`, `s`) en `green`/`scan` más pequeña.

### 9.5 Inputs / form fields

Basado en `FinalCTA.tsx` (variante oscura) — definir también variante clara.

| Estado | Claro | Oscuro (sobre `dark`) |
|---|---|---|
| Default | `border nm-border`, `bg white` | `border rgba(255,255,255,.12)`, `bg rgba(255,255,255,.06)` |
| Focus | `border nm-green` | `border rgba(76,175,122,.5)` + `bg rgba(255,255,255,.09)` |
| Error | `border #B84E2F` + mensaje | igual con rojo |
| Disabled | `opacity .5`, `bg off-white` | `opacity .4` |

- Label: 11.5px, 600, mayúsculas, tracking 0.4px, color `muted`/`rgba(...,.45)`.
- Radio 8, padding 10×13, 13.5px.
- **Floating label** opcional: label baja como placeholder y sube al focus/valor.

### 9.6 Tablas

**Estilo Word (legal / escrituras):** réplica del documento original.
- `border-collapse`, `border 1px #1a1a1a`, font **Arial/Helvetica**.
- Header `bg #f3efe6` (≈ `sand-l` cálido), 700, mayúsculas, ~6.5–8px en demos.
- Para fidelidad documental, no para UI de app.

**Estilo UI (datos de app):**
- Sin bordes verticales, hairline `nm-border` entre filas.
- Header `sand-l`, texto `muted` 11px mayúsculas tracked.
- Body DM Sans 13–14px; columnas de datos en **DM Mono**.

### 9.7 Confidence markers (OCR a nivel de letra)

Marcas inline para señalar confianza baja del OCR letra por letra.

| Marca | Fondo | Borde inferior | Significado |
|---|---|---|---|
| **Dudoso (amber)** | `rgba(200,146,42,0.18)` | `1px amber` | OCR incierto, revisar |
| **Probable error (red)** | `rgba(220,60,60,0.15)` | `1px #DC3C3C` | Probable error |
| **Selección (blue)** | `rgba(0,100,255,0.18)` / `rgba(74,144,226,.42)` | — | Texto "copiado"/seleccionado estilo Word |

Siempre acompañadas de **leyenda** (Dudoso · Probable error). Ver `MiniScanAnimation.tsx`.

### 9.8 Document preview con bounding boxes

El patrón INE: documento a la izquierda, panel de datos a la derecha con **tags numerados** (círculos `nm-green` con número blanco) y checks ok/warn. Cada campo: `tag` + nombre + `% confianza` + valor (en fill `off-white`) + check.

### 9.9 Amber eyebrow (`S.eyebrow`)

```jsx
<span className="inline-block text-[11px] font-semibold uppercase
                 tracking-[1.5px] text-nm-amber mb-[14px]">
  El problema actual
</span>
```

### 9.10 Navigation header (`Header.tsx`)

- `fixed`, `bg rgba(250,250,248,0.92)`, `backdrop-blur 16px`, `border-bottom nm-border`.
- Alto 62px, container 1100, padding 24.
- Logo dark 28px · nav links 13.5px/600 (hover → `green`) · CTA primario.
- Sombra al hacer scroll (`scrolled`). Mobile: hamburguesa → dropdown.

### 9.11 Footer (`Footer.tsx`)

- `bg nm-dark-2`, padding 40×28, `border-top rgba(255,255,255,.05)`.
- Logo **white** 22px @ opacity 0.5 + copyright 12px `rgba(250,250,248,.28)`.

### 9.12 Modal / Dialog

- Overlay `rgba(26,29,25,0.45)` + `backdrop-blur 4px`.
- Panel `bg white`, `radius 20`, `shadow-lg`, padding 32, max-width 480–560.
- Header H3 DM Serif Display, botón cerrar ghost esquina superior derecha.
- Footer de acciones: ghost (cancelar) + primario.

### 9.13 Toast / Notification

- `bg dark` (o white con borde), `radius 10`, padding 12×16, sombra.
- Icono de estado (12–14px) + texto 13px + cierre opcional.
- Colores por tipo: success `green`/`scan`, warn `amber`, error `#B84E2F`, info azul.
- Aparece con `slide-right` / `fade-up`; auto-dismiss ~4s.

---

## 10. Patrones nativos de nominds

Los "signature moves" de la marca. Construirlos siempre con estas specs.

### 10.1 Animación de escaneo (la visual hero)

El patrón central. Documento + láser verde + cascada de campos con confianza.

**Specs (de `ScanAnimation.tsx` / `tokens.ts`):**
- **Láser:** línea de 2px, `scan` (#4CAF7A) con glow (`box-shadow 0 0 12px 3px rgba(76,175,122,.45)`), gradiente horizontal transparente→sólido→transparente. Barre **top→bottom** en `LASER_MS = 2300ms` (mini: 1800ms), curva `linear`.
- **Campo iluminado:** borde izquierdo 2px `scan` + fondo `rgba(76,175,122,0.07)`, transición 0.35s.
- **Cascada de salida:** cada campo aparece a su `t` (560, 880, 1160, 1420, 1680, 1920ms) con `opacity + translateY(6px) scale(0.97)→1`, 0.35s.
- **Badge de confianza:** alta = `#D6E8DF`/`#1E4032`; media = `amber-pale`/`amber`.
- **Barra de confianza:** 2px, crece a `field.conf%` con `growBar 0.7s cubic-bezier(0.4,0,0.2,1) 0.2s`.
- **Estado:** dot `scan` con `pulseDot` mientras escanea → `green` al terminar. Texto "Escaneando…" → "Escaneo completo".
- **Resumen final:** check verde + "N campos · tipo · sin alertas" + `%` global.

### 10.2 Comparación documento ↔ datos

Documento crudo a la izquierda ↔ panel de datos estructurados a la derecha.
- **Lado documento:** imagen real con overlay de láser y/o **selección azul estilo Word** (`.selline`, `rgba(74,144,226,.42)`) sobre renglones; marcas OCR amber/red a nivel de letra.
- **Lado datos:** campos con label `muted` mayúsculas + valor en **DM Mono** + check (ok/warn) + tag numerado.
- Tooltip "📋 Copiado ✓" al "copiar" un fragmento.

### 10.3 Tabla de escritura legal

Para extractos de escrituras (descripción de lote, medidas, colindancias).
- Réplica fiel: `border 1px #1a1a1a`, Arial, header `#f3efe6`, headers agrupados (`colspan`/`rowspan`), celdas centradas.
- Mensaje: "la tabla del lote queda **editable**", sin re-captura.

---

## 11. Animación y movimiento

Catálogo de `tailwind.config.js`.

| Animación | Keyframe | Duración / curva | Uso |
|---|---|---|---|
| `float` | translateY 0→−10→0 | 6s ease-in-out infinite | Elementos flotantes del hero |
| `slide-left` | opacity + translateX(−8) | 0.4s ease both | Entrada de elementos desde izquierda |
| `slide-right` | opacity + translateX(14) scale(.98) | 0.4s cubic-bezier(0.4,0,0.2,1) both | Entrada/cascada desde derecha |
| `pulse-dot` | opacity 1→.35 + scale 1→.72 | 1.8s ease-in-out infinite | Dots de estado |
| `grow-bar` | width 0→var | 0.7s cubic-bezier(0.4,0,0.2,1) 0.2s both | Barras de confianza |
| `fade-up` | opacity + translateY(20) | 0.6s ease both | Scroll reveal |
| **Láser** | translateY top→bottom | 2300ms (hero) / 1800ms (mini) linear | Escaneo |

### Principios de motion

1. **Sutil > llamativo.** El movimiento informa (algo se procesó, algo llegó), no entretiene.
2. **Funcional > decorativo.** Cada animación tiene un porqué (cascada = "se extrajo campo por campo").
3. **Curvas consistentes.** Entradas/transformaciones: `cubic-bezier(0.4,0,0.2,1)`. Barridos lineales (láser): `linear`. Loops orgánicos: `ease-in-out`.
4. **`prefers-reduced-motion`:** **obligatorio.** Hoy las animaciones no lo respetan (gap, ver §16). Toda animación no esencial debe desactivarse o reducirse cuando el usuario lo pide.

---

## 12. Fotografía e ilustración

### Cuándo usar qué

| Recurso | Cuándo |
|---|---|
| **Iconografía** | Default para features, beneficios, pasos. Sobrio y escalable. |
| **Capturas de producto / mockups** | Para demostrar valor real (la animación de escaneo, doc↔datos). La prueba más fuerte. |
| **Fotografía** | Contexto humano real: oficinas notariales, manos sobre escrituras, equipos legales trabajando. |
| **Ilustración** | Rara vez. Solo diagramas funcionales (flujos), nunca decorativa. |

### Estilo fotográfico

- **Documental y sobrio.** Contexto real del sector legal/notarial mexicano.
- Luz natural, tonos cálidos neutros que convivan con `off-white` y verdes.
- Personas trabajando con intención, no posando.

### Prohibido

- ❌ Stock genérico de gente sonriendo con laptops.
- ❌ Gráficos planos sin razón funcional.
- ❌ Ilustración corporativa tipo Lottie/Big Tech (personajes flotando, blobs).
- ❌ Imágenes patrióticas, prehispánicas o folclóricas (mexicanidad sin folclor).

---

## 13. Voz y tono

### Principios (7)

1. **Directos y profesionales.** Español neutro de México. Formal pero accesible: ni SaaS evangélico americano, ni corporativo acartonado.
2. **Verbos en imperativo o presente.** "Sube tus documentos", "Tu equipo deja de teclear", "nominds lee y extrae".
3. **Honestidad de producto.** nominds extrae y estructura. **No** firma, **no** reemplaza al notario. Comunicar capacidades reales.
4. **Datos con humildad.** Citar "reportes de la industria", "estudios de digitalización"; nunca superlativos auto-grandilocuentes.
5. **Confianza, no promesas absolutas.** Hablamos de "confianza por campo" y "alertas cuando algo importa", no de perfección.
6. **Nombres de terceros con naturalidad.** SAT, Escuela Superior de Notarios (ESN), Registro Público de la Propiedad — se mencionan llanamente.
7. **Mexicanidad sin folclor.** Cercanía local en el contenido, contemporaneidad en la forma.

### Glosario

**Sí decimos:**
`extrae` · `estructura` · `transcribe` · `agiliza` · `lee` · `organiza` · `valida` · `confianza por campo` · `expediente digital` · `datos listos para usar`

> **Nota de marca (v1.0.0):** `valida`/`validación` es **lenguaje aprobado** de nominds (decisión del brand owner). Se usa en el sentido de *verificación asistida con porcentaje de confianza + revisión humana* (p. ej. CSF validada con SAT, validación de integridad, alertas de revisión). No implica firma ni sustitución del criterio del notario.

**No decimos:**
`garantiza` · `100% en línea` · `reemplaza (al notario)` · `automágico` · `infalible` · `sin errores nunca` · `revolucionario` · superlativos vacíos.

### Do's & don'ts (ejemplos reales)

| ✅ Sí | ❌ No |
|---|---|
| "De documentos en papel a datos estructurados al instante" | "La revolución mágica de tus documentos" |
| "Tu equipo dedica horas a lo que la IA hace en segundos" | "Elimina el 100% del trabajo humano para siempre" |
| "Alertas solo cuando algo importa" | "Detección infalible de cualquier error" |
| "Datos del INE listos para pegar en la plataforma de la ESN" | "Tramita biométricos automáticamente por ti" |
| "Construido mano a mano con notarías reales" | "La mejor herramienta legal del mundo" |
| "Cada dato incluye un porcentaje de confianza" | "Garantizamos extracción perfecta" |
| "Lo que tomaba 45 min ahora toma menos de 2" | "Infinitamente más rápido" |
| "nominds lee, extrae y estructura" | "nominds reemplaza a tu equipo de captura" |
| "Constancia de situación fiscal, validada con SAT" | "Validamos legalmente todos tus documentos" |
| "Tu equipo se enfoca en validar, no en teclear" | "Nunca más vuelvas a revisar nada" |

### Reglas de escritura

- **Capitalización:** nombres propios sí (SAT, INE, Monterrey, Registro Público); conceptos no ("captura manual", "extracción de datos", "expediente digital" en minúscula).
- **`nominds` siempre minúscula**, incluso a inicio de oración cuando sea posible reformular; si no, mantener minúscula (es la marca).
- **Itálicas:** para términos extranjeros (*legal-first*, *KYC*) y énfasis puntual; no para párrafos enteros.
- **Números:** decimal con **coma** estilo mexicano cuando aplica al usuario final; en datos técnicos/montos seguir el formato del documento ($4,250,000.00 M.N.). Porcentajes y multiplicadores pegados (`96%`, `50×`, `<90s`).
- **Listas:** paralelas, empiezan con verbo en imperativo o sustantivo, sin punto final si son fragmentos.

---

## 14. Aplicaciones por canal

### One-pager / hoja de ventas
Referencia de patrones: proyecto **tunotariaexpress** (`../tunotariaexpress/`), sucesor del prototipo *expedito*. Estructura del one-pager: header (logo + tag) → hero (eyebrow + título DM Serif Display + sub) → demo INE (doc↔datos + tags) → 3 chips (incluye dark stat `50×`) → demo escritura (selección azul + tabla) → 3 chips → footer (mensaje + contacto). Formato vertical 1080×1920 para móvil/social.

### Pitch deck / deck corporativo
- Portada: símbolo + wordmark sobre `nm-white` o `nm-dark`, eyebrow ámbar.
- Tipografía: títulos DM Serif Display, body DM Sans, datos DM Mono.
- Una idea por slide, mucho aire, máximo un foco ámbar.
- Stats como dark stat chips. Casos como doc↔datos.

### App UI
- **Dashboard:** header (9.10) + grid de expedientes (cards 9.2) + stats (9.4).
- **Document viewer:** patrón doc↔datos (10.2) a pantalla completa, panel de campos con confianza.
- **Extractor view:** animación de escaneo (10.1) en vivo durante el procesamiento.
- **Login:** fondo `nm-dark` con grid sutil (como FinalCTA), card de form (9.5 oscuro), logo white.

### Website
Hero (eyebrow + DM Serif Display + sub + CTAs + social proof + ScanAnimation) → Problem (timeline oscuro before/after) → Features (lista + trust card verde) → UseCases (grid doc↔datos) → Benefits (stats + testimonios) → WhyNominds (4 cards) → FinalCTA (form oscuro) → Footer. Container 1100, secciones alternando `white`/`off-white`/`dark`.

### Email
- **Firma:** logo dark 24px + nombre (DM Sans 600 14px) + cargo (`muted` 12px) + `nominds.com · +52 81 8280 2853`.
- **Transaccional:** header logo, cuerpo DM Sans sobre `white`, CTA botón verde, footer `dark-2` con logo white.
- **Outreach:** texto plano, voz directa (§13), sin imágenes pesadas; máximo un CTA.

### Documentos legales / facturas / membretes
- Membrete: logo dark esquina superior, datos en `muted`, hairline `border`.
- Cuerpo DM Sans del sistema documental; datos en DM Mono.

### LinkedIn
- **Post:** voz §13, una idea, dato citado con humildad.
- **Carrusel:** portada DM Serif Display + eyebrow ámbar; slides con un patrón nativo por lámina (escaneo, doc↔datos, stat chip).
- **Cover/banner:** símbolo + wordmark white sobre `nm-dark` con grid sutil; asset base en `Logo/Logo Files/Linkedin/`.

---

## 15. Design tokens

Nombres **semánticos** (por función, no por valor). Se entregan en 3 formatos. La refactorización de `src/lib/tokens.ts` (Deliverable C) implementa estos nombres manteniendo `C.*`/`S.*` como alias de retrocompatibilidad.

### Mapa semántico de color

| Token semántico | Valor | Equivale a |
|---|---|---|
| `color-background-base` | `#FAFAF8` | white |
| `color-background-subtle` | `#F4F2EE` | off-white |
| `color-background-sand` | `#ECF0ED` | sand-l |
| `color-background-inverse` | `#1A1D19` | dark |
| `color-background-inverse-2` | `#272B25` | dark-2 |
| `color-border-default` | `#E6E8E3` | border |
| `color-border-strong` | `#D4DBD6` | sand |
| `color-text-primary` | `#1A1D19` | dark |
| `color-text-secondary` | `#272B25` | dark-2 |
| `color-text-tertiary` | `#717870` | warm-gray |
| `color-text-muted` | `#969C92` | muted |
| `color-text-inverse` | `#FAFAF8` | white |
| `color-action-primary` | `#2E6B4E` | green |
| `color-action-primary-hover` | `#245840` | green-deep |
| `color-action-primary-subtle` | `#E4EFE8` | green-pale |
| `color-accent-scan` | `#4CAF7A` | scan |
| `color-accent-brand` | `#C8922A` | amber |
| `color-accent-brand-subtle` | `#F5EDD8` | amber-pale |
| `color-status-success` | `#2E6B4E` | green |
| `color-status-warning` | `#C8922A` | amber |
| `color-status-error` | `#B84E2F` | error |
| `color-status-info` | `#2D6CC4` | info |
| `color-mark-selection` | `rgba(74,144,226,.42)` | info (translúcido) |

### Formato 1 — CSS custom properties

```css
:root {
  /* background */
  --color-background-base: #FAFAF8;
  --color-background-subtle: #F4F2EE;
  --color-background-sand: #ECF0ED;
  --color-background-inverse: #1A1D19;
  --color-background-inverse-2: #272B25;
  /* border */
  --color-border-default: #E6E8E3;
  --color-border-strong: #D4DBD6;
  /* text */
  --color-text-primary: #1A1D19;
  --color-text-secondary: #272B25;
  --color-text-tertiary: #717870;
  --color-text-muted: #969C92;
  --color-text-inverse: #FAFAF8;
  /* action */
  --color-action-primary: #2E6B4E;
  --color-action-primary-hover: #245840;
  --color-action-primary-subtle: #E4EFE8;
  /* accent + status */
  --color-accent-scan: #4CAF7A;
  --color-accent-brand: #C8922A;
  --color-accent-brand-subtle: #F5EDD8;
  --color-status-error: #B84E2F;
  --color-status-info: #2D6CC4;
  --color-mark-selection: rgba(74,144,226,0.42);
  /* typography */
  --font-display: 'DM Serif Display', Georgia, serif;
  --font-body: 'DM Sans', 'Helvetica Neue', sans-serif;
  --font-mono: 'DM Mono', monospace;
  /* radius */
  --radius-sm: 8px; --radius-md: 12px; --radius-lg: 16px; --radius-xl: 20px;
  /* shadow */
  --shadow-sm: 0 1px 20px rgba(26,29,25,0.06);
  --shadow-md: 0 8px 32px rgba(26,25,22,0.07);
  --shadow-lg: 0 20px 48px rgba(26,29,25,0.22);
  /* motion */
  --ease-standard: cubic-bezier(0.4,0,0.2,1);
  --duration-fast: 0.2s; --duration-base: 0.4s; --duration-slow: 0.7s;
  --laser-duration: 2300ms;
  /* layout */
  --container-max: 1100px;
  --section-py: 88px; --section-px: 28px;
}
```

### Formato 2 — Tailwind theme extend

```js
// tailwind.config.js → theme.extend
colors: {
  background: { base:'#FAFAF8', subtle:'#F4F2EE', sand:'#ECF0ED', inverse:'#1A1D19', 'inverse-2':'#272B25' },
  border: { DEFAULT:'#E6E8E3', strong:'#D4DBD6' },
  text: { primary:'#1A1D19', secondary:'#272B25', tertiary:'#717870', muted:'#969C92', inverse:'#FAFAF8' },
  action: { primary:'#2E6B4E', 'primary-hover':'#245840', 'primary-subtle':'#E4EFE8' },
  accent: { scan:'#4CAF7A', brand:'#C8922A', 'brand-subtle':'#F5EDD8' },
  status: { success:'#2E6B4E', warning:'#C8922A', error:'#B84E2F', info:'#2D6CC4' },
  // 'nm' legacy se mantiene para retrocompat
},
fontFamily: { display:['DM Serif Display','Georgia','serif'], sans:['DM Sans','Helvetica Neue','sans-serif'], mono:['DM Mono','monospace'] },
borderRadius: { sm:'8px', md:'12px', lg:'16px', xl:'20px' },
```

### Formato 3 — JSON / Style Dictionary

```json
{
  "color": {
    "background": { "base": { "value": "#FAFAF8" }, "subtle": { "value": "#F4F2EE" }, "inverse": { "value": "#1A1D19" } },
    "text": { "primary": { "value": "#1A1D19" }, "tertiary": { "value": "#717870" }, "muted": { "value": "#969C92" } },
    "action": { "primary": { "value": "#2E6B4E" }, "primary-hover": { "value": "#245840" } },
    "accent": { "scan": { "value": "#4CAF7A" }, "brand": { "value": "#C8922A" } },
    "status": { "error": { "value": "#B84E2F" }, "info": { "value": "#2D6CC4" } }
  },
  "font": { "display": { "value": "DM Serif Display" }, "body": { "value": "DM Sans" }, "mono": { "value": "DM Mono" } },
  "radius": { "sm": { "value": "8px" }, "md": { "value": "12px" }, "lg": { "value": "16px" }, "xl": { "value": "20px" } }
}
```

### Otras escalas (resumen)

- **Spacing:** 4,8,12,16,20,24,32,40,48,64,80,96,128 (§7).
- **Radius:** sm 8 · md 12 · lg 16 · xl 20.
- **Shadow:** sm/md/lg arriba.
- **Z-index:** base 0 · header 100 · láser 20 · overlay 1000 · modal 1010 · toast 1020.

---

## 16. Accesibilidad

Objetivo: **WCAG 2.1 AA** mínimo.

### Contraste (pares documentados)

| Texto | Fondo | Ratio | Resultado |
|---|---|---|---|
| `dark` | `white` | 15.8:1 | ✅ AAA |
| `dark-2` | `white` | 13.0:1 | ✅ AAA |
| `warm-gray` | `white` | 4.6:1 | ✅ AA |
| `muted` | `white` | 2.9:1 | ⚠️ solo ≥18px/decorativo |
| `white` | `green` | 5.9:1 | ✅ AA |
| `white` | `green-deep` | 8.2:1 | ✅ AAA |
| `white` | `dark` | 15.8:1 | ✅ AAA |
| `green` | `green-pale` | ~5.5:1 | ✅ AA |
| `amber` | `white` | 3.4:1 | ⚠️ ≥18px/bold |
| `amber` | `dark` | 5.6:1 | ✅ AA |
| `scan` | `dark` | 6.4:1 | ✅ AA |

### Reglas obligatorias

- **Texto pequeño** (< 18px) usa `dark`/`dark-2`/`warm-gray`, nunca `muted` ni `amber`.
- **Focus visible obligatorio:** anillo de 2px `green` (o `scan` sobre oscuro), offset 2px. Hoy varios componentes hacen `outline: none` sin reemplazo — corregir.
- **Tap targets ≥ 44×44px** en móvil (botones, nav, hamburguesa).
- **`prefers-reduced-motion`:** desactivar/reducir láser, float, pulse, cascada y reveals. *Gap actual: no implementado.*
- **Zoom 200%:** layouts deben reflujar sin pérdida de contenido (usar `clamp`, evitar alturas fijas en texto).
- **Imágenes** con `alt` significativo; el logo siempre `alt="nominds"`.
- **Formularios:** labels asociados (`htmlFor`), estados de error con texto (no solo color).

---

## 17. Gobernanza

- **Brand owner:** Adrián TM. Aprueba todo cambio de marca (logo, paleta, tipografía, voz).
- **Cómo proponer cambios:** PR a `BRAND_GUIDELINES.md` (y, si aplica, a `tokens.ts` / `tailwind.config.js`). Describir el cambio, la razón y el impacto en componentes.
- **Versionado (SemVer del documento):**
  - **MAJOR** — cambio que rompe (retiro de token, cambio de logo/tipografía, nueva regla incompatible).
  - **MINOR** — adición compatible (nuevo token, nuevo componente, nueva sección).
  - **PATCH** — correcciones, aclaraciones, ejemplos.
- **Este documento es v1.0.0.** Cuando código y guía difieran, el código manda y la guía se actualiza por PR.

---

## 18. Anexo · Resumen ejecutivo

### Tokens en una tabla

| Categoría | Tokens clave |
|---|---|
| **Fondo** | base `#FAFAF8` · subtle `#F4F2EE` · sand `#ECF0ED` · inverse `#1A1D19` |
| **Texto** | primary `#1A1D19` · tertiary `#717870` · muted `#969C92` · inverse `#FAFAF8` |
| **Acción** | primary `#2E6B4E` · hover `#245840` · subtle `#E4EFE8` |
| **Acento** | scan `#4CAF7A` · brand/amber `#C8922A` · amber-subtle `#F5EDD8` |
| **Estado** | success `#2E6B4E` · warning `#C8922A` · error `#B84E2F` · info `#2D6CC4` |
| **Tipografía** | display DM Serif Display · body DM Sans · mono DM Mono |
| **Radius** | 8 / 12 / 16 / 20 |
| **Layout** | container 1100 · section 88×28 (editorial) / 48×24 (compacto) |
| **Motion** | ease `cubic-bezier(0.4,0,0.2,1)` · láser 2300ms |

### Deliverables entregados (v1.0.0)

| # | Entregable | Ubicación | Estado |
|---|---|---|---|
| A | Brand guidelines (este documento, 17 secciones) | `BRAND_GUIDELINES.md` | ✅ |
| B | Página de marca viva, navegable | `src/app/brand/page.tsx` (ruta `/brand`) | ✅ |
| B′ | Preview estático standalone (sin servidor) | `brand-preview.html` | ✅ |
| C | Refactor de tokens (semánticos + tipos + scales) | `src/lib/tokens.ts` | ✅ |
| C′ | Fix de fuentes + aliases semánticos | `tailwind.config.js` | ✅ |
| — | Pin de Node (Next 14 no corre en Node 24) | `.nvmrc` (20) + `engines` en `package.json` | ✅ |
| D | Resumen ejecutivo + punch-list | §18 (esta sección) | ✅ |

### Cambios de marca aplicados en esta versión

- **Verde principal → "bosque vivo"** `#2F4F3E → #2E6B4E` (+ familia `green-l/p/d`). Más vida y confianza, base de tierra intacta. Neutros, `dark` y ámbar sin cambio.
- **Tokens de estado formalizados:** `error #B84E2F`, `info #2D6CC4` (sustituyen hardcodes off-system).
- **Rename:** referencias a `expedito` → **tunotariaexpress** (`../tunotariaexpress/`).
- **Fix de tipografía en Tailwind:** `sans/serif` apuntaban a DM Sans / DM Serif (placeholders) → `display: NeueHaas`, `sans: Satoshi`, `mono: DM Mono`.

### Inconsistencias — resueltas en esta entrega ✅

| # | Dónde | Resolución |
|---|---|---|
| 1 | `tailwind.config.js` fontFamily | ✅ Corregido a NeueHaas / Satoshi / DM Mono. |
| 2 | `tokens.ts` / `tailwind.config.js` | ✅ Tokens `error` / `info` formalizados. Verde unificado a bosque vivo en todo el código (0 valores viejos restantes). |
| 3 | `ScanAnimation.tsx:448` | ✅ `"DM Sans"` suelto del botón Replay → `'Satoshi'`. |
| 4 | Naming `green-p/green-d` vs `greenPale/greenDeep` | ✅ Capa semántica + alias en el refactor de `tokens.ts`. |
| 5 | Padding de sección 88 vs 48 | ✅ Documentado como variantes *editorial* / *compacto* (§7). |
| 6 | `Problem.tsx`, `MiniScanAnimation.tsx` | ✅ Rojo `#E05252`/`#DC3C3C` → `C.error`; azul `rgba(0,100,255)` → `info` (`SELECTION_BG`). 0 colores off-system restantes. |
| 10 | `globals.css` (+ `brand-preview.html`) | ✅ Focus ring global `:focus-visible` (verde, solo teclado; scan sobre oscuro). Reemplaza los `outline:none` sin reemplazo. |
| 11 | `globals.css` (+ `brand-preview.html`) | ✅ `prefers-reduced-motion`: neutraliza animaciones/transiciones/scroll suave y fuerza visibles los patrones que arrancan ocultos. |
| 8 | `Button.tsx` (Header / Hero / FinalCTA) | ✅ Componente `<Button>` reutilizable (variant/size/loading + estados). Elimina el hover inline duplicado; `greenDeep` vive en un solo lugar. 5 instancias migradas. |

### Inconsistencias — abiertas (próximos PRs) ⬜

| # | Severidad | Dónde | Acción |
|---|---|---|---|
| 7 | 🟠 | Múltiples componentes | Tamaños de texto ad-hoc (15.5, 13.5, 10.5…). Migrar a la escala §6 (`fontSize` tokens). |
| 9 | 🟡 | `ScanAnimation.tsx` internals | `"monospace"` genérico en la micro-tipografía de la tarjeta. Migrar a DM Mono con cuidado (texto afinado a mano). |

### Qué falta a nivel de sistema (next steps)

1. **Migrar componentes a la capa semántica** (`tokens.color.*`, `fontSize`, `space`) — hoy usan `C.*`/`S.*` (válido, con alias) y tamaños inline.
2. **Producir asset de logo "símbolo solo"** limpio (favicon/avatar) y, si se decide, una variante cromática aprobada.
3. ✅ **`prefers-reduced-motion`** + **focus rings** globales aplicados (`globals.css`). Pendiente: verificar caso por caso en componentes con estilos inline muy específicos.
4. **Entorno de build:** usar Node 18–20 (`.nvmrc` ya añadido) para que `next dev` / `/brand` corran; opcionalmente subir Next.
5. **Templates Figma** del sistema (componentes, deck, one-pager) + **Storybook** de componentes vivos.
6. **Librería de iconos custom** alineada al trazo 1.8.
7. **Plantillas versionadas** de deck, email, membrete y LinkedIn.

---

*nominds — Brand Guidelines v1.1.0 · Documento mantenido en `BRAND_GUIDELINES.md`, renderizado vivo en `/brand`, preview estático en `brand-preview.html`.*
