const gotCitiesCSV = "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";

const lotrCitiesArray = ["Mordor", "Gondor", "Rohan", "Beleriand", "Mirkwood", "Dead Marshes", "Rhun", "Harad"];

const bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit";


function showResults(str, titulo) {
    const displayResultados = document.getElementById('displayResultados')

    displayResultados.innerHTML = ""

    const tituloKata = document.createElement('h2');
    tituloKata.innerHTML = titulo;

    const paragrafoResultado = document.createElement('p');
    paragrafoResultado.innerHTML = str

    displayResultados.appendChild(tituloKata);
    displayResultados.appendChild(paragrafoResultado);
}


//---------- KATA 1 -------------
function kata1() {
    let returnArr = gotCitiesCSV.split(",");
    showResults(JSON.stringify(returnArr), 'Kata 1');
}
//
const botaoKata1 = document.getElementById('kata1');
botaoKata1.addEventListener('click', kata1)

//---------- KATA 2 -------------
function kata2() {
    let returnArr2 = bestThing.split(" ");
    showResults(JSON.stringify(returnArr2), 'Kata 2');
}
const botaoKata2 = document.getElementById('kata2');
botaoKata2.addEventListener('click', kata2);

//---------- KATA 3 -------------
function kata3() {
    let returnStr = gotCitiesCSV.replace(/,/g, ';');
    showResults(JSON.stringify(returnStr), 'Kata 3');
}
//console.log(kata3())
const botaoKata3 = document.getElementById('kata3');
botaoKata3.addEventListener('click', kata3);


//---------- KATA 4 -------------
function kata4() {
    let returnStr4 = lotrCitiesArray.join(",");
    showResults(JSON.stringify(returnStr4), 'Kata 4');
}
const botaoKata4 = document.getElementById('kata4');
botaoKata4.addEventListener('click', kata4);

//---------- KATA 5 -------------
function kata5() {
    let returnSlicedArr = lotrCitiesArray.slice(0, 5);
    showResults(JSON.stringify(returnSlicedArr), 'Kata 5');
}
const botaoKata5 = document.getElementById('kata5');
botaoKata5.addEventListener('click', kata5);

//---------- KATA 6 -------------
function kata6() {
    let returnSlicedArr = lotrCitiesArray.slice(-5, lotrCitiesArray.length);
    showResults(JSON.stringify(returnSlicedArr), 'Kata 6');
}
const botaoKata6 = document.getElementById('kata6');
botaoKata6.addEventListener('click', kata6);

//---------- KATA 7 -------------
function kata7() {
    let returnSlicedArr = lotrCitiesArray.slice(2, 5);
    showResults(JSON.stringify(returnSlicedArr), 'Kata 7');
}
const botaoKata7 = document.getElementById('kata7');
botaoKata7.addEventListener('click', kata7);

//---------- KATA 8 -------------
function kata8() {
    let returnSplicedArr = lotrCitiesArray.splice(lotrCitiesArray.indexOf("Rohan"), 1)
    showResults(JSON.stringify(lotrCitiesArray), 'Kata 8');
}
const botaoKata8 = document.getElementById('kata8');
botaoKata8.addEventListener('click', kata8);

//---------- KATA 9 -------------
function kata9() {
    let returnSplicedArr = lotrCitiesArray.splice(lotrCitiesArray.indexOf("Dead Marshes") + 1, lotrCitiesArray.length)
    showResults(JSON.stringify(lotrCitiesArray), 'Kata 9');
}
const botaoKata9 = document.getElementById('kata9');
botaoKata9.addEventListener('click', kata9);

//---------- KATA 10 -------------
function kata10() {
    let returnSplicedArr = lotrCitiesArray.splice(lotrCitiesArray.indexOf("Gondor") + 1, 0, "Rohan")
    showResults(JSON.stringify(lotrCitiesArray), 'Kata 10');
}
const botaoKata10 = document.getElementById('kata10');
botaoKata10.addEventListener('click', kata10);

//---------- KATA 11 -------------
function kata11() {
    let returnSplicedArr = lotrCitiesArray.splice(lotrCitiesArray.indexOf("Dead Marshes"), 1, "Deadest Marshes")
    showResults(JSON.stringify(lotrCitiesArray), 'Kata 11');
}
const botaoKata11 = document.getElementById('kata11');
botaoKata11.addEventListener('click', kata11);

//---------- KATA 12 -------------
function kata12() {
    let returnSlicedStr = bestThing.slice(0, 14)
    showResults(JSON.stringify(returnSlicedStr), 'Kata 12');
}
const botaoKata12 = document.getElementById('kata12');
botaoKata12.addEventListener('click', kata12);

//---------- KATA 13 -------------
function kata13() {
    let returnSlicedStr = bestThing.slice(-12)
    showResults(JSON.stringify(returnSlicedStr), 'Kata 13');
}
const botaoKata13 = document.getElementById('kata13');
botaoKata13.addEventListener('click', kata13);

//---------- KATA 14 -------------
function kata14() {
    let returnSlicedStr = bestThing.slice(14, 28)
    showResults(JSON.stringify(returnSlicedStr), 'Kata 14');
}
const botaoKata14 = document.getElementById('kata14');
botaoKata14.addEventListener('click', kata14);

//---------- KATA 15 -------------
function kata15() {
    let returnSlicedStr = bestThing.substring(bestThing.length - 12)
    showResults(JSON.stringify(returnSlicedStr), 'Kata 15');
}
const botaoKata15 = document.getElementById('kata15');
botaoKata15.addEventListener('click', kata15);

//---------- KATA 16 -------------
function kata16() {
    let returnSlicedStr = bestThing.substring(14, 28)
    showResults(JSON.stringify(returnSlicedStr), 'Kata 16');
}
const botaoKata16 = document.getElementById('kata16');
botaoKata16.addEventListener('click', kata16);

//---------- KATA 17 -------------
function kata17() {
    let returnArr17 = lotrCitiesArray.pop();
    showResults(JSON.stringify(lotrCitiesArray), 'Kata 17');
}
const botaoKata17 = document.getElementById('kata17');
botaoKata17.addEventListener('click', kata17);

//---------- KATA 18 -------------
function kata18() {
    let returnArr18 = lotrCitiesArray.push('Deadest Marshes');
    showResults(JSON.stringify(lotrCitiesArray), 'Kata 18');
}
const botaoKata18 = document.getElementById('kata18');
botaoKata18.addEventListener('click', kata18);

//---------- KATA 19 -------------
function kata19() {
    let returnArr19 = lotrCitiesArray.shift();
    //return lotrCitiesArray;
    showResults(JSON.stringify(lotrCitiesArray), 'Kata 19');
}
const botaoKata19 = document.getElementById('kata19');
botaoKata19.addEventListener('click', kata19);

//---------- KATA 20 -------------
function kata20() {
    let returnArr20 = lotrCitiesArray.unshift('Mordor');
    //return lotrCitiesArray;
    showResults(JSON.stringify(lotrCitiesArray), 'Kata 20');
}
const botaoKata20 = document.getElementById('kata20');
botaoKata20.addEventListener('click', kata20);

// ----- B Ô N U S -------

// AINDA EM DESENVOLVIMENTO