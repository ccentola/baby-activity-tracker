import React from "react";
import ActivityList from "../components/ActivityList";
import AddActivity from "../components/AddActivity";
import ActivityFilter from "../components/ActivityFilter";
import NewActivity from "../components/NewActivity";
import ActivityTable from "../components/Activity/ActivityTable";

// TODO: summarize activities on top of page

const Activity = () => {
  return (
    <>
      {/* <AddActivity /> */}
      <NewActivity />
      <ActivityFilter />
      {/* <ActivityList /> */}
      <ActivityTable />
    </>
  );
};

export default Activity;
