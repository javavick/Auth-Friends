import React, { useState } from "react";
import useForm from "react-hook-form";
import axiosWithAuth from "../auth/axiosWithAuth.js";

const Login = (props) => {
  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit, reset, errors } = useForm();
  const onSubmit = (data) => {
    reset();
    setIsLoading(true);
    axiosWithAuth()
      .post("/login", data)
      .then((res) => {
        localStorage.setItem("token", res.data.payload);
        axiosWithAuth()
          .get("/friends")
          .then((res) => {
            console.log(res.data);
            props.setData(res.data);
          })
          .catch((err) => console.log(err));
        props.history.push("/dashboard");
      })
      .catch((err) => console.log(err));
  };

  return !isLoading ? (
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
  ) : (
    <h1>LOADING PAGE</h1>
  );
};

export default Login;
