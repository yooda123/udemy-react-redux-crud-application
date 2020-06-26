import React from 'react';
import PropTypes from 'prop-types';

const App = () => {
  const profiles = [
    { name: "Taro", age: 10 },
    { name: "花子", age: 5 },
    { name: "NoName" },
  ]
  return (
    <div>
      {profiles.map((profile, idx) => {
        return <User name={profile.name} age={profile.age} key={idx} />
      })}
    </div>
  )
}

const User = (props) => {
  return (
    <div>
      Hi, I am {props.name}, {props.age} years old.
    </div>
  )
}

// User.defaultProps = {
//   age: 1
// }

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired,
}


export default App;
