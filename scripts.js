// Variable global para el simulador LDR
var counter = 0;

// --- FUNCIÓN 1: CAMBIO DE PESTAÑAS (MENÚ LATERAL) ---
function switchTab(event, tabId) {
    // Quita la clase activa de todos los folios y botones
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.menu-btn').forEach(btn => btn.classList.remove('active'));
    
    // Activa la pestaña correspondiente y resalta su botón
    document.getElementById(tabId).classList.add('active');
    event.currentTarget.classList.add('active');
    
    // En pantallas de móvil, hace un scroll suave hacia el contenido central
    if (window.innerWidth <= 768) {
        document.querySelector('.content').scrollIntoView({ behavior: 'smooth' });
    }
}

// --- FUNCIÓN 2: INCREMENTAR CORRIENTE LDR (+) ---
function Increase_Light() {
    counter += 1;
    
    document.getElementById("Current_Label").innerHTML = 10 * counter + " mA";

    if (counter > 0 && counter <= 3) {
        document.getElementById("Engine_ON").style.visibility = "visible";
    }

    if (counter == 1) {
        document.getElementById("Light_5").style.visibility = "visible";
        document.getElementById("Light_6").style.visibility = "visible";
        document.getElementById("CAD_Fan").style.animation = "Rotating 1500ms infinite linear";
    }

    if (counter == 2) {
        document.getElementById("Light_3").style.visibility = "visible";
        document.getElementById("Light_4").style.visibility = "visible";
        document.getElementById("CAD_Fan").style.animation = "Rotating 1000ms infinite linear";          
    }

    if (counter == 3) {
        document.getElementById("Light_1").style.visibility = "visible";
        document.getElementById("Light_2").style.visibility = "visible";
        document.getElementById("CAD_Fan").style.animation = "Rotating 500ms infinite linear";           
    }

    if (counter > 3) {
        alert("This LDR only works @30mA Max");
        counter = 0;
        document.getElementById("Current_Label").innerHTML = 10 * counter + " mA"; 

        document.getElementById("Light_1").style.visibility = "hidden";
        document.getElementById("Light_2").style.visibility = "hidden";
        document.getElementById("Light_3").style.visibility = "hidden";
        document.getElementById("Light_4").style.visibility = "hidden";
        document.getElementById("Light_5").style.visibility = "hidden";
        document.getElementById("Light_6").style.visibility = "hidden";

        document.getElementById("Engine_ON").style.visibility = "hidden";
        document.getElementById("CAD_Fan").style.animation = "none";           
    }
}

// --- FUNCIÓN 3: DECREMENTAR CORRIENTE LDR (-) ---
function Decrease_Light() {
    counter -= 1;
    document.getElementById("Current_Label").innerHTML = 10 * counter + " mA";

    if (counter > 0 && counter <= 3) {
        document.getElementById("Engine_ON").style.visibility = "visible";
    }

    if (counter == 2) {
        document.getElementById("Light_1").style.visibility = "hidden";
        document.getElementById("Light_2").style.visibility = "hidden";
        document.getElementById("CAD_Fan").style.animation = "Rotating 1000ms infinite linear";                
    }

    if (counter == 1) {
        document.getElementById("Light_3").style.visibility = "hidden";
        document.getElementById("Light_4").style.visibility = "hidden";
        document.getElementById("CAD_Fan").style.animation = "Rotating 1500ms infinite linear";
    }

    if (counter == 0) {
        document.getElementById("Light_5").style.visibility = "hidden";
        document.getElementById("Light_6").style.visibility = "hidden";
        
        document.getElementById("Engine_ON").style.visibility = "hidden";
        document.getElementById("CAD_Fan").style.animation = "none";
    }

    if (counter < 0) {
        alert("No Current through the LDR");
        counter = 0;
        document.getElementById("Current_Label").innerHTML = counter * 10 + " mA";
       
        document.getElementById("Light_1").style.visibility = "hidden";
        document.getElementById("Light_2").style.visibility = "hidden";
        document.getElementById("Light_3").style.visibility = "hidden";
        document.getElementById("Light_4").style.visibility = "hidden";
        document.getElementById("Light_5").style.visibility = "hidden";
        document.getElementById("Light_6").style.visibility = "hidden";

        document.getElementById("Engine_ON").style.visibility = "hidden";
        document.getElementById("CAD_Fan").style.animation = "none";
    }
}
