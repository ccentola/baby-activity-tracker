import React from "react";
import { Button, Modal } from "semantic-ui-react";

const EditModal = () => {
  return (
    <Modal
      trigger={<Button>Edit</Button>}
      header="Edit Entry"
      content="Edit your data here!"
      actions={["Snooze", { key: "done", content: "Done", positive: true }]}
    />
  );
};

export default EditModal;
