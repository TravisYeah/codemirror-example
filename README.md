# Example Code Mirror

An example code mirror repository mainly being used for testing library development.

## Install

Installation setup

```
git clone git@github.com:TravisYeah/codemirror-example.git
npm i
npm run build
```

Open `./index.html` to view the editor.

## FAQ

- Duplicate dependencies are handled through `@rollup/plugin-alias`, see `./rollup.config.mjs`.

- Link local versions using `npm link`. Delete `node_modules` and `package-lock.json` if you are having issues.

