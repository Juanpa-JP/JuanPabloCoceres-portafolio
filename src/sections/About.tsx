import { motion } from "framer-motion";
import {
  User,
  MapPin,
  Mail,
  Gamepad2,
  Code2,
  Monitor,
  Palette,
  Terminal,
} from "lucide-react";
import { personalInfo, skills } from "@/data/projects";

/**
 * Componente de barra de progreso animada para skills
 */
function SkillBar({
  name,
  level,
  category,
  index,
}: {
  name: string;
  level: number;
  category: string;
  index: number;
}) {
  // Color segun la categoria
  const categoryColors: Record<string, string> = {
    Engine: "from-neon-green to-neon-blue",
    Language: "from-neon-blue to-neon-purple",
    Art: "from-neon-purple to-neon-pink",
    Tech: "from-neon-green to-white",
    Design: "from-neon-blue to-white",
  };

  const gradient = categoryColors[category] || "from-neon-green to-neon-blue";

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-white font-mono text-sm">{name}</span>
          <span className="text-xs text-slate-500 font-mono">[{category}]</span>
        </div>
        <span className="text-neon-green font-mono text-sm">{level}%</span>
      </div>
      <div className="h-2 bg-void-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 + index * 0.1, ease: "easeOut" }}
          className={`h-full rounded-full bg-gradient-to-r ${gradient} relative`}
        >
          {/* Brillo en la punta de la barra */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full blur-sm" />
        </motion.div>
      </div>
    </motion.div>
  );
}

/**
 * Seccion About / Sobre Mi
 * Muestra informacion personal, bio y skills tecnicas
 */
export default function About() {
  const skillCategories = [
    { icon: Code2, label: "Lenguajes", color: "text-neon-blue" },
    { icon: Monitor, label: "Motores", color: "text-neon-green" },
    { icon: Palette, label: "Arte 3D", color: "text-neon-purple" },
    { icon: Terminal, label: "Tecnico", color: "text-neon-pink" },
  ];

  return (
    <section id="about" className="relative py-20 sm:py-32 overflow-hidden">
      {/* Fondo */}
      <div className="absolute inset-0 bg-gradient-to-b from-void-900 via-void-800/50 to-void-900" />
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full glassmorphism border border-neon-blue/30">
            <User size={16} className="text-neon-blue" />
            <span className="font-mono text-sm text-neon-blue">Sobre Mi</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Conoce al{" "}
            <span className="text-gradient-neon">Developer</span>
          </h2>

          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Apasionado por la creacion de experiencias interactivas y mundos
            digitales.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Columna izquierda - Info personal */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Avatar placeholder con animacion */}
            <motion.div
              className="w-32 h-32 mx-auto lg:mx-0 mb-8 rounded-2xl bg-gradient-to-br from-neon-green/20 to-neon-blue/20 border border-neon-green/30 flex items-center justify-center"
              animate={{
                boxShadow: [
                  "0 0 20px rgba(57, 255, 20, 0.1)",
                  "0 0 40px rgba(0, 212, 255, 0.2)",
                  "0 0 20px rgba(57, 255, 20, 0.1)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Gamepad2 size={48} className="text-neon-green" />
            </motion.div>

            <h3 className="text-2xl font-bold text-white mb-4 text-center lg:text-left">
              {personalInfo.name}
            </h3>

            <p className="text-slate-300 leading-relaxed mb-6 text-center lg:text-left">
              {personalInfo.bio}
            </p>

            {/* Info de contacto rapido */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-slate-400 justify-center lg:justify-start">
                <MapPin size={18} className="text-neon-green" />
                <span className="font-mono text-sm">{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400 justify-center lg:justify-start">
                <Mail size={18} className="text-neon-blue" />
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="font-mono text-sm hover:text-neon-blue transition-colors"
                >
                  {personalInfo.email}
                </a>
              </div>
            </div>

            {/* Categorias de skills */}
            <div className="grid grid-cols-2 gap-3">
              {skillCategories.map((cat, index) => (
                <motion.div
                  key={cat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-void-800/50 border border-void-700"
                >
                  <cat.icon size={20} className={cat.color} />
                  <span className="text-sm text-slate-300 font-mono">
                    {cat.label}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4 mt-8 justify-center lg:justify-start">
              {Object.entries(personalInfo.social).map(([name, url]) => (
                <motion.a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-void-800 border border-void-700 text-slate-400 font-mono text-sm hover:border-neon-green hover:text-neon-green transition-all"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {name.charAt(0).toUpperCase() + name.slice(1)}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Columna derecha - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Terminal size={20} className="text-neon-green" />
              <span>Habilidades Tecnicas</span>
            </h3>

            {skills.map((skill, index) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                level={skill.level}
                category={skill.category}
                index={index}
              />
            ))}

            {/* Stats adicionales */}
            <div className="mt-10 pt-8 border-t border-void-700">
              <h4 className="text-lg font-bold text-white mb-6">
                Estadisticas
              </h4>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: "5+", label: "Juegos", color: "text-neon-green" },
                  { value: "5", label: "Anios Exp.", color: "text-neon-blue" },
                  { value: "100%", label: "Pasión", color: "text-neon-purple" },
                ].map((stat) => (
                  <motion.div
                    key={stat.label}
                    whileHover={{ scale: 1.05 }}
                    className="text-center p-4 rounded-xl bg-void-800/50 border border-void-700"
                  >
                    <div className={`text-2xl font-bold ${stat.color} font-mono`}>
                      {stat.value}
                    </div>
                    <div className="text-xs text-slate-500 mt-1 font-mono">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Linea decorativa */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-blue/30 to-transparent" />
    </section>
  );
}
