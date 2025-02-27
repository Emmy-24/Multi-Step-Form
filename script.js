console.log ('hello world')
// Get all step elements
const stepInfo = document.getElementById("stepInfo");
const stepPlan = document.getElementById("stepPlan");
const stepAddon = document.getElementById("stepAddon");
const stepSummary = document.getElementById("stepSummary");
const stepThankYou = document.getElementById("stepThankYou");

// Get all circle elements for navigation
const circle1 = document.getElementById("circle1");
const circle2 = document.getElementById("circle2");
const circle3 = document.getElementById("circle3");
const circle4 = document.getElementById("circle4");

// Step 1 to Step 2 navigation
function gotosteptwo() {
  if (validateStepOne()) {
    stepInfo.style.display = "none";
    stepPlan.style.display = "flex";
    updateCircleStyles(1, 2);
  }
}

// Step 2 back to Step 1 navigation
function gobacktostepone() {
  stepInfo.style.display = "flex";
  stepPlan.style.display = "none";
  updatecircleStyles(2, 1);
}

// Step 2 to Step 3 navigation
function gotostepthree() {
  if (validateStepTwo()) {
    stepPlan.style.display = "none";
    stepAddon.style.display = "flex";
    updateCircleStyles(2, 3);
  }
}

// Step 3 back to Step 2 navigation
function gobacktosteptwo() {
  stepPlan.style.display = "flex";
  stepAddon.style.display = "none";
  updateCircleStyles(3, 2);
}

// Step 3 to Step 4 navigation
function gotostepfour() {
  stepAddon.style.display = "none";
  stepSummary.style.display = "flex";
  updateCircleStyles(3, 4);
  calculateTotal();
}

// Step 4 back to Step 3 navigation
function gobacktostepthree() {
  stepSummary.style.display = "none";
  stepAddon.style.display = "flex";
  updateCircleStyles(4, 3);
}

// From summary step to plan selection step
function gofromfourtotwo() {
  stepSummary.style.display = "none";
  stepPlan.style.display = "flex";
  updateCircleStyles(4, 2);
}

// Final confirmation step
function gotostepthankyou() {
  if (document.getElementById("modesummary").innerHTML == "Choose a plan") {
    alert("Please select a plan before confirming");
  } else {
    stepSummary.style.display = "none";
    stepThankYou.style.display = "flex";
  }
}

// Helper function to update circle styles when navigating between steps
function updateCircleStyles(fromStep, toStep) {
  // Reset the "from" circle
  document.getElementById(`circle${fromStep}`).style.color = "white";
  document.getElementById(`circle${fromStep}`).style.backgroundColor = "rgba(255, 255, 255, 0)";
  
  // Highlight the "to" circle
  document.getElementById(`circle${toStep}`).style.backgroundColor = "rgb(255, 255, 255)";
  document.getElementById(`circle${toStep}`).style.color = "black";
}

/* Function to toggle between Monthly and Yearly Plan */
function togglePlan() {
  const switchcheckbox = document.getElementById("switch");
  const planMonth = document.getElementById("planMonth");
  const planYear = document.getElementById("planYear");
  const addonMonthly = document.getElementById("addonMonthly");
  const addonYearly = document.getElementById("addonYearly");

  if (switchcheckbox.checked) {
    planMonth.style.display = "none";
    planYear.style.display = "flex";
    addonMonthly.style.display = "none";
    addonYearly.style.display = "flex";
  } else {
    planMonth.style.display = "flex";
    planYear.style.display = "none";
    addonMonthly.style.display = "flex";
    addonYearly.style.display = "none";
  }

  // Reset selections and prices when switching billing period
  resetSelections();
}

// Initialize checkbox event listener for plan toggling
document.getElementById("switch").addEventListener("click", togglePlan);

