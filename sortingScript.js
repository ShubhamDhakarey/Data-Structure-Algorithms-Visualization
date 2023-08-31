function scrollToRight(boxNumber) {
    const rightBox = document.getElementById(`right-box-${boxNumber}`);
    rightBox.scrollIntoView({ behavior: 'smooth' });
}


// Helper function to sleep for a given time
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Helper function to parse user input into an array for Bubble sort
function parseUserInput(input) {
    const values = input.split(',').map(item => parseInt(item.trim(), 10));
    const validValues = values.filter(item => !isNaN(item) && item <= 100);
    if (values.length !== validValues.length) {
        alert('Please enter values between 1 and 100 only.');
    }
    return validValues;
}


function generateRandomValuesBubble() {
    const userInputData = document.getElementById("bubble-user-input-data");
    const minValue = 1; // Minimum value for the random data
    const maxValue = 100; // Maximum value for the random data
    const numValues = 10; // Number of values to generate

    const randomValues = Array.from({ length: numValues }, () => Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue);

    userInputData.value = randomValues.join(",");
}

// Repeat the above function for other sorting techniques as needed

function generateRandomValuesSelection() {
    const userInputData = document.getElementById("selection-user-input-data");
    const minValue = 1; // Minimum value for the random data
    const maxValue = 100; // Maximum value for the random data
    const numValues = 10; // Number of values to generate

    const randomValues = Array.from({ length: numValues }, () => Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue);

    userInputData.value = randomValues.join(",");
}


function generateRandomValuesMerge() {
    const userInputData = document.getElementById("merge-user-input-data");
    const minValue = 1; // Minimum value for the random data
    const maxValue = 100; // Maximum value for the random data
    const numValues = 10; // Number of values to generate

    const randomValues = Array.from({ length: numValues }, () => Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue);

    userInputData.value = randomValues.join(",");
}

function generateRandomValuesQuick() {
    const userInputData = document.getElementById("quick-user-input-data");
    const minValue = 1; // Minimum value for the random data
    const maxValue = 100; // Maximum value for the random data
    const numValues = 10; // Number of values to generate

    const randomValues = Array.from({ length: numValues }, () => Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue);

    userInputData.value = randomValues.join(",");
}


function generateRandomValuesInsertion() {
    const userInputData = document.getElementById("insertion-user-input-data");
    const minValue = 1; // Minimum value for the random data
    const maxValue = 100; // Maximum value for the random data
    const numValues = 10; // Number of values to generate

    const randomValues = Array.from({ length: numValues }, () => Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue);

    userInputData.value = randomValues.join(",");
}



//BUBBLE SORT

// Helper function to generate random values for Bubble sort
function generateRandomBubbleSortValues(size) {
    const array = [];
    for (let i = 0; i < size; i++) {
        array.push(Math.floor(Math.random() * 100) + 1);
    }
    return array;
}


// Helper function to visualize the array elements as bars for Bubble sort
function visualizeBubbleSortBars(containerId, array, currentIndex = -1, compareIndex = -1) {
    const barContainer = document.getElementById(containerId);
    barContainer.innerHTML = array.map((num, index) => {
        const heightStyle = `height: ${num * 2.5}px;`;
        const colorStyle = index === currentIndex || index === compareIndex
            ? 'background-color: #f59d9d;'                                      //comparision
            : 'background-color: #9ddf7e;';
        return `<div class="bar" style="${heightStyle} ${colorStyle}">
            <span class="bar-label">${num}</span>
        </div>`;
    }).join("");
}

// Helper function to swap two elements in the array and visualize the process
async function swapBubble(array, i, j, animationSpeed) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
    visualizeBubbleSortBars("bubble-sort", array, i, j);
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
                visualizeBubbleSortBars("bubble-sort", array, i, i + 1);
                await sleep(animationSpeed * 2);

                // Swap the elements
                await swapBubble(array, i, i + 1, animationSpeed);

                // Revert the color to default
                visualizeBubbleSortBars("bubble-sort", array);
                await sleep(animationSpeed);

                swapped = true;
            }
        }
    } while (swapped);

    // Final visualization with all bars in default color after sorting finishes
    visualizeBubbleSortBars("bubble-sort", array);
}

