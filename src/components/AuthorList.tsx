'use client';
import useAuthorsCrud from "@/hooks/useAuthorsCrud";
import type { Author } from "../types";

export default function AuthorList() {
  const { authors, setEditing, deleteAuthor } = useAuthorsCrud();

  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Nacimiento</th>
          <th>Descripción</th>
          <th>Imagen</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {authors.map((a: Author) => (
          <tr key={a.id}>
            <td>{a.name}</td>
            <td>{a.birthDate}</td>
            <td>{a.description}</td>
            <td>{a.image ? <img src={a.image} width={48} /> : null}</td>
            <td>
              <button onClick={() => setEditing(a)}>Editar</button>
              <button onClick={() => deleteAuthor(a.id)}>Eliminar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
