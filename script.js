function gotosteptwo() {
  checkName();
  checkNumber();
  checkEmail();
  Achieve();
}

function gobacktostepone() {
  stepInfo.style.display = "flex";
  stepPlan.style.display = "none";
  circle1.style.color = "black";
  circle1.style.backgroundColor = "rgba(255, 255, 255)";
  circle2.style.backgroundColor = "rgb(255, 255, 255, 0)";
  circle2.style.color = "white";
}

function gotostepthree() {
  console.log(typeof document.getElementById("totalPrice").innerHTML);

  if (document.getElementById("totalPrice").innerHTML == "") {
    console.log(document.getElementById("totalPrice").innerHTML);
    document.getElementById("totalPrice").innerHTML = "0";
    console.log(document.getElementById("totalPrice").innerHTML);
  }
  checkPlan();
}
function gobacktosteptwo() {
  stepPlan.style.display = "flex";
  stepAddOn.style.display = "none";
  circle2.style.color = "black";
  circle2.style.backgroundColor = "rgba(255, 255, 255)";
  circle3.style.backgroundColor = "rgb(255, 255, 255, 0)";
  circle3.style.color = "white";
}

function gotostepfour() {
  stepSummary.style.display = "flex";
  stepAddOn.style.display = "none";
  circle3.style.color = "white";
  circle3.style.backgroundColor = "rgba(255, 255, 255, 0)";
  circle4.style.backgroundColor = "rgb(255, 255, 255)";
  circle4.style.color = "black";

  const addonPrice = document.getElementsByName("addon").forEach(radio => {
    if (radio.checked) {
      console.log(radio.value);
      console.log(document.getElementById("totalPrice").innerHTML);
      const planPrice = document.getElementById("totalPrice").innerHTML;
      console.log(planPrice);
      document.getElementById("totalPrice").innerHTML =
        parseInt(planPrice) + parseInt(radio.value);
    }
  });
}

function gobacktostepthree() {
  stepSummary.style.display = "none";
  stepAddon.style.display = "flex";
  circle3.style.color = "black";
  circle3.style.backgroundColor = "rgba(255, 255, 255)";
  circle4.style.backgroundColor = "rgb(255, 255, 255, 0)";
  circle4.style.color = "white";

  const addonPrice = document.getElementsByName("addon").forEach(radio => {
    if (radio.checked) {
      console.log(radio.value);
      console.log(document.getElementById("totalPrice").innerHTML);
      const planPrice = document.getElementById("totalPrice").innerHTML;
      console.log(planPrice);
      document.getElementById("totalPrice").innerHTML =
        parseInt(planPrice) - parseInt(radio.value);
    }
  });
}

function gofromfourtotwo() {
  stepSummary.style.display = "none";
  stepPlan.style.display = "flex";
  circle2.style.color = "black";
  circle2.style.backgroundColor = "rgba(255, 255, 255)";
  circle4.style.backgroundColor = "rgb(255, 255, 255, 0)";
  circle4.style.color = "white";

  const addonPrice = document.getElementsByName("addon").forEach(radio => {
    if (radio.checked) {
      console.log(radio.value);
      console.log(document.getElementById("totalPrice").innerHTML);
      const planPrice = document.getElementById("totalPrice").innerHTML;
      console.log(planPrice);
      document.getElementById("totalPrice").innerHTML =
        parseInt(planPrice) - parseInt(radio.value);
    }
  });
}
function gotostepthankyou() {
  console.log(document.getElementById("modeResume").innerHTML);
  if (document.getElementById("modeResume").innerHTML == "Choose a plan") {
    stepSummary.style.display = "flex";
    stepThankYou.style.display = "none";
  } else {
    stepSummary.style.display = "none";
    stepThankYou.style.display = "flex";
  }
}

/*Function to check if the checkbox is checked to display plan < year. */

