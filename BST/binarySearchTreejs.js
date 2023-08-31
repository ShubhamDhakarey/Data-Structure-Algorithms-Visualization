
// Get the buttons
const deleteButton = document.getElementById('deleteButton');
const searchButton = document.getElementById('searchButton');
const minButton = document.getElementById('minButton');
const maxButton = document.getElementById('maxButton');
const heightButton = document.getElementById('heightButton');

// Add click event listeners to the buttons
deleteButton.addEventListener('click', deleteValue);
searchButton.addEventListener('click', searchValue);
minButton.addEventListener('click', findMin);
maxButton.addEventListener('click', findMax);
heightButton.addEventListener('click', calculateHeight);

function insertValue() {
    // Insert logic
}

function updateValue() {
    // Update logic
}

function deleteValue() {
    // Delete logic
}

function searchValue() {
    // Search logic
}

function findMin() {
    // Min value logic
}

function findMax() {
    // Max value logic
}

function calculateHeight() {
    // Height calculation logic
}

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);

        if (!this.root) {
            this.root = newNode;
        } else {
            this._insertNode(this.root, newNode);
        }
    }

    _insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (!node.left) {
                node.left = newNode;
            } else {
                this._insertNode(node.left, newNode);
            }
        } else {
            if (!node.right) {
                node.right = newNode;
            } else {
                this._insertNode(node.right, newNode);
            }
        }
    }




    delete(value) {
        this.root = this._deleteNode(this.root, value);
    }

    _deleteNode(node, value) {
        if (!node) {
            return null;
        }

        if (value < node.value) {
            node.left = this._deleteNode(node.left, value);
        } else if (value > node.value) {
            node.right = this._deleteNode(node.right, value);
        } else {
            // Node with only one child or no child
            if (!node.left) {
                return node.right;
            } else if (!node.right) {
                return node.left;
            }

            // Node with two children: Get the inorder successor (smallest in the right subtree)
            node.value = this._getMinValue(node.right);

            // Delete the inorder successor
            node.right = this._deleteNode(node.right, node.value);
        }

        return node;
    }

    _getMinValue(node) {
        while (node.left) {
            node = node.left;
        }
        return node.value;
    }





    search(value) {
        return this._searchNode(this.root, value);
    }

    _searchNode(node, value) {
        if (!node || node.value === value) {
            return node;
        }

        if (value < node.value) {
            return this._searchNode(node.left, value);
        } else {
            return this._searchNode(node.right, value);
        }
    }




    getHeight() {
        return this._getHeight(this.root);
    }

    _getHeight(node) {
        if (!node) {
            return -1; // Height of an empty tree is -1
        }

        const leftHeight = this._getHeight(node.left);
        const rightHeight = this._getHeight(node.right);

        return Math.max(leftHeight, rightHeight) + 1;
    }



    // Add other tree-related methods here
}
// const deleteButton = document.getElementById('deleteButton');
const deletePopup = document.getElementById('deletePopup');
const deleteInput = document.getElementById('deleteInput');

function showDeletePopup() {
    deletePopup.style.display = 'block';
}

function hideDeletePopup() {
    deletePopup.style.display = 'none';
}

deleteButton.addEventListener('click', showDeletePopup);

function performDelete() {
    const valueToDelete = parseInt(deleteInput.value.trim(), 10);
    if (!isNaN(valueToDelete)) {
        binaryTree.delete(valueToDelete);
        updateTreeDisplay();
        hideDeletePopup();
    } else {
        alert('Please enter a valid value to delete.');
    }
}


const binaryTree = new BinaryTree();
const createTreeButton = document.getElementById('createTreeButton');
const optionButtons = document.getElementById('optionButtons');
const randomArrayButton = document.getElementById('randomArrayButton');
const insertValuesButton = document.getElementById('insertValuesButton');
const inputContainer = document.getElementById('inputContainer');
const valuesInput = document.getElementById('valuesInput');
const treeDisplay = document.getElementById('treeDisplay');
const randomArrayButton1 = document.getElementById('randomArrayButton1');


