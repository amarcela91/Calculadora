function setResult(value) {
    document.getElementById('tablero').value = value;
}

function getResult() {
    return(document.getElementById('tablero').value);
}

function add(key) {    
    console.log(key);
    let result = getResult();
    if (result!='0' || isNaN(key)) setResult(result + key);
    else setResult(key);
     
}

function calc() {
    let result = eval(getResult()); 
    
    if (result == Infinity) {
        setResult("Estás bien?");

    }else {
        setResult(result);
    }    
}

function del() { 
    setResult("");
}