import "../../css/TopSectionQuiz.css";
const TopSectionQuiz = () => {
  return (
    <section className="container-fluid topsection-quiz">
      <div className="container topSection-container">
        <button>Back to dashboard</button>
        <h1>Master Your Knowledge</h1>
        <p>
          Master your knowledge with our comprehensive collection of multiple
          choice questions.
        </p>
        <div className="search-section-quiz">
          <form>
            <input type="search" placeholder="🔍 Search anything ......" />
          </form>
        </div>
      </div>
    </section>
  );
};
export default TopSectionQuiz;
