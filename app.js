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

//Boutton ajouter nouveau user
btnValider.addEventListener('click', function() {
    // e.preventDefault();


    validerContenuFormulaire(nom, prenom, email, age, poste, telephone, statutMarital, paysOrigine);
    // console.log(nom.value, prenom.value, age.value, poste.value);
})

function validerContenuFormulaire(nom, prenom, email, age, poste, telephone, statutMarital, paysOrigine) {
    if (!nom.value.length) {
        erreurNom.innerText = 'Veuillez spécifier le nom';
    }

    if (!prenom.value.length) {
        erreurPrenom.innerText = 'Veuillez spécifier le prenom';
    }
    if (!email.value.length) {
        erreurEmail.innerText = "Veuillez spécifier l'email";
    }
    if (!telephone.value.length) {
        erreurTelephone.innerText = 'Veuillez spécifier le numero de telephone';
    }

    if (!poste.value.length) {
        erreurPoste.innerText = 'Veuillez spécifier le poste';
    }
    if (!statutMarital.value.length) {
        erreurStatutMarital.innerText = 'Veuillez spécifier le statut marital';
    }
    if (!paysOrigine.value.length) {
        erreurPaysOrigine.innerText = "Veuillez spécifier le pays d'origine";
    }

    if (prenom.value.length && nom.value.length && email.value.length && telephone.value.length && poste.value.length && statutMarital.value.length && paysOrigine.value.length) {
        erreurNom.innerText = '';
        erreurPrenom.innerText = '';
        erreurEmail.innerText = ''
        erreurTelephone.innerText = '';
        erreurPoste.innerText = '';
        erreurStatutMarital.innerText = '';
        erreurPaysOrigine.innerText = '';

        //appelle de la methode de creation nouveau user et ajout du nouveauu user dans le tableau
        creerNewUser(nom.value, prenom.value, email.value, age.value, poste.value, telephone.value, statutMarital.value, paysOrigine.value);
        ajouterDansListe(newUser);
        nom.value = "", prenom.value = "", email.value = "", age.value = "", poste.value = "", telephone.value = "", statutMarital.value = "", paysOrigine.value = "";
    }
}


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