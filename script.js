// Initialize totals
let goodTotal = 0;
let evilTotal = 0;

// Read powerScore.json (assuming it's available locally)
// You can fetch it from a server if needed
// Example powerScore.json: { "id": "Superman", "team": "good", "powerScore": 100 }
const powerScoreData = [
    // Add your powerScore.json data here
    // ...
    [
{
"name": "snake_charmer",
"powerScore": 130,
"team": "good"
},
{
"name": "poppy_grower",
"powerScore": 124,
"team": "good"
},
{
"name": "professor",
"powerScore": 123,
"team": "good"
},
{
"name": "virgin",
"powerScore": 122,
"team": "good"
},
{
"name": "high_priestess",
"powerScore": 121,
"team": "good"
},
{
"name": "philosopher",
"powerScore": 120,
"team": "good"
},
{
"name": "dreamer",
"powerScore": 115,
"team": "good"
},
{
"name": "clockmaker",
"powerScore": 113,
"team": "good"
},
{
"name": "farmer",
"powerScore": 109,
"team": "good"
},
{
"name": "fortune_teller",
"powerScore": 108,
"team": "good"
},
{
"name": "chef",
"powerScore": 105,
"team": "good"
},
{
"name": "sage",
"powerScore": 103,
"team": "good"
},
{
"name": "washerwoman",
"powerScore": 100,
"team": "good"
},
{
"name": "investigator",
"powerScore": 97,
"team": "good"
},
{
"name": "grandmother",
"powerScore": 96,
"team": "good"
},
{
"name": "savant",
"powerScore": 95,
"team": "good"
},
{
"name": "flowergirl",
"powerScore": 94,
"team": "good"
},
{
"name": "lycanthrope",
"powerScore": 93,
"team": "good"
},
{
"name": "nightwatchman",
"powerScore": 91,
"team": "good"
},
{
"name": "slayer",
"powerScore": 90,
"team": "good"
},
{
"name": "alchemist",
"powerScore": 89,
"team": "good"
},
{
"name": "chambermaid",
"powerScore": 88,
"team": "good"
},
{
"name": "courtier",
"powerScore": 84,
"team": "good"
},
{
"name": "choirboy",
"powerScore": 83,
"team": "good"
},
{
"name": "cannibal",
"powerScore": 82,
"team": "good"
},
{
"name": "oracle",
"powerScore": 81,
"team": "good"
},
{
"name": "king",
"powerScore": 80,
"team": "good"
},
{
"name": "undertaker",
"powerScore": 79,
"team": "good"
},
{
"name": "exorcist",
"powerScore": 78,
"team": "good"
},
{
"name": "empath",
"powerScore": 77,
"team": "good"
},
{
"name": "minstrel",
"powerScore": 76,
"team": "good"
},
{
"name": "tea_lady",
"powerScore": 75,
"team": "good"
},
{
"name": "ravenkeeper",
"powerScore": 74,
"team": "good"
},
{
"name": "engineer",
"powerScore": 73,
"team": "good"
},
{
"name": "mayor",
"powerScore": 72,
"team": "good"
},
{
"name": "bounty_hunter",
"powerScore": 71,
"team": "good"
},
{
"name": "gossip",
"powerScore": 68,
"team": "good"
},
{
"name": "noble",
"powerScore": 65,
"team": "good"
},
{
"name": "balloonist",
"powerScore": 64,
"team": "good"
},
{
"name": "shugenja",
"powerScore": 63,
"team": "good"
},
{
"name": "pixie",
"powerScore": 62,
"team": "good"
},
{
"name": "preacher",
"powerScore": 61,
"team": "good"
},
{
"name": "town_crier",
"powerScore": 61,
"team": "good"
},
{
"name": "village_idiot",
"powerScore": 59,
"team": "good"
},
{
"name": "artist",
"powerScore": 58,
"team": "good"
},
{
"name": "magician",
"powerScore": 57,
"team": "good"
},
{
"name": "mathematician",
"powerScore": 56,
"team": "good"
},
{
"name": "innkeeper",
"powerScore": 55,
"team": "good"
},
{
"name": "monk",
"powerScore": 53,
"team": "good"
},
{
"name": "librarian",
"powerScore": 51,
"team": "good"
},
{
"name": "seamstress",
"powerScore": 50,
"team": "good"
},
{
"name": "knight",
"powerScore": 49,
"team": "good"
},
{
"name": "steward",
"powerScore": 48,
"team": "good"
},
{
"name": "soldier",
"powerScore": 47,
"team": "good"
},
{
"name": "juggler",
"powerScore": 46,
"team": "good"
},
{
"name": "fisherman",
"powerScore": 45,
"team": "good"
},
{
"name": "amnesiac",
"powerScore": 44,
"team": "good"
},
{
"name": "gambler",
"powerScore": 43,
"team": "good"
},
{
"name": "sailor",
"powerScore": 41,
"team": "good"
},
{
"name": "general",
"powerScore": 40,
"team": "good"
},
{
"name": "fool",
"powerScore": 39,
"team": "good"
},
{
"name": "pacifist",
"powerScore": 38,
"team": "good"
},
{
"name": "atheist",
"powerScore": 35,
"team": "good"
},
{
"name": "cult_leader",
"powerScore": 23,
"team": "good"
},
{
"name": "huntsman",
"powerScore": 13,
"team": "good"
},
{
"name": "acrobat",
"powerScore": 20,
"team": "good"
},
{
"name": "golem",
"powerScore": 14,
"team": "good"
},
{
"name": "puzzlemaster",
"powerScore": 14,
"team": "good"
},
{
"name": "lunatic",
"powerScore": 7,
"team": "good"
},
{
"name": "tinker",
"powerScore": 5,
"team": "good"
},
{
"name": "moonchild",
"powerScore": 4,
"team": "good"
},
{
"name": "heretic",
"powerScore": 3,
"team": "good"
},
{
"name": "mutant",
"powerScore": 0,
"team": "good"
},
{
"name": "recluse",
"powerScore": -1,
"team": "good"
},
{
"name": "snitch",
"powerScore": -3,
"team": "good"
},
{
"name": "sweetheart",
"powerScore": -4,
"team": "good"
},
{
"name": "drunk",
"powerScore": -6,
"team": "good"
},
{
"name": "barber",
"powerScore": -7,
"team": "good"
},
{
"name": "hatter",
"powerScore": -9,
"team": "good"
},
{
"name": "plague_doctor",
"powerScore": -10,
"team": "good"
},
{
"name": "politician",
"powerScore": -12,
"team": "good"
},
{
"name": "goon",
"powerScore": -14,
"team": "good"
},
{
"name": "damsel",
"powerScore": -15,
"team": "good"
},
{
"name": "klutz",
"powerScore": -16,
"team": "good"
},
{
"name": "saint",
"powerScore": -20,
"team": "good"
},
{
"name": "goblin",
"powerScore": 105,
"team": "evil"
},
{
"name": "mezepheles",
"powerScore": 104,
"team": "evil"
},
{
"name": "pit-hag",
"powerScore": 103,
"team": "evil"
},
{
"name": "devils_advocate",
"powerScore": 95,
"team": "evil"
},
{
"name": "cerenovus",
"powerScore": 92,
"team": "evil"
},
{
"name": "marionette",
"powerScore": 82,
"team": "evil"
},
{
"name": "baron",
"powerScore": 77,
"team": "evil"
},
{
"name": "godfather",
"powerScore": 76,
"team": "evil"
},
{
"name": "poisoner",
"powerScore": 72,
"team": "evil"
},
{
"name": "evil_twin",
"powerScore": 70,
"team": "evil"
},
{
"name": "witch",
"powerScore": 69,
"team": "evil"
},
{
"name": "mastermind",
"powerScore": 68,
"team": "evil"
},
{
"name": "psychopath",
"powerScore": 67,
"team": "evil"
},
{
"name": "fearmonger",
"powerScore": 66,
"team": "evil"
},
{
"name": "boomdandy",
"powerScore": 65,
"team": "evil"
},
{
"name": "scarlet_woman",
"powerScore": 63,
"team": "evil"
},
{
"name": "assassin",
"powerScore": 62,
"team": "evil"
},
{
"name": "spy",
"powerScore": 49,
"team": "evil"
},
{
"name": "widow",
"powerScore": 47,
"team": "evil"
},
{
"name": "harpy",
"powerScore": 45,
"team": "evil"
},
{
"name": "organ_grinder",
"powerScore": 44,
"team": "evil"
},
{
"name": "vizier",
"powerScore": 42,
"team": "evil"
},
{
"name": "fang_gu",
"powerScore": 60,
"team": "evil"
},
{
"name": "vortox",
"powerScore": 52,
"team": "evil"
},
{
"name": "imp",
"powerScore": 50,
"team": "evil"
},
{
"name": "po",
"powerScore": 48,
"team": "evil"
},
{
"name": "no_dashii",
"powerScore": 47,
"team": "evil"
},
{
"name": "al-hadikhia",
"powerScore": 40,
"team": "evil"
},
{
"name": "lil_monsta",
"powerScore": 38,
"team": "evil"
},
{
"name": "riot",
"powerScore": 35,
"team": "evil"
},
{
"name": "leviathan",
"powerScore": 34,
"team": "evil"
},
{
"name": "legion",
"powerScore": 33,
"team": "evil"
},
{
"name": "pukka",
"powerScore": 32,
"team": "evil"
},
{
"name": "shabaloth",
"powerScore": 31,
"team": "evil"
},
{
"name": "ojo",
"powerScore": 30,
"team": "evil"
},
{
"name": "kazali",
"powerScore": 29,
"team": "evil"
},
{
"name": "lleech",
"powerScore": 28,
"team": "evil"
},
{
"name": "vigormortis",
"powerScore": 27,
"team": "evil"
},
{
"name": "zombuul",
"powerScore": 26,
"team": "evil"
}
]
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