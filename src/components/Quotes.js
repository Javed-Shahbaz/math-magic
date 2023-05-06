import React, { useEffect, useState } from 'react';

const Quot = () => {
  const [Quot, setQuot] = useState([]);
  const [load, setLoad] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuot = async () => {
      const url = 'https://api.api-ninjas.com/v1/quotes?category=beauty';
      const headers = { 'X-Api-Key': 'SLmblKETeLAEPvveOCAFYA==LRF4dyQN8zdZgJZP' };
      try {
        const response = await fetch(url, { headers });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setQuot(result[0]);
        setLoad(false);
      } catch (error) {
        setError(error.message);
        setLoad(false);
      }
    };
    fetchQuot();
  }, [setQuot, setLoad, setError]);

  if (load) {
    return <div>Loading......</div>;
  }

  if (error) {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }
  return (
    <div className="quotArea">
      <p className="buttons">
        Quot of the day:
        <br>{Quot.quote}</br>
      </p>
      <p className="author">
        Author:
        {Quot.author}
      </p>
    </div>
  );
};
export default Quot;
