import "../css/SigninSection.css";
import { GoPlus } from "react-icons/go";
import { FaArrowRight } from "react-icons/fa6";
function SigninSection() {
  return (
    <section className="container-fluid signin-section">
      <div className="container signin-container">
        <div className="card-signin">
          <h1>Ready to Transform Your Learning?</h1>
          <p>
            Join thousands of students who are already excelling with our
            AI-powered platform
          </p>
          <div className="btn-group d-flex align-items-center justify-content-Between">
            <button className="btn-cta">
              <GoPlus /> Start Learning Now
            </button>
            <button className="btn-ghost">
              Signin <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SigninSection;
