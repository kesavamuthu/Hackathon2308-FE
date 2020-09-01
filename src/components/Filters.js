import React from "react";

const Filters = (props) => {
  return (
    <div className="filter" style={{}}>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <button
            className="btn btn-outline-secondary dropdown-toggle"
            type="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            key={1}
          >
            Filters
          </button>
          <div className="dropdown-menu" onClick={props.onClick}>
            {props.filters.map((e, i) => (
              <button className="dropdown-item" key={i} value={e}>
                {e}
              </button>
            ))}
          </div>
        </div>
        <input
          type="text"
          className="form-control"
          aria-label="Text input with dropdown button"
        />
      </div>
      <div className="input-group">
        <div className="input-group-append" id="button-addon4">
          <button className="btn btn-outline-secondary" type="button">
            Lables
          </button>
          <button className="btn btn-outline-secondary" type="button">
            Milestones
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filters;
