import { Recipe } from "@/types";
import { Dispatch, SetStateAction } from "react";
import { Outlet } from "react-router-dom";
import { Toaster } from "../ui/toaster";
import Header from "./Header";

interface LayoutProps {
  recipes: Recipe[]
  setRecipes: (Dispatch<SetStateAction<Recipe[]>>)
}

export default function Layout({ recipes, setRecipes }: LayoutProps) {


  return (
    <>
      <Header recipes={recipes} setRecipes={setRecipes} />

      <main className="container mx-auto py-16">
        <Outlet />
      </main>

      <Toaster />
    </>
  )
}