// Flag to track if sorting is in progress
let sortingInProgress = false;
let initialArray = generateRandomBubbleSortValues(10); // Store the initial array separately

// Function to start the Bubble Sort process
async function startBubbleSort() {
    // If sorting is already in progress, return and do not start another sorting process
    if (sortingInProgress) {
        return;
    }

    // Set the flag to indicate that sorting is in progress
    sortingInProgress = true;

    const userInput = document.getElementById("bubble-user-input-data").value;
    const userInputArray = userInput ? parseUserInput(userInput) : initialArray; // Use the initial array if user input is empty
    const animationSpeed = document.getElementById("bubble-speed").value;
    visualizeBubbleSortBars("bubble-sort", userInputArray); // Show the user input array instead of the initial array

    try {
        await bubbleSort(userInputArray, animationSpeed);
    } finally {
        // Reset the flag after sorting is complete
        sortingInProgress = false;
    }
}

// Call the event listeners to start the sorting algorithms by default
document.addEventListener("DOMContentLoaded", function () {
    visualizeBubbleSortBars("bubble-sort", initialArray); // Show the initial array on page load
});







// Helper function to generate random values for Selection Sort
function generateRandomSelectionSortValues(size) {
    const array = [];
    for (let i = 0; i < size; i++) {
        array.push(Math.floor(Math.random() * 100) + 1);
    }
    return array;
}

// Helper function to visualize the array elements as bars for Selection Sort
function visualizeSelectionSortBars(array, currentIndex = -1, compareIndex = -1) {
    const barContainer = document.getElementById("selection-sort");
    barContainer.innerHTML = array.map((num, index) => {
        const heightStyle = `height: ${num * 2.5}px;`;
        const colorStyle = index === currentIndex || index === compareIndex
            ? 'background-color: #f59d9d;'
            : 'background-color: #9ddf7e;';
        return `<div class="bar" style="${heightStyle} ${colorStyle}">
            <span class="bar-label">${num}</span>
        </div>`;
    }).join("");
}

// Helper function to swap two elements in the array and visualize the process
async function swapSelection(array, i, j, animationSpeed) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
    visualizeSelectionSortBars(array, i, j);
    await sleep(animationSpeed * 2);
}

// Selection Sort
async function selectionSort(array, animationSpeed) {
    const n = array.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            // Highlight the compared bars in red
            visualizeSelectionSortBars(array, i, j);
            await sleep(animationSpeed * 2);

            if (array[j] < array[minIndex]) {
                minIndex = j;
            }

            // Revert the color to default
            visualizeSelectionSortBars(array);
            await sleep(animationSpeed);
        }

        if (minIndex !== i) {
            // Swap the elements
            await swapSelection(array, i, minIndex, animationSpeed);
        }
    }

    // Final visualization with all bars in default color after sorting finishes
    visualizeSelectionSortBars(array);
}

// Flag to track if Selection Sort is in progress
let selectionSortInProgress = false;
let initialSelectionSortArray = generateRandomSelectionSortValues(10); // Store the initial array separately for Selection Sort

// Function to start the Selection Sort process
async function startSelectionSort() {
    // If Selection Sort is already in progress, return and do not start another sorting process
    if (selectionSortInProgress) {
        return;
    }

    // Set the flag to indicate that Selection Sort is in progress
    selectionSortInProgress = true;

    const userInput = document.getElementById("selection-user-input-data").value;
    const userInputArray = userInput ? parseUserInput(userInput) : initialSelectionSortArray; // Use the initial array if user input is empty
    const animationSpeed = document.getElementById("selection-speed").value;
    visualizeSelectionSortBars(userInputArray); // Show the user input array instead of the initial array

    try {
        await selectionSort(userInputArray, animationSpeed);
    } finally {
        // Reset the flag after Selection Sort is complete
        selectionSortInProgress = false;
    }
}

