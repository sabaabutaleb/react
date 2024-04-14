import React from "react";
import SubmitBtn from "./submit-btn";

import Input from "./input";

// let isLogged = false;
let isRegistered = false;

function LoginRegisterForm() {
  return (
    <form className="form">
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />
      {!isRegistered && (
        <Input type="confirm-password" placeholder="Confirm Password" />
      )}
      {isRegistered ? (
        <SubmitBtn name="Login" />
      ) : (
        <SubmitBtn name="Register" />
      )}
    </form>
  );
}

export default LoginRegisterForm;
