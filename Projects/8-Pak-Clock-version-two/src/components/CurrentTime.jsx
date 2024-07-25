import { useEffect } from "react";
import { useState } from "react";

function CurrentTime() {
  const [time, settime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      settime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <p
      className="lead"
      style={{ fontSize: "1.75rem", color: "black", fontWeight: "bold" }}>
      {time.toLocaleDateString()} - {time.toLocaleTimeString()}
    </p>
  );
}

export default CurrentTime;
