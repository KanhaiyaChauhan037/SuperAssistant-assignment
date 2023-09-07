import React, { useState } from "react";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = data;

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = (e) => {
    e.preventDefault();

    let exist = JSON.parse(localStorage.getItem("users")) || [];

    const user = exist.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      alert("login successfull");
    } else {
      alert("invalid email && password");
    }

    setData({
      email: "",
      password: "",
    });
  };

     const handlelogout = () => {
     //   Navigate("/")
  };

  return (
    <div>
      <form>
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
        <button onClick={handlelogout}>logout</button>
      </form>
    </div>
  );
};

export default Login;
