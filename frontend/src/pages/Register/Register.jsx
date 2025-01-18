import axios from "axios";
import Joi from "joi";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Register() {
  const [error, setError] = useState("");
  const [lodig, setLodig] = useState(false)
  const [user, setUser] = useState({
    fristName: "",
    lastName: "",
    email: "",
    password: "",
  });
  let navegate = useNavigate();
  function getUser(e) {
    user[e.target.name] = e.target.value;
    setUser(user);
  }
  function validatUser(user) {
    let schema = Joi.object({
      fristName: Joi.string().alphanum().min(3).max(4),
      lastName: Joi.string().alphanum().min(3).max(4).required(),
      email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
        .required(),
      password: Joi.number().min(3).required(),
    });
    return schema.validate(user, { abortEarly: true });
  }
 async function submitRegister(e) {
    e.preventDefault();
    setLodig(true)

    let isValidar = validatUser(user);
    if (isValidar.error) {
      setError(
        isValidar.error.details.map((err) => err.message)
      );
    } else {
      let {data}=  await  axios.post( "https://route-movies-api.vercel.app/signup",user)
console.log(data);

      // let data=[]
      // data.push(user)
      // localStorage.setItem('loged',user.email)
      // navegate("/login");
    }
  }
  return (
    <div>
      {error && <h1>{error}</h1>}
      <h1>Register</h1>
      <div>
        <form onSubmit={submitRegister}>
          <label htmlFor="fristName">fristName</label>
          <input
            onChange={getUser}
            type="text"
            name="fristName"
            id="fristName"
          />

          <label htmlFor="lastName">lastName</label>
          <input onChange={getUser} type="text" name="lastName" id="lastName" />

          <label htmlFor="email">email</label>
          <input onChange={getUser} type="email" name="email" id="email" />

          <label htmlFor="password">password</label>
          <input
            onChange={getUser}
            type="password"
            name="password"
            id="password"
          />

          <button type="submit">submit</button>
        </form>
      </div>
    </div>
  );
}
