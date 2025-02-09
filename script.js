const drumKeys = document.querySelectorAll('.drumKey');

const sounds = {
    'A': new Audio('sounds/clap.wav'),
    'S': new Audio('sounds/hihat.wav'),
    'D': new Audio('sounds/kick.wav'),
    'F': new Audio('sounds/openhat.wav'),
    'G': new Audio('sounds/boom.wav'),
    'H': new Audio('sounds/ride.wav'),
    'J': new Audio('sounds/snare.wav'),
    'K': new Audio('sounds/tom.wav'),
    'L': new Audio('sounds/tink.wav')
};

const drumKeyMap = {};
drumKeys.forEach((drumKey) => {
    const key = drumKey.getAttribute('data-key');
    drumKeyMap[key] = drumKey;
});

document.addEventListener('keydown', (event) => {
    const keyPressed = event.key.toUpperCase();
    const drumKey = drumKeyMap[keyPressed];
    const sound = sounds[keyPressed];

    if (!drumKey || !sound) return;

    drumKey.classList.add("playing")
    sound.currentTime = 0;
    sound.play();

    setTimeout(() => {
        drumKey.classList.remove("playing");
    }, 100);
});