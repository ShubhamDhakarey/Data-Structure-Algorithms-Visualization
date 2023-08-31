// Helper function to generate random values
function generateRandomValues(size) {
  const array = [];
  for (let i = 0; i < size; i++) {
    array.push(Math.floor(Math.random() * 100) + 1);
  }
  return array;
}

// Helper function to parse user input into an array
function parseUserInput(input) {
  const values = input.split(',').map(item => parseInt(item.trim(), 10));
  const validValues = values.filter(item => !isNaN(item) && item <= 100);
  if (values.length !== validValues.length) {
    alert('Please enter values between 1 and 100 only.');
  }
  return validValues;
}

// Helper function to visualize the array elements as bars
function visualizeBars(containerId, array, currentIndex = -1, compareIndex = -1) {
  const barContainer = document.getElementById(containerId);
  barContainer.innerHTML = array.map((num, index) => {
    const heightStyle = `height: ${num * 2.5}px;`;
    const colorStyle = index === currentIndex || index === compareIndex
      ? 'background-color: #ff0000;'
      : 'background-color: #9ddf7e;';
    return `<div class="bar" style="${heightStyle} ${colorStyle}">
              <span class="bar-label">${num}</span>
            </div>`;
  }).join("");
}

// Helper function to sleep for a given time
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Helper function to swap two elements in the array and visualize the process
async function swap(array, i, j, animationSpeed) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
  visualizeBars("bubble-sort", array, i, j);
  await sleep(animationSpeed * 2);
}

// Bubble Sort
async function bubbleSort(array, animationSpeed) {
  const n = array.length;
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      if (array[i] > array[i + 1]) {
        // Highlight the compared bars in red
        visualizeBars("bubble-sort", array, i, i + 1);
        await sleep(animationSpeed * 2);

        // Swap the elements
        await swap(array, i, i + 1, animationSpeed);

        // Revert the color to default
        visualizeBars("bubble-sort", array);
        await sleep(animationSpeed);

        swapped = true;
      }
    }
  } while (swapped);

  // Final visualization with all bars in default color after sorting finishes
  visualizeBars("bubble-sort", array);
}

// Flag to track if sorting is in progress
let sortingInProgress = false;
let initialArray = generateRandomValues(10); // Store the initial array separately


// Function to start the Bubble Sort process
async function startBubbleSort() {
  // If sorting is already in progress, return and do not start another sorting process
  if (sortingInProgress) {
    return;
  }

  // Set the flag to indicate that sorting is in progress
  sortingInProgress = true;

  const userInput = document.getElementById("user-input-data").value;
  const userInputArray = userInput ? parseUserInput(userInput) : initialArray; // Use the initial array if user input is empty
  const animationSpeed = document.getElementById("speed").value;
  visualizeBars("bubble-sort", userInputArray); // Show the user input array instead of the initial array

  try {
    await bubbleSort(userInputArray, animationSpeed);
  } finally {
    // Reset the flag after sorting is complete
    sortingInProgress = false;
  }
}

// Call the event listeners to start the sorting algorithms by default
document.addEventListener("DOMContentLoaded", function () {
  visualizeBars("bubble-sort", initialArray); // Show the initial array on page load
});






// When the page is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    const backToTopButton = document.querySelector(".back-to-top");
    

    // Show the button when the user scrolls down 20px from the top of the document
    window.onscroll = function() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.style.display = "block";
      } else {
        backToTopButton.style.display = "none";
      }
    };

    // Scroll back to the top when the button is clicked
    backToTopButton.addEventListener("click", function() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
      
   

    });
  });





  