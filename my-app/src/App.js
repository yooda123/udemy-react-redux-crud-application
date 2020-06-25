import React from 'react';
// import logo from './logo.svg';

function App() {
  const aaa = 'Ooooops!';
  const dom = <h1 className="foo" onClick={()=>{console.log("clicked.")}}>Hello, world {aaa}.</h1>;
  return (
    dom
  );
}

export default App;
