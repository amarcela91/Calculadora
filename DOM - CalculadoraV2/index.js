// QUE EL NUMERO SE BORRE A MEDIDA QUE SE PONE Y QUE EL TAMAÑO QUEDE FIJO AL MINIMIZAR LA VENTANA
var dato1;
var dato2;
var operacion;
var haySigno = false;

var tablero = document.getElementById('tablero');
var borrar = document.getElementById('borrar');
var suma = document.getElementById('suma');
var resta = document.getElementById('resta');
var multiplicar = document.getElementById('multiplicar');
var dividir = document.getElementById('dividir');
var igual = document.getElementById('igual');
var uno = document.getElementById('uno');
var dos = document.getElementById('dos');
var tres = document.getElementById('tres');
var cuatro = document.getElementById('cuatro');
var cinco = document.getElementById('cinco');
var seis = document.getElementById('seis');
var siete = document.getElementById('siete');
var ocho = document.getElementById('ocho');
var nueve = document.getElementById('nueve');
var cero = document.getElementById('cero');


//console.log("tag uno:", uno);

    uno.onclick = function(e){
        if (haySigno){
            limpiar();
            haySigno = false;            
        }
        tablero.textContent = tablero.textContent  + "1";
        
    }
    //console.log("valor uno:", uno);
    dos.onclick = function(e){ 
        if (haySigno){
            limpiar();
            haySigno = false;             
        }              
        tablero.textContent = tablero.textContent  + "2";
    }
    tres.onclick = function(e){
        if (haySigno){
            limpiar();
            haySigno = false;             
        }
        tablero.textContent = tablero.textContent  + "3";
    }
    cuatro.onclick = function(e){
        if (haySigno){
            limpiar();
            haySigno = false;             
        }
        tablero.textContent = tablero.textContent  + "4";
    }
    cinco.onclick = function(e){
        if (haySigno){
            limpiar();
            haySigno = false;             
        }
        tablero.textContent = tablero.textContent  + "5";
    }
    seis.onclick = function(e){
        if (haySigno){
            limpiar();
            haySigno = false;             
        }
        tablero.textContent = tablero.textContent  + "6";
    }
    siete.onclick = function(e){
        if (haySigno){
            limpiar();
            haySigno = false;             
        }
        tablero.textContent = tablero.textContent  + "7";
    }
    ocho.onclick = function(e){
        if (haySigno){
            limpiar();
            haySigno = false;             
        }
        tablero.textContent = tablero.textContent  + "8";
    }
    nueve.onclick = function(e){
        if (haySigno){
            limpiar();
            haySigno = false;             
        }
        tablero.textContent = tablero.textContent  + "9";
    }
    cero.onclick = function(e){
        if (haySigno){
            limpiar();
            haySigno = false;             
        }
        tablero.textContent = tablero.textContent  + "0";
    }    
    borrar.onclick = function(e){
        borra();
    }
    suma.onclick = function(e){
        dato1 = tablero.textContent;
        operacion = "+";
        limpiar();
        tablero.textContent = tablero.textContent + "+";
        haySigno = true;
    }
    resta.onclick = function(e){
        dato1 = tablero.textContent;
        operacion = "-";
        limpiar();
        tablero.textContent = tablero.textContent + "-";
        haySigno = true;
    }
    
    multiplicar.onclick = function(e){
        dato1 = tablero.textContent;
        operacion = "*";
        limpiar();
        tablero.textContent = tablero.textContent + "*";
        haySigno = true;
    }
    
    dividir.onclick = function(e){
        dato1 = tablero.textContent;
        operacion = "/";
        limpiar();
        tablero.textContent = tablero.textContent + "/";
        haySigno = true;
    }
    
    igual.onclick = function(e){
        dato2 = tablero.textContent;
        solucion();
    }    

    function limpiar(){
        tablero.textContent = "";
      }
    
    function borra(){
        tablero.textContent = "";
        dato1 = 0;
        dato2 = 0;
        operacion = "";
    }
    
    function solucion(){
        var res = 0;
        switch(operacion){
          case "+":
            res = parseFloat(dato1) + parseFloat(dato2);
            break;
          case "-":
              res = parseFloat(dato1) - parseFloat(dato2);
              break;
          case "*":
            res = parseFloat(dato1) * parseFloat(dato2);
            break;
          case "/":
            res = parseFloat(dato1) / parseFloat(dato2);
            break;
        }
        borra();
        if (isFinite(res)) {
            tablero.textContent = res;
            haySigno = true;              
        }else {
            tablero.textContent = "Imposible realizar la operación";
            haySigno = true;              
        }        
             
        
      }




