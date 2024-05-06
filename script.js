const lines = ["please leave me alone.", "please go away."];

var i = 0;
const txt = lines[Math.floor(Math.random() * lines.length)];
const speed_txt = 50;
const speed_close = 500;

const main = () => {
  if (i < txt.length) {
    document.getElementById("text").innerHTML += txt.charAt(i);
    i++;
    setTimeout(main, speed_txt);
  } else {
    setTimeout(window.close, speed_close);
  }
};

main();
