let biggerButton = document.getElementById("biggerButton");
biggerButton.onclick = function(){
  biggerButton.style["font-size"] = "24px";
  alert("Hello, world!");
}

let mooButton = document.getElementById("mooButton");
  mooButton.onclick = function(){
  mooButton.style["font-size"] = "";
  let textArea = document.getElementById("textarea");
  let upValue = textArea.value.toUpperCase();
  textArea.value = upValue;

  let arrayOfValueSplitOnPeriod = textArea.value.split(".");
  console.error(arrayOfValueSplitOnPeriod);

  for (let i = 0; i <arrayOfValueSplitOnPeriod.length; i++){
    if (arrayOfValueSplitOnPeriod[i].length > 0){
      arrayOfValueSplitOnPeriod[i] += "-Moo."
    }
  }

  console.error("After suffixing, array is");
  console.error(arrayOfValueSplitOnPeriod);

  let joinedValue = arrayOfValueSplitOnPeriod.join("");
  textArea.value = joinedValue;
}

function onOptionChange(){
  let fancyButton = document.getElementById("fancyOption");
  let boringButton = document.getElementById("boringOption");
    let fancyChecked = fancyButton.checked;
  let boringChecked = boringButton.checked;
  let textArea = document.getElementById("textarea");

  if (fancyChecked){
      textArea.style["font-weight"] = "700"; // makes font bold
      textArea.style["color"] = "blue";
      textArea.style["text-decoration"] = "underline";
  }
  else if (boringChecked){
      textArea.style["font-weight"] = "400"; // makes font regular
      textArea.style["color"] = "black";
      textArea.style["text-decoration"] = "";
  }
}