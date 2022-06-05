function clockInit() {
  var date = new Date();
  var time = [date.getHours(), date.getMinutes(), date.getSeconds()];
  var clockDivs = [
    document.getElementById("hour"),
    document.getElementById("minute"),
    document.getElementById("second"),
  ];

  var hour = time[0] * 360 + (time[1] * 6) / 12;

  clockDivs[0].style.transform = "rotate(" + hour + "deg)";
  clockDivs[1].style.transform = "rotate(" + time[1] * 6 + "deg)";
  clockDivs[2].style.transform = "rotate(" + time[2] * 6 + "deg)";
}

window.onload = function () {
  clockInit();

  setInterval(clockInit, 1000);
};
