import McqCardContainer from "../components/Mcq/McqCardContainer";
import PaginationSection from "../components/Mcq/PaginationSection";
import TopSectionQuiz from "../components/Mcq/TopSectionQuiz";

function Quiz() {
  return (
    <>
      <TopSectionQuiz />
      <McqCardContainer />
      <PaginationSection />
    </>
  );
}

export default Quiz;
