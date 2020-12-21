let  nomVoiture = "Peugeot";
let x = 50;

let add = document.querySelector('#demo');
let z = 5;
let w = 10;
let result = z + w;
add.innerHTML = "z vaut : " + z + " y vaut: " + w + " le resultat est de = " +(z + w) ;
let d = z + w;
alert(z + w);

let prenom = "John", nom = "Doe", age = 35;

//alert 1 sans variable
alert(10 * 5);

//alert 2 sans variable
alert(10 * 2);

//alert 3
let a = 15;
let b = 9;
let resultAB = a / b;
alert(a / b + resultAB);

let l = 10, k = 5;
l = l + k;

// ma fonction
function hello() {
    alert("Salut tout le monde !");
}
window.onload = hello();

//la fonction retour
function maFonctionDeRetour (){
    document.getElementById('demoRetour').innerHTML = "Bonjour ! ";
}

// le bouton
let button = document.createElement('button');
button.id = "monBoutton";
button.addEventListener('click',function (){
    alert(" Je suis touché, on a clické sur moi");
});

//mouseover
let newDiv = document.createElement('div');
newDiv.id = "changeSurOver";
document.body.appendChild(newDiv);
newDiv.style.height = 280 + "px";
newDiv.style.width = 280 + "px";
newDiv.style.border = "3px solid black";
newDiv.addEventListener('mouseover', function () {
    newDiv.style.backgroundColor = "red";
});

//variable texte
let txt = "une longue phrase";
let longueur = txt.length;
alert(longueur);

//autre exo
let str1 = "Bonjour ";
let str2 = "le monde! ";
alert(str1 + str2);

//tableau
let listeVoitures = ["Renault", "Volvo", "Citroen"];
let maVoiture = listeVoitures[1];
listeVoitures[0] = "Ford";
alert(listeVoitures.length);
let noValue = listeVoitures.pop();
let newValue = listeVoitures.push('Ferrari');

//Numbers
let rNumber =  Math.ceil(Math.random() * 10);
let fNumber = Math.round(15.8);

let nombreUn = 10;
let nombreDeux = 5;

if(nombreUn > nombreDeux) {
    alert(nombreUn + " est plus grand que " + nombreDeux);
}

let nombreTrois = 10;
let nombreQuatre = 10;

if(nombreTrois === nombreQuatre) {
    alert(nombreTrois + " est identique à " + nombreQuatre);
}

if(nombreUn !== nombreDeux) {
    alert(nombreUn + " est différent donc il n'est pas égal à "+ nombreDeux);
}

//la boucle
for(let i = 0; i < 10; i++) {
    console.log("l'index est de " + i);
}

//le tableau fruits
let fruits = [ "pomme","banane","poire"];
for(let i = 0 ; i < fruits.length ; i++){
    console.log("l'index est de " +[i]);
}

//les boucles
let i = 0;
while (i < 10) {
    console.log("i vaut " + i);
    i++;
}

i = 0;
while (i < 10) {
    console.log("i vaut " + i);
    i += 2;
}

for(i < 10; i === 5; i++) {

       if(i === 5) {
           alert("i = " + i + " alors il s'arrêtera ici car il a bien travaillé !") ;
       break;
}

}
