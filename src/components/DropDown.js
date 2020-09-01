import React from "react";

export default (props) => {
  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <div
          className="btn  dropdown-toggle"
          //   type="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {props.name}
        </div>
        <div
          className="dropdown-menu"
          style={{ cursor: "pointer" }}
          onClick={props.onClick}
        >
          <input
            type="text"
            className="form-control "
            aria-label="Text input with dropdown button"
          />
          <div role="separator" className="dropdown-divider"></div>
          {props.labels.map((e, j) => (
            <div key={j} className="dropdown-item">
              {e}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
