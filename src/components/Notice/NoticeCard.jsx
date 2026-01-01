import { MdPreview } from "react-icons/md";
import "../../css/NoticeCard.css";
function NoticeCard({ noticeData }) {
  return (
    <div className="noticeCard-wrapper">
      {noticeData.map((item) => (
        <div className="noticeCard" key={item.id}>
          <div className="noticeCard-top">
            <img src={item.image} alt="" />
          </div>
          <div className="noticeCard-mid">
            <h1>{item.heading}</h1>
            <p className="d-flex align-items-center gap-2">
              <span>{item.issueDate}</span>
              <span>{item.publisher}</span>
            </p>
            <p>{item.description}</p>
            <div className="d-flex">
              <span>{item.tags.first}</span>
              <span>{item.tags.second}</span>
            </div>
            <button>
              <MdPreview /> View Attachment
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default NoticeCard;
