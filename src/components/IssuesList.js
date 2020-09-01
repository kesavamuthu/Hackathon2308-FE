import React from "react";
import DropDown from "./DropDown";

const IssuesList = (props) => {
  return (
    <div>
      {/*
      Remember to give following classNamenames
      To <ul>-> list-items
      To <li>-> items
      
      */}
      <ul className="list-group">
        <li
          className="list-group-item d-flex justify-content-between align-items-center list-group-item-action"
          style={{
            color: "#495057",
            zIndex: "1",
            textDecoration: "none",
            backgroundColor: "#f8f9fa",
          }}
        >
          Issues
          <span className="badge">
            <DropDown name="labels" labels={props.labels} />
          </span>
          <span className="badge badge-primary badge-pill">14</span>
        </li>
        {props.issues.map((e, j) => (
          <li
            className="list-group-item d-flex justify-content-between align-items-center list-group-item-action"
            key={j}
          >
            <a href={e.url}> {e.name}</a>
            <p>#{e.id}</p>

            {e.labels.map((e1, i) => (
              <span
                className="badge badge-secondary badge-pill"
                style={{ justifyContent: "flex-start" }}
                key={i}
              >
                {e1}
              </span>
            ))}
            <span className="badge badge-primary badge-pill">{e.number}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IssuesList;
