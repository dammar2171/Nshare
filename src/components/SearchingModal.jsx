import { useContext } from "react";
import "../css/SearchingModal.css";
import { StoreContext } from "../store/Store";
import { useNavigate } from "react-router";

const SearchingModal = ({ onClose, searchedNote }) => {
  const navigate = useNavigate();
  const { notes } = useContext(StoreContext);
  const filteredNotes =
    notes.filter((item) =>
      item.title.toLowerCase().includes(searchedNote.toLowerCase())
    ) || [];

  const handleCard = (id) => {
    navigate(`/study_detail/${id}`);
  };

  return (
    <div className="search-overlay">
      <div className="search-modal">
        <div className="search-cards">
          {filteredNotes.length === 0 ? (
            <p className="no-result">No matching notes</p>
          ) : (
            filteredNotes.map((note) => (
              <div
                key={note.id}
                className="search-card"
                onClick={() => handleCard(note.id)}
              >
                <img src={note.image} alt={note.title} />
                <div className="card-info">
                  <h4>{note.title}</h4>
                  <p>{note.description}</p>
                  <span className="pill">{note.top_pill}</span>
                </div>
              </div>
            ))
          )}
        </div>

        <button className="close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default SearchingModal;