function showOptions() {
    createTreeButton.style.display = 'none';
    optionButtons.style.display = 'flex';
    fadeInElement(randomArrayButton);
    fadeInElement(insertValuesButton);
}

function fadeInElement(element) {
    let opacity = 0;
    element.style.display = 'block';
    const fadeInInterval = setInterval(() => {
        if (opacity < 1) {
            opacity += 0.1;
            element.style.opacity = opacity;
        } else {
            clearInterval(fadeInInterval);
        }
    }, 100);
}

function showValuesInput() {
    optionButtons.style.display = 'none';
    inputContainer.style.display = 'flex';
    randomArrayButton1.style.display = 'initial'; // Show the random array button

}

// ... (your existing code)

function createRandomArray() {
    const randomValues = [];
    const numValues = 10; // Generate 10 random values

    for (let i = 0; i < numValues; i++) {
        randomValues.push(Math.floor(Math.random() * 100) + 1); // Random values between 1 and 100
    }

    buildTree(randomValues);
}

function insertValuesManually() {
    const values = valuesInput.value.split(',').map(val => parseInt(val.trim(), 10));

    if (values.length > 10) {
        alert('Please enter up to 10 values.');
        return;
    }

    buildTree(values);
}

// ... (your existing code)


function buildTree(values) {
    binaryTree.root = null;

    for (const value of values) {
        binaryTree.insert(value);
    }

    updateTreeDisplay();
}


function updateTreeDisplay(highlightedNodeValue = null) {
    treeDisplay.innerHTML = '';
    displayTree(binaryTree.root, treeDisplay.offsetWidth / 2, 20, null, -20);
    if (highlightedNodeValue !== null) {
        highlightNodeWithValue(highlightedNodeValue);
    }
}

function displayTree(node, x, y, parentX = null, parentY = null, level = 0) {
    if (!node) return;

    // Create the node element
    const newNode = document.createElement('div');
    newNode.className = 'node';
    newNode.textContent = node.value;
    newNode.setAttribute('data-value', node.value); // Add this line
    newNode.style.left = `${x}px`;
    newNode.style.top = `${y}px`;


    // Create a connector (line) between parent and child nodes
    if (parentX !== null && parentY !== null) {
        const connector = document.createElement('div');
        connector.className = 'node-connector';

        const midX = (x + parentX) / 2;
        const midY = (y + parentY) / 2;

        const angle = Math.atan2(y - parentY, x - parentX);
        const distance = Math.sqrt((x - parentX) ** 2 + (y - parentY) ** 2);

        connector.style.width = `${distance}px`;
        connector.style.transform = `rotate(${angle}rad)`;
        connector.style.left = `${midX}px`;
        connector.style.top = `${midY}px`;

        treeDisplay.appendChild(connector);
    }

    const horizontalSpacings = [130, 100, 70, 40]; // Adjust these values for different levels

    // Check if the current level has a custom horizontal spacing
    const horizontalSpacing = horizontalSpacings[level] || 50;

    treeDisplay.appendChild(newNode);

    // Recursively display left and right subtrees
    if (node.left) {
        const leftX = x - horizontalSpacing;
        const leftY = y + 60;
        displayTree(node.left, leftX, leftY, x, y, level + 1);
    }
    if (node.right) {
        const rightX = x + horizontalSpacing;
        const rightY = y + 60;
        displayTree(node.right, rightX, rightY, x, y, level + 1);
    }
}





const searchPopup = document.getElementById('searchPopup');
const searchInput = document.getElementById('searchInput');

function showSearchPopup() {
    searchPopup.style.display = 'block';
}

function hideSearchPopup() {
    searchPopup.style.display = 'none';
}

searchButton.addEventListener('click', showSearchPopup);

