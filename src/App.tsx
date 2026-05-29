import { Routes, Route } from "react-router";
import Home from "./pages/Home";

/**
 * Componente raiz de la aplicacion
 * Define las rutas del portafolio
 */
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
