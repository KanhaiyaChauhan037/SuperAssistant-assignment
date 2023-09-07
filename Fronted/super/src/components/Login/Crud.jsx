import React,{useState} from "react";

const obj = {
     username: "",
     email: "",
     password:""
}
const Crud = () => {
     const [data, setdata] = useState(obj);
     const { username, email, password } = data;
     const handlechange = (e) => {
          e.preventDefault();
     }

  return (
    <div>
      <div>
        <form>
          <input
            type="text"
            placeholder="username"
            name="username"
            value={username}
            onChange={handlechange}
          />
          <br />
          <input
            type="text"
            placeholder="email"
            name="email"
            value={email}
            onChange={handlechange}
          />
          <br />
          <input
            type="text"
            placeholder="password"
            name="password"
            value={password}
            onChange={handlechange}
          />{" "}
          <br />
          <button>submit</button>
        </form>
      </div>
    </div>
  );
};

export default Crud;
