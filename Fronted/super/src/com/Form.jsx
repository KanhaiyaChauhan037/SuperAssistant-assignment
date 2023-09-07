import React, { useEffect } from "react";

const Form = ({ dat }) => {
  const [data, setdata] = useState('');

  const { name, email, pass } = data;
  useEffect(() => {
    setdata({
      ...data,
      ...dat,
    });
  }, [dat]);
     
  const handlechange = (e) => {
    const { name, value } = e.target;

    setdata({
      ...data,
      [name]: value,
    });
  };

  console.log(dat);
  return (
    <div className="app">
      <form>
        <input
          type="text"
          name="name"
          value={data.name}
          onChange={handlechange}
          placeholder="text"
        />
        <input
          type="text"
          name="email"
          value={email}
          onChange={handlechange}
          placeholder="email"
        />
        <input
          type="text"
          name="pass"
          value={pass}
          onChange={handlechange}
          placeholder="pass"
        />
        <button onClick={handleclick}>submit</button>
      </form>
    </div>
  );
};

export default Form;
