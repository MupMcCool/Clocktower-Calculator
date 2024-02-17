document.getElementById('jsonForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const fileInput = document.getElementById('jsonInput');
    const resultElement = document.getElementById('result');

    if (fileInput.files.length === 0) {
        resultElement.textContent = 'Error: Please select a JSON file.';
        return;
    }

    const file = fileInput.files[0];
    if (file.type !== 'application/json') {
        resultElement.textContent = 'Error: Only JSON files are allowed.';
        return;
    }

    // Handle successful submission (you can customize this part)
    resultElement.textContent = 'Success! JSON file submitted.';
});
