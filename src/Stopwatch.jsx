import React, {useState, useEffect, uesRef, use} from 'react';

function Stopwatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const intervalRef = uesRef(null);
  const startTimeRef = uesRef(null);

  useEffect(() => {

  }, [isRunning]);

  function start() {

  }

  function stop() {

  }

  function reset() {

  }

  function formatTime() {

  }
  return (<></>);
}
export default Stopwatch;