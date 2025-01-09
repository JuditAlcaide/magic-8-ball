const inicio = document.getElementById('inicio');
const btnempezar = document.getElementById('empezar');
const game = document.getElementById('gameC');

btnempezar.addEventListener('click', () => {
    inicio.style.display = 'none';
    game.style.display = 'block';
});

document.getElementById('btnpregunta').addEventListener('click', function() {
    const pregunta = document.getElementById('pregunta').value;
    const respuestas = [
        "Yo digo no",
        "Yo digo si",
        "Claro que SÍ, reina",
        "No lo veo claro, pregunta de nuevo...",
        "Yo no contaría con ello...",
        "Puede ser, el límite es tu imaginación...",
        "Por supuesto que SÍ",
        "Definitivamente no",
        "La bola lo sabe, pero no te lo dirá...",
        "¡La suerte está de tu lado!",
        "Lo siento, no puedo responder a eso...",
        "Es probable",
        "No, pero no pierdas la esperanza",
        "La respuesta está en tus manos",
        "Ni lo dudes, ¡es un sí rotundo!"     
    ];

    if(pregunta.trim() !== '') {
        const respuestaRandom = respuestas[Math.floor(Math.random() * respuestas.length)];
        document.getElementById('respuesta').innerText = respuestaRandom;
        document.getElementById('pregunta').value = '';
    } else {
        alert('Tienes que preguntar algo...');
    }
});