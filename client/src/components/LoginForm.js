import React from "react";
import { Button, Form } from "semantic-ui-react";

const LoginForm = () => {
  return (
    <Form>
      <Form.Field>
        <label>Username</label>
        <input placeholder="RadDad69" />
      </Form.Field>
      <Form.Field>
        <label>Password</label>
        <input type="password" />
      </Form.Field>
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default LoginForm;
