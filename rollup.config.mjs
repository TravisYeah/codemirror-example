import { fileURLToPath } from "node:url";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import alias from "@rollup/plugin-alias";

export default {
  input: "./editor.mjs",
  output: {
    file: "./editor.bundle.js",
    format: "iife",
  },
  plugins: [
    nodeResolve(),
    alias({
      entries: [
        {
          find: "@codemirror/state",
          replacement: fileURLToPath(
            new URL("node_modules/@codemirror/state", import.meta.url),
          ),
        },
        {
          find: "@codemirror/view",
          replacement: fileURLToPath(
            new URL("node_modules/@codemirror/view", import.meta.url),
          ),
        },
        {
          find: "@codemirror/language",
          replacement: fileURLToPath(
            new URL("node_modules/@codemirror/language", import.meta.url),
          ),
        },
      ],
    }),
  ],
};
