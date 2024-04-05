import { defineConfig, defineCollection, s } from 'velite'
import exp from "constants";

const computedFields = <T extends { slug : string }>(data: T) => ({
    ...data,
    slugAsParams : data.slug.split("/").slice(1).join("/"),
})
const posts = defineCollection({
    name: 'Post',
    pattern: 'blog/**/*.mdx',
    schema: s
        .object({
            title: s.string().max(99), // Zod primitive type
            slug: s.path(),
            description: s.string().max(999).optional(),
            // slug: s.path(), // auto generate slug from file path
            date: s.isodate(), // input Date-like string, output ISO Date string.
            cover: s.image().optional(),
            video: s.file().optional(), // input file relative path, output file public path.
            metadata: s.metadata().optional(),
            published: s.boolean().default(true),
            body: s.mdx()
        })
        // more additional fields (computed fields)
        .transform(computedFields)
})

export default defineConfig({
    root : "content",
    output : {
        data: ".velite",
        assets: "public/static",
        base: "/static/",
        name: "[name]-[hash:6].[ext]",
        clean:true
    },
    collections: { posts },
    mdx: {
        rehypePlugins: [],
        remarkPlugins: []
    }
})
