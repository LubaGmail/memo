import React from 'react';

const login = props => {
  console.log(props);
  return (
    <React.Fragment>
      <button onClick={props.onLogout}>Logout</button>
      <button onClick={props.onLogin}>Login</button>
    </React.Fragment>
  );
};

// shallow compares old props to new props and renders or not accordingly
//  use immutable vars
//export default login;
export default React.memo(login);


