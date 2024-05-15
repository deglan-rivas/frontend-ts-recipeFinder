import { z } from 'zod';

export const CategorySchema = z.object({
  strCategory: z.string()
})

export const CategoriesSchema = z.array(CategorySchema)

export const RecipeSchema = z.object({
  idDrink: z.string(),
  strDrink: z.string(),
  strDrinkThumb: z.string(),
})
export const RecipesSchema = z.array(RecipeSchema)