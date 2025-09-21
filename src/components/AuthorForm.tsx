'use client';
import { useState } from "react";
import useAuthorsCrud from "../hooks/useAuthorsCrud";
import type { Author } from "../types";

type Props = { mode: "create" | "edit"; initial?: Author; onDone?: () => void; };

export default function AuthorForm({ mode, initial, onDone }: Props) {
  const { createAuthor, updateAuthor } = useAuthorsCrud();
  const [name, setName] = useState(initial?.name ?? "");
  const [birthDate, setBirthDate] = useState(initial?.birthDate ?? "");
  const [description, setDescription] = useState(initial?.description ?? "");
  const [image, setImage] = useState(initial?.image ?? "");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = { name, birthDate, description, image };
    if (mode === "create") {
      await createAuthor(payload);
      setName(""); setBirthDate(""); setDescription(""); setImage("");
    } else if (initial) {
      await updateAuthor(initial.id, payload);
      onDone?.();
    }
  };

  return (
    <form onSubmit={submit}>
      <input placeholder="Nombre" value={name} onChange={e=>setName(e.target.value)} required />
      <input type="date" value={birthDate} onChange={e=>setBirthDate(e.target.value)} required />
      <input placeholder="Descripción" value={description} onChange={e=>setDescription(e.target.value)} required />
      <input placeholder="URL imagen" value={image} onChange={e=>setImage(e.target.value)} />
      <button type="submit">{mode === "create" ? "Crear" : "Guardar"}</button>
    </form>
  );
}
