import { useContext, useState } from "react";
import "../css/QuizDetail.css";
import { StoreContext } from "../store/Store";
import { useNavigate, useParams } from "react-router";

const QuizDetail = () => {
  const navigate = useNavigate();
  const { quizs } = useContext(StoreContext);
  const { id } = useParams();
  const quiz = quizs.find((item) => item.id == id);
  const [revealedIndex, setRevealedIndex] = useState(null);

  if (!quiz) return null;

  const { category, image, description, publisher, questions, created_at } =
    quiz;

  const dateOnly = created_at ? created_at.split("T")[0] : "";

  const recommendedQuizzes = quizs.filter((item) => item.id !== quiz.id);

  const toggleAnswer = (index) => {
    setRevealedIndex(revealedIndex === index ? null : index);
  };

  return (
    <>
      <div className="quiz-page">
        <div className="quiz-card">
          <div className="quiz-header">
            <span className="quiz-pill">{category}</span>
            <h1>{category} Quiz</h1>
            <p className="quiz-meta">
              By <strong>{publisher}</strong>
              {dateOnly && <> · {dateOnly}</>}
            </p>
          </div>
          {image && (
            <div className="quiz-image">
              <img src={image} alt={category} />
            </div>
          )}

          <div className="quiz-custom-detail-container d-flex justify-content-center gap-5 align-items-center">
            <div className="quiz-section">
              <h3>Description</h3>
              <p>{description}</p>
            </div>
            <div className="quiz-section">
              <h3>Publisher</h3>
              <p>{publisher}</p>
            </div>
            <div className="quiz-section">
              <h3>Total Questions</h3>
              <div className="quiz-count-badge">
                <span className="quiz-count-number">
                  {questions?.length ?? 0}
                </span>
                <span className="quiz-count-label">Questions</span>
              </div>
            </div>
          </div>
          <div className="qa-section">
            <h2 className="qa-heading">Questions & Answers</h2>
            <p className="qa-subheading">
              Click on a question to reveal its answer
            </p>

            <div className="qa-list">
              {questions &&
                questions.map((item, index) => (
                  <div
                    className={`qa-card ${revealedIndex === index ? "revealed" : ""}`}
                    key={index}
                    onClick={() => toggleAnswer(index)}
                  >
                    <div className="qa-question-row">
                      <span className="qa-number">Q{index + 1}</span>
                      <p className="qa-question">{item.question}</p>
                      <span className="qa-toggle-icon">
                        {revealedIndex === index ? "▲" : "▼"}
                      </span>
                    </div>
                    {revealedIndex === index && (
                      <div className="qa-answer-row">
                        <span className="qa-answer-label">Answer</span>
                        <p className="qa-answer">{item.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      {recommendedQuizzes.length > 0 && (
        <section className="quiz-recommended-container">
          <h2>More Quizzes</h2>
          <p>Keep learning, keep growing</p>
          <div className="quiz-recommended-grid">
            {recommendedQuizzes.map((item) => (
              <div
                className="recommended-quiz-card"
                key={item.id}
                onClick={() => navigate(`/quiz_detail/${item.id}`)}
              >
                {item.image && <img src={item.image} alt={item.category} />}
                <div className="rec-card-body">
                  <span className="rec-pill">{item.category}</span>
                  <h3>{item.category} Quiz</h3>
                  <p>{item.description}</p>
                  <span className="rec-count">
                    {item.questions?.length ?? 0} questions
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default QuizDetail;
