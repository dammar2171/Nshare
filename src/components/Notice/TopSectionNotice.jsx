import NoticeCard from "./NoticeCard";
import "../../css/NoticeCard.css";
function TopSectionNotice() {
  const noticeData = [
    {
      id: "1",
      image:
        "https://www.moha.gov.np/images/cache/e66443e81e8cc9c4fa5c099a1fb1bb87/940x380-%E0%A4%B8%E0%A5%82%E0%A4%9A%E0%A4%A8%E0%A4%BE(5).jpg",
      heading: "",
      issueDate: "2082-8-19",
      publisher: "Dammar Bhatt",
      tags: { first: "#goverment,", second: "#nepal" },
      description: "This is a news related govement",
    },
    {
      id: "2",
      image:
        "https://www.moha.gov.np/images/cache/e66443e81e8cc9c4fa5c099a1fb1bb87/940x380-%E0%A4%B8%E0%A5%82%E0%A4%9A%E0%A4%A8%E0%A4%BE(5).jpg",
      heading: "",
      issueDate: "2082-8-19",
      publisher: "Dammar Bhatt",
      tags: { first: "#goverment,", second: "#nepal" },
      description: "This is a news related govement",
    },
    {
      id: "3",
      image:
        "https://www.moha.gov.np/images/cache/e66443e81e8cc9c4fa5c099a1fb1bb87/940x380-%E0%A4%B8%E0%A5%82%E0%A4%9A%E0%A4%A8%E0%A4%BE(5).jpg",
      heading: "",
      issueDate: "2082-8-19",
      publisher: "Dammar Bhatt",
      tags: { first: "#goverment,", second: "#nepal" },
      description: "This is a news related govement",
    },
    {
      id: "4",
      image:
        "https://www.moha.gov.np/images/cache/e66443e81e8cc9c4fa5c099a1fb1bb87/940x380-%E0%A4%B8%E0%A5%82%E0%A4%9A%E0%A4%A8%E0%A4%BE(5).jpg",
      heading: "",
      issueDate: "2082-8-19",
      publisher: "Dammar Bhatt",
      tags: { first: "#goverment,", second: "#nepal" },
      description: "This is a news related govement",
    },
    {
      id: "5",
      image:
        "https://www.moha.gov.np/images/cache/e66443e81e8cc9c4fa5c099a1fb1bb87/940x380-%E0%A4%B8%E0%A5%82%E0%A4%9A%E0%A4%A8%E0%A4%BE(5).jpg",
      heading: "",
      issueDate: "2082-8-19",
      publisher: "Dammar Bhatt",
      tags: { first: "#goverment,", second: "#nepal" },
      description: "This is a news related govement",
    },
  ];

  return (
    <div className="container-fluid py-4 topsection-notice">
      <div className="container topSectionNotice-container">
        <h1>Notices & Announcements</h1>
        <p>Stay updated with the latest news and events</p>
        <NoticeCard noticeData={noticeData} />
      </div>
    </div>
  );
}

export default TopSectionNotice;
