import Link from "next/link";
import { AuthorsProvider } from "@/context/AuthorsContext";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <AuthorsProvider>
          <nav>
            <Link href="/authors">Autores</Link> | <Link href="/crear">Crear</Link>
          </nav>
          {children}
        </AuthorsProvider>
      </body>
    </html>
  );
}
