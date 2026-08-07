import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    readTime: z.string(),
    date: z.coerce.date().optional(),
  })
});

export const collections = {
  'blog': blogCollection,
};
