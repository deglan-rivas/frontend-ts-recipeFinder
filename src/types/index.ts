import { CategoriesSchema, RecipeIngredientsSchema, RecipeSchema } from "@/schemas"
import { z } from "zod"

export interface Search {
  name: string
  category: string
}

export type Categories = z.infer<typeof CategoriesSchema>

export type Recipe = z.infer<typeof RecipeSchema>

export type RecipeIngredients = z.infer<typeof RecipeIngredientsSchema> & {
  [key: `strIngredient${number}`]: string | null; // Index signature for strIngredientX properties
  [key: `strMeasure${number}`]: string | null; // Index signature for strMeasureX properties
}