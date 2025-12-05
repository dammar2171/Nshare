import StudyCard from "./StudyCard";
import "../../css/StudyCardContainer.css";
function StudyCardContainer() {
  const items = [
    {
      id: "1",
      image:
        "https://media.licdn.com/dms/image/v2/D5612AQHtZPSHvUUXpQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1681723080465?e=2147483647&v=beta&t=NUXPBf37D808LEVTyMnbNXA4sJRVOgU1xysxI-M7dvc",
      topPill: "Theory",
      title: "POM",
      description:
        "This is the complete note of the Project and organizational...",
      chips: ["Notes", "Sem 6", "POM"],
      author: "Dammar Bhatt",
      authorSub: "",
      rating: "4.0",
      ratingCount: 2,
      date: "Nov 9, 2025",
    },
    {
      id: "2",
      image:
        "https://media.licdn.com/dms/image/v2/D5612AQHtZPSHvUUXpQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1681723080465?e=2147483647&v=beta&t=NUXPBf37D808LEVTyMnbNXA4sJRVOgU1xysxI-M7dvc",
      topPill: "Theory",
      title: "POM",
      description:
        "This is the complete note of the Project and organizational...",
      chips: ["Notes", "Sem 6", "POM"],
      author: "Dammar Bhatt",
      authorSub: "",
      rating: "4.0",
      ratingCount: 2,
      date: "Nov 9, 2025",
    },
    {
      id: "3",
      image:
        "https://media.licdn.com/dms/image/v2/D5612AQHtZPSHvUUXpQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1681723080465?e=2147483647&v=beta&t=NUXPBf37D808LEVTyMnbNXA4sJRVOgU1xysxI-M7dvc",
      topPill: "Theory",
      title: "POM",
      description:
        "This is the complete note of the Project and organizational...",
      chips: ["Notes", "Sem 6", "POM"],
      author: "Dammar Bhatt",
      authorSub: "",
      rating: "4.0",
      ratingCount: 2,
      date: "Nov 9, 2025",
    },
    {
      id: "4",
      image:
        "https://media.licdn.com/dms/image/v2/D5612AQHtZPSHvUUXpQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1681723080465?e=2147483647&v=beta&t=NUXPBf37D808LEVTyMnbNXA4sJRVOgU1xysxI-M7dvc",
      topPill: "Theory",
      title: "POM",
      description: "This is picture related OS",
      chips: ["Notes", "Sem 6", "POM"],
      author: "Dammar Bhatt",
      authorSub: "",
      rating: "4.0",
      ratingCount: 2,
      date: "Nov 9, 2025",
    },
  ];
  return (
    <div className="container-fluid studycard-container">
      <div className="container">
        <StudyCard items={items} />
      </div>
    </div>
  );
}

export default StudyCardContainer;
