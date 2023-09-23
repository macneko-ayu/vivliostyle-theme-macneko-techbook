# Vivliostyle Theme Macneko Techbook

[![npm: version](https://flat.badgen.net/npm/v/vivliostyle-theme-macneko-techbook)](https://npmjs.com/package/vivliostyle-theme-macneko-techbook)
[![npm: total downloads](https://flat.badgen.net/npm/dt/vivliostyle-theme-macneko-techbook)](https://npmjs.com/package/vivliostyle-theme-macneko-techbook)
![npm: license](https://flat.badgen.net/npm/license/vivliostyle-theme-macneko-techbook)

Vivliostyle theme for techbook

## Use

In `vivliostyle.config.js`:

```js
module.exports = {
  theme: 'vivliostyle-theme-macneko-techbook',
};
```

If you want to add your CSS:

```js
module.exports = {
  theme: [
    'vivliostyle-theme-macneko-techbook',
    // add your CSS 
  ],
};
```

## Dev

### Files

```
vivliostyle-theme-macneko-techbook
├── LICENSE
├── README.md
├── example
│   ├── assets                            // auto generated
│        ├── Logo (Mark + Type).png       // auto generated
│   └── default.md                        // 🖋
├── package.json
├── theme.css                             // 🖋
└── vivliostyle.config.js
```

**example**: Contain sample manuscripts using your theme.

### Commands

Run `vivliostyle preview` to preview your `theme_*.css`.

To watch file changes, use `preview` script.

```bash
npm run preview
# or
yarn preview
```

You can specify your CSS file and manuscript file for preview in vivliostyle.config.js:

```js
module.exports = {
  language: 'en',
  theme: [
    'node_modules/@vivliostyle/theme-base', 
    'node_modules/@vivliostyle/theme-techbook', 
    '.'
  ],
  entry: [
    'example/default.md',
    // and more...
  ],
}
```

Run `vivliostyle-theme-scripts validate` before publishing your package.

```bash
npm run validate
# or
yarn validate
```
