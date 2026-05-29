import { motion } from "framer-motion";
import {
  Gamepad2,
  Github,
  Linkedin,
  Twitter,
  Heart,
  ExternalLink,
} from "lucide-react";
import { personalInfo } from "@/data/projects";

/**
 * Footer del portafolio
 * Muestra links sociales, copyright y creditos
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: personalInfo.social.github,
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: personalInfo.social.linkedin,
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: personalInfo.social.twitter,
    },
  ];

  const footerLinks = [
    { name: "Inicio", href: "#hero" },
    { name: "Proyectos", href: "#projects" },
    { name: "Sobre Mi", href: "#about" },
    { name: "Contacto", href: "#contact" },
  ];

  return (
    <footer className="relative py-12 bg-void-900 border-t border-void-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo y descripcion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <a href="#hero" className="flex items-center gap-2 mb-4 group">
              <Gamepad2
                size={24}
                className="text-neon-green transition-all group-hover:drop-shadow-[0_0_8px_rgba(57,255,20,0.8)]"
              />
              <span className="font-mono font-bold text-lg">
                &lt;<span className="text-neon-green">GameDev</span>/&gt;
              </span>
            </a>
            <p className="text-slate-500 text-sm leading-relaxed">
              Desarrollador de videojuegos apasionado por crear experiencias
              interactivas unicas y memorables.
            </p>
          </motion.div>

          {/* Links de navegacion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-white font-mono font-bold mb-4">Navegacion</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-500 hover:text-neon-green transition-colors text-sm font-mono flex items-center gap-1 group"
                  >
                    <span className="text-neon-green/50 group-hover:text-neon-green">
                      &gt;
                    </span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Redes sociales */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-white font-mono font-bold mb-4">Conecta</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-void-800 border border-void-700 text-slate-400 hover:text-neon-green hover:border-neon-green/30 transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  title={social.name}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>

            {/* Email */}
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-2 mt-4 text-sm text-slate-500 hover:text-neon-blue transition-colors font-mono"
            >
              <ExternalLink size={14} />
              {personalInfo.email}
            </a>
          </motion.div>
        </div>

        {/* Separador */}
        <div className="h-px bg-gradient-to-r from-transparent via-void-700 to-transparent mb-8" />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-600 font-mono"
        >
          <p>
            &copy; {currentYear}{" "}
            <span className="text-neon-green">{personalInfo.name}</span>. Todos
            los derechos reservados.
          </p>
          <p className="flex items-center gap-1">
            Hecho con <Heart size={14} className="text-red-500 fill-red-500" />{" "}
            y mucho{" "}
            <span className="text-neon-green">codigo</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
