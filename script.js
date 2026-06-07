// Yaha aap apne questions aur unke sahi answers set karenge
// correctAnswer: 0 (matlab pehla option), 1 (dusra), 2 (teesra), 3 (chautha)
const quizData = [
    {
        question: "Bermuda map me sabse zyada loot kaha milti hai?",
        options: ["Clock Tower", "Bimasakti Strip", "Pochinok", "Factory"],
        correctAnswer: 0 
    },
    {
        question: "Inme se konsi gun close range me sabse best hai?",
        options: ["MP40", "AWM", "M14", "SKS"],
        correctAnswer: 0 
    },
    {
        question: "Alok character ki ability ka naam kya hai?",
        options: ["Time Turner", "Drop the Beat", "Riptide Rhythm", "Master of All"],
        correctAnswer: 1 
    },
    {
        question: "FreeFire Max me maximum kitne players ek room me khel sakte hai (Classic)?",
        options: ["40", "50", "60", "100"],
        correctAnswer: 1 
    },
    {
        question: "K character ki ability konsi hai?",
        options: ["Master of All", "Drop the Beat", "Camouflage", "Hacker's Eye"],
        correctAnswer: 0 
    },
    {
        question: "AWM ka pura naam kya hai?",
        options: ["Arctic Warfare Magnum", "Auto Weapon Machine", "Assault Warfare Magnum", "Arctic Weapon Maker"],
        correctAnswer: 0 
    },
    {
        question: "Peak location kis map me hai?",
        options: ["Purgatory", "Kalahari", "Bermuda", "Alpine"],
        correctAnswer: 2 
    },
    {
        question: "Konsa pet Gloo Wall banata hai?",
        options: ["Detective Panda", "Mr. Waggor", "Falco", "Beaston"],
        correctAnswer: 1 
    },
    {
        question: "FreeFire ka pehla Elite Pass konsa tha?",
        options: ["Hip Hop Festival", "Kitsune", "Sakura Festival", "Steampunk"],
        correctAnswer: 2 
    },
    {
        question: "Red damage number ka matlab kya hota hai?",
        options: ["Body Shot", "Headshot", "Armor Hit", "Missed Shot"],
        correctAnswer: 1 
    },
    {
        question: "Groza gun kis ammo ka use karti hai?",
        options: ["SMG Ammo", "AR Ammo", "Shotgun Ammo", "Sniper Ammo"],
        correctAnswer: 1 
    },
    {
        question: "CS (Clash Squad) mode me kitne rounds jeetne par match khatam hota hai?",
        options: ["3 Rounds", "4 Rounds", "5 Rounds", "7 Rounds"],
        correctAnswer: 1 
    }
];

const container = document.getElementById('quiz-container');

function loadQuiz() {
    quizData.forEach((item, index) => {
        const qNum = index + 1;
        let optionsHTML = '';

        item.options.forEach((opt, optIndex) => {
            optionsHTML += `
                <div class="option-row">
                    <div class="option-text">${opt}</div>
                    <div class="player-checks">
                        <label class="player-label radhe" title="Radhe">
                            <input type="radio" name="q${qNum}_radhe" value="${optIndex}">
                            R
                        </label>
                        <label class="player-label shivam" title="Shivam">
                            <input type="radio" name="q${qNum}_shivam" value="${optIndex}">
                            S
                        </label>
                        <label class="player-label yash" title="Yash">
                            <input type="radio" name="q${qNum}_yash" value="${optIndex}">
                            Y
                        </label>
                    </div>
                </div>
            `;
        });

        const cardHTML = `
            <div class="question-card">
                <h3 class="question-title">Q${qNum}. ${item.question}</h3>
                <div class="options-container">
                    ${optionsHTML}
                </div>
            </div>
        `;
        
        container.innerHTML += cardHTML;
    });
}

function submitQuiz() {
    let scores = {
        radhe: 0,
        shivam: 0,
        yash: 0
    };

    quizData.forEach((item, index) => {
        const qNum = index + 1;
        
        const radheAns = document.querySelector(`input[name="q${qNum}_radhe"]:checked`);
        const shivamAns = document.querySelector(`input[name="q${qNum}_shivam"]:checked`);
        const yashAns = document.querySelector(`input[name="q${qNum}_yash"]:checked`);

        if (radheAns && parseInt(radheAns.value) === item.correctAnswer) scores.radhe++;
        if (shivamAns && parseInt(shivamAns.value) === item.correctAnswer) scores.shivam++;
        if (yashAns && parseInt(yashAns.value) === item.correctAnswer) scores.yash++;
    });

    const resultBox = document.getElementById('result-box');
    resultBox.classList.remove('hidden');
    
    resultBox.innerHTML = `
        <h2 class="result-title">🎯 SQUAD SCORES 🎯</h2>
        <div class="score-row">
            <span class="score-name radhe">RADHE</span>
            <span class="score-points">${scores.radhe} / 12</span>
        </div>
        <div class="score-row">
            <span class="score-name shivam">SHIVAM</span>
            <span class="score-points">${scores.shivam} / 12</span>
        </div>
        <div class="score-row">
            <span class="score-name yash">YASH</span>
            <span class="score-points">${scores.yash} / 12</span>
        </div>
    `;
    
    resultBox.scrollIntoView({ behavior: 'smooth' });
}

window.onload = loadQuiz;