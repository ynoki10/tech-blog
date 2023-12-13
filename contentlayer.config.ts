import { defineDocumentType, makeSource } from 'contentlayer/source-files';

export const Article = defineDocumentType(() => ({
  name: 'Article',
  filePathPattern: `**/*.md`,
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
  },
  computedFields: {
    url: { type: 'string', resolve: (post) => `/articles/${post._raw.flattenedPath}` },
  },
}));

export default makeSource({ contentDirPath: 'articles', documentTypes: [Article] });