checkBox = document
  .getElementById("switch")
  .addEventListener("click", event => {
    if (event.target.checked) {
      planYear.style.display = "flex";
      planMonth.style.display = "none";
      addonAnnee.style.display = "flex";
      addonYearly.style.display = "none";
    } 
    else {
      planYear.style.display = "none";
      planMonth.style.display = "flex";
      addonYearly.style.display = "none";
      addonMonthly.style.display = "flex";
    }
  });

/*Function to change the color of the PLAN button and retrieve the information. */
checkBox = document
  .getElementById("moisArcade")
  .addEventListener("click", event => {
    moisArcade.style.backgroundColor = "hsl(217, 100%, 97%)";
    moisArcade.style.border = " solid 1px hsl(213, 96%, 18%)";
    /* Reset the other backgrounds and borders. */
    moisAdvanced.style.backgroundColor = "white";
    moisAdvanced.style.border = " solid 1px hsl(229, 24%, 87%)";
    moisPro.style.backgroundColor = "white";
    moisPro.style.border = " solid 1px hsl(229, 24%, 87%)";
    anArcade.style.backgroundColor = "white";
    anArcade.style.border = " solid 1px hsl(229, 24%, 87%)";
    anAdvanced.style.backgroundColor = "white";
    anAdvanced.style.border = " solid 1px hsl(229, 24%, 87%)";
    anPro.style.backgroundColor = "white";
    anPro.style.border = " solid 1px hsl(229, 24%, 87%)";
    /* The next part */
    document.getElementById("modeResume").innerHTML = "Arcade (monthly)";
    document.getElementById("priceResume").innerHTML = "9$/mo";
    document.getElementById("modeTotal").innerHTML = "Total (per month)";
  });
checkBox = document
  .getElementById("moisAdvanced")
  .addEventListener("click", event => {
    moisAdvanced.style.backgroundColor = "hsl(217, 100%, 97%)";
    moisAdvanced.style.border = " solid 1px hsl(213, 96%, 18%)";
    /* Reset the other backgrounds and borders. */
    moisArcade.style.backgroundColor = "white";
    moisArcade.style.border = " solid 1px hsl(229, 24%, 87%)";
    moisPro.style.backgroundColor = "white";
    moisPro.style.border = " solid 1px hsl(229, 24%, 87%)";
    anArcade.style.backgroundColor = "white";
    anArcade.style.border = " solid 1px hsl(229, 24%, 87%)";
    anAdvanced.style.backgroundColor = "white";
    anAdvanced.style.border = " solid 1px hsl(229, 24%, 87%)";
    anPro.style.backgroundColor = "white";
    anPro.style.border = " solid 1px hsl(229, 24%, 87%)";
    /* The next part */
    document.getElementById("modeResume").innerHTML = "Advenced (monthly)";
    document.getElementById("priceResume").innerHTML = "12$/mo";
    document.getElementById("modeTotal").innerHTML = "Total (per month)";
  });
checkBox = document
  .getElementById("moisPro")
  .addEventListener("click", event => {
    moisPro.style.backgroundColor = "hsl(217, 100%, 97%)";
    moisPro.style.border = " solid 1px hsl(213, 96%, 18%)";
    /* Reset the other backgrounds and borders. */
    moisAdvanced.style.backgroundColor = "white";
    moisAdvanced.style.border = " solid 1px hsl(229, 24%, 87%)";
    moisArcade.style.backgroundColor = "white";
    moisArcade.style.border = " solid 1px hsl(229, 24%, 87%)";
    anArcade.style.backgroundColor = "white";
    anArcade.style.border = " solid 1px hsl(229, 24%, 87%)";
    anAdvanced.style.backgroundColor = "white";
    anAdvanced.style.border = " solid 1px hsl(229, 24%, 87%)";
    anPro.style.backgroundColor = "white";
    anPro.style.border = " solid 1px hsl(229, 24%, 87%)";
    /* The next part */
    document.getElementById("modeResume").innerHTML = "Pro (monthly)";
    document.getElementById("priceResume").innerHTML = "15$/mo";
    document.getElementById("modeTotal").innerHTML = "Total (per month)";
  });
