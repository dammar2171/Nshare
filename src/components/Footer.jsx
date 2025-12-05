import { GiRapidshareArrow } from "react-icons/gi";
import {
  FiBell,
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiYoutube,
} from "react-icons/fi";
import { MdOutlineEmail, MdOutlinePhoneIphone } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { FaRegFilePdf } from "react-icons/fa6";
import { LuPaperclip } from "react-icons/lu";
import { GrUserExpert } from "react-icons/gr";
import { RiWhatsappLine } from "react-icons/ri";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { FiUser, FiHome, FiBox, FiBook } from "react-icons/fi";
function Footer() {
  return (
    <footer className="container-fluid footer-container">
      <div className="container">
        <div className="row footer-row">
          <div className="col-3">
            <div className="d-flex align-items-center gap-2">
              <div
                className="brand-blob  brand-blob-footer"
                onClick={() => navigate("/")}
              >
                <GiRapidshareArrow
                  style={{ fontSize: "2.5rem", color: "white" }}
                />
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
            </div>
            <p className="fs-6 fw-lighter mt-2 footer-text">
              Your trusted partner in entrance exam preparation
            </p>
            <div className="social-media d-flex align-items-center gap-3 ">
              <a href="#">
                <FiFacebook style={{ color: "blue", fontSize: "1.2rem" }} />
              </a>
              <a href="#">
                <FiInstagram
                  style={{ color: "#e10ebeff", fontSize: "1.2rem" }}
                />
              </a>
              <a href="#">
                <FiYoutube style={{ color: "red", fontSize: "1.2rem" }} />
              </a>
              <a href="#">
                <RiWhatsappLine
                  style={{ color: "green", fontSize: "1.2rem" }}
                />
              </a>
              <a href="#">
                <FiTwitter style={{ color: "#2a94f0ff", fontSize: "1.2rem" }} />
              </a>
            </div>
          </div>
          <div className="col-3 col-quicklist">
            <h5>Quicks Links</h5>
            <div className="d-flex flex-column quick-links-list">
              <a href="#">
                <FiHome />
                Home
              </a>
              <a href="#">
                <FiBox />
                Study Material
              </a>
              <a href="#">
                <FiBook />
                MCQ Quiz
              </a>
              <a href="#">
                <FiBell />
                Notices
              </a>
              <a href="#">
                <FiUser />
                Signup/signin
              </a>
            </div>
          </div>
          <div className="col-3">
            <h5>Resources</h5>
            <div className="d-flex flex-column quick-links-list">
              <a href="#">
                <FaRegFilePdf />
                PDFs
              </a>
              <a href="#">
                <MdOutlineLibraryBooks />
                Practice Sets
              </a>
              <a href="#">
                <LuPaperclip />
                Old Paper
              </a>
              <a href="#">
                <GrUserExpert />
                Expert Tips
              </a>
            </div>
          </div>
          <div className="col-3">
            <h5>Contact</h5>
            <div className="contact-links">
              <a href="#">
                <MdOutlineEmail />
                dammarbhatt111@gmail.com
              </a>
              <a href="#">
                <MdLocationOn />
                Bedkot 03, Bhamka
              </a>
              <a href="#">
                <MdOutlinePhoneIphone />
                9805752792
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
