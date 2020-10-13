import React, {useState} from 'react';
import Greeting from './components/Greeting';

const App = () => {
  const [name, setName] = useState({});

  console.log(name);
  return (
    <>
      <input className= "input"
        onChange={({target: {value}}) => setName(value)}
        placeholder="Enter your name"
      />
      <Greeting name={name} />
    </>
  );
};

export default App;
