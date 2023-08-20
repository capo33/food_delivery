"use client";

import React, { useEffect, useState } from "react";
import CountdownTimer from "react-countdown";

const Countdown = () => {
  // add this line to prevent the error: Text content does not match server-rendered HTML
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  const endingDate = new Date("2023-08-21");

  return (
    <>
      {isClient && (
        <CountdownTimer
          date={endingDate}
          className='font-bold text-5xl text-yellow-300'
        />
      )}
    </>
  );
};

export default Countdown;
