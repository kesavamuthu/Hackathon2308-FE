import React from "react";

const Filters = (props) => {
  return (
    <div style={{ display: "inline-block", width: "80%" }}>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <button
            className="btn btn-outline-secondary dropdown-toggle"
            type="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Filters
          </button>
          <div className="dropdown-menu">
            {props.filters.map((e) => (
              <a className="dropdown-item" href="#">
                {e}
              </a>
            ))}
          </div>
        </div>
        <input
          type="text"
          className="form-control"
          aria-label="Text input with dropdown button"
        />
      </div>
    </div>
  );
};

export default Filters;
