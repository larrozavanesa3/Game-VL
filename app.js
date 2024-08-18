// Generar un número secreto aleatorio entre 1 y 10
let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let numeroUsuario = 0;
let intentos = 1;
let palabraVeces = "vez";

// Ocultar el h1 y h2 al inicio
document.querySelector('h1').style.display = 'none';
document.querySelector('h2').style.display = 'none';

while (numeroUsuario != numeroSecreto) {
    numeroUsuario = prompt("Me indicas un número por favor:");

    if (numeroUsuario == numeroSecreto) {
        alert(`¡Felicitaciones, el número es: ${numeroUsuario}! Lo hiciste en ${intentos} ${palabraVeces}`);
        document.querySelector('h1').style.display = 'block'; // Mostrar h1 al ganar
        document.querySelector('h2').style.display = 'block'; // Mostrar h2 al ganar
        document.querySelector('h2').textContent = "¡Correcto! Has acertado."; // Mensaje de éxito
        break;
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert("El número secreto es menor");
        } else {
            alert("El número secreto es mayor");
        }
        
        intentos++;
        palabraVeces = "veces";

        if (intentos > 4) {
            alert("Llegaste al fin del juego");
            document.querySelector('h1').style.display = 'none'; // Asegurarse de ocultar h1 al terminar el juego
            document.querySelector('h2').style.display = 'block'; // Mostrar h2 al terminar el juego
            document.querySelector('h2').textContent = "No acertaste, llegaste al fin del juego."; // Mensaje de fin del juego
            break;
        }
    }
}
















