function getTextElementValueById(elementId){
     const element = document.getElementById(elementId);
     const elementValue = element.innerText;
     const elementValueNumber = parseFloat(elementValue);
     return elementValueNumber;
}

function getInputValueById(inputId){
     const inputField = document.getElementById(inputId);
     const inputFieldValue = inputField.value;
     const inputFieldValueNumber = parseFloat(inputFieldValue);
     inputField.value = '';
     return inputFieldValueNumber;
}

function setValueById(elementId, values){
     const element = document.getElementById(elementId);
     element.innerText = values;
}