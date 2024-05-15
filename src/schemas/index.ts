import { z } from 'zod';

export const CategorySchema = z.object({
  strCategory: z.string()
})

export const CategoriesSchema = z.array(CategorySchema)