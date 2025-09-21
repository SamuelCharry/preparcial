'use client';
import { createContext, useContext, useState } from "react";
import type { Author } from "../types";

type CtxType = {
  authors: Author[];
  setAuthors: React.Dispatch<React.SetStateAction<Author[]>>;
  editing: Author | null;
  setEditing: React.Dispatch<React.SetStateAction<Author | null>>;
};

const Ctx = createContext<CtxType | null>(null);

export function AuthorsProvider({ children }: { children: React.ReactNode }) {
  const [authors, setAuthors] = useState<Author[]>([]);
  const [editing, setEditing] = useState<Author | null>(null);
  return (
    <Ctx.Provider value={{ authors, setAuthors, editing, setEditing }}>
      {children}
    </Ctx.Provider>
  );
}

export function useAuthorsContext() {
  const v = useContext(Ctx);
  if (!v) throw new Error("useAuthorsContext debe usarse dentro de AuthorsProvider");
  return v;
}
