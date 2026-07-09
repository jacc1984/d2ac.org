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
    counter += 1;
    
    // EASTER EGG IMGBURN: Si excede los 30mA, el LDR explota con el mítico error
    if (counter > 3) {
        alert("Ooohhh nooo! 💥 Switch it off... It is burning!");
        resetCircuit();
        return; 
    }

    document.getElementById("Current_Label").innerHTML = 10 * counter + " mA";

    if (counter > 0 && counter <= 3) {
        document.getElementById("Engine_ON").style.visibility = "visible";
    }

    // 10mA: Flechas inferiores 5 y 6 encendidas. Ventilador lento.
    if (counter == 1) {
        document.getElementById("Light_5").style.visibility = "visible";
        document.getElementById("Light_6").style.visibility = "visible";
        document.getElementById("CAD_Fan").style.animation = "Rotating 1500ms infinite linear";
    }

    // 20mA: Se suman las flechas del medio 3 y 4. Velocidad media.
    if (counter == 2) {
        document.getElementById("Light_3").style.visibility = "visible";
        document.getElementById("Light_4").style.visibility = "visible";
        document.getElementById("CAD_Fan").style.animation = "Rotating 1000ms infinite linear";          
    }

    // 30mA: Se suman las flechas superiores 1 y 2 (Todas encendidas). Ventilador al máximo.
    if (counter == 3) {
        document.getElementById("Light_1").style.visibility = "visible";
        document.getElementById("Light_2").style.visibility = "visible";
        document.getElementById("CAD_Fan").style.animation = "Rotating 500ms infinite linear";           
    }
}

// --- FUNCIÓN 3: DISMINUIR CORRIENTE LDR (-) ---
function Decrease_Light() {
    counter -= 1;

    // Alerta si intentan arrancar el motor a oscuras
    if (counter < 0) {
        alert("Ohh no... The motor does not work without a minimum of light!");
        resetCircuit();
        return; 
    }

    document.getElementById("Current_Label").innerHTML = 10 * counter + " mA";

    // Baja a 20mA: Se oculta el nivel superior (1 y 2) y el ventilador decelera
    if (counter == 2) {
        document.getElementById("Light_1").style.visibility = "hidden";
        document.getElementById("Light_2").style.visibility = "hidden";
        document.getElementById("CAD_Fan").style.animation = "Rotating 1000ms infinite linear";                
    }

    // Baja a 10mA: Se oculta el nivel medio (3 y 4) y el ventilador va lento
    if (counter == 1) {
        document.getElementById("Light_3").style.visibility = "hidden";
        document.getElementById("Light_4").style.visibility = "hidden";
        document.getElementById("CAD_Fan").style.animation = "Rotating 1500ms infinite linear";
    }

    // Baja a 0mA: Reseteo limpio de todo el circuito
    if (counter == 0) {
        resetCircuit();
    }
}

// --- FUNCIÓN AUXILIAR: RESETEO DEL CIRCUITO ---
function resetCircuit() {
    counter = 0;
    document.getElementById("Current_Label").innerHTML = "0 mA";
    
    document.getElementById("Light_1").style.visibility = "hidden";
    document.getElementById("Light_2").style.visibility = "hidden";
    document.getElementById("Light_3").style.visibility = "hidden";
    document.getElementById("Light_4").style.visibility = "hidden";
    document.getElementById("Light_5").style.visibility = "hidden";
    document.getElementById("Light_6").style.visibility = "hidden";
    
    document.getElementById("Engine_ON").style.visibility = "hidden";
    document.getElementById("CAD_Fan").style.animation = "none"; 
}
