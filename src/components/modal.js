import React from "react";

export default (props) => {
  return (
    <div
      className="modal"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      style={{ display: "inline-block" }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Title:
            </h5>
            <input
              type="text"
              onChange={props.onInputForTitle}
              value={props.value.title}
            />
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={() => props.onClick(false)}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1">Description :</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Enter your description"
                onChange={props.onInputForDesc}
                value={props.value.description}
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">Labels</label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Add new labels & select existing one"
                onKeyUp={props.onLabelChange}
                // onKeyPress={props.add}
              />
              <select
                multiple={true}
                className="form-control"
                id="exampleFormControlSelect2"
                value={props.value.labels}
                onChange={props.onChangeForSelect}
              >
                {props.labels.map((e, i) => (
                  <option value={e} key={i}>
                    {e}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
              onClick={() => props.onClick(false)}
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
