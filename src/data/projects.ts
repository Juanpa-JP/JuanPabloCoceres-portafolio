/**
 * ============================================================
 * CONFIGURACION DE PROYECTOS - PORTAFOLIO GAMEDEV
 * ============================================================
 *
 * Para agregar un nuevo proyecto, copia un objeto del array
 * y modifica los valores. Las imagenes deben colocarse en:
 * public/images/ y referenciarse como "/images/nombre.jpg"
 */

export interface Project {
  /** ID unico del proyecto (usado como key en React) */
  id: string;
  /** Titulo del juego/proyecto */
  title: string;
  /** Descripcion corta (1-2 lineas) */
  description: string;
  /** Descripcion larga para el modal/detalle */
  longDescription: string;
  /** URL de la imagen (desde public/) */
  image: string;
  /** Tecnologias utilizadas */
  technologies: string[];
  /** Tags/categorias del juego */
  tags: string[];
  /** Link al juego ejecutable/demo */
  demoUrl?: string;
  /** Link al repositorio de codigo */
  repoUrl?: string;
  /** Link al video/trailer */
  videoUrl?: string;
  /** Fecha de lanzamiento o desarrollo */
  year: string;
  /** Tu rol en el proyecto */
  role: string;
  /** Estado del proyecto */
  status: "completed" | "in-progress" | "prototype";
}

export const projects: Project[] = [
  {
    id: "neon-abyss",
    title: "Neon Abyss",
    description:
      "Plataformero 2D roguelike con estetica pixel art y mecanicas de luz/oscuridad.",
    longDescription:
      "Un plataformero 2D roguelike ambientado en las profundidades de un mundo subterraneo lleno de criaturas bioluminiscentes. El jugador controla a un explorador que debe navegar cavernas generadas proceduralmente, utilizando la luz como mecanica central para resolver puzzles y defenderse de enemigos. Desarrollado con mecanicas de progresion permanente y multiples finales.",
    image: "/images/project-neon-abyss.jpg",
    technologies: ["Unity", "C#", "Aseprite", "FMOD"],
    tags: ["2D", "Roguelike", "Pixel Art", "Indie"],
    demoUrl: "#",
    repoUrl: "#",
    year: "2024",
    role: "Lead Developer & Game Designer",
    status: "completed",
  },
  {
    id: "velocity-protocol",
    title: "Velocity Protocol",
    description:
      "Carreras anti-gravedad en un mundo cyberpunk con velocidadextrema.",
    longDescription:
      "Un juego de carreras arcade anti-gravedad ambientado en un futuro cyberpunk distopico. Los jugadores pilotan naves personalizables a traves de pistas suspendidas en ciudades neon, con mecanicas de boost, derrapes y power-ups. Incluye modo campana, multijugador local y tablas de clasificacion globales.",
    image: "/images/project-velocity.jpg",
    technologies: ["Unreal Engine 5", "C++", "Blender", "Wwise"],
    tags: ["3D", "Racing", "Cyberpunk", "Multiplayer"],
    demoUrl: "#",
    repoUrl: "#",
    year: "2024",
    role: "Gameplay Programmer",
    status: "completed",
  },
  {
    id: "stellar-conquest",
    title: "Stellar Conquest",
    description:
      "RTS espacial en tiempo real con batallas tacticas a gran escala.",
    longDescription:
      "Un juego de estrategia en tiempo real (RTS) ambientado en el espacio profundo. Los jugadores construyen y gestionan flotas de naves espaciales, conquistando planetas y recursos en un sistema solar dinamico. Combina mecanicas clasicas de RTS con elementos de 4X y soporte para hasta 8 jugadores en multijugador online.",
    image: "/images/project-stellar.jpg",
    technologies: ["Unity", "C#", "Shader Graph", "Photon"],
    tags: ["3D", "RTS", "Space", "Multiplayer"],
    demoUrl: "#",
    repoUrl: "#",
    year: "2023",
    role: "Lead Programmer & Systems Designer",
    status: "completed",
  },
  {
    id: "echoes-of-eternity",
    title: "Echoes of Eternity",
    description:
      "RPG de accion en tercera persona con combate souls-like.",
    longDescription:
      "Un RPG de accion en tercera persona con un profundo sistema de combate inspirado en los juegos souls-like. Ambientado en un reino gotico decadente donde la luz magica escasea, el jugador debe enfrentarse a criaturas oscuras utilizando armas melee, magia y habilidades especiales. Incluye progresion de personaje, crafteo y un mundo interconectado.",
    image: "/images/project-echoes.jpg",
    technologies: ["Unreal Engine 5", "C++", "Blueprint", "Maya"],
    tags: ["3D", "RPG", "Action", "Souls-like"],
    demoUrl: "#",
    repoUrl: "#",
    year: "2023",
    role: "Combat Systems Programmer",
    status: "completed",
  },
  {
    id: "cipher-protocol",
    title: "Cipher Protocol",
    description:
      "Puzzle game de hacking con estetica terminal cyberpunk.",
    longDescription:
      "Un juego de puzzles narrativo donde el jugador asume el rol de un hacker etico en un futuro distopico. Resuelve intrincados puzzles de redes, decodifica encriptaciones y manipula sistemas de seguridad a traves de una interfaz estilo terminal. La narrativa se despliega a traves de correos electronicos y archivos hackeados.",
    image: "/images/project-cipher.jpg",
    technologies: ["Godot 4", "GDScript", "Aseprite"],
    tags: ["2D", "Puzzle", "Cyberpunk", "Narrative"],
    demoUrl: "#",
    repoUrl: "#",
    year: "2025",
    role: "Solo Developer",
    status: "in-progress",
  },
];

/** Informacion personal para el portafolio */
export const personalInfo = {
  name: "Alex Developer",
  tagline: "Building Worlds, Line by Line",
  role: "Game Developer & Programmer",
  bio: "Desarrollador de videojuegos apasionado por crear experiencias interactivas memorables. Especializado en gameplay programming, sistemas de combate y mecanicas de jugabilidad. Mas de 5 anos de experiencia desarrollando juegos indie con Unity y Unreal Engine.",
  location: "Remoto / Worldwide",
  email: "contact@gamedev-portfolio.com",
  avatar: "/images/avatar.jpg",
  social: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    itch: "https://itch.io",
    twitter: "https://twitter.com",
  },
};

/** Habilidades tecnicas para mostrar */
export const skills = [
  { name: "Unity", level: 95, category: "Engine" },
  { name: "Unreal Engine 5", level: 85, category: "Engine" },
  { name: "C#", level: 95, category: "Language" },
  { name: "C++", level: 80, category: "Language" },
  { name: "Godot 4", level: 75, category: "Engine" },
  { name: "Blender", level: 70, category: "Art" },
  { name: "Shader Programming", level: 80, category: "Tech" },
  { name: "Game Design", level: 90, category: "Design" },
];
