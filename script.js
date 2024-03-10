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
        // Retrieve the power scores from local storage
        const powerScores = JSON.parse(localStorage.getItem('powerScores'));
        let goodCount = 0;
        let evilCount = 0;

        // Iterate over each role in the submitted JSON
        submittedData.forEach(submittedRole => {
            // Find the matching role in the power scores
            const matchingRole = powerScores.find(role => role.role === submittedRole.role);
            if (matchingRole) {
                // Check the alignment and add to the respective total
                if (matchingRole.alignment === 'good') {
                    goodTotal += matchingRole.powerScore;
                    goodCount++;
                } else if (matchingRole.alignment === 'evil') {
                    evilTotal += matchingRole.powerScore;
                    evilCount++;
                }
            }
        });

        // Calculate averages
        goodAve = goodCount > 0 ? goodTotal / goodCount : 0;
        evilAve = evilCount > 0 ? evilTotal / evilCount : 0;

        // Update the display
        updateDisplay();
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
