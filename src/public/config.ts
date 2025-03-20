import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string().transform((str) => new Date(str)),
    author: z.string().default("Wesley Quintero"),
    image: z.string().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
};
