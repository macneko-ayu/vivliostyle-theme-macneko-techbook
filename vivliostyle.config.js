module.exports = {
  language: 'en',
  theme: [
    'node_modules/@vivliostyle/theme-base', 
    'node_modules/@vivliostyle/theme-techbook', 
    '.'
  ],
  entry: ['example/default.md'],
  workspaceDir: '.vivliostyle',
  output: [
    'book.pdf',
    {
      path: './book',
      format: 'webpub',
    },
  ],
};
