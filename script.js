// script.js
const goodTotal = 0;
const evilTotal = 0;

// Fetch data from the provided URL (powerScore.json) and store it in local storage
// You can use fetch() or any other method to retrieve the JSON data

// Event listener for file input
const fileInput = document.querySelector('#fileInput');
fileInput.addEventListener('change', handleFileUpload);

function handleFileUpload(event) {
    const file = event.target.files[0];
    if (!file) {
        showError('Please select a file.');
        return;
    }

    if (file.type !== 'application/json') {
        showError('Invalid file type. Please upload a JSON file.');
        return;
    }

    const reader = new FileReader();
    reader.onload = handleFileRead;
    reader.readAsText(file);
}

function handleFileRead(event) {
    try {
        const jsonData = JSON.parse(event.target.result);
        if (jsonData.id && jsonData.team && jsonData.value) {
            if (jsonData.team === 'good') {
                goodTotal += jsonData.value;
            } else if (jsonData.team === 'evil') {
                evilTotal += jsonData.value;
            }
            updateTotals();
            displayIdValues(jsonData.id, jsonData.team, jsonData.value);
        } else {
            showError('Invalid JSON format. Missing required fields.');
        }
    } catch (error) {
        showError('Error parsing JSON data.');
    }
}

function updateTotals() {
    document.getElementById('goodTotal').textContent = goodTotal;
    document.getElementById('evilTotal').textContent = evilTotal;
}

function displayIdValues(id, team, value) {
    const idValuesDiv = document.getElementById('idValues');
    const idValueElement = document.createElement('p');
    idValueElement.textContent = `ID: ${id} | Team: ${team} | Value: ${value}`;
    idValuesDiv.appendChild(idValueElement);
}

function showError(message) {
    alert(message);
}
