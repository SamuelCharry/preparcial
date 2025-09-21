'use client';
import AuthorForm from "@/src/components/AuthorForm";

export default function CrearPage() {
  return (
    <div>
      <h1>Crear autor</h1>
      <AuthorForm mode="create" />
    </div>
  );
}
