import { useEffect, useState } from "react";
import getTokenRemainingTime from "./GetRemainingTime";
const UseTokenExpiryTimer = () => {
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      getTokenRemainingTime().then(setTimeLeft);
    }, 120000); // check every 120 seconds

    // Initial call
    getTokenRemainingTime().then(setTimeLeft);

    return () => clearInterval(interval);
  }, []);

  return timeLeft;
};

export default UseTokenExpiryTimer;
