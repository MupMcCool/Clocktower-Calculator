// Initialize totals
let goodTotal = 0;
let evilTotal = 0;

// Read powerScore.json (assuming it's available locally)
// You can fetch it from a server if needed
// Example powerScore.json: { "id": "Superman", "team": "good", "powerScore": 100 }
const powerScoreData = [
    // Add your powerScore.json data here
    // ...
];

// Handle file upload
function handleFileUpload() {
    const fileInput = document.getElementById('jsonFileInput');
    const file = fileInput.files[0];

    if (!file) {
        document.getElementById('errorMessage').textContent = 'Please select a file.';
        return;
    }

    if (file.type !== 'application/json') {
        document.getElementById('errorMessage').textContent = 'Invalid file type. Please upload a JSON file.';
        return;
    }

    const reader = new FileReader();
    reader.onload = handleFileRead;
    reader.readAsText(file);
}

// Handle file read
function handleFileRead(event) {
    const jsonContent = event.target.result;
    try {
        const submittedData = JSON.parse(jsonContent);
        const matchingPowerScore = powerScoreData.find(item => item.id === submittedData.id);

        if (matchingPowerScore) {
            if (matchingPowerScore.team === 'good') {
                goodTotal += matchingPowerScore.powerScore;
            } else if (matchingPowerScore.team === 'evil') {
                evilTotal += matchingPowerScore.powerScore;
            }
        } else {
            document.getElementById('errorMessage').textContent = 'No matching data found in powerScore.json.';
        }

        // Update totals on the webpage
        document.getElementById('goodTotal').textContent = goodTotal;
        document.getElementById('evilTotal').textContent = evilTotal;
    } catch (error) {
        document.getElementById('errorMessage').textContent = 'Error parsing JSON file.';
    }
}
