import React, { useEffect, useState } from "react";
import ActivityItem from "./ActivityItem";

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
          <th>Date</th>
          <th>Feeding Type</th>
          <th>Amount</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
        {activities.map((activity) => (
          <ActivityItem
            key={activity.activity_id}
            activityId={activity.activity_id}
            feedingType={activity.feeding_type}
            datetime={activity.created_at}
            amount={activity.amount}
          />
        ))}
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
