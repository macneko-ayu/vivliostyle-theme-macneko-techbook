module.exports = {
  language: 'en',
  // theme.css が @vivliostyle/theme-techbook(とその依存の theme-base)を
  // パッケージ名で import しているため、theme 配列に base を列挙する必要はない
  theme: ['.'],
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
