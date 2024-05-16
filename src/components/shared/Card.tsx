import { RecipeIngredientsSchema } from "@/schemas";
import { Recipe, RecipeIngredients } from "@/types";
import { Dispatch, SetStateAction, useMemo, useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";

interface RecipeDialogProps extends CardProps {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

function RecipeDialog({ isOpen, setIsOpen, recipe, addFavorite, deleteFavorite, favorites }: RecipeDialogProps) {
  const [recipeModal, setRecipeModal] = useState<RecipeIngredients>({} as RecipeIngredients)
  const isIncluded = useMemo(() => favorites.some((favorite) => favorite.idDrink === recipe.idDrink), [favorites, recipe.idDrink])

  const openCloseModal = async () => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${recipe.idDrink}`
    try {
      if (!isOpen) {
        const data = await fetch(url).then(res => res.json())
        const result = RecipeIngredientsSchema.safeParse(data["drinks"][0])

        if (!result.success) {
          throw Error("Recipe not found")
        }

        setRecipeModal(result.data)
      }
    } catch (error) {
      console.log(error)
    }
    // const result = RecipeAPIResponseSchema.safeParse(data.drinks[0])
    // if(result.success) {
    //     return result.data
    // }

    setIsOpen(!isOpen)
  }

  return (
    <Dialog open={isOpen} onOpenChange={openCloseModal}>
      <DialogTrigger asChild>
        <button className="w-full bg-orange-400 hover:bg-orange-500 cursor-pointer text-center py-2 uppercase text-white font-semibold">
          Ver Receta
        </button>
      </DialogTrigger>
      <DialogContent className="mx-auto w-[92%] rounded-lg overflow-y-scroll max-h-screen
      md:max-w-3xl">
        <div className="space-y-5">
          <h3 className="text-4xl text-center font-semibold">
            {recipeModal.strDrink}
          </h3>
          <img src={recipeModal.strDrinkThumb} alt={recipeModal.strDrink} className="w-3/5 mx-auto" />

          <div className="space-y-2">
            <h3 className="text-2xl font-semibold">
              Ingredientes y Cantidades
            </h3>
            <ul className="space-y-2 list-disc ml-5">
              {
                Array.from({ length: 8 }).map((_, index) => (
                  recipeModal[`strIngredient${index + 1}`] && (
                    <li className="text-lg" key={index}>
                      {recipeModal[`strIngredient${index + 1}`]} - {recipeModal[`strMeasure${index + 1}`]}
                    </li>
                  )
                ))
              }
              {/* <li className="text-lg">
                {recipeModal.strMeasure1} - {recipeModal.strIngredient1}
              </li>
              <li className="text-lg">
                {recipeModal.strMeasure2} - {recipeModal.strIngredient2}
              </li> */}
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl font-semibold">
              Instrucciones
            </h3>
            <p className="text-lg">
              {recipeModal.strInstructions}
            </p>
          </div>

          <div className="flex justify-between gap-5 mt-5">
            <button className="w-full bg-gray-500 hover:bg-gray-600 cursor-pointer text-center py-2 uppercase text-white font-semibold rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Cerrar
            </button>
            <button className="w-full bg-orange-400 hover:bg-orange-500 cursor-pointer text-center py-2 uppercase text-white font-semibold rounded-md"
              onClick={() => isIncluded ? deleteFavorite(recipe.idDrink) : addFavorite(recipe)}
            >
              {
                isIncluded ? "Eliminar Favorito" : "Agregar Favorito"
              }
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog >
  )
}

interface CardProps {
  recipe: Recipe
  addFavorite: (recipe: Recipe) => void
  deleteFavorite: (idDrink: Recipe['idDrink']) => void
  favorites: Recipe[]
}

export default function Card({ recipe, addFavorite, deleteFavorite, favorites }: CardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="basis-auto sm:basis-[49%] lg:basis-[32%] border shadow-lg">
      <div className="overflow-hidden">
        <img loading="lazy" src={recipe.strDrinkThumb} alt={recipe.strDrink} className="hover:rotate-6 hover:scale-125 transition-transform" />
      </div>
      <div className="p-4 space-y-4">
        <h3 className="text-xl font-semibold">{recipe.strDrink}</h3>
        <RecipeDialog
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          recipe={recipe}
          addFavorite={addFavorite}
          deleteFavorite={deleteFavorite}
          favorites={favorites}
        />
      </div>
    </div>
  )
}