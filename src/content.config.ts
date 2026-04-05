import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const posts = defineCollection({
    loader: glob({ base: './src/content/noticias', pattern: '**/*.{md,mdx}' }),
    schema: z.object({
        title: z.string(),
        resumen: z.string(),
        fecha: z.coerce.date(),
        lugar: z.string().optional(),
        tipo: z.string().optional(),
        icono: z.string().optional(),
    }),
});

const cases = defineCollection({
    loader: glob({ base: './src/content/casos', pattern: '**/*.{md,mdx}' }),
    schema: z.object({
        numero: z.number(),
        title: z.string(),
        resumen: z.string(),
        fecha: z.coerce.date(),
        tipo: z.string().optional(),
        icono: z.string().optional(),
    }),
});

export const collections = {
    noticias: posts,
    casos: cases
}