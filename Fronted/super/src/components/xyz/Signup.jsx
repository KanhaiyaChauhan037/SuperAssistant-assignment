import React, { useState } from "react";

const Signup = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { username, email, password } = data;

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = (e) => {
    e.preventDefault();

    let existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    const exist = existingUsers.find((user) => user.email === email);
    if (exist) {
      alert("user already registerd");
      return;
    }

    const newUser = { ...data };
    existingUsers = [...existingUsers, newUser];

    localStorage.setItem("users", JSON.stringify(existingUsers));
    console.log(existingUsers);

    setData({
      username: "",
      email: "",
      password: "",
    });
  };

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="name"
          name="username"
          value={username}
          onChange={handleChange}
        />

        <input
          type="text"
          name="email"
          value={email}
          placeholder="email"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <button onClick={handleClick}>submit</button>
      </form>
    </div>
  );
};

export default Signup;
