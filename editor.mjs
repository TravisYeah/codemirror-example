import { basicSetup, EditorView } from "codemirror";
import { cql } from "codemirror-lang-cql";
import { syntaxHighlighting } from "@codemirror/language";
import { highlightStyle } from "./theme.mjs";

new EditorView({
  extensions: [basicSetup, syntaxHighlighting(highlightStyle), cql()],
  parent: document.body,
});
