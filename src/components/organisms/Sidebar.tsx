import Link from 'next/link';

export default function Sidebar() {
  return (
    <nav className="flex flex-col gap-4 p-4">
      <h2 className="font-bold text-xl text-blue-600">ReadFlow</h2>
      <Link href="/dashboard" className="hover:text-blue-500">Nuevo Resumen</Link>
      <Link href="/history" className="hover:text-blue-500">Historial</Link>
      <Link href="/stats" className="hover:text-blue-500">Estadísticas</Link>
      <hr />
      <Link href="/login" className="text-red-500">Cerrar sesión</Link>
    </nav>
  );
}