// Call the event listener to start the Selection Sort algorithm when the page is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    visualizeSelectionSortBars(initialSelectionSortArray); // Show the initial array on page load for Selection Sort
    document.getElementById("start-selection-sort").addEventListener("click", startSelectionSort);
});










// Helper function to generate random values for Merge Sort
function generateRandomMergeSortValues(size) {
    const array = [];
    for (let i = 0; i < size; i++) {
        array.push(Math.floor(Math.random() * 100) + 1);
    }
    return array;
}



// Helper function to visualize the array elements as bars for Merge Sort
function visualizeMergeSortBars(array, partitions, comparisons) {
    const barContainer = document.getElementById("merge-sort");
    barContainer.innerHTML = array.map((num, index) => {
        let colorStyle = `background-color: #9ddf7e;`; // Light green for sorting
        if (comparisons[index]) {
            colorStyle = 'background-color: pink;'; // Light orange for compared bars
        } else if (partitions[index] !== undefined) {
            colorStyle = 'background-color: brown;'; // Light yellow for swapped bars
        }
        return `<div class="bar" style="height: ${num * 2.5}px; ${colorStyle}">
                <span class="bar-label">${num}</span>
            </div>`;
    }).join("");
}



// Updated helper function to visualize the array elements during divide and conquer
async function visualizeDivideAndConquer(array, left, right, animationSpeed) {
    // Select the bars within the divide-and-conquer range
    for (let i = left; i <= right; i++) {
        visualizeMergeSortBars(array, left, right, i);
        await sleep(animationSpeed);
    }

    // Revert the color to default for the selected bars
    visualizeMergeSortBars(array);
}

// Updated merge function used in Merge Sort to visualize the merge process
async function merge(array, left, middle, right, animationSpeed, partitions, comparisons) {
    const leftArray = array.slice(left, middle + 1);
    const rightArray = array.slice(middle + 1, right + 1);
    let i = 0;
    let j = 0;
    let k = left;

    while (i < leftArray.length && j < rightArray.length) {
        // Highlight the compared bars on the side
        visualizeDivideAndConquer(array, left + i, right - (rightArray.length - 1 - j), animationSpeed * 2);
        comparisons[left + i] = true;
        comparisons[right - (rightArray.length - 1 - j)] = true;

        if (leftArray[i] <= rightArray[j]) {
            array[k] = leftArray[i];
            i++;
        } else {
            array[k] = rightArray[j];
            j++;
        }
        k++;

        // Revert the color to default
        visualizeMergeSortBars(array, partitions, comparisons);
        await sleep(animationSpeed);
        comparisons[left + i] = false;
        comparisons[right - (rightArray.length - 1 - j)] = false;
    }

    while (i < leftArray.length) {
        array[k] = leftArray[i];
        i++;
        k++;

        // Revert the color to default
        visualizeMergeSortBars(array, partitions, comparisons);
        await sleep(animationSpeed);
    }

    while (j < rightArray.length) {
        array[k] = rightArray[j];
        j++;
        k++;

        // Revert the color to default
        visualizeMergeSortBars(array, partitions, comparisons);
        await sleep(animationSpeed);
    }
}

// Merge Sort
async function mergeSort(array, left, right, animationSpeed, partitions, comparisons) {
    if (left >= right) {
        return;
    }

    const middle = Math.floor((left + right) / 2);

    partitions[middle] = partitions[left] === undefined ? 1 : partitions[left] + 1;
    await mergeSort(array, left, middle, animationSpeed, partitions, comparisons);
    partitions[middle] = undefined;

    partitions[right] = partitions[middle + 1] === undefined ? 1 : partitions[middle + 1] + 1;
    await mergeSort(array, middle + 1, right, animationSpeed, partitions, comparisons);
    partitions[right] = undefined;

    await merge(array, left, middle, right, animationSpeed, partitions, comparisons);
}

