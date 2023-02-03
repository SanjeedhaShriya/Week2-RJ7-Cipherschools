import React,{useState} from "react";

const signUpForm = () => {
    const [state, setState] =useState({
        firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
return(
    <form>
        <input
        name={"firstName"}
        type={"text"}
        onChange={handleChange}
        value={state.firstName}
        placeholder={"First Name"}
      />
      <label>Last Name</label>
      <input
        name={"lastName"}
        type={"text"}
        onChange={handleChange}
        value={state.lastName}
        placeholder={"Last Name"}
      />
      <label>Email</label>
      <input
        name={"email"}
        type={"email"}
        onChange={handleChange}
        value={state.email}
        placeholder={"Email"}
      />
      <label>Password</label>
      <input
        name={"password"}
        type={"password"}
        onChange={handleChange}
        value={state.password}
        placeholder={"Password"}
        ref={passwordElement}
      />

    </form>
)
}

export default signUpForm;