import React, { Component } from 'react';
import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <React.Fragment>
//         <label htmlFor="bar">bar</label>
//         <input type="text" id="bar" onChange={() => {console.log("I'm clicked!")}} />
//       </React.Fragment>
//     )
//   }
// }

const App = () => {
  return (
    <React.Fragment>
      <label htmlFor="bar">bar</label>
      <input type="text" id="bar" onChange={() => {console.log("I'm clicked!")}} />
      <Cat />
      <Cat />
      <Cat />
      <Cat />
      
    </React.Fragment>
  )
}

const Cat = () => {
  return (
    <div>
      Meow!!
    </div>
  )
}

export default App;
