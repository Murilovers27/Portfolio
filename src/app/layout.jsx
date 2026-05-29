import NavBar from '@/components/NavBar/NavBar';
import './globals.css';

export const metadata = {
  title: 'Meu Portfólio',
  description: 'Portfólio pessoal',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}