// Flag to track if Merge Sort is in progress
let mergeSortInProgress = false;
let initialMergeSortArray = generateRandomMergeSortValues(10); // Store the initial array separately for Merge Sort

// Function to start the Merge Sort process
async function startMergeSort() {
    // If Merge Sort is already in progress, return and do not start another sorting process
    if (mergeSortInProgress) {
        return;
    }

    // Disable the "Start Sorting" button while sorting is in progress
    document.getElementById("start-merge-sort").disabled = true;

    // Set the flag to indicate that Merge Sort is in progress
    mergeSortInProgress = true;

    const userInput = document.getElementById("merge-user-input-data").value;
    const userInputArray = userInput ? parseUserInput(userInput) : initialMergeSortArray; // Use the initial array if user input is empty
    const animationSpeed = document.getElementById("merge-speed").value;
    visualizeMergeSortBars(userInputArray, [], []); // Show the user input array instead of the initial array

    try {
        await mergeSort(userInputArray, 0, userInputArray.length - 1, animationSpeed, [], []);
    } finally {
        // Reset the flag after Merge Sort is complete
        mergeSortInProgress = false;
        document.getElementById("start-merge-sort").disabled = false;
        // Mark sorted bars in dark green after sorting is complete
        visualizeMergeSortBars(userInputArray, [], Array.from({ length: userInputArray.length }, (_, index) => index));
    }
}

// Call the event listener to start the Merge Sort algorithm when the page is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    visualizeMergeSortBars(initialMergeSortArray, [], []); // Show the initial array on page load for Merge Sort
    document.getElementById("start-merge-sort").addEventListener("click", startMergeSort);
});






// Helper function to generate random values for Quick Sort
function generateRandomQuickSortValues(size) {
    const array = [];
    for (let i = 0; i < size; i++) {
        array.push(Math.floor(Math.random() * 100) + 1);
    }
    return array;
}



// Helper function to visualize the array elements as bars for Quick Sort
function visualizeQuickSortBars(array, pivotIndex, currentIndex = -1, compareIndex = -1) {
    const barContainer = document.getElementById("quick-sort");
    barContainer.innerHTML = array.map((num, index) => {
        const heightStyle = `height: ${num * 2.5}px;`;
        let colorStyle = 'background-color: #9ddf7e;';

        if (index === currentIndex) {
            colorStyle = 'background-color: #ff0000;';
        } else if (index === pivotIndex) {
            colorStyle = 'background-color: #ffd700;';
        } else if (index === compareIndex) {
            colorStyle = 'background-color: #ff4500;';
        }

        return `<div class="bar" style="${heightStyle} ${colorStyle}">
              <span class="bar-label">${num}</span>
          </div>`;
    }).join("");
}



// Helper function to swap two elements in the array and visualize the process
async function swapQuick(array, i, j, animationSpeed) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
    visualizeQuickSortBars(array, -1, i, j);
    await sleep(animationSpeed * 2);
    visualizeQuickSortBars(array, -1);
}



// Quick Sort


async function quickSort(array, left, right, animationSpeed) {
    if (left < right) {
        const pivotIndex = await partition(array, left, right, animationSpeed);
        await quickSort(array, left, pivotIndex - 1, animationSpeed);
        await quickSort(array, pivotIndex + 1, right, animationSpeed);
    }
}

async function partition(array, left, right, animationSpeed) {
    const pivot = array[right];
    let i = left - 1;

    for (let j = left; j < right; j++) {
        if (array[j] < pivot) {
            i++;
            await swapQuick(array, i, j, animationSpeed);
        }
    }

    await swapQuick(array, i + 1, right, animationSpeed);
    return i + 1;
}




// Flag to track if quick Sort is in progress
let quickSortInProgress = false;
let initialQuickSortArray = generateRandomQuickSortValues(10); // Store the initial array separately for Merge Sort


