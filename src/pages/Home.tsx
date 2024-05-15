import { Recipe } from "@/types"

interface HomeProps {
  recipes: Recipe[]
}

export default function Home({ recipes }: HomeProps) {
  return (
    <>
      <div className="space-y-10">
        <h2 className="text-6xl font-semibold">
          Recetas
        </h2>

        {
          recipes.length ? (
            recipes.map((recipe) => (
              <div key={recipe.idDrink}>
                {recipe.idDrink} - {recipe.strDrink}
              </div>
            ))
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