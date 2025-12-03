import { RiCheckboxMultipleLine } from "react-icons/ri";
import { HiUsers } from "react-icons/hi";
import { MdPictureAsPdf } from "react-icons/md";
import "../css/ServiceSection.css";
function ServiceSection() {
  return (
    <div className="container-fluid service-section">
      <div className="section-head">
        <h1>Everything You Need to Succeed</h1>
        <p>
          Comprehensive tools and resources designed for entrance exam
          preparation
        </p>
      </div>

      <div className="container">
        <div className="card-container">
          <div className="service-card">
            <div className="card-top">
              <div className="logo logo-mcq">
                <RiCheckboxMultipleLine />
              </div>
              <h3>MCQ Practice</h3>
            </div>
            <p>
              Practice with thousands of multiple choice questions across
              various subjects with detailed explanations.
            </p>
          </div>
          <div className="service-card">
            <div className="card-top">
              <div className="logo logo-pdf">
                <MdPictureAsPdf />
              </div>
              <h3>PDF Library</h3>
            </div>
            <p>
              Access comprehensive study materials, textbooks, and resources in
              our extensive PDF library.
            </p>
          </div>{" "}
          <div className="service-card">
            <div className="card-top">
              <div className="logo logo-community">
                <HiUsers />
              </div>
              <h3>Study Communities</h3>
            </div>
            <p>
              Connect with fellow students, share knowledge, and learn together
              in our supportive community.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceSection;
