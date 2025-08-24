import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const articles = (await getCollection('articles'))
    .filter(article => !article.data.draft)
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

  return rss({
    title: 'gobbledygook',
    description: '学習記録やアウトプットをまとめるポータルサイト',
    site: context.site || 'https://mosidas.github.io',
    items: articles.map((article) => ({
      title: article.data.title,
      pubDate: article.data.date,
      description: article.data.description || '',
      link: `/articles/${article.slug}/`,
      categories: article.data.tags,
    })),
    customData: `<language>ja-JP</language>`,
  });
}