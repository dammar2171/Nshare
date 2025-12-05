import { FiExternalLink, FiUser, FiStar, FiCalendar } from "react-icons/fi";
import "../../css/StudyCardContainer.css";

export default function StudyCard({ items }) {
  return (
    <div className="cards-container">
      {items.map((it) => (
        <article className="card" key={it.id}>
          <div className="card-top">
            <img src={it.image} alt={it.title} />
            <button className="card-action" aria-label="open">
              <FiExternalLink />
            </button>
            {it.topPill && <div className="card-pill">{it.topPill}</div>}
          </div>

          <div className="card-body">
            <h3 className="card-title">{it.title}</h3>
            <p className="card-desc">{it.description}</p>

            <div className="card-chips">
              {it.chips?.map((c, i) => (
                <span className="chip" key={i}>
                  {c}
                </span>
              ))}
            </div>

            <div className="card-author">
              <div className="avatar">
                <FiUser />
              </div>
              <div className="author-info">
                <div className="author-name">by {it.author}</div>
                <div className="author-sub">{it.authorSub}</div>
              </div>
            </div>

            <hr className="card-sep" />

            <div className="card-footer">
              <div className="rating">
                <FiStar className="star" />
                <div className="rating-value">
                  {it.rating}{" "}
                  <span className="rating-count">({it.ratingCount})</span>
                </div>
              </div>
              <div className="date">
                <FiCalendar className="cal" /> {it.date}
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
