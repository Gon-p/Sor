let currentUserName = '';

function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = '🍃 🍀';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDuration = (Math.random() * 3 + 3) + 's';
    heart.style.fontSize = (Math.random() * 10 + 15) + 'px';
    
    document.getElementById('hearts').appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 8000);
}

// Create hearts periodically
setInterval(createHeart, 1000);

// Show gift screen with user name
let backgroundMusic; // Variable para almacenar la música de fondo

function showGift() {
    const nameInput = document.getElementById('nameInput');
    const userName = nameInput.value.trim();

    if (!userName) {
        nameInput.style.borderColor = '#ff6b9d';
        nameInput.placeholder = '¡Por favor, ingresa tu nombre! 😊';
        nameInput.focus();
        return;
    }

    currentUserName = userName;

    // Update all user name elements
    document.getElementById('userName').textContent = userName;
    document.getElementById('userNameInMessage').textContent = userName;
    document.getElementById('userNameInSurprise').textContent = userName;

    // Hide welcome screen and show gift screen
    const welcomeScreen = document.getElementById('welcomeScreen');
    const giftScreen = document.getElementById('giftScreen');

    welcomeScreen.style.display = 'none';
    giftScreen.style.display = 'block';

    // Reset gift screen animation
    giftScreen.style.animation = 'slideUp 1s ease-out forwards';

    // Create celebration hearts
    createMoreHearts();

    // 🎵 Reproducir música de fondo
    if (!backgroundMusic) {
        backgroundMusic = new Audio("NhacChill.mp3"); // reemplaza "music.mp3" por la ruta de tu música
        backgroundMusic.loop = true;
        backgroundMusic.volume = 0.5;
        backgroundMusic.play().catch(err => {
            console.log("No se pudo reproducir la música:", err);
        });
    }
}

// Go back to welcome screen
function goBack() {
    const welcomeScreen = document.getElementById('welcomeScreen');
    const giftScreen = document.getElementById('giftScreen');
    
    giftScreen.style.display = 'none';
    welcomeScreen.style.display = 'block';
    
    // Reset welcome screen animation
    welcomeScreen.style.animation = 'slideUp 1s ease-out forwards';
    
    // Clear the input
    document.getElementById('nameInput').value = '';
    document.getElementById('nameInput').style.borderColor = '#667eea';
    document.getElementById('nameInput').placeholder = 'Ingresa tu nombre...';
}

// Interactive functions for gift screen
function showSurprise() {
    const surpriseText = document.getElementById('surpriseText');
    surpriseText.style.display = surpriseText.style.display === 'block' ? 'none' : 'block';
}

function createMoreHearts() {
    for (let i = 0; i < 15; i++) {
        setTimeout(() => createHeart(), i * 100);
    }
}

const messages = [
    `Enviado a <span class='highlight'>${currentUserName || 'tú'}</span> - ¡mi amor! 💕<br>Gracias por estar en mi vida, compartiendo momentos de <span class='highlight'>alegría y tristeza</span>.<br>¡Nuestro aamor es realmente <span class='highlight'>valiosa</span> y significativa! ✨`,
    `<span class='highlight'>${currentUserName || 'Tú'}</span> eres la <span class='highlight'>luz</span> en mis días oscuros! 🌟<br>¡Gracias por hacer mi vida más <span class='highlight'>significativa</span>! 💫`,
    `Con <span class='highlight'>${currentUserName || 'tú'}</span>, cada día es una nueva <span class='highlight'>aventura</span>! 🎪<br>¡Gracias por los <span class='highlight'>hermosos recuerdos</span> que hemos creado! 🌸`,
    `<span class='highlight'>${currentUserName || 'Tú'}</span> no solo eres mi novia, ¡sino la <span class='highlight'>familia</span> que elegí! 👨‍👩‍👧‍👦<br>¡Gracias por confiar en mí y <span class='highlight'>apoyarme</span>! 💪`
];

let currentMessage = 0;

function changeMessage() {
    // Update messages with current user name
    const updatedMessages = [
        `Enviando a <span class='highlight'>${currentUserName}</span> palabras de aliento! 💕<br>Aunque pequeñas, espero que te ayuden. <br><span class='highlight'>¡Mantente siempre alegre <span class='highlight'>${currentUserName}</span>! 🤗. <br> ¡SE ACABÓ! 😁`,

        `<span class='highlight'>${currentUserName}</span>! La vida no es tan larga como para estar triste 😔,<br> mantén la confianza y olvídate de todo. 🌟<br>La vida tiene infinidad de cosas hermosas ☺️ esperándote más adelante, <br> <span class='highlight'>recíbelas con alegría y encontrarás verdadera felicidad y paz.</span> 💫<br> (Sigue leyendo)`,

        `<span class='highlight'>${currentUserName}</span>, recuerda que hay días en los que nubes ⛈️ negras cubren todo el cielo, luego la lluvia ☔ cae a cántaros, <br>todo alrededor se vuelve blanco, persistente sin parar. <br>🌟Pero luego, el cielo se despeja y las nubes desaparecen 🌤️. La tristeza es así también.<br> <span class='highlight'>¡Esfuérzate por superarlo, estaré siempre a tu lado!</span> 💫<br> (Sigue leyendo)`,

        `Todo el día pensando en cosas sin sentido y entristeciéndote sola 🥹.<br> Nadie te entiende, ni una sola persona; a veces, cuando estás triste o atrapad, no sabes con quién desahogarte 😔. <br>Cuanto más creces, más piensas en cosas profundas 🙄, ojalá el tiempo pudiera retroceder 🍀 para no estar tan triste ni con tantas preocupaciones como ahora. <br>Pase lo que pase, debes ser <span class='highlight'>fuerte,<br> solo se te permite esforzarte, no rendirte.</span>🌸<br> (Sigue leyendo)`,

        `<span class='highlight'>${currentUserName}</span>, la vida es muy justa 😊<br><span class='highlight'>Si la vida te quita algo 😔<br> también te compensará con otra cosa 🥰.</span> <br>Lo importante es si te esfuerzas por buscarlo. <br><span class='highlight'>No te preocupes, estaré contigo.</span>💪<br> (Sigue leyendo)`,

        `Recuerda, <span class='highlight'>${currentUserName}</span>,<br> Puede que tu vida no sea tan hermosa como la de otros 😊<br><span class='highlight'>Pero como es tu vida,<br> esfuérzate por vivirla de la manera más hermosa para ti 🥰.</span> <br>No te preocupes por lo que otros digan o piensen de ti 🤗<br><span class='highlight'>¡Solo sé tú misma! 💯</span><br> (Sigue leyendo)`
    ];
    
    const messageElement = document.getElementById('giftMessage');
    currentMessage = (currentMessage + 1) % updatedMessages.length;
    messageElement.innerHTML = updatedMessages[currentMessage];
    
    // Add animation effect
    messageElement.style.animation = 'fadeInScale 0.5s ease-out';
    setTimeout(() => {
        messageElement.style.animation = '';
    }, 500);
}

// Allow Enter key to submit name
document.getElementById('nameInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        showGift();
    }
});

// Add some initial hearts
for (let i = 0; i < 5; i++) {
    setTimeout(() => createHeart(), i * 200);
}