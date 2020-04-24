const table = document.querySelector('table');
const tbody = document.querySelector('tbody');
const btnValider = document.querySelector('#valider');
let newUser = { nom: "", prenom: "", email: "", age: "", poste: "", telephone: "", statutMarital: "", paysOrigine: "",modifier: "modifier", supprimer: "delete" };

const nom = document.querySelector('#nom');
const prenom = document.querySelector('#prenom');
const email = document.querySelector('#email');
const age = document.querySelector('#age');
const poste = document.querySelector('#poste');
const telephone = document.querySelector('#telephone');
const statutMarital = document.querySelector('#statutMarital');
const paysOrigine = document.querySelector('#paysOrigine');

//affichage initial
afficherUsers();

function afficherUsers() {
    for (user of users) {
        ajouterDansListe(user);
    }
}

//ajout du nouveau user sans validation
btnValider.addEventListener('click', function() {
    creerNewUser(nom.value, prenom.value, email.value, age.value, poste.value, telephone.value, statutMarital.value, paysOrigine.value);
    ajouterDansListe(newUser);
})


function creerNewUser(nom, prenom, email, age, poste, telephone, statutMarital, paysOrigine) {
    newUser.nom = nom;
    newUser.prenom = prenom;
    newUser.email = email;
    newUser.age = age;
    newUser.poste = poste;
    newUser.telephone = telephone;
    newUser.statutMarital = statutMarital;
    newUser.paysOrigine = paysOrigine;
    users.push(newUser);
}

function ajouterDansListe(user) {
    let newElementLine = document.createElement("tr");


    for (const userProperty in user) {
        let newElementCell = document.createElement("td");
        newElementCell.innerText = user[userProperty];
        newElementLine.appendChild(newElementCell);
    }
    
    tbody.appendChild(newElementLine);
    newElementLine.addEventListener("mouseover", function() {
        newElementLine.style.cursor = "pointer";
    })
}

console.log(users);