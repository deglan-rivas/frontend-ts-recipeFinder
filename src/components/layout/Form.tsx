import { CategoriesSchema } from "@/schemas"
import { Categories, Search } from "@/types"
import { ChangeEvent, useEffect, useState } from "react"

export default function Form() {
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

  useEffect(() => {
    async function getCategories() {
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
    <form className="my-32 px-10 py-10 bg-orange-400 rounded-md space-y-6 md:w-1/2 2xl:w-1/3">
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
        className="bg-orange-800 hover:bg-orange-900 uppercase text-white text-center w-full rounded-md font-semibold py-2"
      />
    </form>
  )
}