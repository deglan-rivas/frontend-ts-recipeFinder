import { useMemo } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";

export default function Layout() {
  const { pathname } = useLocation();
  const isHome = useMemo(() => pathname === '/', [pathname]);

  return (
    <>
      <header className={`py-16 ${isHome ? 'bg-[url(/logo.svg)] h-[850px]' : 'bg-slate-800'}`}>
        <div className="container flex justify-between items-center">
          <div className="w-32">
            <img src="/logo.svg" alt="" />
          </div>
          <div>
            <nav className="space-x-4">
              <NavLink
                to="/"
                className={({ isActive }) => isActive ? 'text-orange-500 uppercase font-bold' : 'text-white uppercase font-bold'}
              >
                Inicio
              </NavLink>

              <NavLink
                to="/favorites"
                className={({ isActive }) => isActive ? 'text-orange-500 uppercase font-bold' : 'text-white uppercase font-bold'}
              >
                Favoritos
              </NavLink>
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