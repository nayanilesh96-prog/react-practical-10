import React, { useEffect, useState } from "react";
import "./App.css";

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Cleanup the timer when the component is removed
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <main className="page">
      <section className="card">
        <h1>Digital Clock</h1>
        <div className="clock">
          <p>{time.toLocaleTimeString()}</p>
        </div>
        <p className="note">The clock updates every second.</p>
      </section>
    </main>
  );
}

export default DigitalClock;
