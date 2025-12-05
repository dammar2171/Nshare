import "../../css/McqCardContainer.css";
import McqCard from "./McqCard";

function McqCardContainer() {
  const quizData = [
    {
      id: "1",
      category: "Science",
      totalQuestion: "100",
      publisher: "Dammar Bhatt",
      image:
        "https://img.freepik.com/free-vector/science-banner-with-doodle-icons_1308-132177.jpg?semt=ais_se_enriched&w=740&q=80",
      description: "this is a quiz related science subject",
    },
    {
      id: "2",
      category: "Science",
      totalQuestion: "100",
      publisher: "Dammar Bhatt",
      image:
        "https://img.freepik.com/free-vector/science-banner-with-doodle-icons_1308-132177.jpg?semt=ais_se_enriched&w=740&q=80",
      description: "this is a quiz related science subject",
    },
    {
      id: "3",
      category: "Science",
      totalQuestion: "100",
      publisher: "Dammar Bhatt",
      image:
        "https://img.freepik.com/free-vector/science-banner-with-doodle-icons_1308-132177.jpg?semt=ais_se_enriched&w=740&q=80",
      description: "this is a quiz related science subject",
    },
    {
      id: "4",
      category: "Science",
      totalQuestion: "100",
      publisher: "Dammar Bhatt",
      image:
        "https://img.freepik.com/free-vector/science-banner-with-doodle-icons_1308-132177.jpg?semt=ais_se_enriched&w=740&q=80",
      description: "this is a quiz related science subject",
    },
    {
      id: "5",
      category: "Science",
      totalQuestion: "100",
      publisher: "Dammar Bhatt",
      image:
        "https://img.freepik.com/free-vector/science-banner-with-doodle-icons_1308-132177.jpg?semt=ais_se_enriched&w=740&q=80",
      description: "this is a quiz related science subject",
    },
    {
      id: "6",
      category: "Science",
      totalQuestion: "100",
      publisher: "Dammar Bhatt",
      image:
        "https://img.freepik.com/free-vector/science-banner-with-doodle-icons_1308-132177.jpg?semt=ais_se_enriched&w=740&q=80",
      description: "this is a quiz related science subject",
    },
  ];

  return (
    <div className="container-fluid mcqCard-fluid">
      <div className="container mcq-container">
        <McqCard quizData={quizData} />
      </div>
    </div>
  );
}

export default McqCardContainer;
