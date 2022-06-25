import React from 'react';

interface WrapperProps {
  children: JSX.Element | JSX.Element[];
}

function Wrapper(props: WrapperProps): JSX.Element {
  return <div className="">{props.children}</div>;
}

export default Wrapper;
