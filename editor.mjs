import { basicSetup, EditorView } from "codemirror";
import { r } from "codemirror-lang-r";

let editor = new EditorView({
  extensions: [basicSetup, r()],
  parent: document.body,
});
