import { VscFilePdf } from "react-icons/vsc";
import { CiFilter } from "react-icons/ci";
import FilterMethod from "./FilterMethod";
import "../../css/TopSection.css";
import SearchingModal from "../SearchingModal";
import { useRef, useState } from "react";
function TopSection() {
  const [openSearch, setOpenSearch] = useState(false);
  const [searchedNote, setSearchedNote] = useState("");

  const handleForm = (e) => {
    e.preventDefault();
    setOpenSearch(true);
  };
  return (
    <>
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
            <form onSubmit={handleForm}>
              <input
                type="search"
                onChange={(e) => setSearchedNote(e.currentTarget.value)}
                placeholder="🔍 Search anything ....."
              />
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

      {openSearch && (
        <SearchingModal
          searchedNote={searchedNote}
          onClose={() => setOpenSearch(false)}
        />
      )}
    </>
  );
}

export default TopSection;
