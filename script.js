// Function to update the totals and averages
function updateTotals(role, powerScore, alignment) {
  if (alignment === 'good') {
    goodTotal += powerScore;
    goodCount++;
  } else if (alignment === 'evil') {
    evilTotal += powerScore;
    evilCount++;
  }
  // Update averages
  goodAve = goodCount > 0 ? goodTotal / goodCount : 0;
  evilAve = evilCount > 0 ? evilTotal / evilCount : 0;
}

// Function to process the submitted JSON file
function processJSONFile(file) {
  const reader = new FileReader();
  reader.onload = function(event) {
    try {
      const submittedData = JSON.parse(event.target.result);
      const powerScores = JSON.parse(localStorage.getItem('powerScores'));
      // Iterate through the submitted JSON roles
      submittedData.forEach(submittedRole => {
        // Find the matching role in powerScores
        const matchingRole = powerScores.find(role => role.role === submittedRole.role);
        if (matchingRole) {
          updateTotals(matchingRole.role, matchingRole.powerScore, matchingRole.alignment);
        }
      });
      // Update the DOM with the new totals and averages
      document.getElementById('results').innerHTML = `Good: ${goodTotal}<br>Evil: ${evilTotal}<br>Good Average: ${goodAve}<br>Evil Average: ${evilAve}`;
    } catch (error) {
      alert('There was an error processing the JSON file: ' + error.message);
    }
  };
  reader.readAsText(file);
}

// Add event listener for form submission
document.getElementById('jsonForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const file = document.getElementById('jsonFile').files[0];
  if (file && file.type === "application/json") {
    processJSONFile(file);
  } else {
    alert('Please submit a JSON file.');
  }
});
