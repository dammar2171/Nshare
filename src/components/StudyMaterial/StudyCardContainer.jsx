import StudyCard from "./StudyCard";
import "../../css/StudyCardContainer.css";
import { useContext } from "react";
import { StoreContext } from "../../store/Store";
function StudyCardContainer() {
  const { notes } = useContext(StoreContext);
  return (
    <div className="container-fluid studycard-container">
      <div className="container">
        <StudyCard items={notes} />
      </div>
    </div>
  );
}

export default StudyCardContainer;
