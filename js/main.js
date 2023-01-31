// // alert("Hello World");

// console.log("Hello World");

// // On déclare la variable comme ça
// var ageSteph = 40;
// var nomSteph = "Gobbe";
// var adresseSteph ="Avenue 99";
// // ou comme ça
// var ageSteph = 40, nomSteph = "Gobbe", adresseSteph ="Avenue 99";
// // =====
// console.log(ageSteph, nomSteph, adresseSteph);

// //Exo 1
// var a = 5, b = 12, leResultat = "Le résultat de a + b vaut";
// console.log(leResultat, a + b)

// //Exo 2
// var a = 5, b = 12, calcul = a +b;
// console.log("Le résultat de a + b vaut", calcul);

// //Exo 3
// var noteMaths = 11;
// var noteFrancais = 9;
// var noteHg = 16;
// var moyenne = (noteMaths + noteFrancais + noteHg) / 3
// console.log('La moyenne est de', moyenne);

// //Exo 4
// var nomEtudiant = "GOBBE", prenomEtudiant = "Stephanie";
// console.log("Bonjour, je m'appelle", nomEtudiant, prenomEtudiant);

// //Exo 5
// var nomEtudiant = "GOBBE", prenomEtudiant = "Stephanie";
// console.log("Bonjour, je m'appelle " + nomEtudiant + " " + prenomEtudiant);

// "Capturer" l'élément html sur lequel je vais faire l'action

// var burgerMenu = document.querySelector('.maboite');
// burgerMenu.addEventListener('click', function() {
//     console.log('On dit coucou');
// });

var burgerMenu = document.querySelector('.maboite');
var myBody = document.querySelector('body');

burgerMenu.addEventListener('click', function() {
    myBody.classList.toggle("black");
});