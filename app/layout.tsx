import NavBar from './ui/dashboard/navbar';
import { montserrat } from './ui/fonts';
import './ui/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className}`}>
        <nav>
          <NavBar/>
        </nav>
        {children}
        <footer className='py-10 flex justify-center items-center'>
          Hecho con amor
        </footer>
      </body>
    </html>
  );
}
