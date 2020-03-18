import React from "react";

export const Window = (props) => {
  const { count } = props.state;
  console.log('props', props);

  return <h2>Count from `window.opener`: {count}</h2>;
};
