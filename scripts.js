/* ==========================================================================
   TERAHERTZ PROJECTS - SCRIPTS.JS
   LÓGICA DE SIMULACIÓN INTERACTIVA LDR CON POP-UPS Y RESETS ORIGINALES
   ========================================================================== */

var counter = 0;

function Increase_Light() {
    counter += 1;
    
    document.getElementById("Current_Label").innerHTML = 10 * counter + " mA";

    // Control de visibilidad del motor azul según la corriente
    if ((counter > 0) && (counter <= 3)) {
        document.getElementById("Engine_ON").style.visibility = "visible";
    } else {
        document.getElementById("Engine_ON").style.visibility = "hidden";
    }

    // Nivel 1: 10 mA
    if (counter == 1) {
        document.getElementById("Light_5").style.visibility = "visible";
        document.getElementById("Light_6").style.visibility = "visible";
        document.getElementById("CAD_Fan").style.animation = "Rotating 1500ms infinite linear";
    }

    // Nivel 2: 20 mA
    if (counter == 2) {
        document.getElementById("Light_3").style.visibility = "visible";
        document.getElementById("Light_4").style.visibility = "visible";
        document.getElementById("CAD_Fan").style.animation = "Rotating 1000ms infinite linear";          
    }

    // Nivel 3: 30 mA
    if (counter == 3) {
        document.getElementById("Light_1").style.visibility = "visible";
        document.getElementById("Light_2").style.visibility = "visible";
        document.getElementById("CAD_Fan").style.animation = "Rotating 500ms infinite linear";           
    }

    // DISPARADOR DE RESET POR SOBRECORRIENTE (> 30 mA)
    if (counter > 3) {
        alert("This LDR only works @30mA Max");
        counter = 0; // Reset de simulación cíclica
        document.getElementById("Current_Label").innerHTML = 10 * counter + " mA"; 

        // Ocultamos todas las señales lumínicas
        document.getElementById("Light_1").style.visibility = "hidden";
        document.getElementById("Light_2").style.visibility = "hidden";
        document.getElementById("Light_3").style.visibility = "hidden";
        document.getElementById("Light_4").style.visibility = "hidden";
        document.getElementById("Light_5").style.visibility = "hidden";
        document.getElementById("Light_6").style.visibility = "hidden";

        // Parada total del motor y ocultación del eje azul
        document.getElementById("Engine_ON").style.visibility = "hidden";
        document.getElementById("CAD_Fan").style.animation = "none";           
    }
}


function Decrease_Light() {
    counter -= 1;
    document.getElementById("Current_Label").innerHTML = 10 * counter + " mA";

    // Control de visibilidad del motor azul según la corriente
    if ((counter > 0) && (counter <= 3)) {
        document.getElementById("Engine_ON").style.visibility = "visible";
    } else {
        document.getElementById("Engine_ON").style.visibility = "hidden";
    }

    // Bajamos a Nivel 2: Ocultamos las luces 1 y 2
    if (counter == 2) {
        document.getElementById("Light_1").style.visibility = "hidden";
        document.getElementById("Light_2").style.visibility = "hidden";
        document.getElementById("CAD_Fan").style.animation = "Rotating 1000ms infinite linear";                
    }

    // Bajamos a Nivel 1: Ocultamos las luces 3 y 4
    if (counter == 1) {
        document.getElementById("Light_3").style.visibility = "hidden";
        document.getElementById("Light_4").style.visibility = "hidden";
        document.getElementById("CAD_Fan").style.animation = "Rotating 1500ms infinite linear";
    }

    // Bajamos a Nivel 0: Apagado normal por cero absoluto
    if (counter == 0) {
        document.getElementById("Light_5").style.visibility = "hidden";
        document.getElementById("Light_6").style.visibility = "hidden";
        
        document.getElementById("Engine_ON").style.visibility = "hidden";
        document.getElementById("CAD_Fan").style.animation = "none";
    }

    // DISPARADOR DE RESET POR CORRIENTE NEGATIVA (< 0 mA)
    if (counter < 0) {
        alert("No Current through the LDR");
        counter = 0; // Reset de seguridad
        document.getElementById("Current_Label").innerHTML = counter * 10 + " mA";
       
        // Limpieza total del canvas
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
