import React, { useState, useEffect } from "react";
import IssueList from "./IssuesList";
import Filters from "./Filters";
import AddIssueBtn from "./AddIssueBtn";
import Pagination from "./Pagination";

//Sample structure to be consumed for issues array
//JSON from backend should be structured in following structure
const issues = [
  {
    id: 1,
    name: "npm-cache-issue-open",
    description: "The server seems to be having some cache issues",
    url: "https://api.github.com/repos/test-repo/issues/1",
    number: 1,
    labels: ["issue", "bug_report"],
    state: "open",
    locked: "false",
  },
  {
    id: 2,
    name: "npm-cache-issues-closed 2",
    description: "The server seems to be having some cache issues",
    url: "https://api.github.com/repos/test-repo/issues/1",
    number: 1,
    labels: ["issue4", "bug_report5"],
    state: "closed",
    locked: "false",
  },
];
const labels = [];

const Issues = () => {
  const [filteredValues, filteredValueModifier] = useState([]);
  useEffect(() => {
    labels.length = 0;
    issues.forEach((e) => labels.push(...e.labels));
    console.log("calling hook");
    filteredValueModifier(issues);
  }, []);
  console.log(labels);
  return (
    <>
      <Filters
        filters={["all", "open", "closed"]}
        selectedFilter="all"
        onClick={modifier}
      />
      <AddIssueBtn />
      {/*Props Passed to issuesList is the array of issues and filter selected*/}
      <IssueList issues={filteredValues} filter="all" labels={labels} />
      <Pagination />
    </>
  );
  function modifier(event) {
    if (event.target.value === "all") return filteredValueModifier(issues);
    filteredValueModifier(issues.filter((e) => event.target.value === e.state));
  }
};

function manipulateLabels(event) {}

export default Issues;
