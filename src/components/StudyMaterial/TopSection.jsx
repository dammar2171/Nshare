import { VscFilePdf } from "react-icons/vsc";
import { CiFilter } from "react-icons/ci";
import FilterMethod from "./FilterMethod";
import "../../css/TopSection.css";
function TopSection() {
  return (
    <section className="container-fluid">
      <div className="container">
        <div className="top-section-content">
          <button>Back to dashboard</button>
          <h1>
            <VscFilePdf /> PDF Library
          </h1>
          <p>
            Browse and search through our collection of 225 educational
            materials
          </p>
        </div>
        <div className="search-area ">
          <form>
            <input type="search" placeholder="🔍 Search anything ....." />
          </form>
          <p className="d-inline-flex gap-1">
            <button
              className="filterBtn"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFilter"
              aria-expanded="false"
              aria-controls="collapseFilter"
            >
              <CiFilter /> Filter
            </button>
          </p>
        </div>
        <div className="collapse" id="collapseFilter">
          <div className="card card-body">
            <FilterMethod />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TopSection;
