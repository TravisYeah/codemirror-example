import { EditorView } from "codemirror";
import { cql } from "codemirror-lang-cql";
import { syntaxHighlighting, bracketMatching } from "@codemirror/language";
import { highlightStyle } from "./theme.mjs";
import {
  autocompletion,
  completionKeymap,
  closeBrackets,
  closeBracketsKeymap,
} from "@codemirror/autocomplete";
import { keymap } from "@codemirror/view";
import { defaultKeymap, history, historyKeymap } from "@codemirror/commands";

const theme = EditorView.theme({
  "&": {
    border: "1px solid darkgrey",
    "border-radius": "10px",
  },
  "&.cm-editor.cm-focused": {
    outline: "none",
  },
  "&.cm-editor.cm-line": {
    "line-height": "30px",
  },
});

new EditorView({
  extensions: [
    //basicSetup,
    cql(),
    syntaxHighlighting(highlightStyle),
    autocompletion(),
    closeBrackets(),
    bracketMatching(),
    history(),
    keymap.of([
      ...closeBracketsKeymap,
      ...completionKeymap,
      ...defaultKeymap,
      ...historyKeymap,
    ]),
    theme,
  ],
  parent: document.body,
});
