import { CiUser } from "react-icons/ci";
import "../../css/McqCardContainer.css";
function McqCard({ quizData }) {
  return (
    <div className="quizcard-wrapper">
      {quizData.map((item) => (
        <div className="quiz-card" key={item.id}>
          <div className="quizCard-top">
            <span>{item.category}</span>
            <span>{item.totalQuestion}MCQs</span>
            <img src={item.image} alt="" />
          </div>
          <div className="quizCard-bottom">
            <p>
              <span>
                <CiUser />
              </span>
              Published By: {item.publisher}
            </p>
          </div>
          <div className="quizCard-footer">
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default McqCard;
