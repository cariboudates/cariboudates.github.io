"use strict";
(() => {
  const today = new Date();
  const time_frames = [2, 3, 4, 5, 7, 10, 14, 30, 60, 90];
  const today_display = today
    .toLocaleDateString('en-us', { weekday: "long", month: "long", day: "numeric" });
  const greeting = hour => (hour >= 4 && hour < 12) ? "Good Morning ☀️" :
    (hour >= 12 && hour < 17) ? "Good Afternoon ☕️" :
    (hour >= 17 && hour < 24) ? "Good Evening 🌙" : "You're working now? 🤨";
  const dateOut = daysOut => new Date(today.getTime() + 864e5 * daysOut)
      .toLocaleDateString('en-us', { weekday: "short", month: "short", day: "numeric" });

  document.getElementById("greeting").innerHTML = greeting(today.getHours());
  document.getElementById("today").innerHTML = `Today is ${today_display}`;
  document.getElementById("days").innerHTML = time_frames
    .reduce((table, daysOut) => `${table}<tr><td>${daysOut} Days</td><td>${dateOut(daysOut)}</td></tr>`, '');
})();