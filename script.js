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

    // Navigation from sleep1 -> eating
    document.getElementById('sleep1').addEventListener('click', () => {
        document.querySelector('#sleepPage').style.display = 'none';
        document.querySelector('#eatPage').style.display = 'block';
    });

    // Navigation from sleep2 -> napDone
    document.getElementById('nap-done').addEventListener('click', () => {
        document.querySelector('#sleep2Page').style.display = 'none';
        document.querySelector('#eatPage').style.display = 'block';
    });

    // Navigation from eating -> eat2
    document.getElementById('eat2').addEventListener('click', () => {
        document.querySelector('#eatPage').style.display = 'none';
        document.querySelector('#eatPage2').style.display = 'block';
    });

    // Navigation from eat2 -> exercise
    document.getElementById('eat-done').addEventListener('click', () => {
        document.querySelector('#eatPage2').style.display = 'none';
        document.querySelector('#exercisePage').style.display = 'block';
    });
    // Navigation from eat1 -> exercise
    document.getElementById('eat1').addEventListener('click', () => {
        document.querySelector('#eatPage').style.display = 'none';
        document.querySelector('#exercisePage').style.display = 'block';
    });
    // Navigation from exercise -> exercise2
    document.getElementById('exercise2').addEventListener('click', () => {
        document.querySelector('#exercisePage').style.display = 'none';
        document.querySelector('#exercise2Page').style.display = 'block';
    });
    // Navigation from exercise1 -> hobby
    document.getElementById('exercise1').addEventListener('click', () => {
        document.querySelector('#exercisePage').style.display = 'none';
        document.querySelector('#hobbyPage').style.display = 'block';
    });
    // Navigation from exerciseDone-> hobbyPage
    document.getElementById('exercise-done').addEventListener('click', () => {
        document.querySelector('#exercise2Page').style.display = 'none';
        document.querySelector('#hobbyPage').style.display = 'block';
    });
    // Navigation from hobby -> hobby2
    document.getElementById('hobby2').addEventListener('click', () => {
        document.querySelector('#hobbyPage').style.display = 'none';
        document.querySelector('#hobby2Page').style.display = 'block';
    });
    // Navigation from hobby1 -> social
    document.getElementById('hobby1').addEventListener('click', () => {
        document.querySelector('#hobbyPage').style.display = 'none';
        document.querySelector('#socialPage').style.display = 'block';
    });
    // Navigation from hobbydone -> social
    document.getElementById('hobby-done').addEventListener('click', () => {
        document.querySelector('#hobby2Page').style.display = 'none';
        document.querySelector('#socialPage').style.display = 'block';
    });
    // Navigation from social -> social2
    document.getElementById('social2').addEventListener('click', () => {
        document.querySelector('#socialPage').style.display = 'none';
        document.querySelector('#social2Page').style.display = 'block';
    });
    // Navigation from social1 -> end
    document.getElementById('social1').addEventListener('click', () => {
        document.querySelector('#socialPage').style.display = 'none';
        document.querySelector('#finalPage').style.display = 'block';
    });
    // Navigation from social2 -> end
    document.getElementById('social-done').addEventListener('click', () => {
        document.querySelector('#social2Page').style.display = 'none';
        document.querySelector('#finalPage').style.display = 'block';
    });
})

function goBack(shown, hidden) {
  document.querySelector('#' + hidden).style.display='none';
  document.querySelector('#' + shown).style.display='block';
}

function togglePopup(popupID){
    document.getElementById(popupID).classList.toggle("active");
}