checkBox = document
  .getElementById("anArcade")
  .addEventListener("click", event => {
    anArcade.style.backgroundColor = "hsl(217, 100%, 97%)";
    anArcade.style.border = " solid 1px hsl(213, 96%, 18%)";
    /* Reset the other backgrounds and borders. */
    moisArcade.style.backgroundColor = "white";
    moisArcade.style.border = " solid 1px hsl(229, 24%, 87%)";
    moisPro.style.backgroundColor = "white";
    moisPro.style.border = " solid 1px hsl(229, 24%, 87%)";
    moisAdvanced.style.backgroundColor = "white";
    moisAdvanced.style.border = " solid 1px hsl(229, 24%, 87%)";
    anAdvanced.style.backgroundColor = "white";
    anAdvanced.style.border = " solid 1px hsl(229, 24%, 87%)";
    anPro.style.backgroundColor = "white";
    anPro.style.border = " solid 1px hsl(229, 24%, 87%)";
    /* The next part */
    document.getElementById("modeResume").innerHTML = "Arcade (yearly)";
    document.getElementById("priceResume").innerHTML = "90$/yr";
    document.getElementById("modeTotal").innerHTML = "Total (per year)";
  });
checkBox = document
  .getElementById("anAdvanced")
  .addEventListener("click", event => {
    anAdvanced.style.backgroundColor = "hsl(217, 100%, 97%)";
    anAdvanced.style.border = " solid 1px hsl(213, 96%, 18%)";
    /* Reset the other backgrounds and borders. */
    moisAdvanced.style.backgroundColor = "white";
    moisAdvanced.style.border = " solid 1px hsl(229, 24%, 87%)";
    moisPro.style.backgroundColor = "white";
    moisPro.style.border = " solid 1px hsl(229, 24%, 87%)";
    moisArcade.style.backgroundColor = "white";
    moisArcade.style.border = " solid 1px hsl(229, 24%, 87%)";
    anArcade.style.backgroundColor = "white";
    anArcade.style.border = " solid 1px hsl(229, 24%, 87%)";
    anPro.style.backgroundColor = "white";
    anPro.style.border = " solid 1px hsl(229, 24%, 87%)";
    /* The next part */
    document.getElementById("modeResume").innerHTML = "Advanced (yearly)";
    document.getElementById("priceResume").innerHTML = "12O$/yr";
    document.getElementById("modeTotal").innerHTML = "Total (per year)";
  });
checkBox = document
  .getElementById("anPro")
  .addEventListener("click", event => {
    anPro.style.backgroundColor = "hsl(217, 100%, 97%)";
    anPro.style.border = " solid 1px hsl(213, 96%, 18%)";
    /* Reset the other backgrounds and borders. */
    moisArcade.style.backgroundColor = "white";
    moisArcade.style.border = " solid 1px hsl(229, 24%, 87%)";
    moisPro.style.backgroundColor = "white";
    moisPro.style.border = " solid 1px hsl(229, 24%, 87%)";
    moisAdvanced.style.backgroundColor = "white";
    moisAdvanced.style.border = " solid 1px hsl(229, 24%, 87%)";
    anArcade.style.backgroundColor = "white";
    anArcade.style.border = " solid 1px hsl(229, 24%, 87%)";
    anAdvenced.style.backgroundColor = "white";
    anAdvenced.style.border = " solid 1px hsl(229, 24%, 87%)";
    /* The next part */
    document.getElementById("modeResume").innerHTML = "Pro (yearly)";
    document.getElementById("priceResume").innerHTML = "150$/yr";
    document.getElementById("modeTotal").innerHTML = "Total (per year)";
  });

/* Function to retrieve the information of the ADD-ONS */

checkBox = document
  .getElementById("onlineMois")
  .addEventListener("click", event => {
    if (event.target.checked) {
      document.getElementById("onlinePrice").innerHTML = "+1$/mo";
      document.getElementById("modeTotal").innerHTML = "Total (per month)";
    } else {
      document.getElementById("onlinePrice").innerHTML = "+0$";
    }
  });
