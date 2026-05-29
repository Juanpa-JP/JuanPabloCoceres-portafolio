# GameDev Portfolio

Un portafolio profesional orientado al desarrollo de videojuegos con estetica **Dark Cyberpunk/Neon**.

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?logo=tailwindcss)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-0055FF?logo=framer)

---

## Caracteristicas Principales

- **Diseño Dark Cyberpunk**: Paleta de colores oscura con acentos neon (verde, morado, azul) que evoca la estetica gaming.
- **Animaciones Fluidas**: Transiciones y microinteracciones implementadas con Framer Motion para una experiencia interactiva.
- **Componentes Modulares**: Estructura desacoplada donde cada seccion es un componente independiente y reutilizable.
- **Sistema de Datos Separado**: Los proyectos se configuran en un archivo central (`projects.ts`), facilitando la adicion de nuevos juegos.
- **Formulario con Validacion**: Sistema de contacto con validacion completa en tiempo real.
- **Responsive Design**: Adaptable a dispositivos moviles, tablets y escritorio.
- **Efectos Visuales**: Glassmorphism, grid animado, particulas flotantes, glow effects y mas.

---

## Estructura del Proyecto

```
gamedev-portfolio/
├── public/
│   └── images/              # Imagenes de proyectos y hero
├── src/
│   ├── components/          # Componentes UI reutilizables
│   ├── data/
│   │   └── projects.ts      # Configuracion de proyectos e info personal
│   ├── pages/
│   │   └── Home.tsx         # Pagina principal
│   ├── sections/
│   │   ├── Navbar.tsx       # Navegacion con glassmorphism
│   │   ├── Hero.tsx         # Pantalla de inicio
│   │   ├── Projects.tsx     # Grid de proyectos con modales
│   │   ├── About.tsx        # Sobre mi y skills
│   │   ├── Contact.tsx      # Formulario de contacto
│   │   └── Footer.tsx       # Pie de pagina
│   ├── App.tsx              # Rutas principales
│   ├── main.tsx             # Punto de entrada
│   └── index.css            # Estilos globales y tema cyberpunk
├── index.html
├── tailwind.config.js       # Configuracion de Tailwind con colores neon
├── vite.config.ts
└── package.json
```

---

## Instalacion y Ejecucion

### Requisitos previos

- **Node.js** 18+ 
- **npm** o **yarn**

### 1. Clonar o crear el proyecto

```bash
# Si clonas desde un repositorio
git clone <url-del-repositorio>
cd gamedev-portfolio

# O crear nuevo proyecto con Vite + React + TypeScript
npm create vite@latest gamedev-portfolio -- --template react-ts
cd gamedev-portfolio
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Instalar dependencias adicionales

```bash
npm install framer-motion lucide-react
```

### 4. Configurar Tailwind CSS

Asegurate de que `tailwind.config.js` tenga las extensiones de colores neon:

```js
colors: {
  neon: {
    green: "#39ff14",
    purple: "#b026ff",
    blue: "#00d4ff",
    pink: "#ff007f",
  },
  void: {
    900: "#0a0a0f",
    800: "#111118",
    700: "#1a1a25",
    600: "#252535",
  },
}
```

### 5. Ejecutar en desarrollo

```bash
npm run dev
```

El servidor de desarrollo se iniciara en `http://localhost:3000`.

### 6. Compilar para produccion

```bash
npm run build
```

Los archivos compilados se generan en la carpeta `dist/`.

---

## Como Anadir Tus Propios Proyectos

Para agregar un nuevo proyecto de videojuego, edita el archivo `src/data/projects.ts` y añade un nuevo objeto al array `projects`:

### Formato del objeto de proyecto

```typescript
{
  id: "mi-juego-unico",           // ID unico (sin espacios)
  title: "Mi Juego",              // Titulo del juego
  description: "Descripcion corta que aparece en la tarjeta.",
  longDescription: "Descripcion detallada que aparece en el modal al hacer click.",
  image: "/images/mi-juego.jpg",  // Ruta de la imagen (colocar en public/images/)
  technologies: ["Unity", "C#", "Blender"],  // Tecnologias utilizadas
  tags: ["3D", "RPG", "Action"],  // Categorias del juego
  demoUrl: "https://mi-juego.itch.io",     // Link al demo (opcional)
  repoUrl: "https://github.com/usuario/repo", // Link al repo (opcional)
  videoUrl: "https://youtube.com/...",      // Link al trailer (opcional)
  year: "2025",                    // Año de desarrollo/lanzamiento
  role: "Lead Developer",          // Tu rol en el proyecto
  status: "completed" as const,    // "completed" | "in-progress" | "prototype"
}
```

### Pasos para agregar un proyecto

1. **Agrega la imagen**: Coloca la imagen del juego en la carpeta `public/images/`. Por ejemplo: `public/images/mi-juego.jpg`.

2. **Edita el archivo de datos**: Abre `src/data/projects.ts` y añade tu objeto al array `projects`:

```typescript
export const projects: Project[] = [
  // ... proyectos existentes ...
  {
    id: "mi-nuevo-juego",
    title: "Mi Nuevo Juego",
    description: "Un juego de accion en 2D con mecanicas innovadoras.",
    longDescription: "Descripcion larga y detallada del juego...",
    image: "/images/mi-nuevo-juego.jpg",
    technologies: ["Godot 4", "GDScript", "Aseprite"],
    tags: ["2D", "Action", "Indie"],
    demoUrl: "https://demo-link.com",
    repoUrl: "https://github.com/usuario/mi-juego",
    year: "2025",
    role: "Solo Developer",
    status: "completed",
  },
];
```

3. **Personaliza la informacion**: Abre `src/data/projects.ts` y modifica el objeto `personalInfo` con tus datos:

```typescript
export const personalInfo = {
  name: "Tu Nombre",
  tagline: "Building Worlds, Line by Line",
  role: "Game Developer",
  bio: "Tu biografia profesional...",
  location: "Tu Ciudad, Pais",
  email: "tu@email.com",
  social: {
    github: "https://github.com/tu-usuario",
    linkedin: "https://linkedin.com/in/tu-perfil",
    itch: "https://tu-usuario.itch.io",
    twitter: "https://twitter.com/tu-usuario",
  },
};
```

4. **Guarda y recarga**: El proyecto se actualizara automaticamente en el navegador.

---

## Stack Tecnologico

| Tecnologia      | Proposito                          |
|-----------------|------------------------------------|
| React 18        | Framework de UI                    |
| TypeScript      | Tipado estatico                    |
| Vite            | Bundler y dev server               |
| Tailwind CSS    | Estilos utilitarios                |
| Framer Motion   | Animaciones y transiciones         |
| Lucide React    | Iconos vectoriales                 |
| shadcn/ui       | Componentes base                   |

---

## Licencia

Este proyecto es de uso libre para portafolios personales.

---

## Contacto

Para preguntas o sugerencias, abre un issue en el repositorio o contactame a traves del formulario en el sitio.
