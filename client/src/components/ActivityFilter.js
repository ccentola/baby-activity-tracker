import React from "react";
import { Dropdown } from "semantic-ui-react";

const ActivityFilter = () => {
  const dropdownChangeHandler = (e) => {
    console.log(e.target.innerText);
  };

  const activityOptions = [
    { key: "breast", text: "breast", value: "breast" },
    { key: "formula", text: "formula", value: "formula" },
  ];

  return (
    <>
      <Dropdown
        placeholder="Select an activity"
        fluid
        selection
        options={activityOptions}
        onChange={dropdownChangeHandler}
      />
    </>
  );
};

export default ActivityFilter;
