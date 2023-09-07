import React, { useState, useEffect } from "react";
import { Button } from "@chakra-ui/react";

const Counter = () => {
  const [data, setData] = useState(60);

  useEffect(() => {
    if (data > 0) {
      const timer = setInterval(() => {
        setData((prevData) => prevData - 1);
      }, 1000);

      return () => {
        clearInterval(timer);
      };
    }
  }, [data]);

  const handleclick = () => {
    alert("Now you are ready");
  };

  return (
    <div>
      {data > 0 && <p> remaining: {data}</p>}
      <Button>
        <button disabled={data > 0} onClick={handleclick}>
          Get started
        </button>
      </Button>
    </div>
  );
};

export default Counter;
