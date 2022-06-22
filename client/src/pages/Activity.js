import React from "react";
import ActivityList from "../components/ActivityList";
import AddActivity from "../components/AddActivity";

// TODO: summarize activities on top of page
// TODO: show/hide add activity form

const Activity = () => {
  return (
    <>
      <AddActivity />
      <ActivityList />
    </>
  );
};

export default Activity;
