// Variable global para el simulador LDR
var counter = 0;

// --- FUNCIÓN 1: MENÚ LATERAL (Pestañas dinámicas sin romper la interfaz) ---
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
    counter += 1;
    
    // Si excede el máximo de 30mA (Contador > 3)
    if (counter > 3) {
        alert("Ohh no... Switch if off... It is burning");
        resetCircuit();
        return; // Detiene la ejecución inmediatamente
    }

    // Actualiza la etiqueta de corriente lineal (10mA, 20mA, 30mA)
    document.getElementById("Current_Label").innerHTML = 10 * counter + " mA";

    // El testigo del núcleo central del motor se enciende si hay corriente
    if (counter > 0 && counter <= 3) {
        document.getElementById("Engine_ON").style.visibility = "visible";
    }

    // NIVEL 1 (10mA): Se encienden las flechas 5 y 6. El ventilador gira lento.
    if (counter == 1) {
        document.getElementById("Light_5").style.visibility = "visible";
        document.getElementById("Light_6").style.visibility = "visible";
        document.getElementById("CAD_Fan").style.animation = "Rotating 1500ms infinite linear";
    }

    // NIVEL 2 (20mA): Se suman las flechas 3 y 4. El ventilador gira a velocidad media.
    if (counter == 2) {
        document.getElementById("Light_3").style.visibility = "visible";
        document.getElementById("Light_4").style.visibility = "visible";
        document.getElementById("CAD_Fan").style.animation = "Rotating 1000ms infinite linear";          
    }

    // NIVEL 3 (30mA): Se suman las flechas 1 y 2 (Todas visibles). El ventilador gira al máximo.
    if (counter == 3) {
        document.getElementById("Light_1").style.visibility = "visible";
        document.getElementById("Light_2").style.visibility = "visible";
        document.getElementById("CAD_Fan").style.animation = "Rotating 500ms infinite linear";           
    }
}

// --- FUNCIÓN 3: DISMINUIR CORRIENTE LDR (-) ---
function Decrease_Light() {
    counter -= 1;

    // Si baja de 0mA (Contador < 0)
    if (counter < 0) {
        alert("Ohh no... The motor does not work without a minimum of light");
        resetCircuit();
        return; // Detiene la ejecución inmediatamente
    }

    document.getElementById("Current_Label").innerHTML = 10 * counter + " mA";

    // Al bajar a 20mA: Se apagan las flechas superiores (1 y 2) y el ventilador reduce su velocidad
    if (counter == 2) {
        document.getElementById("Light_1").style.visibility = "hidden";
        document.getElementById("Light_2").style.visibility = "hidden";
        document.getElementById("CAD_Fan").style.animation = "Rotating 1000ms infinite linear";                
    }

    // Al bajar a 10mA: Se apagan las flechas del medio (3 y 4) y el ventilador va lento
    if (counter == 1) {
        document.getElementById("Light_3").style.visibility = "hidden";
        document.getElementById("Light_4").style.visibility = "hidden";
        document.getElementById("CAD_Fan").style.animation = "Rotating 1500ms infinite linear";
    }

    // Al bajar a 0mA: Se apagan las últimas flechas (5 y 6), el motor se apaga y el ventilador frena
    if (counter == 0) {
        resetCircuit();
    }
}

// --- FUNCIÓN AUXILIAR: RESETEO LIMPIO Y SEGURO DEL ESQUEMA ---
function resetCircuit() {
    counter = 0;
    document.getElementById("Current_Label").innerHTML = "0 mA";
    
    // Ocultar de forma segura las 6 flechas indicadoras de luz
    document.getElementById("Light_1").style.visibility = "hidden";
    document.getElementById("Light_2").style.visibility = "hidden";
    document.getElementById("Light_3").style.visibility = "hidden";
    document.getElementById("Light_4").style.visibility = "hidden";
    document.getElementById("Light_5").style.visibility = "hidden";
    document.getElementById("Light_6").style.visibility = "hidden";
    
    // Apagar motor central y frenar aspas del ventilador CAD
    document.getElementById("Engine_ON").style.visibility = "hidden";
    document.getElementById("CAD_Fan").style.animation = "none"; 
}
