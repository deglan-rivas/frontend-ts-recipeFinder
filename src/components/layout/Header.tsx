import { useMemo } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Form from "./Form";

export default function Header() {
  const { pathname } = useLocation();
  const isHome = useMemo(() => pathname === '/', [pathname]);

  return (
    <header className={` ${isHome ? 'bg-[url(/bg.jpg)] bg-cover bg-center' : 'bg-slate-800'}`}>
      <div className="container mx-auto py-16 px-5">
        <div className=" flex justify-between items-center">
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

        {
          isHome && <Form />
        }
      </div>
    </header >
  )
}