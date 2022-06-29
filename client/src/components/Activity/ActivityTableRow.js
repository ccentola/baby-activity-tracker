import React from "react";
import { Table } from "semantic-ui-react";
import EditModal from "../EditModal";

const ActivityTableRow = (props) => {
  return (
    <Table.Row key={props.activity.activity_id}>
      <Table.Cell data-label="ID">{props.activity.activity_id}</Table.Cell>
      <Table.Cell data-label="Date">
        {new Date(props.activity.created_at).toLocaleString("en-US")}
      </Table.Cell>
      <Table.Cell data-label="Feeding Type">
        {props.activity.feeding_type}
      </Table.Cell>
      <Table.Cell data-label="Amount">{props.activity.amount}</Table.Cell>
      <Table.Cell data-label="Edit">
        <EditModal activity={props.activity} />
      </Table.Cell>
    </Table.Row>
  );
};

export default ActivityTableRow;
