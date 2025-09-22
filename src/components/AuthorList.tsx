'use client';
import useAuthorsCrud from "@/hooks/useAuthorsCrud";
import type { Author } from "@/types";

export default function AuthorList({ onlyFavorites = false }: { onlyFavorites?: boolean }) {
  const { authors, setEditing, deleteAuthor, isFavorite, toggleFavorite } = useAuthorsCrud();

  const data = onlyFavorites ? authors.filter(a => isFavorite(a.id)) : authors;

  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th><th>Nacimiento</th><th>Descripción</th><th>Imagen</th><th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {data.map((a: Author) => {
          const fav = isFavorite(a.id);
          return (
            <tr key={a.id}>
              <td>{fav ? "SI" : "NO "}{a.name}</td>
              <td>{a.birthDate}</td>
              <td>{a.description}</td>
              <td>{a.image ? <img src={a.image} width={48} /> : null}</td>
              <td>
                <button
                  onClick={() => toggleFavorite(a.id)}
                  aria-label={fav ? "Quitar de favoritos" : "Agregar a favoritos"}
                  aria-pressed={fav}
                  title={fav ? "Quitar de favoritos" : "Agregar a favoritos"}
                  style={{ marginRight: 8 }}
                >
                  {fav ? " Favorito" : " No Favorito"}
                </button>
                <button onClick={() => setEditing(a)} style={{ marginRight: 8 }}>Editar</button>
                <button onClick={() => deleteAuthor(a.id)}>Eliminar</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
