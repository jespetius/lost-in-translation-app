import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
function LoginForm() {
  
  const [userAccounts, setUserAccounts] = useState([]);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  const onSubmit = data => {
    //prev data then append new object
   const isTaken = userAccounts.map(user => {
      if (user.username === data.username) {
        console.log("user exists");
      }
      else{
        
      }
    });
    return setUserAccounts(prev => [...prev, { username: data.username }]);
  };
  console.log(userAccounts);
  return (
    //handleSubmit wull validate inputs before invoking on submit
    <>
      <h1>what your name</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/*Register your input into the hook by invoking the register function */}
        <input placeholder="enter a username" {...register("username", { required: true })} />
        {errors.username && <span>This field is required</span>}
        {/*include validation with required or other standard html validation rules */}
        <input type="submit" />
      </form>
    </>
  );
}

export default LoginForm;
