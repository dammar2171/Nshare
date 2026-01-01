// src/components/SignupModal.jsx
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FiMail, FiLock, FiEye, FiEyeOff, FiX, FiUser } from "react-icons/fi";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router";

export default function SignupModal({ open = true, onClose }) {
  const [visible, setVisible] = useState(open);
  const [showPwd, setShowPwd] = useState(false);
  const [showConfirmPwd, setShowConfirmPwd] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  const [accepted, setAccepted] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setVisible(open);
  }, [open]);

  useEffect(() => {
    const css = `
/* Signup modal styles - matches Sign In modal */
.auth-backdrop {
  position: fixed;
  inset: 0;
  display: flex;
  overflow:scroll,
  align-items: center;
  justify-content: center;
  z-index: 1080;
  -webkit-font-smoothing:antialiased;
  -moz-osx-font-smoothing:grayscale;
}
.auth-backdrop::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(4,8,15,0.75);
  backdrop-filter: blur(8px) saturate(1.05);
  -webkit-backdrop-filter: blur(8px) saturate(1.05);
}
.auth-card {
  position: relative;
  width: min(620px, 92%);
  max-width: 620px;
  border-radius: 18px;
  z-index: 1;
  box-shadow: 0 20px 50px rgba(3,6,14,0.75), 0 6px 24px rgba(59,78,255,0.06);
  background: linear-gradient(180deg, rgba(10,14,24,0.96), rgba(10,14,24,0.92));
  border: 1px solid rgba(255,255,255,0.04);
}
.auth-card .top-rim {
  height: 6px;
  background: linear-gradient(90deg, #5f7cff, #66e6ff);
  box-shadow: 0 6px 30px rgba(96,113,255,0.14);
}
.auth-card .card-body {
  padding: 0px 16px;
  color: #dfe9ff;
}
.auth-card h3 {
  text-align: center;
  margin: 0 0 8px 0;
  font-weight: 700;
  color: #7b8cff;
  font-size: 25px;
}
.auth-card p.lead {
  text-align: center;
  margin-bottom: 7px;
  color: rgba(255,255,255,0.55);
}
.form-field {
  background: rgba(255,255,255,0.02);
  border: 1px solid rgba(255,255,255,0.05);
  border-radius: 10px;
  padding: 8px 12px;
  display:flex;
  gap:7px;
  align-items:center;
  color: #cdd6ee;
}
.form-field input {
  outline:none;
  border: none;
  background: transparent;
  color: #e7ecff;
  width: 100%;
  font-size: 0.8rem;
}
.form-label {
  font-weight: 700;
  font-size: 0.8rem;
  color: rgba(255,255,255,0.75);
  margin-bottom: 5px;
}
.btn-gradient {
  width: 100%;
  border-radius: 10px;
  padding: 8px 18px;
  font-weight: 700;
  font-size: 1rem;
  border: none;
  background: linear-gradient(90deg,#5f7cff 0%, #63d6ff 100%);
  color: #061028;
  box-shadow: 0 10px 30px rgba(99,120,255,0.14), 0 2px 8px rgba(0,0,0,0.45);
}
.or-divider {
  display:flex;
  align-items:center;
  gap:12px;
  color: rgba(255,255,255,0.5);
}
.or-divider .line { flex:1;height:1px;background:rgba(255,255,255,0.03); }
.socials {
  display:flex;
  gap:12px;
}
.btn-social {
  flex:1;
  border-radius:10px;
  padding:8px 12px;
  border:1px solid rgba(255,255,255,0.06);
  background: rgba(255,255,255,0.01);
  color: #dfe9ff;
  display:flex;
  gap:10px;
  align-items:center;
  justify-content:center;
  font-weight:600;
}
.auth-footer {
  text-align:center;
  margin-top: 7px;
  color: rgba(255,255,255,0.55);
}
.auth-footer a { color:#7ab6ff; font-weight:600; text-decoration:none; }
.auth-card::after{
  content:'';
  position:absolute;
  inset:-18px;
  z-index:-1;
  border-radius:22px;
  background: radial-gradient(closest-side, rgba(96,113,255,0.06), transparent 40%);
  filter: blur(22px);
}
.close-btn {
  position:absolute;
  right:14px;
  top:12px;
  background: rgba(255,255,255,0.03);
  width:36px;height:36px;border-radius:8px;
  display:grid;place-items:center;border:none;color:#dbe8ff;
}
.checkbox-row {
  display:flex;align-items:center;gap:10px;margin-top:6px;
}
@media (max-width: 420px) {
  .auth-card { width: 96%; }
  .auth-card .card-body { padding: 20px; }
  .btn-gradient { padding:10px; }
}
`;
    const el = document.createElement("style");
    el.setAttribute("data-signupmodal-styles", "true");
    el.appendChild(document.createTextNode(css));
    document.head.appendChild(el);

    return () => {
      document.head.removeChild(el);
    };
  }, []);

  if (!visible) return null;

  const handleSignup = (e) => {
    e.preventDefault();
    if (!accepted) {
      alert("Please accept Terms & Conditions");
      return;
    }
    if (pwd !== confirmPwd) {
      alert("Passwords do not match");
      return;
    }
    // placeholder: send to API
    alert("Signup submitted — replace with real API call");
    // close modal
    setVisible(false);
    if (onClose) onClose();
  };

  return (
    <div
      className="auth-backdrop"
      role="dialog"
      aria-modal="true"
      aria-label="Sign up"
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
            type="button"
          >
            <FiX />
          </button>

          <h3>Create an account</h3>
          <p className="lead fs-6">Sign up to get started</p>

          <form onSubmit={handleSignup}>
            <div className="mb-3">
              <div className="form-label">Full name</div>
              <div className="form-field">
                <FiUser style={{ minWidth: 18 }} />
                <input
                  type="text"
                  placeholder="Your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  aria-label="Full name"
                  required
                />
              </div>
            </div>

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
                  required
                />
              </div>
            </div>

            <div className="mb-3">
              <div className="form-label">Password</div>
              <div className="form-field">
                <FiLock style={{ minWidth: 18 }} />
                <input
                  type={showPwd ? "text" : "password"}
                  placeholder="Choose a strong password"
                  value={pwd}
                  onChange={(e) => setPwd(e.target.value)}
                  aria-label="Password"
                  required
                />
                <button
                  onClick={(ev) => {
                    ev.preventDefault();
                    setShowPwd((s) => !s);
                  }}
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

            <div className="mb-2">
              <div className="form-label">Confirm password</div>
              <div className="form-field">
                <FiLock style={{ minWidth: 18 }} />
                <input
                  type={showConfirmPwd ? "text" : "password"}
                  placeholder="Repeat password"
                  value={confirmPwd}
                  onChange={(e) => setConfirmPwd(e.target.value)}
                  aria-label="Confirm password"
                  required
                />
                <button
                  onClick={(ev) => {
                    ev.preventDefault();
                    setShowConfirmPwd((s) => !s);
                  }}
                  type="button"
                  aria-label={
                    showConfirmPwd ? "Hide password" : "Show password"
                  }
                  style={{
                    border: "none",
                    background: "transparent",
                    color: "inherit",
                    display: "grid",
                    placeItems: "center",
                    padding: 6,
                  }}
                >
                  {showConfirmPwd ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>
            </div>

            <div className="checkbox-row mb-3">
              <input
                id="termsCheckbox"
                type="checkbox"
                checked={accepted}
                onChange={(e) => setAccepted(e.target.checked)}
                style={{ width: 18, height: 18 }}
                required
              />
              <label
                htmlFor="termsCheckbox"
                style={{ color: "rgba(255,255,255,0.75)", fontSize: 12 }}
              >
                I agree to the{" "}
                <a href="#" style={{ color: "#7ab6ff" }}>
                  Terms & Conditions
                </a>
              </label>
            </div>

            <div className="mb-3">
              <button className="btn-gradient" type="submit">
                Create account
              </button>
            </div>
          </form>

          <div className="or-divider">
            <div className="line" />
            <div style={{ whiteSpace: "nowrap", fontSize: 12 }}>
              Or continue with
            </div>
            <div className="line" />
          </div>

          <div className="socials mb-2">
            <button
              className="btn-social"
              onClick={() => alert("Google signup")}
            >
              <FaGoogle style={{ marginRight: 8 }} /> Google
            </button>
            <button
              className="btn-social"
              onClick={() => alert("GitHub signup")}
            >
              <FaGithub style={{ marginRight: 8 }} /> GitHub
            </button>
          </div>

          <div className="auth-footer">
            <div>
              Already have an account?{" "}
              <a
                href=""
                onClick={(e) => {
                  e.preventDefault();
                  setVisible(false);
                  if (onClose) onClose();
                  navigate("/login");
                }}
              >
                Sign In
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
