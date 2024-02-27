import React, { useState, useEffect } from "react";

const TimezoneClock = ({ timezone, label }) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Update every second

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  const formattedTime = currentTime.toLocaleString("en-US", {
    timeZone: timezone,
    hour12: true,
    hour: "numeric",
    minute: "numeric",
  });

  return (
    <div>
      <h2 className="text-blue-800 text-xl">
        {label}: <span className="text-pink-600">{formattedTime}</span>
      </h2>
    </div>
  );
};

export default TimezoneClock;
