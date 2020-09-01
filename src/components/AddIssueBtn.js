import React, { useState } from "react";

const AddIssueBtn = () => {
  const [initModal, modalStateChanger] = useState(false);

  return (
    <>
      <div style={{ display: "inline-block", margin: "4px" }}>
        <button
          type="button"
          className="btn btn-success"
          onClick={() => modalStateChanger(true)}
        >
          New issue
        </button>
      </div>
      {!initModal ? null : (
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
                <input type="text" />
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={() => modalStateChanger(false)}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label htmlFor="exampleFormControlTextarea1">
                    Description :
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Enter your description"
                  ></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleFormControlInput1">Labels</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Add new labels & select existing one"
                  />
                  <select
                    multiple
                    className="form-control"
                    id="exampleFormControlSelect2"
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                  onClick={() => modalStateChanger(false)}
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
      )}
    </>
  );
};

export default AddIssueBtn;
