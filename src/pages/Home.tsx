import Card from "@/components/shared/Card";
import { Recipe } from "@/types";

interface HomeProps {
  recipes: Recipe[]
  addFavorite: (recipe: Recipe) => void
  deleteFavorite: (idDrink: Recipe['idDrink']) => void
  favorites: Recipe[]
}

export default function Home({ recipes, addFavorite, deleteFavorite, favorites }: HomeProps) {
  return (
    <>
      <div className="space-y-10">
        <h2 className="text-6xl font-semibold">
          Recetas
        </h2>

        {
          recipes.length ? (
            <div className="w-full flex flex-wrap justify-start items-center gap-5">
              {recipes.map((recipe) => (
                <Card key={recipe.idDrink} recipe={recipe} addFavorite={addFavorite} deleteFavorite={deleteFavorite} favorites={favorites} />
              ))}
            </div>
          ) : (
            <p className="text-center text-2xl">
              ¡Aún no hay resultados! Utiliza el formulario para buscar recetas
            </p>
          )
        }
      </div>
    </>
  )
}