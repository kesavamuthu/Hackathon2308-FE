import React, { useState, useEffect } from "react";
import Modal from "./modal";

const permLabels = [];
const AddIssueBtn = () => {
  const [initModal, modalStateChanger] = useState(false);
  const [labels, labelModifier] = useState([]);
  const [issue, issueModifier] = useState({ labels: [] });

  useEffect(() => {
    permLabels.length = 0;
    permLabels.push(
      ...["unlabeled", "issue", "bug_report", "issue4", "bug_report5"]
    );
    labelModifier(permLabels);
  }, []);
  // console.log(issue);
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
        <Modal
          onClick={() => modalStateChanger(false)}
          labels={labels}
          onLabelChange={labelChanger}
          onChangeForSelect={multiSelectHelper}
          onInputForDesc={(event) =>
            issueModifier({ ...issue, description: event.target.value })
          }
          onInputForTitle={(event) =>
            issueModifier({ ...issue, title: event.target.value })
          }
          value={issue}
        />
      )}
    </>
  );

  function labelChanger(event) {
    console.log(event.target.value, event.key);
    if (
      event.key === "Enter" &&
      event.target.value &&
      permLabels.indexOf(event.target.value) === -1
    )
      labelModifier(permLabels.push(event.target.value));
    if (!event.target.value) return labelModifier(permLabels);
    console.log(labels);
    labelModifier(permLabels.filter((e) => e.includes(event.target.value)));
  }

  function multiSelectHelper(event) {
    console.log(event.target.value);
    if (issue.labels.includes(event.target.value))
      return issueModifier({
        ...issue,
        labels: issue.labels.filter((e) => e !== event.target.value),
      });

    issueModifier({
      ...issue,
      labels: [...issue.labels, event.target.value],
    });
  }
};

export default AddIssueBtn;
