let red = document.getElementById("red");
let blue = document.getElementById("blue");
let green = document.getElementById("green");

function hexcon(d){
    decimal = parseInt(d,10);
    let hexadecimal = decimal.toString(16).toUpperCase();
    if(decimal <= 15){
        return "0"+hexadecimal;
    }
    else{
        return hexadecimal;
    }
    
}

function hexval(){
    let red = document.getElementById("red");
    let blue = document.getElementById("blue");
    let green = document.getElementById("green");
    let redval = red.value;
    let blueval = blue.value;
    let greenval = green.value;
    let a = hexcon(redval);
    let b = hexcon(blueval);
    let c = hexcon(greenval);
    let colval = document.getElementById("colorval2");
    colval.innerHTML = `#${a}${b}${c}`;
}

function color(){
    let red = document.getElementById("red");
    let blue = document.getElementById("blue");
    let green = document.getElementById("green");
    let redval = red.value;
    let blueval = blue.value;
    let greenval = green.value;
    let bgcolor = document.getElementById("color");
    let colval = document.getElementById("colorval1");
    bgcolor.style.backgroundColor = `rgb(${redval},${blueval},${greenval})`;
    colval.innerHTML = `rgb(${redval},${blueval},${greenval})`;
    hexval();
}

red.addEventListener("input",color);
blue.addEventListener("input",color);
green.addEventListener("input",color);

