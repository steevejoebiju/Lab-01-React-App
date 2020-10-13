import React from 'react';
import { Container} from 'react-bootstrap'; //importing 
import './index.css';

const Greeting = ({name}) => {
  if (name.length > 0) {
    return ( 
      <Container>
        <h1>Hello,{name} Happy Thanks Giving Day </h1>
      </Container>  
    )
  } else {
    return (
        <Container>
          <h1>Hello, Happy Thanks Giving Day </h1>
        </Container> 
    )
  }
};

export default Greeting;
