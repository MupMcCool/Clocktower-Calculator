// Initialize goodTotal and evilTotal
let goodTotal = 0;
let evilTotal = 0;

// Fetch data from powerScore.json (replace with your actual data source)
// For now, let's assume the data is an array of objects with 'id', 'team', and 'powerScore' properties
const powerScoreData = [
    // Example data (replace with actual data)
    { id: 1, name: 'Batman', team: 'good', powerScore: 100 },
    { id: 2, name: 'Joker', team: 'evil', powerScore: 80 },
    // ...
];

// Function to handle file submission
function handleFileUpload(event) {
    const file = event.target.files[0];
    if (!file || file.type !== 'application/json') {
        alert('Please upload a valid JSON file.');
        return;
    }

    const reader = new FileReader();
    reader.onload = function (e) {
        const submittedData = JSON.parse(e.target.result);
        submittedData.forEach(item => {
            const matchingPowerScore = powerScoreData.find(dataItem => dataItem.id === item.id);
            if (matchingPowerScore) {
                if (matchingPowerScore.team === 'good') {
                    goodTotal += matchingPowerScore.powerScore;
                } else if (matchingPowerScore.team === 'evil') {
                    evilTotal += matchingPowerScore.powerScore;
                }
            }
        });

        // Update UI
        document.getElementById('goodTotal').textContent = goodTotal;
        document.getElementById('evilTotal').textContent = evilTotal;
    };
    reader.readAsText(file);
}

// Attach event listener to file input
const fileInput = document.createElement('input');
fileInput.type = 'file';
fileInput.accept = '.json';
fileInput.addEventListener('change', handleFileUpload);
document.body.appendChild(fileInput);

// Display id values from powerScoreData
const idValuesContainer = document.getElementById('idValues');
powerScoreData.forEach(item => {
    const idElement = document.createElement('p');
    idElement.textContent = `ID: ${item.id}, Team: ${item.team}, Value: ${item.powerScore}`;
    idValuesContainer.appendChild(idElement);
});

// Animation: Small image moving around the screen
const smallImage = document.createElement('img');
smallImage.src = 'https://i.ibb.co/JH6rg0Z/image244.png';
smallImage.style.position = 'absolute';
smallImage.style.width = '50px'; // Adjust size as needed
document.body.appendChild(smallImage);

// Animation logic (modify as desired)
let x = 0;
let y = 0;
let dx = 2; // Horizontal speed
let dy = 1; // Vertical speed

function animate() {
    x += dx;
    y += dy;
    smallImage.style.left = x + 'px';
    smallImage.style.top = y + 'px';

    // Bounce off screen borders
    if (x + smallImage.width >= window.innerWidth || x <= 0) {
        dx *= -1;
    }
    if (y + smallImage.height >= window.innerHeight || y <= 0) {
        dy *= -1;
    }

    requestAnimationFrame(animate);
}

// Start the animation
animate();
