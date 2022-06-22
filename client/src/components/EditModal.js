import React, { useState, useEffect } from "react";
import { Button, Form, Modal, Input } from "semantic-ui-react";

// TODO: change feeding type to dropdown

const EditModal = ({ activity }) => {
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState({
    feeding_type: activity.feeding_type,
    amount: activity.amount,
  });

  const updateRequest = async (e) => {
    e.preventDefault();
    try {
      const body = { ...values };
      await fetch(`http://localhost:8000/food/${activity.activity_id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      window.location = "/food";
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <Modal
      trigger={<Button>Edit</Button>}
      header="Edit Entry"
      content="Edit your data here!"
      // actions={["Snooze", { key: "done", content: "Done", positive: true }]}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      open={open}
    >
      <Modal.Header>Edit Entry</Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Field
            id="form-input-control-feeding"
            control={Input}
            value={values.feeding_type}
            onChange={(e) =>
              setValues({ ...values, feeding_type: e.target.value })
            }
            label="Feeding Type"
          />
          <Form.Field
            id="form-input-control-amount"
            control={Input}
            value={values.amount}
            onChange={(e) => setValues({ ...values, amount: e.target.value })}
            label="Amount"
          />
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button
          content="Submit"
          labelPosition="right"
          icon="check"
          onClick={(e) => updateRequest(e)}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
};

export default EditModal;
