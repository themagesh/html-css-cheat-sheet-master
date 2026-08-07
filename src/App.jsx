import { useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
} from 'react-router-dom';
import HtmlCssCheatSheet from './components/HtmlCssCheatSheet.jsx';
import Animation from './components/Animation.jsx';
import Tools from './Tools.jsx';

function Nav() {
  return (
    <nav>
      <ul className="left">
        <li>
          <Link to="/#html">HTML</Link>
        </li>
        <li>
          <Link to="/#css">CSS</Link>
        </li>
        <li>
          <Link to="/animation">Animation</Link>
        </li>
        <li>
          <Link to="/tools">Tools</Link>
        </li>
      </ul>
      <ul className="right">
        <li>
          <a
            href="https://github.com/acchou/html-css-cheat-sheet"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="social-logo" src="/github.svg" alt="GitHub" />
          </a>
        </li>
      </ul>
    </nav>
  );
}

/** Scrolls to the hash target (e.g. #html, #css) on navigation. */
function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <Nav />
      <Routes>
        <Route path="/" element={<HtmlCssCheatSheet />} />
        <Route path="/animation" element={<Animation />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="*" element={<HtmlCssCheatSheet />} />
      </Routes>
    </BrowserRouter>
  );
}
