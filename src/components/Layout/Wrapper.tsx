import React from 'react';
import styles from './Wrapper.module.css';

interface WrapperProps {
  children: JSX.Element | JSX.Element[];
}

function Wrapper(props: WrapperProps): JSX.Element {
  return <div className={styles['grid-wrapper']}>{props.children}</div>;
}

export default Wrapper;
