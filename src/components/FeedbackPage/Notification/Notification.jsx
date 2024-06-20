import Statistics from '../Statistics/Statistics';
import React from 'react';

const Notification = ({ message, total, good, neutral, bad, positivePercentage}) => (
  <>
  {total === 0 ? (
      <div>{message}</div>
    ) : (
    <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage} />
    )}
  </>
);

export default Notification;
