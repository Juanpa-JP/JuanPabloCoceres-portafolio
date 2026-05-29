import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  Play,
  X,
  Calendar,
  User,
  Tag,
  Layers,
  Sparkles,
} from "lucide-react";
import { projects, type Project } from "@/data/projects";

/**
 * Tarjeta individual de proyecto
 * - Efecto hover con escala y brillo
 * - Reveal de informacion al hover
 * - Click para abrir modal con detalles
 */
function ProjectCard({
  project,
  index,
  onSelect,
}: {
  project: Project;
  index: number;
  onSelect: (p: Project) => void;
}) {
  const [isHovered, setIsHovered] = useState(false);

  // Color segun el estado del proyecto
  const statusConfig = {
    completed: { color: "text-neon-green", bg: "bg-neon-green/10", label: "Completado" },
    "in-progress": { color: "text-neon-blue", bg: "bg-neon-blue/10", label: "En Desarrollo" },
    prototype: { color: "text-neon-purple", bg: "bg-neon-purple/10", label: "Prototipo" },
  };
  const status = statusConfig[project.status];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onSelect(project)}
    >
      <motion.div
        className="relative overflow-hidden rounded-xl cursor-pointer cyberpunk-border bg-void-800 transition-all duration-500"
        whileHover={{ scale: 1.02, y: -5 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Imagen del proyecto */}
        <div className="relative aspect-video overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.6 }}
          />
          {/* Overlay gradiente */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-void-900 via-void-900/50 to-transparent"
            animate={{ opacity: isHovered ? 1 : 0.7 }}
          />

          {/* Estado del proyecto badge */}
          <div className="absolute top-3 left-3">
            <span
              className={`inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs font-mono font-medium ${status.color} ${status.bg} border border-current/20`}
            >
              <Sparkles size={12} />
              {status.label}
            </span>
          </div>

          {/* Icono de play al hacer hover */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-16 h-16 rounded-full bg-neon-green/20 backdrop-blur-sm border border-neon-green/50 flex items-center justify-center">
                  <Play size={28} className="text-neon-green ml-1" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Año */}
          <div className="absolute bottom-3 right-3">
            <span className="font-mono text-xs text-slate-400 bg-void-900/80 px-2 py-1 rounded">
              {project.year}
            </span>
          </div>
        </div>

        {/* Contenido de la tarjeta */}
        <div className="p-5">
          {/* Titulo */}
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neon-green transition-colors duration-300">
            {project.title}
          </h3>

          {/* Descripcion */}
          <p className="text-slate-400 text-sm mb-4 line-clamp-2">
            {project.description}
          </p>

          {/* Tecnologias */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs font-mono text-neon-blue bg-neon-blue/10 border border-neon-blue/20 rounded"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs text-slate-500 font-mono flex items-center gap-1"
              >
                <Tag size={10} />
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Borde glow al hover */}
        <motion.div
          className="absolute inset-0 rounded-xl pointer-events-none"
          animate={{
            boxShadow: isHovered
              ? "0 0 30px rgba(57, 255, 20, 0.2), inset 0 0 30px rgba(57, 255, 20, 0.05)"
              : "0 0 0px rgba(57, 255, 20, 0)",
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
}

/**
 * Modal de detalle de proyecto
 * Muestra informacion completa al hacer click en una tarjeta
 */
function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 50 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="relative max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-2xl bg-void-800 border border-neon-green/20 shadow-2xl shadow-neon-green/10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Boton cerrar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-void-900/80 text-slate-400 hover:text-white hover:bg-void-900 transition-colors"
        >
          <X size={20} />
        </button>

        {/* Imagen */}
        <div className="relative aspect-video">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-void-800 to-transparent" />
        </div>

        {/* Contenido */}
        <div className="p-6 sm:p-8">
          <h2 className="text-3xl font-bold text-white mb-2">{project.title}</h2>

          <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-slate-400">
            <span className="flex items-center gap-1">
              <Calendar size={14} className="text-neon-green" />
              {project.year}
            </span>
            <span className="flex items-center gap-1">
              <User size={14} className="text-neon-blue" />
              {project.role}
            </span>
            <span className="flex items-center gap-1">
              <Layers size={14} className="text-neon-purple" />
              {project.status === "completed"
                ? "Completado"
                : project.status === "in-progress"
                ? "En Desarrollo"
                : "Prototipo"}
            </span>
          </div>

          <p className="text-slate-300 leading-relaxed mb-6">
            {project.longDescription}
          </p>

          {/* Tecnologias */}
          <div className="mb-6">
            <h4 className="text-sm font-mono text-slate-400 mb-3">
              TECNOLOGIAS
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-sm font-mono text-neon-green bg-neon-green/10 border border-neon-green/20 rounded-lg"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div className="mb-8">
            <h4 className="text-sm font-mono text-slate-400 mb-3">TAGS</h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 text-sm text-neon-blue bg-neon-blue/10 border border-neon-blue/20 rounded-lg"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-3">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-neon-green text-void-900 font-mono font-bold rounded-lg hover:shadow-neon transition-all"
              >
                <Play size={18} />
                Ver Demo
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-neon-blue/40 text-neon-blue font-mono font-medium rounded-lg hover:bg-neon-blue/10 hover:border-neon-blue transition-all"
              >
                <Github size={18} />
                Codigo Fuente
              </a>
            )}
            {project.videoUrl && (
              <a
                href={project.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-neon-purple/40 text-neon-purple font-mono font-medium rounded-lg hover:bg-neon-purple/10 hover:border-neon-purple transition-all"
              >
                <ExternalLink size={18} />
                Trailer
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/**
 * Seccion de Proyectos
 * Renderiza el grid de tarjetas con los proyectos del archivo de datos
 */
export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative py-20 sm:py-32">
      {/* Fondo */}
      <div className="absolute inset-0 bg-gradient-to-b from-void-900 via-void-800 to-void-900" />
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header de la seccion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full glassmorphism border border-neon-green/30">
            <Layers size={16} className="text-neon-green" />
            <span className="font-mono text-sm text-neon-green">
              Portafolio
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Mis{" "}
            <span className="text-gradient-neon">Proyectos</span>
          </h2>

          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Una seleccion de los videojuegos que he desarrollado. Cada proyecto
            representa un desafio unico y una oportunidad de aprendizaje.
          </p>
        </motion.div>

        {/* Grid de proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onSelect={setSelectedProject}
            />
          ))}
        </div>

        {/* Contador de proyectos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="font-mono text-sm text-slate-500">
            Mostrando {projects.length} proyectos
          </p>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>

      {/* Linea decorativa */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-purple/30 to-transparent" />
    </section>
  );
}
