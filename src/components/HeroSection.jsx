import { FaUserFriends } from "react-icons/fa";
import { GrResources } from "react-icons/gr";
import { SlBadge } from "react-icons/sl";
import { LuBrain } from "react-icons/lu";
import { GrTechnology } from "react-icons/gr";
import { CiTrophy } from "react-icons/ci";
import notes from "../assets/notes.png";
import { GiTriquetra } from "react-icons/gi";
import "../css/HeroSection.css";
function HeroSection() {
  return (
    <div className="container-fluid hero-section pt-5">
      <div className="container pt-5">
        <div className="row">
          <div className="col-6 content-col">
            <div className="content">
              <h1 style={{ color: "white" }}>Learn Smarter.</h1>
              <h1>Grow Faster</h1>
              <p>
                NShare helps you stay ahead in your entrance exam journey with
                the best learning resources and mock tests. Join today!
              </p>
              <button>Browse Study Material</button>
            </div>
            <div className="d-flex gap-3 align-items-center justify-content-sm-center justify-content-md-start stats mt-4">
              <div className="d-flex flex-column mt-4">
                <p>
                  <FaUserFriends /> <span className="number">63+</span>
                </p>
                <p className="label">Active Student</p>
              </div>
              <div className="d-flex flex-column mt-4">
                <p>
                  <GrResources /> <span className="number">223+</span>
                </p>
                <p className="label">Study Resources</p>
              </div>
              <div className="d-flex flex-column mt-4">
                <p>
                  <SlBadge /> <span className="number">5+</span>
                </p>
                <p className="label">Expert Mentor</p>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="circle">
              {" "}
              <LuBrain />
            </div>
            <div className="rectangle">
              <GrTechnology />
            </div>
            <div className="image ">
              <img src={notes} alt="notes share image" />
            </div>
            <div className="circle2">
              <CiTrophy />
            </div>
            <div className="rectangle2">
              <GiTriquetra />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
