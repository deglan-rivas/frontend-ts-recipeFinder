import { CategoriesSchema, RecipeSchema } from "@/schemas"
import { z } from "zod"

export interface Search {
  name: string
  category: string
}

export type Categories = z.infer<typeof CategoriesSchema>

export type Recipe = z.infer<typeof RecipeSchema>