/* Monthly Plan Button Event Handlers */
document.getElementById("moisArcade").addEventListener("click", function() {
  updatePlanSelection("moisArcade", "Arcade (monthly)", "9$/mo", "per month");
  getPrice(9);
});
document.getElementById("moisAdvanced").addEventListener("click", function() {
  updatePlanSelection("moisAdvanced", "Advanced (monthly)", "12$/mo", "per month");
  getPrice(12);
});
document.getElementById("moisPro").addEventListener("click", function() {
updatePlanSelection("moisPro", "Pro (monthly)", "15$/mo", "per month");
  getPrice(15);
});

/* Yearly Plan Button Event Handlers */
document.getElementById("anArcade").addEventListener("click", function() {
  updatePlanSelection("anArcade", "Arcade (yearly)", "90$/yr", "per year");
  getPrice(90);
});
document.getElementById("anAdvanced").addEventListener("click", function() {
  updatePlanSelection("anAdvanced", "Advanced (yearly)", "120$/yr", "per year");
  getPrice(120);
});
document.getElementById("anPro").addEventListener("click", function() {
  updatePlanSelection("anPro", "Pro (yearly)", "150$/yr", "per year");
  getPrice(150);
});

// Helper function to update plan selection UI and text
function updatePlanSelection(selectedId, summaryText, priceText, periodText) {
  // Reset all plan button styles
  const planbutton = [
    "moisArcade", "moisAdvanced", "moisPro", 
    "anArcade", "anAdvanced", "anPro"
  ];
  planbutton.forEach(id => {
    const button = document.getElementById(id);
    button.style.backgroundColor = "white";
    button.style.border = "solid 1px hsl(229, 24%, 87%)";
  });
  
  // Set selected button style
  const selectedButton = document.getElementById(selectedId);
  selectedButton.style.backgroundColor = "hsl(217, 100%, 97%)";
  selectedButton.style.border = "solid 1px hsl(213, 96%, 18%)";
  // Update summary text
  document.getElementById("modesummary").innerHTML = summaryText;
  document.getElementById("pricesummary").innerHTML = priceText;
  document.getElementById("modeTotal").innerHTML = `Total (${periodText})`;
}

// Function to set price in the total field
function getPrice(price) {
  document.getElementById("totalPrice").innerHTML = price;
}

// Reset all selections and prices
function resetSelections() {
  // Reset checkboxes
  const checkboxes = [
    "onlineMois", "storageMois", "customizableMois",
    "onlineYris", "storageYris", "customizableYris"
  ];
  
  checkboxes.forEach(id => {
    document.getElementById(id).checked = false;
  });
  
  // Reset addon prices
  document.getElementById("onlinePrice").innerHTML = "+0$";
  document.getElementById("storagePrice").innerHTML = "+0$";
  document.getElementById("customizablePrice").innerHTML = "+0$";
  
  // Reset plan selection
  document.getElementById("modesummary").innerHTML = "Choose a plan";
  document.getElementById("pricesummary").innerHTML = "0$";
  document.getElementById("totalPrice").innerHTML = "0";
  
  // Reset plan button styles
  const planbutton = [
    "moisArcade", "moisAdvanced", "moisPro", 
    "anArcade", "anAdvanced", "anPro"
  ];
  
  planbutton.forEach(id => {
    const button = document.getElementById(id);
    button.style.backgroundColor = "white";
    button.style.border = "solid 1px hsl(229, 24%, 87%)";
  });
}

/* Addon Checkbox Event Handlers - Monthly */
document.getElementById("onlineMois").addEventListener("click", function(event) {
  updateAddonPrice("onlinePrice", event.target.checked, "1$/mo", "per month");
});

document.getElementById("storageMois").addEventListener("click", function(event) {
  updateAddonPrice("storagePrice", event.target.checked, "2$/mo", "per month");
});

document.getElementById("customizableMois").addEventListener("click", function(event) {
  updateAddonPrice("customizablePrice", event.target.checked, "2$/mo", "per month");
});

/* Addon Checkbox Event Handlers - Yearly */
document.getElementById("onlineYris").addEventListener("click", function(event) {
  updateAddonPrice("onlinePrice", event.target.checked, "10$/yr", "per year");
});
document.getElementById("storageYris").addEventListener("click", function(event) {
  updateAddonPrice("storagePrice", event.target.checked, "20$/yr", "per year");
});
document.getElementById("customizableYris").addEventListener("click", function(event) {
  updateAddonPrice("customizablePrice", event.target.checked, "20$/yr", "per year");
});

