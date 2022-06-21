import React, { useEffect, useState } from "react";
import ActivityItem from "./ActivityItem";
import EditModal from "./EditModal";

// TODO: make use of the ActivityItem component
// TODO: adjust names of data attributes to decouple from database
// TODO: sort activities by date added

const ActivityList = () => {
  const [activities, setActivities] = useState([]);

  const getFood = async () => {
    try {
      const response = await fetch("http://localhost:8000/food");
      const data = await response.json();

      setActivities(data);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getFood();
  }, []);

  return (
    <table className="ui celled table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Date</th>
          <th>Feeding Type</th>
          <th>Amount</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
        {activities.map((activity) => (
          <tr key={activity.activity_id}>
            <td data-label="ID">{activity.activity_id}</td>
            <td data-label="Date">
              {new Date(activity.created_at).toLocaleString("en-US")}
            </td>
            <td data-label="Feeding Type">{activity.feeding_type}</td>
            <td data-label="Amount">{activity.amount}</td>
            <td data-label="Edit">
              <EditModal activity={activity} />
            </td>
          </tr>
        ))}

        {/* {activities.map((activity) => (
          <ActivityItem
            key={activity.activity_id}
            activityId={activity.activity_id}
            feedingType={activity.feeding_type}
            datetime={activity.created_at}
            amount={activity.amount}
          />
        ))} */}
      </tbody>
    </table>
  );
  // return (
  //   <ul>
  //     {activities.map((activity) => (
  //       <li key={activity.activity_id}>
  //         {activity.activity_id}: {activity.feeding_type}
  //       </li>
  //     ))}
  //   </ul>
  // );
};

export default ActivityList;
