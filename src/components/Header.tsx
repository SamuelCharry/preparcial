'use client';
import Link from 'next/link';
import { useUserPrefs } from '@/context/UserPrefsContext';
import { t } from '@/i18n';

export default function Header() {
  const { prefs, toggleLang } = useUserPrefs();
  const tr = t(prefs.lang);
  const accent = prefs.color || '#111';

  return (
    <header style={{ borderBottom:'1px solid #eee', padding: 8, background:'#fff' }}>
      <nav style={{ display:'flex', gap:12, alignItems:'center' }}>
        <Link href="/authors" style={{ color: accent }}>{tr.navAuthors}</Link>
        <Link href="/crear"  style={{ color: accent }}>{tr.navCreate}</Link>
        <Link href="/favoritos" style={{ color: accent }}>
          {tr.navFavorites ?? 'Favoritos'}
        </Link>
        <Link href="/prefs"  style={{ color: accent }}>{tr.settings}</Link>
        <span style={{ marginLeft:'auto' }}>
          {prefs.name ? `${tr.welcome}, ${prefs.name}!` : tr.welcome}
        </span>
        <button onClick={toggleLang} aria-label="Cambiar idioma">{tr.langBtn}</button>
      </nav>
    </header>
  );
}


