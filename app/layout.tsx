import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'PRIME — Barbearia & Estilo | Demonstração',
  description: 'Experiência premium de barbearia com agendamento interativo, equipe, serviços e área de gestão. Projeto demonstrativo.',
  robots: { index: false, follow: false }
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
