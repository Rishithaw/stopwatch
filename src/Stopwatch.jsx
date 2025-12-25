import React, {useState, useEffect, uesRef} from 'react';

function Stopwatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const intervalRef = uesRef(null);
  const startTimeRef = uesRef(null);
  return (<></>);
}

export default Stopwatch;