var counter = 0;

function Increase_Light()
        {
         counter += 1;
         
         document.getElementById("Current_Label").innerHTML = 10*counter + " mA";

         if ( ( counter > 0 ) && ( counter <= 3 ) )
           {
            document.getElementById("Engine_ON").style.visibility = "visible";
            }
         else
             {
             }

         if ( counter == 1 )
           {
            document.getElementById("Light_5").style.visibility = "visible";
            document.getElementById("Light_6").style.visibility = "visible";
            document.getElementById("CAD_Fan").style.animation = "Rotating 1500ms infinite linear";
           }
         else
             {
             }
 
         if ( counter == 2 )
          {
           document.getElementById("Light_3").style.visibility = "visible";
           document.getElementById("Light_4").style.visibility = "visible";
           document.getElementById("CAD_Fan").style.animation = "Rotating 1000ms infinite linear";          
          }
        else
            {
            }

        if ( counter == 3 )
          {
           document.getElementById("Light_1").style.visibility = "visible";
           document.getElementById("Light_2").style.visibility = "visible";
           document.getElementById("CAD_Fan").style.animation = "Rotating 500ms infinite linear";           
          }
        else
            {
            }

        if ( counter > 3 )
          {
           alert("This LDR only works @30mA Max");
           counter = 0;
           document.getElementById("Current_Label").innerHTML = 10*counter + " mA"; 

           document.getElementById("Light_1").style.visibility = "hidden";
           document.getElementById("Light_2").style.visibility = "hidden";
           document.getElementById("Light_3").style.visibility = "hidden";
           document.getElementById("Light_4").style.visibility = "hidden";
           document.getElementById("Light_5").style.visibility = "hidden";
           document.getElementById("Light_6").style.visibility = "hidden";

           document.getElementById("Engine_ON").style.visibility = "hidden";
           document.getElementById("CAD_Fan").style.animation = "none";           
          }
        else
            {
            }
       
       }


function Decrease_Light()
            {
              counter -= 1;
              document.getElementById("Current_Label").innerHTML = 10*counter + " mA"

              if ( ( counter > 0 ) && ( counter <= 3 ) )
                {
                 document.getElementById("Engine_ON").style.visibility = "visible";
                }
              else
                  {
                  }

              if ( counter == 2 )
               {
                document.getElementById("Light_1").style.visibility = "hidden";
                document.getElementById("Light_2").style.visibility = "hidden";
                document.getElementById("CAD_Fan").style.animation = "Rotating 1000ms infinite linear";                
               }
             else
                    {
                     }

            if ( counter == 1 )
             {
              document.getElementById("Light_3").style.visibility = "hidden";
              document.getElementById("Light_4").style.visibility = "hidden";
              document.getElementById("CAD_Fan").style.animation = "Rotating 1500ms infinite linear";
             }
            else
                  {
                  }

           if ( counter == 0 )
             {
              document.getElementById("Light_5").style.visibility = "hidden";
              document.getElementById("Light_6").style.visibility = "hidden";
              
              document.getElementById("Engine_ON").style.visibility = "hidden";
              document.getElementById("CAD_Fan").style.animation = "none";
             }
           else
                 {
                 }

         if ( counter < 0 )
           {
            alert("No Current through the LDR");
            counter = 0;
            document.getElementById("Current_Label").innerHTML = counter*10 + " mA";
           
            document.getElementById("Light_1").style.visibility = "hidden";
            document.getElementById("Light_2").style.visibility = "hidden";
            document.getElementById("Light_3").style.visibility = "hidden";
            document.getElementById("Light_4").style.visibility = "hidden";
            document.getElementById("Light_5").style.visibility = "hidden";
            document.getElementById("Light_6").style.visibility = "hidden";

            document.getElementById("Engine_ON").style.visibility = "hidden";
            document.getElementById("CAD_Fan").style.animation = "none";
           }
         else
             {
             }
        }
