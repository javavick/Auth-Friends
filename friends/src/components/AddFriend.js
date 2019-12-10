import React from "react";
import useForm from "react-hook-form";
import axiosWithAuth from "../auth/axiosWithAuth.js";

const AddFriend = (props) => {
  const { register, handleSubmit, reset, errors } = useForm();
  const onSubmit = (data) => {
    reset();
    axiosWithAuth()
      .post("/friends", { ...data, id: Date.now() })
      .then((res) => props.setData(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h1>Add a New Friend</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Name: <span></span>
          <input
            type="text"
            name="name"
            ref={register({ required: "Name is required!" })}
          />
          {errors.name && <p>{errors.name.message}</p>}
        </label>
        <br />

        <label>
          Age: <span></span>
          <input
            type="number"
            name="age"
            ref={register({ required: "Age is required!" })}
          />
          {errors.age && <p>{errors.age.message}</p>}
        </label>
        <br />

        <label>
          Email: <span></span>
          <input
            type="email"
            name="email"
            ref={register({ required: "Email is required!" })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </label>
        <br />

        <input type="submit" value="Add Friend" />
      </form>
    </>
  );
};

export default AddFriend;