checkBox = document
  .getElementById("storageMois")
  .addEventListener("click", event => {
    if (event.target.checked) {
      document.getElementById("storagePrice").innerHTML = "+2$/mo";
      document.getElementById("modeTotal").innerHTML = "Total (per month)";
    } else {
      document.getElementById("storagePrice").innerHTML = "+0$";
    }
  });
checkBox = document
  .getElementById("customizableMois")
  .addEventListener("click", event => {
    if (event.target.checked) {
      document.getElementById("customizablePrice").innerHTML = "+2$/mo";
      document.getElementById("modeTotal").innerHTML = "Total (per month)";
    } else {
      document.getElementById("customizablePrice").innerHTML = "+0$";
    }
  });
checkBox = document
  .getElementById("onlineYris")
  .addEventListener("click", event => {
    if (event.target.checked) {
      document.getElementById("onlinePrice").innerHTML = "+10$/yr";
      document.getElementById("modeTotal").innerHTML = "Total (per year)";
    } else {
      document.getElementById("onlinePrice").innerHTML = "+0$";
    }
  });
checkBox = document
  .getElementById("storageYris")
  .addEventListener("click", event => {
    if (event.target.checked) {
      document.getElementById("storagePrice").innerHTML = "+20$/yr";
      document.getElementById("modeTotal").innerHTML = "Total (per year)";
    } else {
      document.getElementById("storagePrice").innerHTML = "+0$";
    }
  });
checkBox = document
  .getElementById("customizableYris")
  .addEventListener("click", event => {
    if (event.target.checked) {
      document.getElementById("customizablePrice").innerHTML = "+20$/yr";
      document.getElementById("modeTotal").innerHTML = "Total (per year)";
    } else {
      document.getElementById("customizablePrice").innerHTML = "+0$";
    }
  });
function reset() {
  document.getElementById("onlineMois").checked = false;
  document.getElementById("storageMois").checked = false;
  document.getElementById("customizableMois").checked = false;
  document.getElementById("onlineYris").checked = false;
  document.getElementById("storageYris").checked = false;
  document.getElementById("customizableYris").checked = false;
  document.getElementById("onlinePrice").innerHTML = "+0$";
  document.getElementById("storagePrice").innerHTML = "+0$";
  document.getElementById("customizablePrice").innerHTML = "+0$";
  document.getElementById("onlinePrice").innerHTML = "+0$";
  document.getElementById("storagePrice").innerHTML = "+0$";
  document.getElementById("customizablePrice").innerHTML = "+0$";
  document.getElementById("modeResume").innerHTML = "Choose a plan";
  document.getElementById("priceResume").innerHTML = "0$";
  moisArcade.style.backgroundColor = "white";
  moisArcade.style.border = " solid 1px hsl(229, 24%, 87%)";
  moisPro.style.backgroundColor = "white";
  moisPro.style.border = " solid 1px hsl(229, 24%, 87%)";
  moisAdvanced.style.backgroundColor = "white";
  moisAdvanced.style.border = " solid 1px hsl(229, 24%, 87%)";
  anArcade.style.backgroundColor = "white";
  anArcade.style.border = " solid 1px hsl(229, 24%, 87%)";
  anAdvanced.style.backgroundColor = "white";
  anAdvanced.style.border = " solid 1px hsl(229, 24%, 87%)";
  anPro.style.backgroundColor = "white";
  anPro.style.border = " solid 1px hsl(229, 24%, 87%)";
}

/* Function to calculate the total. */

const planPrice = "0";
console.log(planPrice);

function getPrice1() {
  const planPrice = "9";
  console.log(planPrice);
  document.getElementById("totalPrice").innerHTML = planPrice;
}

