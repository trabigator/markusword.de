import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const allPosts = await getCollection('posts');
  const sortedPosts = allPosts.sort((a, b) => 
    new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
  );

  const siteUrl = "https://www.markusword.de/";

  const rssItems = sortedPosts.map(post => {
    const urlParts = post.id.split('/');
    const year = urlParts[0];
    const month = urlParts[1];
    const slug = urlParts.slice(2).join('/');
    const postUrl = `${siteUrl}post/${year}/${month}/${slug}`;
    
    return `
    <item>
      <title><![CDATA[${post.data.headline}]]></title>
      <link>${postUrl}</link>
      <guid>${postUrl}</guid>
      <description><![CDATA[${post.data.teaser || ''}]]></description>
      <pubDate>${new Date(post.data.datetime).toUTCString()}</pubDate>
      <author>markusword.de@proton.me (Markus Dröws)</author>
      ${post.data.tags.map(tag => `<category><![CDATA[${tag}]]></category>`).join('\n      ')}
    </item>`.trim();
  }).join('\n    ');

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Markus Dröws</title>
    <link>${siteUrl}</link>
    <description>Cyberanalyst, OSINT Specialist, Software Developer</description>
    <language>en-US</language>
    <managingEditor>markusword.de@proton.me (Markus Dröws)</managingEditor>
    <webMaster>markusword.de@proton.me (Markus Dröws)</webMaster>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${siteUrl}rss.xml" rel="self" type="application/rss+xml"/>
    <image>
      <url>${siteUrl}avatar.jpeg</url>
      <title>Markus Dröws</title>
      <link>${siteUrl}</link>
    </image>
    ${rssItems}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};