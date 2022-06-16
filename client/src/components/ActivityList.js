import React, { useEffect, useState } from "react";

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
    <ul>
      {activities.map((activity) => (
        <li key={activity.activity_id}>
          {activity.activity_id}: {activity.feeding_type}
        </li>
      ))}
    </ul>
  );
};

export default ActivityList;
