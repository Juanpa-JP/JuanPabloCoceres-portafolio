import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Gamepad2,
  Code2,
  ChevronDown,
  Sparkles,
  Terminal,
  Cpu,
} from "lucide-react";
import { personalInfo } from "@/data/projects";

/**
 * Componente de particulas flotantes en el fondo
 * Simula particulas de codigo/neon flotando
 */
function FloatingParticles() {
  const [particles] = useState(() =>
    Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.3 + 0.1,
      color: ["#39ff14", "#00d4ff", "#b026ff", "#ffffff"][
        Math.floor(Math.random() * 4)
      ],
    }))
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            boxShadow: `0 0 ${particle.size * 3}px ${particle.color}`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [particle.opacity, particle.opacity * 2, particle.opacity],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

/**
 * Efecto de grid animado en el fondo
 */
function GridBackground() {
  return (
    <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
  );
}

/**
 * Componente Hero principal
 * Pantalla de inicio impactante con:
 * - Animaciones de entrada escalonadas
 * - Particulas flotantes
 * - Grid de fondo
 * - Titulo con efecto glow
 * - Botones de accion interactivos
 * - Imagen de fondo con overlay
 */
export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Efecto de parallax con el mouse
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Variantes de animacion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" as const },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Imagen de fondo con parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      >
        <img
          src="/images/hero.jpg"
          alt="Cyberpunk Game Environment"
          className="w-full h-full object-cover scale-110"
        />
        {/* Overlays gradientes */}
        <div className="absolute inset-0 bg-gradient-to-b from-void-900/80 via-void-900/60 to-void-900" />
        <div className="absolute inset-0 bg-gradient-to-r from-void-900/90 via-transparent to-void-900/90" />
      </motion.div>

      {/* Grid de fondo */}
      <GridBackground />

      {/* Particulas flotantes */}
      <FloatingParticles />

      {/* Contenido principal */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge superior */}
        <motion.div variants={itemVariants} className="mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glassmorphism border border-neon-green/30">
            <Sparkles size={16} className="text-neon-green animate-pulse" />
            <span className="font-mono text-sm text-neon-green">
              {personalInfo.role}
            </span>
          </div>
        </motion.div>

        {/* Titulo principal */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight"
        >
          <span className="block text-white mb-2">
            {personalInfo.tagline.split(",").map((part, i) =>
              i === 0 ? (
                <span key={i}>{part.trim()},</span>
              ) : (
                <span key={i}>
                  <br />
                  {part.trim()}
                </span>
              )
            )}
          </span>
        </motion.h1>

        {/* Subtitulo con efecto terminal */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-2 mb-8"
        >
          <Terminal size={18} className="text-neon-green" />
          <span className="font-mono text-slate-400 text-sm sm:text-base">
            <span className="text-neon-green">$</span> npm start career
            --specialty=gamedev
          </span>
        </motion.div>

        {/* Descripcion */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {personalInfo.bio}
        </motion.p>

        {/* Botones de accion */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          {/* Boton principal - Ver proyectos */}
          <motion.a
            href="#projects"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-neon-green text-void-900 font-mono font-bold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-neon"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <Gamepad2 size={20} />
            <span className="relative z-10">Ver Mis Proyectos</span>
            <ChevronDown
              size={18}
              className="relative z-10 group-hover:translate-y-1 transition-transform"
            />
          </motion.a>

          {/* Boton secundario - GitHub */}
          <motion.a
            href={personalInfo.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 border border-neon-blue/40 text-neon-blue font-mono font-medium rounded-lg transition-all duration-300 hover:bg-neon-blue/10 hover:border-neon-blue hover:shadow-neon-blue"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Code2 size={20} />
            <span>GitHub</span>
          </motion.a>
        </motion.div>

        {/* Stats / Tech stack rapido */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-6 sm:gap-10"
        >
          {[
            { icon: Gamepad2, label: "5+ Juegos", color: "text-neon-green" },
            { icon: Code2, label: "Unity & UE5", color: "text-neon-blue" },
            { icon: Cpu, label: "C# / C++", color: "text-neon-purple" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-3 text-slate-400"
              whileHover={{ scale: 1.1, color: "#fff" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <stat.icon size={20} className={stat.color} />
              <span className="font-mono text-sm">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="flex flex-col items-center gap-2 text-slate-500">
          <span className="font-mono text-xs">Scroll</span>
          <ChevronDown size={20} className="text-neon-green" />
        </div>
      </motion.div>

      {/* Linea decorativa inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-green/30 to-transparent" />
    </section>
  );
}
