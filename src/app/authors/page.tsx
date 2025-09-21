'use client';
import AuthorList from '../../components/AuthorList';
import AuthorForm from '@/components/AuthorForm';
import useAuthorsCrud from '@/hooks/useAuthorsCrud';

export default function AuthorsPage() {
  const { editing, setEditing } = useAuthorsCrud();
  return (
    <div>
      <h1>Autores</h1>
      {editing && (
        <div>
          <h2>Editar</h2>
          <AuthorForm mode="edit" initial={editing} onDone={() => setEditing(null)} />
        </div>
      )}
      <AuthorList />
    </div>
  );
}
