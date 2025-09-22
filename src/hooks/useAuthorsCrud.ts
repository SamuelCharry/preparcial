'use client';
import { useEffect, useCallback } from "react";
import type { Author } from "@/types";
import { useAuthorsContext } from "@/context/AuthorsContext";

export default function useAuthorsCrud() {
  const { authors, setAuthors, editing, setEditing, favorites, setFavorites } = useAuthorsContext();

  // GET 
  useEffect(() => {
    if (authors.length === 0) {
      fetch("/api/authors")
        .then(r => r.json())
        .then((data: Author[]) => setAuthors(data))
        .catch(() => {});
    }
  }, [authors.length, setAuthors]);

  // Crear
  const createAuthor = (p: Omit<Author,"id">) =>
    fetch("/api/authors", {
      method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify(p)
    }).then(r=>r.json()).then((a: Author)=> setAuthors(x=>[a,...x]));

  // Actualizar
  const updateAuthor = (id:number, p:Omit<Author,"id">) =>
    fetch(`/api/authors/${id}`, {
      method:"PUT", headers:{"Content-Type":"application/json"}, body:JSON.stringify({id,...p})
    }).then(r=>r.json()).then((u: Author)=>{ setAuthors(x=>x.map(a=>a.id===id?u:a)); setEditing(null); });

  // Eliminar
  const deleteAuthor = (id:number) =>
    fetch(`/api/authors/${id}`, { method:"DELETE" })
      .then(()=>{ setAuthors(x=>x.filter(a=>a.id!==id)); setFavorites(fs=>fs.filter(f=>f!==id)); });

  // Favoritos
  const isFavorite = useCallback((id:number)=> favorites.includes(id), [favorites]);
  const toggleFavorite = (id:number) => {
    setFavorites(fs => fs.includes(id) ? fs.filter(f=>f!==id) : [...fs, id]);
  };

  return { authors, editing, setEditing, createAuthor, updateAuthor, deleteAuthor, favorites, isFavorite, toggleFavorite };
}
