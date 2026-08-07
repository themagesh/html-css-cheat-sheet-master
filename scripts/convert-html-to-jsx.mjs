/**
 * Converts the static cheat-sheet HTML pages into genuine React JSX components.
 *
 * Usage:
 *   node scripts/convert-html-to-jsx.mjs
 *
 * It reads the original pages, strips the shared <nav> (replaced by the React
 * Nav component), and writes React components into src/components/.
 */
import { parse } from 'node-html-parser';
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const OUT_DIR = resolve(ROOT, 'src', 'components');

const VOID = new Set([
  'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input',
  'link', 'meta', 'param', 'source', 'track', 'wbr',
]);

function camel(prop) {
  return prop.replace(/-([a-zA-Z0-9])/g, (_, c) => c.toUpperCase());
}

/** Escape text so it stays valid JSX: braces, angle brackets and backslashes. */
function escapeJsxText(text) {
  return text
    .replace(/\\/g, '\\\\')
    .replace(/\{/g, '&#123;')
    .replace(/\}/g, '&#125;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

/** Convert a CSS declaration block into a React style object literal. */
function convertStyle(styleStr) {
  const declarations = styleStr
    .split(';')
    .map((s) => s.trim())
    .filter(Boolean);

  const entries = [];
  for (const decl of declarations) {
    const idx = decl.indexOf(':');
    if (idx === -1) continue;
    const prop = camel(decl.slice(0, idx).trim());
    // Collapse any line breaks in the value, then escape for a
    // single-quoted JS string (backslashes first, then quotes).
    let value = decl.slice(idx + 1).replace(/\s+/g, ' ').trim();
    value = value.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
    value = value.replace(/\{/g, '&#123;').replace(/\}/g, '&#125;');
    entries.push(`${prop}: '${value}'`);
  }
  return `style={{ ${entries.join(', ')} }}`;
}

function serializeAttrs(node) {
  const parts = [];
  for (const [key, value] of Object.entries(node.attrs)) {
    if (key === 'class') {
      parts.push(`className="${value}"`);
    } else if (key === 'for') {
      parts.push(`htmlFor="${value}"`);
    } else if (key === 'style') {
      parts.push(convertStyle(value));
    } else {
      parts.push(`${key}="${value}"`);
    }
  }
  return parts.join(' ');
}

function nodeToJsx(node) {
  if (node.nodeType === 3) {
    // text
    return escapeJsxText(node.rawText);
  }
  if (node.nodeType === 8) {
    // comment
    return '';
  }
  if (node.nodeType === 9) {
    // document
    return node.childNodes.map(nodeToJsx).join('');
  }
  // element
  const tag = node.rawTagName.toLowerCase();
  const attrs = serializeAttrs(node);
  const attrStr = attrs ? ` ${attrs}` : '';
  if (VOID.has(tag)) {
    return `<${tag}${attrStr} />`;
  }
  const children = node.childNodes.map(nodeToJsx).join('');
  return `<${tag}${attrStr}>${children}</${tag}>`;
}

function extractBodyContent(html) {
  const doc = parse(html, { decodeEntities: false });
  const htmlEl = doc.childNodes.find((n) => n.nodeType === 1);

  // node-html-parser may keep a <body> element or merge its content directly
  // under <html>, depending on the source. Handle both shapes.
  const bodyEl =
    htmlEl &&
    htmlEl.childNodes.find(
      (n) => n.nodeType === 1 && n.rawTagName.toLowerCase() === 'body'
    );
  const source = bodyEl ? bodyEl.childNodes : htmlEl ? htmlEl.childNodes : [];

  const contentNodes = source.filter((node) => {
    if (node.nodeType !== 1) return true; // keep text/whitespace nodes
    const tag = node.rawTagName.toLowerCase();
    if (tag === 'head' || tag === 'nav') return false;
    // drop the display:none size-box scaffolding
    if (tag === 'div') {
      const cls = (node.attrs && node.attrs.class) || '';
      if (cls.split(/\s+/).includes('size-boxes')) return false;
    }
    return true;
  });
  return contentNodes.map(nodeToJsx).join('\n');
}

function buildComponent(name, html, imports = '') {
  const body = extractBodyContent(html);
  return `// Auto-generated from the original static HTML by
// scripts/convert-html-to-jsx.mjs - do not edit by hand.
${imports}
export default function ${name}() {
  return (
    <>
${body}
    </>
  );
}
`;
}

const jobs = [
  {
    file: 'html-css-cheat-sheet.html',
    name: 'HtmlCssCheatSheet',
    out: 'HtmlCssCheatSheet.jsx',
  },
  {
    file: 'animation.html',
    name: 'Animation',
    out: 'Animation.jsx',
    imports: "import '../../animate.css';",
  },
];

mkdirSync(OUT_DIR, { recursive: true });

for (const job of jobs) {
  const source = readFileSync(resolve(ROOT, job.file), 'utf8');
  const component = buildComponent(job.name, source, job.imports);
  writeFileSync(resolve(OUT_DIR, job.out), component, 'utf8');
  console.log(`Wrote src/components/${job.out}`);
}