function performSearch() {
    const valueToSearch = parseInt(searchInput.value.trim(), 10);
    if (!isNaN(valueToSearch)) {
        searchAndHighlight(valueToSearch);
        hideSearchPopup();
    } else {
        alert('Please enter a valid value to search.');
    }
}

function searchAndHighlight(value) {
    unhighlightAllNodes();
    const foundNode = binaryTree.search(value);
    if (foundNode) {
        highlightNode(foundNode);
    } else {
        alert('Value not found in the tree.');
    }
}


function highlightNode(node) {
    const nodeElement = document.querySelector(`.node[data-value="${node.value}"]`);
    if (nodeElement) {
        nodeElement.classList.add('highlight');
    }
}

function unhighlightAllNodes() {
    const highlightedNodes = document.querySelectorAll('.highlight');
    for (const node of highlightedNodes) {
        node.classList.remove('highlight');
    }
}







const insertButton = document.getElementById('insertButton');
const insertPopup = document.getElementById('insertPopup');
const insertInput = document.getElementById('insertInput');

function showInsertPopup() {
    insertPopup.style.display = 'block';
}

function hideInsertPopup() {
    insertPopup.style.display = 'none';
}

insertButton.addEventListener('click', showInsertPopup);

function performInsert() {
    const valueToInsert = parseInt(insertInput.value.trim(), 10);
    if (!isNaN(valueToInsert)) {
        binaryTree.insert(valueToInsert);
        updateTreeDisplay();
        hideInsertPopup();
    } else {
        alert('Please enter a valid value to insert.');
    }
}





const minPopup = document.getElementById('minPopup');

function showMinPopup() {
    minPopup.style.display = 'block';
}

function hideMinPopup() {
    minPopup.style.display = 'none';
}

minButton.addEventListener('click', showMinPopup);

function performFindMin() {
    const minValue = findMinValue(binaryTree.root);
    if (minValue !== null) {
        highlightNodeWithValue(minValue);
        hideMinPopup();
    } else {
        alert('The tree is empty.');
    }
}

function findMinValue(node) {
    if (!node) return null;
    hideMinPopup();

    while (node.left) {
        node = node.left;
    }

    return node.value;
}

function highlightNodeWithValue(value) {
    unhighlightAllNodes();
    const nodeToHighlight = findNodeWithValue(binaryTree.root, value);
    if (nodeToHighlight) {
        highlightNode(nodeToHighlight);
        nodeToHighlight.style.backgroundColor = 'black'; // Change background color
        hideMinPopup();
    }
}

function findNodeWithValue(node, value) {
    if (!node) return null;

    if (node.value === value) {
        return node;
    } else if (value < node.value) {
        return findNodeWithValue(node.left, value);
    } else {
        return findNodeWithValue(node.right, value);
    }
}




const maxPopup = document.getElementById('maxPopup');

function showMaxPopup() {
    maxPopup.style.display = 'block';
}

function hideMaxPopup() {
    maxPopup.style.display = 'none';
}

maxButton.addEventListener('click', showMaxPopup);

function performFindMax() {
    const maxValue = findMaxValue(binaryTree.root);
    if (maxValue !== null) {
        highlightNodeWithValue(maxValue);
        hideMaxPopup();
    } else {
        alert('The tree is empty.');
    }
}

function findMaxValue(node) {
    if (!node) return null;
    hideMaxPopup();

    while (node.right) {
        node = node.right;
    }

    return node.value;
}




// const heightButton = document.getElementById('heightButton');
const heightPopup = document.getElementById('heightPopup');
const heightResult = document.getElementById('heightResult');

function showHeightPopup() {
    calculateHeight();
    heightPopup.style.display = 'block';
    setTimeout(hideHeightPopup, 2000); // Hide after 2 seconds
}

function hideHeightPopup() {
    heightPopup.style.display = 'none';
}

heightButton.addEventListener('click', showHeightPopup);

function calculateHeight() {
    const treeHeight = binaryTree.getHeight();
    heightResult.textContent = `Height of the tree: ${treeHeight}`;
}

