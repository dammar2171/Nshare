import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FiMail, FiLock, FiEye, FiEyeOff, FiX } from "react-icons/fi";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router";

export default function AuthModal({ open = true, onClose }) {
  const [visible, setVisible] = useState(open);
  const [showPwd, setShowPwd] = useState(false);
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    setVisible(open);
  }, [open]);

  
  useEffect(() => {
    const css = `
/* base & fonts */
.auth-backdrop {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1080;
  -webkit-font-smoothing:antialiased;
  -moz-osx-font-smoothing:grayscale;
}

/* blurred dim background */
.auth-backdrop::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(4,8,15,0.75);
  backdrop-filter: blur(8px) saturate(1.05);
  -webkit-backdrop-filter: blur(8px) saturate(1.05);
}

/* modal card */
.auth-card {
  position: relative;
  width: min(720px, 92%);
  max-width: 780px;
  border-radius: 18px;
  overflow: hidden;
  z-index: 1;
  box-shadow: 0 20px 50px rgba(3,6,14,0.75), 0 6px 24px rgba(59,78,255,0.06);
  background: linear-gradient(180deg, rgba(10,14,24,0.96), rgba(10,14,24,0.92));
  border: 1px solid rgba(255,255,255,0.04);
}

/* neon top rim like screenshot */
.auth-card .top-rim {
  height: 12px;
  background: linear-gradient(90deg, #5f7cff, #66e6ff);
  box-shadow: 0 6px 30px rgba(96,113,255,0.14);
}

/* content padding */
.auth-card .card-body {
  padding: 30px 36px;
  color: #dfe9ff;
}

/* title */
.auth-card h3 {
  text-align: center;
  margin: 6px 0 8px 0;
  font-weight: 700;
  color: #7b8cff;
  font-size: 28px;
}
.auth-card p.lead {
  text-align: center;
  margin-bottom: 22px;
  color: rgba(255,255,255,0.55);
}

/* form fields */
.form-field {
  background: rgba(255,255,255,0.02);
  border: 1px solid rgba(255,255,255,0.05);
  border-radius: 10px;
  padding: 10px 12px;
  display:flex;
  gap:10px;
  align-items:center;
  color: #cdd6ee;
}
.form-field input {
  outline:none;
  border: none;
  background: transparent;
  color: #e7ecff;
  width: 100%;
  font-size: 0.95rem;
}

/* small label style */
.form-label {
  font-weight: 700;
  font-size: 0.88rem;
  color: rgba(255,255,255,0.75);
  margin-bottom: 8px;
}

/* sign in button gradient */
.btn-gradient {
  width: 100%;
  border-radius: 10px;
  padding: 12px 18px;
  font-weight: 700;
  font-size: 1rem;
  border: none;
  background: linear-gradient(90deg,#5f7cff 0%, #63d6ff 100%);
  color: #061028;
  box-shadow: 0 10px 30px rgba(99,120,255,0.14), 0 2px 8px rgba(0,0,0,0.45);
}

/* divider */
.or-divider {
  display:flex;
  align-items:center;
  gap:12px;
  margin: 20px 0;
  color: rgba(255,255,255,0.5);
}
.or-divider .line { flex:1;height:1px;background:rgba(255,255,255,0.03); }

/* social buttons */
.socials {
  display:flex;
  gap:12px;
}
.btn-social {
  flex:1;
  border-radius:10px;
  padding:10px 12px;
  border:1px solid rgba(255,255,255,0.06);
  background: rgba(255,255,255,0.01);
  color: #dfe9ff;
  display:flex;
  gap:10px;
  align-items:center;
  justify-content:center;
  font-weight:600;
}

/* footer links */
.auth-footer {
  text-align:center;
  margin-top: 18px;
  color: rgba(255,255,255,0.55);
}
.auth-footer a { color:#7ab6ff; font-weight:600; text-decoration:none; }

/* subtle glow around card (outer) */
.auth-card::after{
  content:'';
  position:absolute;
  inset:-18px;
  z-index:-1;
  border-radius:22px;
  background: radial-gradient(closest-side, rgba(96,113,255,0.06), transparent 40%);
  filter: blur(22px);
}

/* close button */
.close-btn {
  position:absolute;
  right:14px;
  top:12px;
  background: rgba(255,255,255,0.03);
  width:36px;height:36px;border-radius:8px;
  display:grid;place-items:center;border:none;color:#dbe8ff;
}

/* responsive tweaks */
@media (max-width: 420px) {
  .auth-card { width: 96%; }
  .auth-card .card-body { padding: 20px; }
  .btn-gradient { padding:10px; }
}
`;
    const el = document.createElement("style");
    el.setAttribute("data-authmodal-styles", "true");
    el.appendChild(document.createTextNode(css));
    document.head.appendChild(el);

    return () => {
      document.head.removeChild(el);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className="auth-backdrop"
      role="dialog"
      aria-modal="true"
      aria-label="Sign in"
    >
      <div className="auth-card">
        <div className="top-rim" />
        <div className="card-body">
          <button
            aria-label="Close"
            onClick={() => {
              setVisible(false);
              if (onClose) onClose();
              navigate("/");
            }}
            className="close-btn"
          >
            <FiX />
          </button>

          <h3>Welcome Back!</h3>
          <p className="lead">Sign in to continue</p>

          <div className="mb-3">
            <div className="form-label">Email Address</div>
            <div className="form-field">
              <FiMail style={{ minWidth: 18 }} />
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-label="Email address"
              />
            </div>
          </div>

          <div className="mb-3">
            <div className="form-label">Password</div>
            <div className="form-field">
              <FiLock style={{ minWidth: 18 }} />
              <input
                type={showPwd ? "text" : "password"}
                placeholder="••••••••"
                value={pwd}
                onChange={(e) => setPwd(e.target.value)}
                aria-label="Password"
              />
              <button
                onClick={() => setShowPwd((s) => !s)}
                type="button"
                aria-label={showPwd ? "Hide password" : "Show password"}
                style={{
                  border: "none",
                  background: "transparent",
                  color: "inherit",
                  display: "grid",
                  placeItems: "center",
                  padding: 6,
                }}
              >
                {showPwd ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
          </div>

          <div className="mb-3">
            <button className="btn-gradient">Sign In</button>
          </div>

          <div className="or-divider">
            <div className="line" />
            <div style={{ whiteSpace: "nowrap", fontSize: 14 }}>
              Or continue with
            </div>
            <div className="line" />
          </div>

          <div className="socials mb-2">
            <button className="btn-social" onClick={() => alert("Google flow")}>
              <FaGoogle style={{ marginRight: 8 }} /> Google
            </button>
            <button className="btn-social" onClick={() => alert("GitHub flow")}>
              <FaGithub style={{ marginRight: 8 }} /> GitHub
            </button>
          </div>

          <div className="auth-footer">
            <div>
              Don't have an account? <NavLink to="/signup">Sign Up</NavLink>
            </div>
            <div style={{ marginTop: 8 }}>
              <a href="#" style={{ color: "rgba(255,255,255,0.55)" }}>
                Forgot password?
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
