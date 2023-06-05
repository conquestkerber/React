/* eslint-disable no-undef */
import React, { useRef, useState } from "react";

const SignIn = () => {
  const emailValue = useRef();
  const passwordValue = useRef();
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorText, setErrorText] = useState("");
  const sumbitHandler = (e) => {
    e.preventDefault();
    if (passwordValue.current.value.trim().length > 6) {
      localStorage.setItem("user", "1");
    } else {
      setErrorPassword(true);
      setErrorText("Password must have min 6 caracters");
    }
  };
  return (
    <form onSubmit={sumbitHandler}>
      <label htmlFor="email">Email</label>
      <input type="email" id="email" ref={emailValue} />
      <br />
      <label htmlFor="password">Password</label>
      <input type="password" id="password " ref={passwordValue} />
      {errorPassword && <p>{errorText}</p>}
      <br />
      <button>dugme</button>
    </form>
  );
};

export default SignIn;