function getPrice2() {
  const planPrice = "12";
  console.log(planPrice);
  document.getElementById("totalPrice").innerHTML = planPrice;
}
function getPrice3() {
  const planPrice = "15";
  console.log(planPrice);
  document.getElementById("totalPrice").innerHTML = planPrice;
}
function getPrice4() {
  const planPrice = "90";
  console.log(planPrice);
  document.getElementById("totalPrice").innerHTML = planPrice;
}
function getPrice5() {
  const planPrice = "120";
  console.log(planPrice);
  document.getElementById("totalPrice").innerHTML = planPrice;
}
function getPrice6() {
  const planPrice = "150";
  console.log(planPrice);
  document.getElementById("totalPrice").innerHTML = planPrice;
}

/* Check the INFO inputs. */

function checkName() {
  let myNameInput = document.getElementById("infoName");
  let myNameError = document.getElementById("errorName");
  let myNameRegex = /^[a-zA-Z-\s]+$/;

  if (myNameInput.value.trim() == "") {
    myNameError.innerHTML = "This field is required";
  } else if (myNameRegex.test(myNameInput.value) == false) {
    myNameError.innerHTML = "Can't contain numbers or symbols";
  } else if (myNameInput.value.trim() !== "") {
    myNameError.innerHTML = "";
  }
}

function checkNumber() {
  let myNumberInput = document.getElementById("infoNumber");
  let myNumberError = document.getElementById("errorNumber");
  let myNumberRegex = /^[0-9\s]+$/;

  if (myNumberInput.value.trim() == "") {
    myNumberError.innerHTML = "This field is required";
  } else if (myNumberRegex.test(myNumberInput.value) == false) {
    myNumberError.innerHTML = "Must contain number";
  } else if (myNumberInput.value.trim().length !== 11) {
    myNumberError.innerHTML = "Invalid Phone Number";
  } else {
    myNumberError.innerHTML = "";
  }
}

function checkEmail() {
  let myEmailInput = document.getElementById("infoEmail");
  let myEmailError = document.getElementById("errorEmail");
  let myEmailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (myEmailInput.value.trim() == "") {
    myEmailError.innerHTML = "This field is required";
  } else if (myEmailRegex.test(myEmailInput.value) == false) {
    myEmailError.innerHTML = "Please enter a valid e-mail";
  } else {
    myEmailError.innerHTML = "";
  }
}

function Achieve() {
  let myNameInput = document.getElementById("infoName");
  let myNumberInput = document.getElementById("infoNumber");
  let myEmailInput = document.getElementById("infoEmail");
  let myNameRegex = /^[a-zA-Z-\s]+$/;
  let myNumberRegex = /^[0-9\s]+$/;
  let myEmailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (
    myNumberInput.value.trim().length === 10 &&
    myNumberRegex.test(myNumberInput.value) == true &&
    myEmailInput.value.trim().length !== 0 &&
    myEmailRegex.test(myEmailInput.value) === true &&
    myNameInput.value.trim().length !== 0 &&
    myNameRegex.test(myNameInput.value) === true
  ) {
    stepInfo.style.display = "none";
    stepPlan.style.display = "flex";
    circle1.style.color = "white";
    circle1.style.backgroundColor = "rgba(255, 255, 255, 0)";
    circle2.style.backgroundColor = "rgb(255, 255, 255)";
    circle2.style.color = "black";
  }
}
function checkPlan() {
  if (document.getElementById("modeResume").innerHTML == "Choose a plan") {
    stepInfo.style.display = "none";
    stepPlan.style.display = "flex";
    circle1.style.color = "white";
    circle1.style.backgroundColor = "rgba(255, 255, 255, 0)";
    circle2.style.backgroundColor = "rgb(255, 255, 255)";
    circle2.style.color = "black";
  } else {
    stepPlan.style.display = "none";
    stepAddOn.style.display = "flex";
    circle2.style.color = "white";
    circle2.style.backgroundColor = "rgba(255, 255, 255, 0)";
    circle3.style.backgroundColor = "rgb(255, 255, 255)";
    circle3.style.color = "black";
  }
}