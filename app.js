document.querySelector("button").onclick = () => {
  const clock = () => {
    const date = new Date();
    let hours = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    hours = hours < 10 ? "0" + hours : hours;
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;

    document.getElementById(
      "MyClockDisplay"
    ).innerText = `${hours}:${minute}:${second}`;
  };

  setInterval(() => {
    clock();
  }, 1000);
};
