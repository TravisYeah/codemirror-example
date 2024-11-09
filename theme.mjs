/**
MIT License

Copyright (c) 2021 uiw

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

import { tags as t } from "@lezer/highlight";
import { HighlightStyle } from "@codemirror/language";

// https://github.com/uiwjs/react-codemirror/blob/master/themes/vscode/src/light.ts
export const highlightStyle = HighlightStyle.define([
  {
    tag: [
      t.keyword,
      t.operatorKeyword,
      t.modifier,
      t.color,
      t.constant(t.name),
      t.standard(t.name),
      t.standard(t.tagName),
      t.special(t.brace),
      t.atom,
      t.bool,
      t.special(t.variableName),
    ],
    color: "#0000ff",
  },
  { tag: [t.moduleKeyword, t.controlKeyword], color: "#af00db" },
  {
    tag: [
      t.name,
      t.deleted,
      t.character,
      t.macroName,
      t.propertyName,
      t.variableName,
      t.labelName,
      t.definition(t.name),
    ],
    color: "#0070c1",
  },
  { tag: t.heading, fontWeight: "bold", color: "#0070c1" },
  {
    tag: [
      t.typeName,
      t.className,
      t.tagName,
      t.number,
      t.changed,
      t.annotation,
      t.self,
      t.namespace,
    ],
    color: "#267f99",
  },
  {
    tag: [t.function(t.variableName), t.function(t.propertyName)],
    color: "#795e26",
  },
  { tag: [t.number], color: "#098658" },
  {
    tag: [t.operator, t.punctuation, t.separator, t.url, t.escape, t.regexp],
    color: "#383a42",
  },
  { tag: [t.regexp], color: "#af00db" },
  {
    tag: [t.special(t.string), t.processingInstruction, t.string, t.inserted],
    color: "#a31515",
  },
  { tag: [t.angleBracket], color: "#383a42" },
  { tag: t.strong, fontWeight: "bold" },
  { tag: t.emphasis, fontStyle: "italic" },
  { tag: t.strikethrough, textDecoration: "line-through" },
  { tag: [t.meta, t.comment], color: "#008000" },
  { tag: t.link, color: "#4078f2", textDecoration: "underline" },
  { tag: t.invalid, color: "#e45649" },
]);
