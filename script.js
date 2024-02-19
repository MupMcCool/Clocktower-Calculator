// Initialize goodTotal and evilTotal
let goodTotal = 0;
let evilTotal = 0;

// Function to handle file submission
function handleFileUpload(event) {
    const fileInput = event.target;
    const resultElement = document.getElementById('result');

    // Check if a file is selected
    if (fileInput.files.length === 0) {
        resultElement.textContent = 'Error: Please select a file.';
        return;
    }

    const file = fileInput.files[0];

    // Check if the file type is JSON
    if (file.type !== 'application/json') {
        resultElement.textContent = 'Error: Only JSON files are allowed.';
        return;
    }

    // Read the file content
    const reader = new FileReader();
    reader.onload = function (e) {
        const jsonContent = e.target.result;
        try {
            const data = JSON.parse(jsonContent);
            if (data.name && data.team) {
                if (data.team === 'good') {
                    goodTotal += data.powerScore || 0;
                } else if (data.team === 'evil') {
                    evilTotal += data.powerScore || 0;
                }
            }
            // Update display
            resultElement.textContent = `Good: ${goodTotal}\nEvil: ${evilTotal}`;
        } catch (error) {
            resultElement.textContent = 'Error parsing JSON data.';
        }
    };
    reader.readAsText(file);
}

// Attach event listener to file input
const fileInput = document.getElementById('jsonInput');
fileInput.addEventListener('change', handleFileUpload);
