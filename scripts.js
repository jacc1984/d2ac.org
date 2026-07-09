var counter = 0;

// --- FUNCIÓN 1: MENÚ LATERAL (Pestañas dinámicas) ---
function switchTab(event, tabId) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.menu-btn').forEach(btn => btn.classList.remove('active'));
    
    document.getElementById(tabId).classList.add('active');
    event.currentTarget.classList.add('active');
    
    if (window.innerWidth <= 768) {
        document.querySelector('.content').scrollIntoView({ behavior: 'smooth' });
    }
}

// --- FUNCIÓN 2: AUMENTAR CORRIENTE LDR (+) ---
function Increase_Light() {
    // Si ya estamos en el máximo (30mA) y se pulsa otra vez (+), salta el error de ImgBurn y reinicia
    if (counter === 3) {
        alert("Ooohhh nooo! Switch it off... It is burning!");
        resetCircuit();
        return;
    }

    // Incrementamos el estado del contador de forma segura
    counter += 1;
    
    // Renderizado lineal de la corriente en la etiqueta
    document.getElementById("Current_Label").innerHTML = "LDR Current " + (10 * counter) + " mA";

    // Activación del núcleo testigo azul del motor en cualquier nivel con corriente
    document.getElementById("Engine_ON").style.visibility = "visible";

    // NIVEL 1: 10mA -> 2 Flechitas de luz (5 y 6) -> 60 RPM (Animación a 1500ms)
    if (counter === 1) {
        document.getElementById("Light_5").style.visibility = "visible";
        document.getElementById("Light_6").style.visibility = "visible";
        document.getElementById("CAD_Fan").style.animation = "Rotating 1500ms infinite linear";
    }

    // NIVEL 2: 20mA -> 4 Flechitas de luz (3, 4, 5 y 6) -> 120 RPM (Animación a 1000ms)
    if (counter === 2) {
        document.getElementById("Light_3").style.visibility = "visible";
        document.getElementById("Light_4").style.visibility = "visible";
        document.getElementById("CAD_Fan").style.animation = "Rotating 1000ms infinite linear";          
    }

    // NIVEL 3: 30mA -> 6 Flechitas de luz (Todas visibles) -> 180 RPM (Animación a 500ms)
    if (counter === 3) {
        document.getElementById("Light_1").style.visibility = "visible";
        document.getElementById("Light_2").style.visibility = "visible";
        document.getElementById("CAD_Fan").style.animation = "Rotating 500ms infinite linear";           
    }
}

// --- FUNCIÓN 3: DISMINUIR CORRIENTE LDR (-) ---
function Decrease_Light() {
    // Si ya estamos en 0mA y se intenta restar, salta la alerta de falta de luz
    if (counter === 0) {
        alert("Ohh no... The motor does not work without a minimum of light!");
        resetCircuit();
        return;
    }

    // Decrementamos el estado del contador de forma segura
    counter -= 1;
    
    // Renderizado lineal de la corriente en la etiqueta
    document.getElementById("Current_Label").innerHTML = "LDR Current " + (10 * counter) + " mA";

    // Al bajar a 20mA: Se apaga el nivel superior (1 y 2), quedan 4 flechas y reduce a 120 RPM
    if (counter === 2) {
        document.getElementById("Light_1").style.visibility = "hidden";
        document.getElementById("Light_2").style.visibility = "hidden";
        document.getElementById("CAD_Fan").style.animation = "Rotating 1000ms infinite linear";                
    }

    // Al bajar a 10mA: Se apaga el nivel medio (3 y 4), quedan 2 flechas y reduce a 60 RPM
    if (counter === 1) {
        document.getElementById("Light_3").style.visibility = "hidden";
        document.getElementById("Light_4").style.visibility = "hidden";
        document.getElementById("CAD_Fan").style.animation = "Rotating 1500ms infinite linear";
    }

    // Al bajar a 0mA: El motor, el ventilador y todas las luces se detienen por completo
    if (counter === 0) {
        resetCircuit();
    }
}

// --- FUNCIÓN AUXILIAR: RESETEO COMPLETO DEL CIRCUITO ---
function resetCircuit() {
    counter = 0;
    document.getElementById("Current_Label").innerHTML = "LDR Current 0 mA";
    
    document.getElementById("Light_1").style.visibility = "hidden";
    document.getElementById("Light_2").style.visibility = "hidden";
    document.getElementById("Light_3").style.visibility = "hidden";
    document.getElementById("Light_4").style.visibility = "hidden";
    document.getElementById("Light_5").style.visibility = "hidden";
    document.getElementById("Light_6").style.visibility = "hidden";
    
    document.getElementById("Engine_ON").style.visibility = "hidden";
    document.getElementById("CAD_Fan").style.animation = "none"; 
}
