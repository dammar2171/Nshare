import NoticeCard from "./NoticeCard";
import "../../css/NoticeCard.css";
import { useContext } from "react";
import { StoreContext } from "../../store/Store";
function TopSectionNotice() {
  const { notices } = useContext(StoreContext);

  return (
    <div className="container-fluid py-4 topsection-notice">
      <div className="container topSectionNotice-container">
        <h1>Notices & Announcements</h1>
        <p>Stay updated with the latest news and events</p>
        <NoticeCard noticeData={notices} />
      </div>
    </div>
  );
}

export default TopSectionNotice;
