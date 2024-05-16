import Card from "@/components/shared/Card"
import { Recipe } from "@/types"

interface FavoritesProps {
  favorites: Recipe[]
  addFavorite: (recipe: Recipe) => void
  deleteFavorite: (idDrink: Recipe['idDrink']) => void
}

export default function Favorites({ favorites, addFavorite, deleteFavorite }: FavoritesProps) {
  return (
    <>
      <div className="space-y-10">
        <h2 className="text-6xl font-semibold">
          Favoritos
        </h2>

        {
          favorites.length ? (
            <div className="w-full flex flex-wrap justify-start items-center gap-5">
              {favorites.map((recipe) => (
                <Card key={recipe.idDrink} recipe={recipe} addFavorite={addFavorite} deleteFavorite={deleteFavorite} favorites={favorites} />
              ))}
            </div>
          ) : (
            <p className="text-center text-2xl">
              Tus favoritos se mostrarán aquí
            </p>
          )
        }
      </div>
    </>
  )
}