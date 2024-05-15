import { CategoriesSchema, RecipesSchema } from "@/schemas"
import { Categories, Recipe, Search } from "@/types"
import { ChangeEvent, Dispatch, FormEvent, SetStateAction, useEffect, useState } from "react"
import { useToast } from "../ui/use-toast"

interface FormProps {
  recipes: Recipe[]
  setRecipes: (Dispatch<SetStateAction<Recipe[]>>)
}

export default function Form({ setRecipes }: FormProps) {
  const { toast } = useToast()
  const initialSearch: Search = {
    name: "",
    category: "",
  }
  const [search, setSearch] = useState<Search>(initialSearch)
  const [categories, setCategories] = useState<Categories>([])


  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setSearch({
      ...search,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    async function getRecipes(): Promise<void> {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${search.category}&i=${search.name}`

      try {
        const result = await fetch(url)
        const { drinks } = await result.json()
        console.log(drinks)
        const hasRecipes = RecipesSchema.safeParse(drinks)
        if (!hasRecipes.success) {
          throw Error("Recipes not found")
        }
        setRecipes(hasRecipes.data)
      } catch (error) {
        console.log(error)
        setRecipes([])
      }
    }

    e.preventDefault()

    if (Object.values(search).includes("")) {
      toast({
        title: "Error",
        description: "Todos los campos son obligatorios",
        variant: "destructive",
      })
      return
    }

    getRecipes()
  }

  useEffect(() => {
    async function getCategories(): Promise<void> {
      const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list"

      try {
        const result = await fetch(url)
        const { drinks } = await result.json()
        // console.log(drinks)
        const hasCategories = CategoriesSchema.safeParse(drinks)
        // console.log(hasCategories)
        if (!hasCategories.success) {
          throw Error("Categories from API not found")
        }
        setCategories(hasCategories.data)
      } catch (error) {
        console.log(error)
      }
    }

    getCategories()
  }, [])

  return (
    <form className="my-32 px-10 py-10 bg-orange-400 rounded-md space-y-6 md:w-1/2 2xl:w-1/3"
      onSubmit={handleSubmit}
    >
      <div className="space-y-4">
        <label htmlFor="name"
          className="text-white uppercase font-bold text-lg block"
        >
          Nombre o Ingredientes
        </label>
        <input type="text" id="name" name="name"
          className="w-full p-3 rounded-md focus:outline-none text-ellipsis"
          placeholder="Nombre o Ingrediente. Ejm: Vodka, Tequila, Café"
          value={search.name}
          onChange={handleChange}
        />
      </div>

      <div className="space-y-4">
        <label htmlFor="name"
          className="text-white uppercase font-bold text-lg block"
        >
          Categoría
        </label>
        <select name="category" id="category"
          className="w-full p-3 rounded-md focus:outline-none"
          value={search.category}
          onChange={handleChange}
        >
          <option value="">-- Seleccione --</option>
          {
            categories.map(category => (
              <option key={category.strCategory} value={category.strCategory}>
                {category.strCategory}
              </option>
            ))
          }
        </select>
      </div>

      <input type="submit" value="Buscar Recetas"
        className="bg-orange-800 hover:bg-orange-900 cursor-pointer uppercase text-white text-center w-full rounded-md font-semibold py-2"
      />
    </form>
  )
}