import { LanguageProvider } from '@/context/LanguageContext';
import NavBar from '@/components/NavBar/NavBar';
import Footer from '@/components/Footer/Footer';
import './globals.css';

export const metadata = {
  title: 'Murilo Cruz — Portfólio',
  description: 'Portfólio pessoal de Murilo Cruz, Desenvolvedor Full Stack.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body>
        <LanguageProvider>
          <NavBar />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}