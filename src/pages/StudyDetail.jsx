import { useContext } from "react";
import "../css/StudyDetail.css";
import { useParams } from "react-router";
import { StoreContext } from "../store/Store";
const StudyDetail = () => {
  const { notes } = useContext(StoreContext);
  const { id } = useParams();

  const note = notes.find((item) => item.id == id);

  if (!note) return null;

  const {
    title,
    description,
    image,
    top_pill,
    chips,
    publisher,
    rating,
    rating_count,
    created_at,
    pdf_url,
  } = note;

  const dateOnly = created_at.split("T")[0];

  return (
    <div className="study-page">
      <div className="study-card">
        <div className="study-header">
          <span className="pill">{top_pill}</span>
          <h1>{title}</h1>
          <p className="meta">
            By <strong>{publisher}</strong> · {dateOnly}
          </p>
        </div>
        {image && (
          <div className="study-image">
            <img src={image} alt={title} />
          </div>
        )}
        <div className="d-flex justify-content-center gap-5 align-items-center">
          <div className="study-section">
            <h3>Description</h3>
            <p>{description}</p>
          </div>
          <div className="study-section">
            <h3>Tags</h3>
            <div className="chips">
              {chips.map((chip, i) => (
                <span key={i} className="chip">
                  {chip.replace(/["\[\]]/g, "")}
                </span>
              ))}
            </div>
          </div>
          <div className="study-section">
            <h3>Reviews</h3>
            <div>
              ⭐ <strong>{rating}</strong> / 10
              <span className="muted"> ({rating_count} reviews)</span>
            </div>
          </div>
        </div>
        {pdf_url && (
          <div className="pdf-wrapper">
            <div className="pdf-header">
              <span>📘 Study Material</span>
            </div>

            <iframe
              src={`http://localhost:5000${pdf_url}`}
              title="Study PDF"
              className="pdf-viewer"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default StudyDetail;
