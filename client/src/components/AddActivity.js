import React, { useState } from "react";

const AddActivity = ({ onCancel }) => {
  const [feedingType, setFeedingType] = useState("");
  const [amount, setAmount] = useState(0);

  const onSubmit = async (e) => {
    // e.preventDefault();
    try {
      const body = { feeding_type: feedingType, amount };
      await fetch("http://localhost:8000/food", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      //   window.location = '/';
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <>
      <form className="ui equal width form" onSubmit={onSubmit}>
        <div className="fields">
          <div className="field">
            <label>Feeding Type</label>
            <input
              type="text"
              className="form-control"
              value={feedingType}
              onChange={(e) => setFeedingType(e.target.value)}
            />
          </div>

          <div className="field">
            <label>Amount</label>
            <input
              type="number"
              className="form-control"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
        </div>

        <button className="ui button" onClick={onCancel}>
          Cancel
        </button>
        <button className="ui button">Add</button>
      </form>
    </>
  );
};

export default AddActivity;
