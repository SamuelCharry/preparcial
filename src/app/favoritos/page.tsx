'use client';
import AuthorList from '@/components/AuthorList';

export default function FavoritosPage() {
  return (
    <section>
      <h1>Favoritos</h1>
      <AuthorList onlyFavorites />
    </section>
  );
}
