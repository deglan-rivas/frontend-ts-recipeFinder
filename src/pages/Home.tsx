import { Recipe } from "@/types";

interface HomeProps {
  recipes: Recipe[]
}

function Card({ recipe }: { recipe: Recipe }) {
  return (
    <div className="basis-auto sm:basis-[49%] lg:basis-[32%] border shadow-lg">
      <div className="overflow-hidden">
        <img loading="lazy" src={recipe.strDrinkThumb} alt={recipe.strDrink} className="hover:rotate-6 hover:scale-125 transition-transform" />
      </div>
      <div className="p-4 space-y-4">
        <h3 className="text-xl font-semibold">{recipe.strDrink}</h3>
        <button className="w-full bg-orange-400 hover:bg-orange-500 cursor-pointer text-center py-2 uppercase text-white font-semibold">
          Ver Receta
        </button>
      </div>
    </div>
  )
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
            <div className="w-full flex flex-wrap justify-between items-center gap-y-5">
              {recipes.map((recipe) => (
                <Card key={recipe.idDrink} recipe={recipe} />
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