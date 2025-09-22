'use client';
import { useState, FormEvent } from 'react';
import { useUserPrefs } from '@/context/UserPrefsContext';
import { t } from '../../i18n';

export default function PrefsPage(){
  const { prefs, setPrefs } = useUserPrefs();
  const tr = t(prefs.lang);
  const [name,setName] = useState(prefs.name);
  const [role,setRole] = useState(prefs.role);
  const [color,setColor]= useState(prefs.color);
  const onSubmit=(e:FormEvent)=>{ e.preventDefault(); setPrefs(p=>({ ...p, name, role, color })); };

  const nameInvalid = name.trim()==='';

  return (
    <section>
      <h1>{tr.settings}</h1>
      <form onSubmit={onSubmit} aria-label="Formulario de preferencias">
        <label>
          {tr.name}
          <input
            aria-label="Nombre"
            aria-required="true"
            aria-invalid={nameInvalid ? 'true':'false'}
            aria-describedby="nombre-err"
            value={name} onChange={e=>setName(e.target.value)} required
          />
        </label>
        <p id="nombre-err" role="alert" hidden={!nameInvalid}>El nombre es obligatorio</p>

        <label>
          {tr.role}
          <input aria-label="Rol" value={role} onChange={e=>setRole(e.target.value)} />
        </label>

        <label>
          {tr.color}
          <input aria-label="Color" type="color" value={color} onChange={e=>setColor(e.target.value)} />
        </label>

        <button type="submit">{tr.save}</button>
      </form>
    </section>
  );
}
