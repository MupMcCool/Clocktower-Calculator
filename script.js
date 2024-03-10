// Initialize totals and averages
let goodTotal = 0;
let evilTotal = 0;
let goodAve = 0;
let evilAve = 0;

// Fetch the power scores data
fetch(https://github.com/MupMcCool/Clocktower-Calculator/blob/bc32a880ad42803e00c51507d4250f6f61a6c40b/powerScore.json)
    .then(response => response.json())
    .then(data => localStorage.setItem('powerScores', JSON.stringify(data)));

// Function to process the submitted JSON file
function processFile() {
    const fileInput = document.getElementById('jsonFile');
    const file = fileInput.files[0];

    // Check if the file is a JSON
    if (file.type !== 'application/json') {
        alert('Please submit a JSON file.');
        return;
    }

    // Read the file and process it
    const reader = new FileReader();
    reader.onload = function(event) {
        const submittedData = JSON.parse(event.target.result);
        // ... (rest of the processing logic)
    };
    reader.readAsText(file);
}

// Update the display
function updateDisplay() {
    document.getElementById('goodTotal').textContent = 'Good: ' + goodTotal;
    document.getElementById('evilTotal').textContent = 'Evil: ' + evilTotal;
    document.getElementById('goodAve').textContent = 'Good Average: ' + goodAve;
    document.getElementById('evilAve').textContent = 'Evil Average: ' + evilAve;
}
