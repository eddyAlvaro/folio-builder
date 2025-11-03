import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { PortfolioLayout } from "./lib/components/PortfolioLayout";
import type { PortfolioData } from "./lib/types/portfolio";
const data: PortfolioData = {
  version: 1,
  name: "Eddy Alvaro",
  role: "Software Developer",
  headline: "Desarrollo front con React/Next y NestJS en el backend.",
  about: {
    summary:
      "Desarrollador web con foco en performance, DX y componentización. Experiencia en e-commerce y paneles de administración.",
    highlights: [
      "React + TypeScript + Tailwind",
      "Next.js, Server Actions básicas",
      "Tables, modals y sidebars accesibles",
    ],
  },
  // projects: [
  //   {
  //     title: "Ecommerce bebidas",
  //     description: "Catálogo, filtros, campañas por .env",
  //     link: "#",
  //   },
  // ],
};
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PortfolioLayout data={data} theme="dark" />
  </StrictMode>
);
