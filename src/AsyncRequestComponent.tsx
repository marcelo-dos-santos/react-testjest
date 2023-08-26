import React, { useState, useEffect } from 'react';

const AsyncRequestComponent: React.FC = () => {
  const [data, setData] = useState<string>('');

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      const json = await response.json();
      setData(json.title);
    }
    fetchData();
  }, []);

  return (
    <div>
      <p>Dados da API: {data}</p>
    </div>
  );
};

export default AsyncRequestComponent;
