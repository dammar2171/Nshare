import React, { useEffect } from "react";
import { GiRapidshareArrow } from "react-icons/gi";
import { FaRegBell } from "react-icons/fa";
import {
  FiSearch,
  FiMenu,
  FiUser,
  FiSun,
  FiMoon,
  FiHome,
  FiBox,
  FiBook,
} from "react-icons/fi";
import { NavLink, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  useEffect(() => {
    const css = `:root{--glass-bg: rgba(255,255,255,0.04);--accent-1: #7b61ff;--accent-2: #00e5ff;--text: rgba(255,255,255,0.95)}
.futuristic-header{position:relative;padding:0.65rem 1rem;backdrop-filter:blur(6px) saturate(1.1);-webkit-backdrop-filter:blur(6px) saturate(1.1);border-radius:12px;border:1px solid rgba(255,255,255,0.04);background:linear-gradient(135deg,rgba(123,97,255,0.08),rgba(0,229,255,0.04));box-shadow:0 6px 30px rgba(0,0,0,0.6),0 0 18px rgba(123,97,255,0.06) inset}
.brand-blob{display:inline-grid;place-items:center;width:42px;height:42px;border-radius:10px;margin-right:.6rem;background:linear-gradient(135deg,var(--accent-1),var(--accent-2));box-shadow:0 6px 18px rgba(123,97,255,0.22),0 0 18px rgba(0,229,255,0.08)}
.navbar .nav-link{color:rgba(255,255,255,0.9);font-weight:600}
.navbar .nav-link:hover{color:var(--accent-2)}
.nav-link.active{position:relative;color:var(--text)}
.nav-link.active:after{content:'';position:absolute;left:0;bottom:-8px;height:3px;width:100%;border-radius:4px;background:linear-gradient(90deg,var(--accent-1),var(--accent-2));box-shadow:0 6px 18px rgba(123,97,255,0.18)}
.search-box{min-width:220px;max-width:420px}
.user-btn{border-radius:10px;padding:.45rem .6rem;border:1px solid rgba(255,255,255,0.04);background:linear-gradient(180deg,rgba(255,255,255,0.03),transparent)}
.header-backdrop{position:absolute;inset:0;pointer-events:none;border-radius:12px;overflow:hidden}
.grid-lines{position:absolute;inset:-20% -10% -20% -10%;background-image:radial-gradient(rgba(255,255,255,0.02) 1px, transparent 1px);background-size:40px 40px;opacity:0.6;transform:translateZ(0);mix-blend-mode:overlay;filter:blur(6px)}
.brand-blob,.user-btn{transition:transform .18s ease, box-shadow .18s ease}
.brand-blob:hover{transform:translateY(-3px) scale(1.03)}
.user-btn:hover{transform:translateY(-2px)}
@media (max-width:576px){.navbar-nav .nav-link{padding:.35rem .5rem}}
body{background:#08030a;font-family:Inter, system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial}
body.light-theme{background:#f4f4f7;color:#111}
body.light-theme .futuristic-header{background:rgba(255,255,255,0.85);border:1px solid rgba(0,0,0,0.06);backdrop-filter:blur(4px)}
body.light-theme .nav-link{color:#222}
`;

    const styleEl = document.createElement("style");
    styleEl.setAttribute("data-futuristic-header-styles", "");
    styleEl.appendChild(document.createTextNode(css));
    document.head.appendChild(styleEl);

    // cleanup
    return () => {
      document.head.removeChild(styleEl);
    };
  }, []);

  // theme: "dark" | "light"
  const [theme, setTheme] = React.useState(() =>
    document.body.classList.contains("light-theme") ? "light" : "dark"
  );

  // central place to apply CSS variable values for both themes
  const applyThemeVars = (t) => {
    const root = document.documentElement;
    if (t === "light") {
      root.style.setProperty("--glass-bg", "rgba(0,0,0,0.04)");
      root.style.setProperty("--accent-1", "#6b46ff"); // slightly muted for light
      root.style.setProperty("--accent-2", "#00a7bf");
      root.style.setProperty("--text", "#0f1724");
      // any other themeable variables you want:
      // root.style.setProperty('--some-other-var','value')
    } else {
      // dark (original)
      root.style.setProperty("--glass-bg", "rgba(255,255,255,0.04)");
      root.style.setProperty("--accent-1", "#7b61ff");
      root.style.setProperty("--accent-2", "#00e5ff");
      root.style.setProperty("--text", "rgba(255,255,255,0.95)");
    }
  };

  // apply initial theme variables on mount / when theme state changes
  useEffect(() => {
    applyThemeVars(theme);
    // ensure body class matches theme (keeps existing CSS that checks body.light-theme)
    if (theme === "light") document.body.classList.add("light-theme");
    else document.body.classList.remove("light-theme");
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    // NOTE: theme effect takes care of DOM changes (CSS vars and body class)
  };

  const handleSignin = () => {
    navigate("/login");
  };

  return (
    <header className="container py-3 sticky-top">
      <div className="futuristic-header d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center gap-2">
          <div className="brand-blob" onClick={() => navigate("/")}>
            <GiRapidshareArrow style={{ fontSize: "2.5rem", color: "white" }} />
          </div>

          <div className="d-none d-md-block">
            <div
              onClick={() => navigate("/")}
              className="h6 mb-0"
              style={{ color: "var(--text)", fontWeight: 700 }}
            >
              NShare
            </div>
            <small style={{ color: "rgba(255,255,255,0.45)" }}>
              note.share.here
            </small>
          </div>

          <nav className="ms-4 d-none d-lg-block">
            <ul className="nav">
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : ""}`
                  }
                  to="/"
                >
                  <FiHome style={{ marginRight: 6 }} />
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : ""}`
                  }
                  to="/study"
                >
                  <FiBox style={{ marginRight: 6 }} />
                  Study Materials
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : ""}`
                  }
                  to="/quiz"
                >
                  <FiBook style={{ marginRight: 6 }} />
                  MCQ Quiz
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : ""}`
                  }
                  to="/notice"
                >
                  <FaRegBell style={{ marginRight: 6 }} />
                  Notices
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>

        <div className="d-flex align-items-center gap-2">
          <form className="search-box d-flex align-items-center me-2">
            <div className="input-group">
              <span
                className="input-group-text"
                id="search-addon"
                style={{
                  background: "transparent",
                  borderRight: 0,
                  color: "rgba(255,255,255,0.6)",
                }}
              >
                <FiSearch />
              </span>
              <input
                type="search"
                className="form-control form-control-sm bg-transparent border-start-0"
                placeholder="Search docs, apps, commands..."
                aria-label="Search"
                aria-describedby="search-addon"
              />
            </div>
          </form>

          <button
            onClick={toggleTheme}
            className="btn user-btn d-flex align-items-center gap-2 me-2"
            title="Toggle Theme"
            aria-pressed={theme === "light"}
          >
            {theme === "light" ? (
              <FiSun style={{ color: "orange" }} />
            ) : (
              <FiMoon style={{ color: "white" }} />
            )}
          </button>

          <button
            onClick={handleSignin}
            type="button"
            className="btn user-btn d-flex align-items-center gap-2"
            aria-expanded="false"
            title="Account"
          >
            <FiUser style={{ color: "var(--accent-2)", fontSize: 20 }} />
            <div className="d-none d-sm-block text-start">
              <div
                style={{
                  fontWeight: 700,
                  color: "var(--text)",
                  fontSize: ".9rem",
                }}
              >
                Sign up
              </div>
              <small style={{ color: "rgba(255,255,255,0.45)" }}>Sign in</small>
            </div>
          </button>

          <button
            className="btn btn-link text-decoration-none d-lg-none ms-1"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#mobileMenu"
            aria-controls="mobileMenu"
          >
            <FiMenu style={{ color: "var(--accent-1)", fontSize: 22 }} />
          </button>
        </div>

        <div className="header-backdrop">
          <div className="grid-lines" aria-hidden="true" />
        </div>
      </div>

      {/* Offcanvas mobile menu */}
      <div
        className="offcanvas offcanvas-start"
        tabIndex={-1}
        id="mobileMenu"
        aria-labelledby="mobileMenuLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="mobileMenuLabel">
            NShare
          </h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>
        <div className="offcanvas-body">
          <p className="text-muted">Quick links</p>
          <ul className="list-unstyled">
            <li className="mb-2">
              <a className="d-block py-2" href="#">
                <FiHome style={{ marginRight: 8 }} />
                Home
              </a>
            </li>
            <li className="mb-2">
              <a className="d-block py-2" href="#">
                <FiBox style={{ marginRight: 8 }} />
                Study Materials
              </a>
            </li>
            <li className="mb-2">
              <a className="d-block py-2" href="#">
                <FiBook style={{ marginRight: 8 }} />
                MCQ Quiz
              </a>
            </li>
            <li className="mb-2">
              <a className="d-block py-2" href="#">
                <FaRegBell style={{ marginRight: 8 }} />
                Notice
              </a>
            </li>
          </ul>

          <hr />
          <form className="mb-3">
            <label className="form-label small text-muted">Search</label>
            <div className="input-group">
              <input
                type="text"
                className="form-control form-control-sm bg-transparent"
                placeholder="Search..."
              />
              <button
                className="btn btn-sm btn-outline-secondary"
                type="button"
              >
                Go
              </button>
            </div>
          </form>

          <div className="d-grid">
            <button className="btn btn-primary btn-lg">Sign in</button>
          </div>
        </div>
      </div>
    </header>
  );
}
