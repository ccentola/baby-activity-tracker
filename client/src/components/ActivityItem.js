import React from "react";
import EditModal from "./EditModal";

const ActivityItem = (props) => {
  return (
    <tr>
      <td data-label="Date">
        {new Date(props.datetime).toLocaleString("en-US")}
      </td>
      <td data-label="Feeding Type">{props.feedingType}</td>
      <td data-label="Amount">{props.amount}</td>
      <td data-label="Edit">
        <EditModal activityId={props.activity_id} />
      </td>
    </tr>
  );
};

export default ActivityItem;
