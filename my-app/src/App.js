import React from 'react';

const App = () => (
    <Counter>
    </Counter>
)

class Counter extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.state);
    this.state = {
      count: 0,
    };
  }
  
  handlePlusButton = () => {
    this.setState({count: this.state.count + 1});
  }

  handleMinusButton = () => {
    this.setState({count: this.state.count - 1});
  }

  render() {
    return (
      <div>
        <div>count: {this.state.count}</div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinusButton}>-1</button>
      </div>
    )
  }  
}

export default App;
