'use client';
import { createContext, useContext, useMemo, useState } from "react";
import type { Author } from "@/types";

type AuthorsState = {
  authors: Author[];
  setAuthors: React.Dispatch<React.SetStateAction<Author[]>>;
  editing: Author | null;
  setEditing: React.Dispatch<React.SetStateAction<Author | null>>;

  favorites: number[];
  setFavorites: React.Dispatch<React.SetStateAction<number[]>>;
};

const Ctx = createContext<AuthorsState | null>(null);

export function AuthorsProvider({ children }: { children: React.ReactNode }) {
  const [authors, setAuthors] = useState<Author[]>([]);
  const [editing, setEditing] = useState<Author | null>(null);

  const [favorites, setFavorites] = useState<number[]>([]);

  const value = useMemo(
    () => ({ authors, setAuthors, editing, setEditing, favorites, setFavorites }),
    [authors, editing, favorites]
  );
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useAuthorsContext() {
  const v = useContext(Ctx);
  if (!v) throw new Error("rip");
  return v;
}
