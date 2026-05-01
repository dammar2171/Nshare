import { MdPreview } from "react-icons/md";
import "../../css/NoticeCard.css";
function NoticeCard({ noticeData }) {
  console.log(noticeData);
  const imgPdf = "https://i.gzn.jp/img/2021/01/23/pdf-history/00.png";

  return (
    <div className="noticeCard-wrapper">
      {noticeData.map((item, index) => (
        <div className="noticeCard" key={index}>
          <div className="noticeCard-top">
            {item.file_type == "pdf" ? (
              <img src={imgPdf} alt="" />
            ) : (
              <img src={item.file_url} />
            )}
          </div>
          <div className="noticeCard-mid">
            <h1>{item.heading}</h1>
            <p className="d-flex align-items-center gap-2">
              <span>{item.date.split("T")[0]}</span>
              <span>{item.publisher}</span>
            </p>
            <p>{item.description}</p>
            <div className="d-flex">
              {item.hashtags.map((tag, index) => (
                <span key={index} className="hashtag">
                  #{tag}
                </span>
              ))}
            </div>
            <button
              onClick={() => {
                if (item.file_url) {
                  window.open(item.file_url, "_blank");
                } else {
                  alert("No file available");
                }
              }}
            >
              <MdPreview /> View Attachment
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default NoticeCard;
