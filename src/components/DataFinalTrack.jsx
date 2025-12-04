import "../css/DataFinalTrack.css";
function DataFinalTrack() {
  const data = [
    {
      heading: "12k+",
      detail: "Active Student",
    },
    {
      heading: "12k+",
      detail: "Practice Question",
    },
    {
      heading: "12k+",
      detail: "Study Resources",
    },
    { heading: "80%", detail: "Sucess Rate" },
  ];
  return (
    <section className="container-fluid data-track-section">
      <div className="container data-track-wrapper">
        {data.map((item, index) => (
          <div className="data-card" key={index}>
            <h1>{item.heading}</h1>
            <p>{item.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default DataFinalTrack;
