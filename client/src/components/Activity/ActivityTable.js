import React, { useState, useEffect } from "react";
import { Table } from "semantic-ui-react";
import ActivityTableRow from "./ActivityTableRow";

// TODO: decide on pagination

const ActivityTable = () => {
  const [activities, setActivities] = useState([]);

  const getFood = async () => {
    try {
      const response = await fetch(`http://localhost:8000/food`);
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
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>ID</Table.HeaderCell>
          <Table.HeaderCell>Date</Table.HeaderCell>
          <Table.HeaderCell>Feeding Type</Table.HeaderCell>
          <Table.HeaderCell>Amount</Table.HeaderCell>
          <Table.HeaderCell>Edit</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {activities.map((activity) => (
          <ActivityTableRow activity={activity} key={activity.activity_id} />
        ))}
      </Table.Body>
    </Table>
  );
};

export default ActivityTable;
