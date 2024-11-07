import React from 'react';

function Greeting() {
  const currentTime = new Date().getHours();
  let greetingMessage;

  if (currentTime < 12) {
    greetingMessage = 'Good morning!';
  } else if (currentTime < 18) {
    greetingMessage = 'Good afternoon!';
  } else {
    greetingMessage = 'Good evening!';
  }

  return <h1>{greetingMessage}</h1>;
}

export default Greeting;
