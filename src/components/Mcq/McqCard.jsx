import { CiUser } from "react-icons/ci";
import "../../css/McqCardContainer.css";
import { useNavigate } from "react-router";
function McqCard({ quizData }) {
  const navigate = useNavigate();
  const onHandleQuiz = (id) => {
    navigate(`/quiz_detail/${id}`);
  };
  return (
    <div className="quizcard-wrapper">
      {quizData.map((item) => (
        <div
          className="quiz-card"
          key={item.id}
          onClick={() => onHandleQuiz(item.id)}
        >
          <div className="quizCard-top">
            <span>{item.category}</span>
            <span>{item.questions.length}QN</span>
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
