const arrayContainer = document.getElementById("array-container");
const insertButton = document.getElementById("insert-button");
const updateButton = document.getElementById("update-button");
const deleteButton = document.getElementById("delete-button");
const randomGenerateButton = document.getElementById("random-generate-button");
const valueInput = document.getElementById("value-input");
const indexInput = document.getElementById("index-input");

let arrayData = [];

function updateArrayVisualization() {
  arrayContainer.innerHTML = "";

  for (let i = 0; i < arrayData.length; i++) {
    const element = document.createElement("div");
    element.classList.add("array-element");
    element.textContent = arrayData[i];
    arrayContainer.appendChild(element);
  }
}

function insertValue() {
  const newValue = parseInt(valueInput.value);
  const index = parseInt(indexInput.value);

  if (!isNaN(newValue) && !isNaN(index) && index >= 0 && index <= arrayData.length) {
    arrayData.splice(index, 0, newValue);
    valueInput.value = "";
    indexInput.value = "";
    updateArrayVisualization();
  }
}

function updateValue() {
  const newValue = parseInt(valueInput.value);
  const index = parseInt(indexInput.value);

  if (!isNaN(newValue) && !isNaN(index) && index >= 0 && index < arrayData.length) {
    arrayData[index] = newValue;
    valueInput.value = "";
    indexInput.value = "";
    updateArrayVisualization();
  }
}

function deleteValue() {
  const index = parseInt(indexInput.value);

  if (!isNaN(index) && index >= 0 && index < arrayData.length) {
    arrayData.splice(index, 1);
    indexInput.value = "";
    updateArrayVisualization();
  }
}

function deleteValue1() {
    const deleteValue = parseInt(valueInput.value);
    const index = arrayData.indexOf(deleteValue);
  
    if (index !== -1) {
      arrayData.splice(index, 1);
      updateArrayVisualization();
      valueInput.value = "";
    }
  }

function generateRandomArray(length, min, max) {
  const randomArray = [];
  for (let i = 0; i < length; i++) {
    const randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
    randomArray.push(randomValue);
  }
  return randomArray;
}

function generateRandom() {
  arrayData = generateRandomArray(10, 1, 100);
  updateArrayVisualization();
}

insertButton.addEventListener("click", insertValue);
updateButton.addEventListener("click", updateValue);
deleteButton.addEventListener("click", deleteValue);
deleteButton.addEventListener("click", deleteValue1);
randomGenerateButton.addEventListener("click", generateRandom);
