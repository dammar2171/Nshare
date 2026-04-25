import { useContext } from "react";
import "../../css/McqCardContainer.css";
import McqCard from "./McqCard";
import { StoreContext } from "../../store/Store";

function McqCardContainer() {
  const { quizs } = useContext(StoreContext);
  return (
    <div className="container-fluid mcqCard-fluid">
      <div className="container mcq-container">
        <McqCard quizData={quizs} />
      </div>
    </div>
  );
}

export default McqCardContainer;
