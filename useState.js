import React, {useState} from 'react';

function Counter(props) {
  const [count] = useState(0);
  
  return (
    <p>Current count: {count}</p>
    <button onClick={() => (count = count + 1)}>Increment count</button>
  );
}
