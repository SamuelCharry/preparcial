'use client';
import { createContext, useContext, useState } from 'react';
type Lang = 'es' | 'en';
type Prefs = { name: string; role: string; color: string; lang: Lang };

const Ctx = createContext<{prefs: Prefs; setPrefs: React.Dispatch<React.SetStateAction<Prefs>>; toggleLang:()=>void} | null>(null);

export function UserPrefsProvider({ children }: { children: React.ReactNode }) {
  const [prefs, setPrefs] = useState<Prefs>({ name:'', role:'', color:'#111111', lang:'es' });
  const toggleLang = () => setPrefs(p => ({ ...p, lang: p.lang==='es' ? 'en' : 'es' }));
  return <Ctx.Provider value={{ prefs, setPrefs, toggleLang }}>{children}</Ctx.Provider>;
}

export function useUserPrefs(){ const v=useContext(Ctx); if(!v) throw new Error('useUserPrefs'); return v; }
