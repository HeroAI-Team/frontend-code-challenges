import React, {useState, useEffect} from 'react';

const api = {
  endpoint: 'http://localhost:5000/api/get_name',
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  bearerToken: 0138746123,
},

function Api() {
  const [name, setName] = useState();
  
  return (
    <p>{name}</p>
  );
}

/*
1) Query the provided api endpoint with the useEffect hook
2) Parse the json reponse of the following format: {name: 'some name'}
3) Update the displayed name
*/
