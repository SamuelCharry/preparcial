import './globals.css';
import { AuthorsProvider } from '@/context/AuthorsContext';
import { UserPrefsProvider } from '@/context/UserPrefsContext';
import Header from '@/components/Header';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <UserPrefsProvider>
          <AuthorsProvider>
            <Header />
            <main style={{ padding: 12 }}>{children}</main>
          </AuthorsProvider>
        </UserPrefsProvider>
      </body>
    </html>
  );
}

