import "../css/Review.css";
import { CiStar } from "react-icons/ci";
import { FaArrowRightLong } from "react-icons/fa6";
const Review = () => {
  const data = [
    {
      star: "⭐⭐⭐⭐",
      number: "4/5",
      description: "Very Informative application really helpful in my exams.🫶",
      Letter: "D",
      name: "Dammar Bhatt",
      faculty: "Bachelor in Computer Application",
    },
    {
      star: "⭐⭐⭐⭐⭐",
      number: "5/5",
      description: "hello what's up ??? It seems good.",
      Letter: "T",
      name: "Toya Bhatt",
      faculty: "Bachelor in Computer Application",
    },
    {
      star: "⭐⭐⭐⭐",
      number: "4/5",
      description:
        "we have joined a hackathon and we all are prepared for it and i am happy",
      Letter: "D",
      name: "Dheeraj Bokati",
      faculty: "Bachelor in Computer Application",
    },
    {
      star: "⭐⭐⭐⭐",
      number: "4/5",
      description: "this is amazing and wonderful site",
      Letter: "P",
      name: "Prabin Jagari",
      faculty: "Bachelor in Computer Application",
    },
  ];
  return (
    <section className="container-fluid review-section">
      <h1>What Our Students Say</h1>
      <p className="sucess-paragraph">Success stories from our community</p>
      <div className="container review-container">
        {data.map((item, index) => (
          <div className="review-card" key={index}>
            <p>
              {item.star}
              <span>{item.number}</span>
            </p>
            <p>{item.description}</p>
            <div className="d-flex align-items-center">
              <div className="circleReview">{item.Letter}</div>
              <div className="info">
                <h3>{item.name}</h3>
                <p>{item.faculty}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="share-reviewBtn">
        {" "}
        <CiStar /> Share Your Experience <FaArrowRightLong />
      </button>
      <p className="text-center pt-3 fs-6">
        Help other students by sharing your learning journey
      </p>
    </section>
  );
};
export default Review;
