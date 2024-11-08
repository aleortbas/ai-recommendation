'use client'
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
  <head>
  </head>
  <body className={`${montserrat.className} bg-[#111022] min-h-screen flex flex-col`}>
    {/* NavBar remains fixed at the top */}
    <nav>
      <NavBar />
    </nav>

    {/* Add padding to avoid content overlap with the fixed NavBar */}
    <div className="pt-20 flex-grow">
      {children}
    </div>

    <footer className="py-10 flex justify-center items-center">
      Hecho con amor
    </footer>
    <script src="https://cdn.jsdelivr.net/npm/flowbite@2.5.2/dist/flowbite.min.js"></script>
  </body>
</html>



  );
}
