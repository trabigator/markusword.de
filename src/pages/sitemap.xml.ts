import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const allPosts = await getCollection('posts');
  const siteUrl = "https://www.markusword.de/";

  const staticPages = [
    { url: siteUrl, lastmod: new Date().toISOString().split('T')[0], priority: '1.0' },
    { url: `${siteUrl}posts/`, lastmod: new Date().toISOString().split('T')[0], priority: '0.8' },
    { url: `${siteUrl}search/`, lastmod: new Date().toISOString().split('T')[0], priority: '0.6' },
    { url: `${siteUrl}about/`, lastmod: new Date().toISOString().split('T')[0], priority: '0.7' },
    { url: `${siteUrl}imprint/`, lastmod: new Date().toISOString().split('T')[0], priority: '0.5' },
  ];

  const postPages = allPosts.map(post => {
    const urlParts = post.id.split('/');
    const year = urlParts[0];
    const month = urlParts[1];
    const slug = urlParts.slice(2).join('/');
    return {
      url: `${siteUrl}post/${year}/${month}/${slug}`,
      lastmod: post.data.date,
      priority: '0.9'
    };
  });

  const tagPages = [...new Set(allPosts.flatMap(post => post.data.tags))].map(tag => ({
    url: `${siteUrl}tags/${encodeURIComponent(tag)}/`,
    lastmod: new Date().toISOString().split('T')[0],
    priority: '0.6'
  }));

  const allPages = [...staticPages, ...postPages, ...tagPages];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(page => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};