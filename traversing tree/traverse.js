
    // Get the buttons

    const inorderButton = document.getElementById('inorderButton');
    const preOrderButton = document.getElementById('preOrderButton');
    const postOrderButton = document.getElementById('postOrderButton');
    const labelOrderButton = document.getElementById('labelOrderButton');



    inorderButton.addEventListener('click', () => {
        const values = inorder(binaryTree.root);
        createArrayBoxes(values);
        updateTraversalTypeHeading('Inorder Traversal'); // Update the heading

    });

    preOrderButton.addEventListener('click', () => {
        const values = preOrder(binaryTree.root);
        createArrayBoxes(values);
        updateTraversalTypeHeading('Preorder Traversal'); // Update the heading

    });

    postOrderButton.addEventListener('click', () => {
        const values = postOrder(binaryTree.root);
        createArrayBoxes(values);
        updateTraversalTypeHeading('Postorder Traversal'); // Update the heading

    });

    labelOrderButton.addEventListener('click', () => {
    const values = labelOrder(binaryTree.root);
    createArrayBoxes(values);
    updateTraversalTypeHeading('Label Order Traversal'); // Update the heading

});

function updateTraversalTypeHeading(type) {
    const traversalTypeElement = document.getElementById('traversalType');
    traversalTypeElement.textContent = type;
}


    function inorder(node) {
        if (!node) return [];
        return [...inorder(node.left), node.value, ...inorder(node.right)];
    }

    function preOrder(node) {
        if (!node) return [];
        return [node.value, ...preOrder(node.left), ...preOrder(node.right)];
    }

    function postOrder(node) {
        if (!node) return [];
        return [...postOrder(node.left), ...postOrder(node.right), node.value];
    }

    function labelOrder(node) {
    if (!node) return [];
    return [node.value, ...labelOrder(node.left), ...labelOrder(node.right)];
}

    function createArrayBoxes(values) {
        const arrayBoxContainer = document.getElementById('arrayBoxContainer');
        arrayBoxContainer.innerHTML = ''; // Clear previous array boxes

        for (const value of values) {
            const arrayBox = document.createElement('div');
            arrayBox.classList.add('array-box');
            arrayBox.textContent = value;
            arrayBoxContainer.appendChild(arrayBox);
        }
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

        // Add other tree-related methods here
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

