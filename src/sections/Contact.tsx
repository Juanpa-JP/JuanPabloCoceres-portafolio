import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Send,
  User,
  MessageSquare,
  AtSign,
  CheckCircle,
  AlertCircle,
  Terminal,
} from "lucide-react";

/**
 * Tipos para los datos del formulario
 */
interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

/**
 * Seccion de Contacto
 * Formulario con validacion completa y estados de envio
 */
export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  /**
   * Validar el formulario
   * Retorna true si es valido, false si hay errores
   */
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Validar nombre
    if (!formData.name.trim()) {
      newErrors.name = "El nombre es requerido";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "El nombre debe tener al menos 2 caracteres";
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "El email es requerido";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Ingresa un email valido";
    }

    // Validar asunto
    if (!formData.subject.trim()) {
      newErrors.subject = "El asunto es requerido";
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = "El asunto debe tener al menos 3 caracteres";
    }

    // Validar mensaje
    if (!formData.message.trim()) {
      newErrors.message = "El mensaje es requerido";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "El mensaje debe tener al menos 10 caracteres";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /**
   * Manejar el envio del formulario
   */
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simular envio (aqui iria la logica real de envio)
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Resetear despues de 5 segundos
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 5000);
  };

  /**
   * Manejar cambios en los inputs
   */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Limpiar error al escribir
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  // Variantes de animacion para los inputs
  const inputVariants = {
    focus: { scale: 1.01 },
    blur: { scale: 1 },
  };

  return (
    <section id="contact" className="relative py-20 sm:py-32">
      {/* Fondo */}
      <div className="absolute inset-0 bg-gradient-to-b from-void-900 via-void-800 to-void-900" />
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full glassmorphism border border-neon-purple/30">
            <Mail size={16} className="text-neon-purple" />
            <span className="font-mono text-sm text-neon-purple">Contacto</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Trabajemos{" "}
            <span className="text-gradient-neon">Juntos</span>
          </h2>

          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Tienes una idea para un juego o quieres colaborar? Envianme un
            mensaje y lo discutimos.
          </p>
        </motion.div>

        {/* Estado de exito */}
        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center p-12 rounded-2xl bg-void-800/50 border border-neon-green/30 cyberpunk-border"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <CheckCircle size={64} className="text-neon-green mx-auto mb-6" />
            </motion.div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Mensaje Enviado!
            </h3>
            <p className="text-slate-400 font-mono">
              Gracias por contactarme. Te respondere pronto.
            </p>
          </motion.div>
        ) : (
          /* Formulario */
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {/* Terminal header decorativo */}
            <div className="flex items-center gap-2 p-3 rounded-t-xl bg-void-800 border border-void-700 border-b-0">
              <Terminal size={16} className="text-neon-green" />
              <span className="font-mono text-xs text-slate-400">
                contact_form.exe --interactive
              </span>
            </div>

            <div className="p-6 sm:p-8 rounded-b-xl bg-void-800/50 border border-void-700 cyberpunk-border space-y-6">
              {/* Grid para nombre y email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Nombre */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-mono text-slate-400 mb-2">
                    <User size={14} className="text-neon-green" />
                    Nombre
                  </label>
                  <motion.div variants={inputVariants} whileFocus="focus">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                      className={`w-full px-4 py-3 rounded-lg bg-void-900 border font-mono text-white placeholder-slate-600 focus:outline-none transition-all ${
                        errors.name
                          ? "border-red-500 focus:border-red-500"
                          : "border-void-700 focus:border-neon-green focus:shadow-neon"
                      }`}
                    />
                  </motion.div>
                  {errors.name && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-1 mt-1 text-xs text-red-400 font-mono"
                    >
                      <AlertCircle size={12} />
                      {errors.name}
                    </motion.p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-mono text-slate-400 mb-2">
                    <AtSign size={14} className="text-neon-blue" />
                    Email
                  </label>
                  <motion.div variants={inputVariants} whileFocus="focus">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="tu@email.com"
                      className={`w-full px-4 py-3 rounded-lg bg-void-900 border font-mono text-white placeholder-slate-600 focus:outline-none transition-all ${
                        errors.email
                          ? "border-red-500 focus:border-red-500"
                          : "border-void-700 focus:border-neon-blue focus:shadow-neon-blue"
                      }`}
                    />
                  </motion.div>
                  {errors.email && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-1 mt-1 text-xs text-red-400 font-mono"
                    >
                      <AlertCircle size={12} />
                      {errors.email}
                    </motion.p>
                  )}
                </div>
              </div>

              {/* Asunto */}
              <div>
                <label className="flex items-center gap-2 text-sm font-mono text-slate-400 mb-2">
                  <MessageSquare size={14} className="text-neon-purple" />
                  Asunto
                </label>
                <motion.div variants={inputVariants} whileFocus="focus">
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Proyecto colaborativo, consulta, etc."
                    className={`w-full px-4 py-3 rounded-lg bg-void-900 border font-mono text-white placeholder-slate-600 focus:outline-none transition-all ${
                      errors.subject
                        ? "border-red-500 focus:border-red-500"
                        : "border-void-700 focus:border-neon-purple focus:shadow-neon-purple"
                    }`}
                  />
                </motion.div>
                {errors.subject && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-1 mt-1 text-xs text-red-400 font-mono"
                  >
                    <AlertCircle size={12} />
                    {errors.subject}
                  </motion.p>
                )}
              </div>

              {/* Mensaje */}
              <div>
                <label className="flex items-center gap-2 text-sm font-mono text-slate-400 mb-2">
                  <Terminal size={14} className="text-neon-green" />
                  Mensaje
                </label>
                <motion.div variants={inputVariants} whileFocus="focus">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Cuéntame sobre tu proyecto o idea..."
                    className={`w-full px-4 py-3 rounded-lg bg-void-900 border font-mono text-white placeholder-slate-600 focus:outline-none transition-all resize-none ${
                      errors.message
                        ? "border-red-500 focus:border-red-500"
                        : "border-void-700 focus:border-neon-green focus:shadow-neon"
                    }`}
                  />
                </motion.div>
                {errors.message && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-1 mt-1 text-xs text-red-400 font-mono"
                  >
                    <AlertCircle size={12} />
                    {errors.message}
                  </motion.p>
                )}
                <div className="flex justify-end mt-1">
                  <span className="text-xs text-slate-600 font-mono">
                    {formData.message.length} chars
                  </span>
                </div>
              </div>

              {/* Boton de envio */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 font-mono font-bold rounded-lg transition-all duration-300 ${
                  isSubmitting
                    ? "bg-void-700 text-slate-500 cursor-not-allowed"
                    : "bg-neon-green text-void-900 hover:shadow-neon"
                }`}
                whileHover={isSubmitting ? {} : { scale: 1.02 }}
                whileTap={isSubmitting ? {} : { scale: 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="w-5 h-5 border-2 border-void-900 border-t-transparent rounded-full"
                    />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Enviar Mensaje
                  </>
                )}
              </motion.button>
            </div>
          </motion.form>
        )}

        {/* Info adicional */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-slate-500 font-mono">
            Tambien puedes contactarme directamente en:{" "}
            <a
              href="mailto:contact@gamedev-portfolio.com"
              className="text-neon-green hover:underline"
            >
              contact@gamedev-portfolio.com
            </a>
          </p>
        </motion.div>
      </div>

      {/* Linea decorativa inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-green/30 to-transparent" />
    </section>
  );
}
