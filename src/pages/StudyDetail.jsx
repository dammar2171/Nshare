import { useContext } from "react";
import "../css/StudyDetail.css";
import { useNavigate, useParams } from "react-router";
import { StoreContext } from "../store/Store";
const StudyDetail = () => {
  const navigate = useNavigate();
  const { notes } = useContext(StoreContext);
  const { id } = useParams();
  const note = notes.find((item) => item.id == id);
  if (!note) return null;
  const handleRecomended = (id) => {
    navigate(`/study_detail/${id}`);
  };
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

  const recommendedNotes = notes.filter((item) => item.id !== note.id);

  return (
    <>
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
      <section className="notes-recommended-container">
        <h2>Recommended Notes</h2>
        <p>Learn more grow more</p>
        <div className="notes-recomended-grid">
          {recommendedNotes.map((item) => (
            <div
              className="recommended-notes-card"
              key={item.id}
              onClick={() => handleRecomended(item.id)}
            >
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default StudyDetail;
