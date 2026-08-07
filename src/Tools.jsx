import { useState } from 'react';

/**
 * Matrix helpers ported from the original `tools.html` script, which used the
 * `most` reactive streams library. Here they are plain functions driven by
 * React state instead.
 */

const IDENTITY_MATRIX = [1, 0, 0, 1, 0, 0];

/** Split a string of numbers like "1 0 0 1 0 0" into an array of numbers. */
function parseMatrix(str) {
  return String(str)
    .trim()
    .split(/\s+/)
    .filter((x) => x !== '')
    .map(Number);
}

function isFiniteNumber(value) {
  return typeof value === 'number' && Number.isFinite(value);
}

function validMatrix(m) {
  return m.length === 6 && m.every(isFiniteNumber);
}

/** Apply a 2D transform matrix to a point [x, y]. */
function applyTransform(p, m) {
  const [px, py] = p;
  const xt = px * m[0] + py * m[2] + m[4];
  const yt = px * m[1] + py * m[3] + m[5];
  return [xt, yt];
}

/** Multiply two 2D transform matrices. */
function multiplyMatrices(m1, m2) {
  return [
    m1[0] * m2[0] + m1[2] * m2[1],
    m1[1] * m2[0] + m1[3] * m2[1],
    m1[0] * m2[2] + m1[2] * m2[3],
    m1[1] * m2[2] + m1[3] * m2[3],
    m1[0] * m2[4] + m1[2] * m2[5] + m1[4],
    m1[1] * m2[4] + m1[3] * m2[5] + m1[5],
  ];
}

/** point x matrix => (x, y) transformed by m */
function PointTransform() {
  const [x, setX] = useState('');
  const [y, setY] = useState('');
  const [matrix, setMatrix] = useState(IDENTITY_MATRIX.join(' '));

  const xNum = Number(x);
  const yNum = Number(y);
  const m = parseMatrix(matrix);

  const output =
    validMatrix(m) && isFiniteNumber(xNum) && isFiniteNumber(yNum)
      ? applyTransform([xNum, yNum], m).join(' ')
      : '';

  return (
    <div className="codeblock">
      {'('}
      <input
        id="x"
        size="5"
        type="text"
        placeholder="0"
        value={x}
        onChange={(e) => setX(e.target.value)}
      />
      <input
        id="y"
        size="5"
        type="text"
        placeholder="0"
        value={y}
        onChange={(e) => setY(e.target.value)}
      />
      {') x ('}
      <input
        id="matrix-1"
        type="text"
        placeholder="1 0 0 1 0 0"
        value={matrix}
        onChange={(e) => setMatrix(e.target.value)}
      />
      {') = ('}
      <label id="out-1">{output}</label>
      {')'}
    </div>
  );
}

/** matrix x matrix => product of the two transform matrices */
function MatrixMultiply() {
  const [m1, setM1] = useState(IDENTITY_MATRIX.join(' '));
  const [m2, setM2] = useState(IDENTITY_MATRIX.join(' '));

  const mat1 = parseMatrix(m1);
  const mat2 = parseMatrix(m2);

  const output =
    validMatrix(mat1) && validMatrix(mat2)
      ? multiplyMatrices(mat1, mat2).join(' ')
      : '';

  return (
    <div className="codeblock">
      {'('}
      <input
        id="matrix-mul-1"
        type="text"
        placeholder="1 0 0 1 0 0"
        value={m1}
        onChange={(e) => setM1(e.target.value)}
      />
      {') x ('}
      <input
        id="matrix-mul-2"
        type="text"
        placeholder="1 0 0 1 0 0"
        value={m2}
        onChange={(e) => setM2(e.target.value)}
      />
      {') = ('}
      <label id="out-mul">{output}</label>
      {')'}
    </div>
  );
}

export default function Tools() {
  return (
    <section id="html">
      <h1>Tools</h1>
      <section id="html-templates">
        <h2>Transforms</h2>
        <div className="snippet span-7">
          <h2>Matrix transforms</h2>
          <div className="matrix">
            <PointTransform />
            <MatrixMultiply />
          </div>
        </div>
      </section>
    </section>
  );
}
