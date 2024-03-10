// script.js
// Developer Note: Initialize the totals and fetch the reference data on load
let goodTotal = 0;
let evilTotal = 0;
let referenceData = {};

window.onload = function() {
    fetch(powerScore.json)
    .then(response => response.json())
    .then(data => referenceData = data);
};

// Developer Note: Set up the file input listener to handle JSON file submissions
document.getElementById('jsonFileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file.type !== "application/json") {
        alert('Please submit a JSON file.');
        return;
    }
    const reader = new FileReader();
    reader.onload = function(e) {
        const userJson = JSON.parse(e.target.result);
        // Developer Note: Compare user JSON to reference and update totals
        userJson.forEach(item => {
            const referenceItem = referenceData.find(ref => ref.name === item.name);
            if (referenceItem) {
                if (referenceItem.team === 'good') {
                    goodTotal += referenceItem.powerScore;
                } else if (referenceItem.team === 'evil') {
                    evilTotal += referenceItem.powerScore;
                }
                // Developer Note: Display used IDs
                document.getElementById('usedIds').innerHTML += `<p>${referenceItem.id} - ${referenceItem.team} - ${referenceItem.powerScore}</p>`;
            }
        });
        // Developer Note: Update the scoreboard
        document.getElementById('goodTotal').textContent = goodTotal;
        document.getElementById('evilTotal').textContent = evilTotal;
    };
    reader.readAsText(file);
});
