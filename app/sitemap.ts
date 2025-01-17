import { allBlogs } from 'contentlayer/generated';

export default async function sitemap() {
  const blogs = allBlogs.map((post) => ({
    url: `https://hayatibis.dev/blog/${post.slug}`,
    lastModified: post.publishedAt,
  }));

  const routes = ['', '/about', '/blog', '/guestbook', '/uses'].map(
    (route) => ({
      url: `https://hayatibis.dev${route}`,
      lastModified: new Date().toISOString().split('T')[0],
    })
  );

  return [...routes, ...blogs];
}