// Function to start the Quick Sort process
async function startQuickSort() {
    if (quickSortInProgress) {
        return;
    }


    // Disable the "Start Sorting" button while sorting is in progress
    document.getElementById("start-quick-sort").disabled = true;

    // Set the flag to indicate that Quick Sort is in progress
    quickSortingInProgress = true;

    const userInput = document.getElementById("quick-user-input-data").value;
    const userInputArray = userInput ? parseUserInput(userInput) : initialQuickSortArray.slice();
    const animationSpeed = parseInt(document.getElementById("quick-speed").value, 10);
    visualizeQuickSortBars(userInputArray, -1);

    try {
        await quickSort(userInputArray, 0, userInputArray.length - 1, animationSpeed);
    } finally {
        // Reset the flag after Merge Sort is complete
        quickSortInProgress = false;
        document.getElementById("start-quick-sort").disabled = false;

    }
}

// Call the event listener to start the Quick Sort algorithm when the page is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    visualizeQuickSortBars(initialQuickSortArray, -1);
    document.getElementById("start-quick-sort").addEventListener("click", startQuickSort);
});




// Helper function to generate random values for Insertion Sort
function generateRandomInsertionSortValues(size) {
    const array = [];
    for (let i = 0; i < size; i++) {
        array.push(Math.floor(Math.random() * 100) + 1);
    }
    return array;
}

// Helper function to visualize the array elements as bars for Insertion Sort
function visualizeInsertionSortBars(array, currentIndex = -1, compareIndex = -1) {
    const barContainer = document.getElementById("insertion-sort");
    barContainer.innerHTML = array.map((num, index) => {
        const heightStyle = `height: ${num * 2.5}px;`;
        const colorStyle = index === currentIndex || index === compareIndex
            ? 'background-color: #f59d9d;'
            : 'background-color: #9ddf7e;';
        return `<div class="bar" style="${heightStyle} ${colorStyle}">
            <span class="bar-label">${num}</span>
        </div>`;
    }).join("");
}


// Insertion Sort
async function insertionSort(array, animationSpeed) {
    const n = array.length;
    for (let i = 1; i < n; i++) {
        const key = array[i];
        let j = i - 1;

        // Highlight the compared bars in red
        visualizeInsertionSortBars(array, i, j);
        await sleep(animationSpeed * 2);

        while (j >= 0 && array[j] > key) {
            array[j + 1] = array[j];
            j--;

            // Visualize the process
            visualizeInsertionSortBars(array, i, j);
            await sleep(animationSpeed);
        }

        array[j + 1] = key;

        // Revert the color to default
        visualizeInsertionSortBars(array);
        await sleep(animationSpeed);
    }

    // Final visualization with all bars in default color after sorting finishes
    visualizeInsertionSortBars(array);
}

// Flag to track if Insertion Sort is in progress
let insertionSortInProgress = false;
let initialInsertionSortArray = generateRandomInsertionSortValues(10); // Store the initial array separately for Insertion Sort

// Function to start the Insertion Sort process
async function startInsertionSort() {
    // If Insertion Sort is already in progress, return and do not start another sorting process
    if (insertionSortInProgress) {
        return;
    }

    // Set the flag to indicate that Insertion Sort is in progress
    insertionSortInProgress = true;

    const userInput = document.getElementById("insertion-user-input-data").value;
    const userInputArray = userInput ? parseUserInput(userInput) : initialInsertionSortArray.slice();
    const animationSpeed = parseInt(document.getElementById("insertion-speed").value, 10);
    visualizeInsertionSortBars(userInputArray); // Show the user input array instead of the initial array

    try {
        await insertionSort(userInputArray, animationSpeed);
    } finally {
        // Reset the flag after Insertion Sort is complete
        insertionSortInProgress = false;
    }
}

// Call the event listener to start the Insertion Sort algorithm when the page is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    visualizeInsertionSortBars(initialInsertionSortArray); // Show the initial array on page load for Insertion Sort
    document.getElementById("start-insertion-sort").addEventListener("click", startInsertionSort);
});