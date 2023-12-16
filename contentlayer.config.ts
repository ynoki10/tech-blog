import { writeFileSync } from 'fs';

import { ComputedFields, defineDocumentType, makeSource } from 'contentlayer/source-files';

import siteMetadata from './data/siteMetadata';
import { TAGS } from './data/tags';

import type { Article as ArticleType } from '@/.contentlayer/generated';

const computedFields: ComputedFields = {
  slug: {
    type: 'string',
    resolve: (doc) => doc._raw.flattenedPath.replace(/^.+?(\/)/, ''),
  },
  path: {
    type: 'string',
    resolve: (doc) => doc._raw.flattenedPath,
  },
  filePath: {
    type: 'string',
    resolve: (doc) => doc._raw.sourceFilePath,
  },
};

export const Article = defineDocumentType(() => ({
  name: 'Article',
  filePathPattern: 'articles/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    tags: {
      type: 'list',
      of: { type: 'enum', options: TAGS.map((tag) => tag.label) },
      default: [],
      required: true,
    },
    lastmod: { type: 'date' },
    summary: { type: 'string' },
  },
  computedFields: {
    ...computedFields,
    structuredData: {
      type: 'json',
      resolve: (doc) => ({
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: doc.title,
        datePublished: doc.date,
        dateModified: doc.lastmod || doc.date,
        description: doc.summary,
        url: `${siteMetadata.siteUrl}/${doc._raw.flattenedPath}`,
      }),
    },
  },
}));

function createTagCount(allArticles: ArticleType[]) {
  const tagsWithCount = TAGS.map((tag) => {
    const count = allArticles.filter((article) => article.tags.includes(tag.label)).length;
    return { ...tag, count };
  });
  writeFileSync('./app/tag-data.json', JSON.stringify(tagsWithCount));
}

export default makeSource({
  contentDirPath: 'data',
  documentTypes: [Article],
  mdx: {
    cwd: process.cwd(),
  },
  onSuccess: async (importData) => {
    const { allArticles } = await importData();
    createTagCount(allArticles);
  },
});
