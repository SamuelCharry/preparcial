'use client';
import { useEffect } from "react";
import type { Author } from "../types";
import { useAuthorsContext } from "../context/AuthorsContext";

export default function useAuthorsCrud() {
  const { authors, setAuthors, editing, setEditing } = useAuthorsContext();

  // GET
  useEffect(() => {
    if (authors.length === 0) {
      fetch("/api/authors")
        .then(r => r.json())
        .then(setAuthors)
        .catch(() => {});
    }
  }, [authors.length, setAuthors]);

  // POST
  const createAuthor = (p: Omit<Author, "id">) =>
    fetch("/api/authors", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(p),
    })
      .then(r => r.json())
      .then((a: Author) => setAuthors(x => [a, ...x]));

  // PUT
  const updateAuthor = (id: number, p: Omit<Author, "id">) =>
    fetch(`/api/authors/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, ...p }),
    })
      .then(r => r.json())
      .then((u: Author) => {
        setAuthors(x => x.map(a => (a.id === id ? u : a)));
        setEditing(null);
      });

  // DELETE
  const deleteAuthor = (id: number) =>
    fetch(`/api/authors/${id}`, { method: "DELETE" })
      .then(() => setAuthors(x => x.filter(a => a.id !== id)));

  return { authors, editing, setEditing, createAuthor, updateAuthor, deleteAuthor };
}
