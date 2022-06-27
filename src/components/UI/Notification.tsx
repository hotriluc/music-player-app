import React from 'react';
import classes from './Notification.module.css';

interface NotificationProps {
  status: string;
  title: string;
  message: string;
}

function Notification(props: NotificationProps): JSX.Element {
  let specialClasses = '';

  if (props.status === 'error') {
    specialClasses = classes.error;
  }
  if (props.status === 'success') {
    specialClasses = classes.success;
  }

  const cssClasses = `${classes.notification} ${specialClasses}`;

  return (
    <div className={cssClasses}>
      <h2>{props.title}</h2>
      <p>{props.message}</p>
    </div>
  );
}

export default Notification;
