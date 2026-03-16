export type SectionId =
  | "hero"
  | "about"
  | "projects"
  | "skills"
  | "experience"
  | "contact";

export interface SectionInstance {
  id: SectionId;
  title?: string;
  variant?: string;
  className?: string;
  slotClassName?: string;
  hidden?: boolean;
}
