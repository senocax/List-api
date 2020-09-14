import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactLoading from "react-loading";

const GitHub = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://api.github.com/search/users?q=${searchTerm}`)
      .then((res) => setData(res.data.items));
    setIsLoading(false);
  }, []);
  return (
    <div>
      {isLoading && <ReactLoading type="spinningBubbles" color="#444" />}
    </div>
  );
};

export default GitHub;
