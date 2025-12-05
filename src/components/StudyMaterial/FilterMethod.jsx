import React from "react";
import "../../css/FilterMethod.css";
function FilterMethod() {
  return (
    <div className="row filter-section">
      <div className="col-3">
        <select className="form-select" aria-label="Default select example">
          <option selected="">Open this select menu</option>
          <option value={1}>One</option>
          <option value={2}>Two</option>
          <option value={3}>Three</option>
        </select>
      </div>
      <div className="col-3">
        <select className="form-select" aria-label="Default select example">
          <option selected="">Open this select menu</option>
          <option value={1}>One</option>
          <option value={2}>Two</option>
          <option value={3}>Three</option>
        </select>
      </div>
      <div className="col-3">
        <select className="form-select" aria-label="Default select example">
          <option selected="">Open this select menu</option>
          <option value={1}>One</option>
          <option value={2}>Two</option>
          <option value={3}>Three</option>
        </select>
      </div>
      <div className="col-3">
        <select className="form-select" aria-label="Default select example">
          <option selected="">Open this select menu</option>
          <option value={1}>One</option>
          <option value={2}>Two</option>
          <option value={3}>Three</option>
        </select>
      </div>
      <p className="mt-2">Sorted By:</p>
      <div className="col-3">
        <select className="form-select" aria-label="Default select example">
          <option selected="">Open this select menu</option>
          <option value={1}>One</option>
          <option value={2}>Two</option>
          <option value={3}>Three</option>
        </select>
      </div>{" "}
      <div className="col-3">
        <select className="form-select" aria-label="Default select example">
          <option selected="">Open this select menu</option>
          <option value={1}>One</option>
          <option value={2}>Two</option>
          <option value={3}>Three</option>
        </select>
      </div>
    </div>
  );
}

export default FilterMethod;
