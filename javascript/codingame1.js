function myFct(arg1, arg2){
    // si arg1 est un number et arg2 est un number tout va bien

    if (typeof(arg1) == "number" && typeof(arg2) == "number"){
        let produit = arg1*arg2;
        let somme = arg1 + arg2;
        let total = produit + somme;

        
        return total;
    }
    else {
        return -999999999;
    } 
}

// test avec des String
let mot1 = "pomme";
let mot2 = " poire";

myFct(mot1, mot2);
document.write("Test String, the answer is :");
document.write(myFct(mot1, mot2));

// please create a space in order to separate the test answers
document.write("<br>");

// test avec des Number

let num1 = 2;
let num2 = 2;

myFct(num1, num2);
document.write("Test Number, the answer is :");
document.write(myFct(num1, num2));

console.log(myFct(num1, num2))


document.write("<br>");
document.write("--- --- --- <br>");
document.write("--- --- --- <br> ");

document.write("new case of code here : ");

document.write("<br>");
// write from here
document.write("here");
document.write("<br>");

// prendre une note sur 20 en argument de la fonction

let note;

function aprec(note){
    if (note >= 0 && note < 7){
        return "Hideux";
    }
    else if (note >= 7 && note < 10){
        return "Moche";
    }
    else if (note >= 10 && note < 15){
        return "Nice";
    }
    else if (note >= 15 && note <= 20){
        return "GG"
    }
    else {
        return "BUG"
    }
}


let zero = aprec(0);
let un = aprec(1);
let sept = aprec(7);
let neuf = aprec(9);
let dix = aprec(10);
let douze = aprec(12);
let quinze = aprec(15);
let dixhuit = aprec(18);
let vingt = aprec(20);
let cent = aprec(100);

document.write(zero);
document.write("<br>");
document.write(un);
document.write("<br>");

document.write(sept);
document.write("<br>");
document.write(neuf);
document.write("<br>");
document.write(dix);
document.write("<br>");
document.write(douze);
document.write("<br>");


document.write(quinze);
document.write("<br>");
document.write(dixhuit);
document.write("<br>");

document.write(vingt);
document.write("<br>");
document.write(cent);
document.write("<br>");



// fin d'exercice

document.write("<br>");

document.write("<br>");

document.write("<br>");

document.write("--- --- --- --- ---");


document.write("<br>");
document.write("Start writing after here");
document.write("<br>");

document.write("here : ");
document.write("stop <br>");


