import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()),
    description: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  articles,
};