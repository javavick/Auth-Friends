import React from "react";
import useForm from "react-hook-form";
import axiosWithAuth from "../auth/axiosWithAuth.js";

const Login = () => {
  const { register, handleSubmit, reset, errors } = useForm();
  const onSubmit = (data) => {
    reset();
    axiosWithAuth()
      .post("/login", data)
      .then((res) => localStorage.setItem("token", res.data.payload))
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Username: <span></span>
        <input
          type="text"
          name="username"
          ref={register({
            required: "Username is required!",
            minLength: {
              value: 3,
              message: "Username must be 3 characters or longer!"
            }
          })}
        />
        {errors.username && errors.username.type === "required" && (
          <p>{errors.username.message}</p>
        )}
        {errors.username && errors.username.type === "minLength" && (
          <p>{errors.username.message}</p>
        )}
      </label>
      <br />

      <label>
        Password: <span></span>
        <input
          type="text"
          name="password"
          ref={register({
            required: "Password is required!",
            minLength: {
              value: 8,
              message: "Password must be 8 characters or longer!"
            }
          })}
        />
        {errors.password && errors.password.type === "required" && (
          <p>{errors.password.message}</p>
        )}
        {errors.password && errors.password.type === "minLength" && (
          <p>{errors.password.message}</p>
        )}
      </label>
      <br />

      <input type="submit" value="Login" />
    </form>
  );
};

export default Login;