// Helper function to update addon prices
function updateAddonPrice(priceId, isChecked, priceText, periodText) {
  document.getElementById(priceId).innerHTML = isChecked ? `+${priceText}` : "+0$";
  document.getElementById("modeTotal").innerHTML = `Total (${periodText})`;
  calculateTotal();
}
// Calculate and update the total price
function calculateTotal() {
  let basePrice = parseInt(document.getElementById("totalPrice").innerHTML) || 0;
  let totalPrice = basePrice;
  
  // Check which addons are selected
  const isMonthly = !document.getElementById("switch").checked;
  const addonIds = isMonthly ? 
    ["onlineMois", "storageMois", "customizableMois"] : 
    ["onlineYris", "storageYris", "customizableYris"];
  
  addonIds.forEach(id => {
    if (document.getElementById(id).checked) {
      totalPrice += parseInt(document.getElementById(id).value);
    }
  });
  
  document.getElementById("totalPrice").innerHTML = totalPrice;
}

/* Form Validation Functions */
function validateStepOne() {
  checkName();
  checkEmail();
  checkNumber();
  
  return allInputsValid();
}

function checkName() {
  let myNameInput = document.getElementById("infoName");
  let myNameError = document.getElementById("errorName");
  let myNameRegex = /^[a-zA-Z-\s]+$/;

  if (myNameInput.value.trim() === "") {
    myNameError.innerHTML = "This field is required";
    return false;
  } else if (!myNameRegex.test(myNameInput.value)) {
    myNameError.innerHTML = "Can't contain numbers or symbols";
    return false;
  } else {
    myNameError.innerHTML = "";
    return true;
  }
}

function checkEmail() {
  let myEmailInput = document.getElementById("infoEmail");
  let myEmailError = document.getElementById("errorEmail");
  let myEmailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (myEmailInput.value.trim() === "") {
    myEmailError.innerHTML = "This field is required";
    return false;
  } else if (!myEmailRegex.test(myEmailInput.value)) {
    myEmailError.innerHTML = "Please enter a valid e-mail";
    return false;
  } else {
    myEmailError.innerHTML = "";
    return true;
  }
}

function checkNumber() {
  let myNumberInput = document.getElementById("infoNumber");
  let myNumberError = document.getElementById("errorNumber");
  let myNumberRegex = /^[0-9\s]+$/;

  if (myNumberInput.value.trim() === "") {
    myNumberError.innerHTML = "This field is required";
    return false;
  } else if (!myNumberRegex.test(myNumberInput.value)) {
    myNumberError.innerHTML = "Must contain number";
    return false;
  } else if (myNumberInput.value.trim().length !== 11) {
    myNumberError.innerHTML = "Invalid Phone Number";
    return false;
  } else {
    myNumberError.innerHTML = "";
    return true;
  }
}

function allInputsValid() {
  const nameValid = document.getElementById("errorName").innerHTML === "";
  const emailValid = document.getElementById("errorEmail").innerHTML === "";
  const numberValid = document.getElementById("errorNumber").innerHTML === "";
  
  return nameValid && emailValid && numberValid;
}

function validateStepTwo() {
  if (document.getElementById("modesummary").innerHTML === "Choose a plan") {
    alert("Please select a plan before proceeding");
    return false;
  }
  return true;
}

// Initialize the form
window.onload = function() {
  // Show only step 1 initially
  stepInfo.style.display = "flex";
  stepPlan.style.display = "none";
  stepAddon.style.display = "none";
  stepSummary.style.display = "none";
  stepThankYou.style.display = "none";
  
  // Hide yearly plan initially
  document.getElementById("planYear").style.display = "none";
  document.getElementById("addonYearly").style.display = "none";
  
  // Set initial circle style
  circle1.style.backgroundColor = "rgb(255, 255, 255)";
  circle1.style.color = "black";
};