const path = require('path');

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`;

module.exports = {
  '*.{ts,tsx}': [buildEslintCommand, 'markuplint'],
  '!(*.png|*.jpg|*.jpeg|*.gif|*.webp|*.ico)': ['secretlint', 'prettier --write'],
};
