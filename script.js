document.addEventListener('DOMContentLoaded', () => {
    // Show main page
    document.querySelector('#mainPage').style.display = 'block';

    // Navigation from mainPage -> introPage
    document.getElementById('play-button').addEventListener('click', () => {
        document.querySelector('#mainPage').style.display = 'none';
        document.querySelector('#introPage').style.display = 'block';
    })

    // Navigation from introPage -> sleepPage
    document.getElementById('introButton').addEventListener('click', () => {
        document.querySelector('#introPage').style.display = 'none';
        document.querySelector('#sleepPage').style.display = 'block';
    });

    // Navigation from sleepPage -> sleep2
    document.getElementById('sleep2').addEventListener('click', () => {
        document.querySelector('#sleepPage').style.display = 'none';
        document.querySelector('#sleep2Page').style.display = 'block';
    });

    // Navigation from sleep2 -> eating
    document.getElementById('sleep2').addEventListener('click', () => {
        document.querySelector('#sleepPage').style.display = 'none';
        document.querySelector('#sleep2Page').style.display = 'block';
    });

    // Navigation from sleep1 -> eating
    document.getElementById('sleep2').addEventListener('click', () => {
        document.querySelector('#sleepPage').style.display = 'none';
        document.querySelector('#sleep2Page').style.display = 'block';
    });

    // Navigation from eating -> eat1
    document.getElementById('sleep2').addEventListener('click', () => {
        document.querySelector('#sleepPage').style.display = 'none';
        document.querySelector('#sleep2Page').style.display = 'block';
    });
    // Navigation from sleepPage -> sleep2
    document.getElementById('sleep2').addEventListener('click', () => {
        document.querySelector('#sleepPage').style.display = 'none';
        document.querySelector('#sleep2Page').style.display = 'block';
    });
    // Navigation from sleepPage -> sleep2
    document.getElementById('sleep2').addEventListener('click', () => {
        document.querySelector('#sleepPage').style.display = 'none';
        document.querySelector('#sleep2Page').style.display = 'block';
    });
    // Navigation from sleepPage -> sleep2
    document.getElementById('sleep2').addEventListener('click', () => {
        document.querySelector('#sleepPage').style.display = 'none';
        document.querySelector('#sleep2Page').style.display = 'block';
    });
    // Navigation from sleepPage -> sleep2
    document.getElementById('sleep2').addEventListener('click', () => {
        document.querySelector('#sleepPage').style.display = 'none';
        document.querySelector('#sleep2Page').style.display = 'block';
    });
    // Navigation from sleepPage -> sleep2
    document.getElementById('sleep2').addEventListener('click', () => {
        document.querySelector('#sleepPage').style.display = 'none';
        document.querySelector('#sleep2Page').style.display = 'block';
    });
    // Navigation from sleepPage -> sleep2
    document.getElementById('sleep2').addEventListener('click', () => {
        document.querySelector('#sleepPage').style.display = 'none';
        document.querySelector('#sleep2Page').style.display = 'block';
    });
    // Navigation from sleepPage -> sleep2
    document.getElementById('sleep2').addEventListener('click', () => {
        document.querySelector('#sleepPage').style.display = 'none';
        document.querySelector('#sleep2Page').style.display = 'block';
    });
})

function updateSleepTip() {
    document.getElementById("sleepTip").innerHTML = "Make your bedroom a cozy, comfortable place for sleep.";
}

function updateSleepFunFact() {
    document.getElementById("sleepFunFact").innerHTML = "Sea otters hold hands while they sleep to stay together!";
}
