window.addEventListener("load", () => {
  var year = 1999;
  var month = 6; //July = 7 - 1
  var day = 10;
  var today = new Date();
  console.log("Month: ", today.getMonth());
  var age = today.getFullYear() - year;
  if (
    today.getMonth() < month ||
    (today.getMonth() == month && today.getDate() < day)
  ) {
    age--;
  }
  document.querySelector("#age").textContent = age;
});
