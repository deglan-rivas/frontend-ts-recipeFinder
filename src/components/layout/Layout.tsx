import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <header className="bg-slate-800 py-16">
        <div className="container flex justify-between items-center">
          <div className="w-32">
            <img src="/logo.svg" alt="" />
          </div>
          <div>
            <nav className="space-x-4">
              <Link to="/" className="text-white font-semibold uppercase">
                Inicio
              </Link>

              <Link to="/favorites" className="text-white font-semibold uppercase">
                Favoritos
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  )
}