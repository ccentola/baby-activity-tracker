import React, { useState } from "react";
import AddActivity from "../components/AddActivity";
import { Button } from "semantic-ui-react";

const NewActivity = () => {
  const [isEditing, setIsEditing] = useState(false);

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div>
      {!isEditing && (
        <Button onClick={startEditingHandler}>Add New Activity</Button>
      )}
      {isEditing && <AddActivity onCancel={stopEditingHandler} />}
    </div>
  );
};

export default NewActivity;
