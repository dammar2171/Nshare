import { GiRapidshareArrow } from "react-icons/gi";
function BottomFooter() {
  return (
    <footer className="container-fluid py-3">
      <div className="container">
        <div className="row bottom-row">
          <div className="col-4">
            <p id="rights">
              © 2025 NShare. All rights reserved{" "}
              <GiRapidshareArrow style={{ color: "red" }} />
            </p>
          </div>
          <div className="col-5"></div>
          <div className="col-3">
            <div className="special-link">
              <a href="#">Privacy Policy</a>
              <a href="#">Term of service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default BottomFooter;
