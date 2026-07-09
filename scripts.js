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
    
    document.getElementById("Current_Label").innerHTML = "LDR Current " + (10 * counter) + " mA";

    if (counter > 0 && counter <= 3) {
        document.getElementById("Engine_ON").style.visibility = "visible";
    }

    // 1 click = 10mA -> 2 flechas de luz (5 y 6) -> 60 RPM (1500ms)
    if (counter == 1) {
        document.getElementById("Light_5").style.visibility = "visible";
        document.getElementById("Light_6").style.visibility = "visible";
        document.getElementById("CAD_Fan").style.animation = "Rotating 1500ms infinite linear";
    }
 
    // 2 clicks = 20mA -> 4 flechas de luz (3, 4, 5 y 6) -> 120 RPM (1000ms)
    if (counter == 2) {
        document.getElementById("Light_3").style.visibility = "visible";
        document.getElementById("Light_4").style.visibility = "visible";
        document.getElementById("CAD_Fan").style.animation = "Rotating 1000ms infinite linear";          
    }

    // 3 clicks = 30mA -> 6 flechas de luz (Todas visibles) -> 180 RPM (500ms)
    if (counter == 3) {
        document.getElementById("Light_1").style.visibility = "visible";
        document.getElementById("Light_2").style.visibility = "visible";
        document.getElementById("CAD_Fan").style.animation = "Rotating 500ms infinite linear";           
    }

    // Más de 3 clicks -> Excepción de quemado de ImgBurn y reseteo inmediato
    if (counter > 3) {
        alert("Ooohhh nooo! Switch it off... It is burning!");
        resetCircuit();
    }
}

// --- FUNCIÓN 3: DISMINUIR CORRIENTE LDR (-) ---
function Decrease_Light() {
    counter -= 1;
    
    document.getElementById("Current_Label").innerHTML = "LDR Current " + (10 * counter) + " mA";

    if (counter > 0 && counter <= 3) {
        document.getElementById("Engine_ON").style.visibility = "visible";
    }

    // Baja a 20mA -> Se ocultan las 2 flechas más altas (1 y 2), quedan 4 visibles -> 120 RPM (1000ms)
    if (counter == 2) {
        document.getElementById("Light_1").style.visibility = "hidden";
        document.getElementById("Light_2").style.visibility = "hidden";
        document.getElementById("CAD_Fan").style.animation = "Rotating 1000ms infinite linear";                
    }

    // Baja a 10mA -> Se ocultan las 2 flechas del medio (3 y 4), quedan 2 visibles -> 60 RPM (1500ms)
    if (counter == 1) {
        document.getElementById("Light_3").style.visibility = "hidden";
        document.getElementById("Light_4").style.visibility = "hidden";
        document.getElementById("CAD_Fan").style.animation = "Rotating 1500ms infinite linear";
    }

    // Baja a 0mA -> Se ocultan las 2 últimas flechas (5 y 6) y el motor se apaga por completo
    if (counter == 0) {
        document.getElementById("Light_5").style.visibility = "hidden";
        document.getElementById("Light_6").style.visibility = "hidden";
        document.getElementById("Engine_ON").style.visibility = "hidden";
        document.getElementById("CAD_Fan").style.animation = "none";
    }

    // Menos de 0 clicks -> Excepción de falta de luz y reseteo
    if (counter < 0) {
        alert("Ohh no... The motor does not work without a minimum of light!");
        resetCircuit();
    }
}

// --- FUNCIÓN AUXILIAR: RESETEO LIMPIO DEL CIRCUITO ---
function resetCircuit() {
    counter = 0;
    document.getElementById("Current_Label").innerHTML = "LDR Current 0mA"; 

    document.getElementById("Light_1").style.visibility = "hidden";
    document.getElementById("Light_2").style.visibility = "hidden";
    document.getElementById("Light_3").style.visibility = "hidden";
    document.getElementById("Light_4").style.visibility = "hidden";
    document.getElementById("Light_5").style.visibility = "hidden";
    document.getElementById("Light_6").style.visibility = "hidden";

    document.getElementById("Engine_ON").style.visibility = "hidden";
    document.getElementById("CAD_Fan").style.animation = "none";           
}
