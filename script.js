// script.js

// Function to handle button click events
function selectOption(option) {
    // Check which option was clicked
    if (option === 'Sim') {
        // Flash rainbow colors
        flashRainbowColors(function() {
            document.getElementById('question').style.display = 'none'; // Hide the question
            displaySosa(); // Display the sosa.gif
        });
    } else if (option === 'Nom') {
        // Change text on the "Nom" button to "¿Seguro?"
        document.getElementById('Nom-button').innerText = '¿Seguro?'; 
        // Increase font size of "Sim" button
        var SimButton = document.getElementById('Sim-button');
        var currentFontSize = window.getComputedStyle(SimButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2; // Increase font size by  * 2px
        SimButton.style.fontSize = newSize + 'px';
    } else {
        // If neither "Sim" nor "Nom" was clicked, show an alert message
        alert('¡Responde!');
    }
}

// Function to flash rainbow colors and then execute a callback function
function flashRainbowColors(callback) {
    var colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
    var i = 0;
    var interval = setInterval(function() {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200); // Change color every 200 milliseconds
    setTimeout(function() {
        clearInterval(interval);
        document.body.style.backgroundColor = ''; // Reset background color
        if (callback) {
            callback();
        }
    }, 2000); // Flash colors for 2 seconds
}

// Function to display the loveyou.gif initially
function displayLoveyou() {
    // Get the container where the image will be displayed
    var imageContainer = document.getElementById('image-container');
    // Create a new Image element for Loveyou
    var LoveyouImage = new Image();
    // Set the source (file path) for the Loveyou image
    LoveyouImage.src = 'loveyou.gif'; // Assuming the image is named "loveyou.gif"
    // Set alternative text for the image (for accessibility)
    LoveyouImage.alt = 'Loveyou';
    // When the cupid image is fully loaded, add it to the image container
    LoveyouImage.onload = function() {
        imageContainer.appendChild(LoveyouImage);
    };
}

// Function to display the sosa.gif
function displaySosa() {
    // Clear existing content in the image container
    document.getElementById('image-container').innerHTML = '';
    // Get the container where the image will be displayed
    var imageContainer = document.getElementById('image-container');
    // Create a new Image element for Sosa
    var SosaImage = new Image();
    // Set the source (file path) for the Sosa image
    SosaImage.src = 'sosa.gif'; // Assuming the cat-heart image is named "sosa.gif"
    // Set alternative text for the image (for accessibility)
    SosaImage.alt = 'Sosa';
    // When the Sosa image is fully loaded, add it to the image container
    SosaImage.onload = function() {
        imageContainer.appendChild(SosaImage);
        // Hide the options container
        document.getElementById('options').style.display = 'none';
    };
}

// Display the loveyou.gif initially
displayLoveyou();
