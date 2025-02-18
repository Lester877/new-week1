// Initialize the click count
let clickCount = 0;

// Get references to the button and the span element
const clickButton = document.getElementById('clickButton');
const clickCountDisplay = document.getElementById('clickCount');

// Add an event listener to the button
clickButton.addEventListener('click', () => {
    // Increment the click count
    clickCount++;
    
    // Update the display with the new click count
    clickCountDisplay.textContent = clickCount;
});