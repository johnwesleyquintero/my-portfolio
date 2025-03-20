import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const posts = await getCollection("blog");
  return rss({
    title: "Wesley Quintero - Development Blog",
    description: "Insights on AWS architecture and e-commerce solutions",
    site: "https://example.com",
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      link: `/blog/${post.slug}/`,
      description: post.body.slice(0, 200),
    })),
  });
}
