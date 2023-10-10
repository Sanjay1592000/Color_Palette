let red = document.getElementById("red");
let blue = document.getElementById("blue");
let green = document.getElementById("green");

function randomval(){
    let min = 0;
    let max = 255;
    let randomInt;
    randomInt= Math.floor(Math.random() * (max - min + 1)) + min;
    return randomInt;
}

function randomcolor()
{
    let bgcolor = document.getElementById("color");
    let colval = document.getElementById("colorval1");
    let colval1 = document.getElementById("colorval2");
    let r = randomval();
    let b = randomval();
    let g = randomval();
    let x = hexcon(r);
    let y = hexcon(b);
    let z = hexcon(g);
    colval1.innerHTML = `#${x}${y}${z}`;
    bgcolor.style.backgroundColor = `rgb(${r},${b},${g})`;
    document.body.style.backgroundColor = `rgb(${r},${b},${g}, 0.4)`;    
    colval.innerHTML = `rgb(${r},${b},${g})`;
}


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
    document.body.style.backgroundColor = `rgb(${redval},${blueval},${greenval}, 0.4)`;    
    colval.innerHTML = `rgb(${redval},${blueval},${greenval})`;
    hexval();
}

red.addEventListener("input",color);
blue.addEventListener("input",color);
green.addEventListener("input",color);

