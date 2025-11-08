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
  projects: [
    {
      title: "Micro-ecommerce multitienda",
      description:
        "Core de carrito/búsqueda desacoplado de branding; flags por .env.",
      tags: ["Next.js", "Tailwind", "Zustand"],
      link: "#",
      repo: "#",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200",
    },
    {
      title: "Admin panel headless",
      description:
        "Formularios dinámicos por schema, roles, filtros avanzados y export.",
      tags: ["React", "RHForm", "Zod", "TanStack Table"],
      link: "#",
      repo: "#",
    },
    {
      title: "Portfolio component library",
      description:
        "Librería de secciones y temas; data-driven, themeable, reorderable.",
      tags: ["Library", "Storybook"],
      repo: "#",
    },
  ],
  skills: [
    { name: "React", level: 5, category: "Frontend" },
    { name: "Next.js", level: 4, category: "Frontend" },
    { name: "Tailwind", level: 4, category: "Frontend" },
    { name: "NestJS", level: 3, category: "Backend" },
    { name: "PostgreSQL", level: 3, category: "Backend" },
    { name: "Vite", category: "Tooling" },
  ],
  experience: [
    {
      company: "Innovahope",
      role: "Frontend Developer",
      period: "2024 — 2025",
      location: "Arequipa, PE (Remoto)",
      link: "#",
      achievements: [
        "Implementé features en e-commerce y corrección de bugs.",
        "Despliegues y configuración básica de hosting/Docker.",
      ],
    },
    {
      company: "Proyecto freelance",
      role: "Full-stack (Next + Nest)",
      period: "2025",
      achievements: [
        "Diseñé una librería de portafolios themeable y data-driven.",
      ],
    },
  ],
};
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PortfolioLayout data={data} theme="minimal" />
  </StrictMode>
);
