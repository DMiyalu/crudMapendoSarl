const table = document.querySelector('table');
const tbody = document.querySelector('tbody');
const btnValider = document.querySelector('#valider');
let newUser = { nom: "", prenom: "", estMarie: "", pays: "", email: "", poste: "", numeroTelephone: ""};

const nom = document.querySelector('#nom');
const prenom = document.querySelector('#prenom');
const email = document.querySelector('#email');
const poste = document.querySelector('#poste');
const telephone = document.querySelector('#telephone');
const statutMarital = document.querySelector('#statutMarital');
const paysOrigine = document.querySelector('#paysOrigine');

//affichage initial
afficherUsers();

function afficherUsers() {

    axios.get('http://167.71.45.243:4000/api/employes?api_key=zwohmnw').then(function(response) {
        console.log(response.data);
        for (user of response.data) {
            ajouterDansListe(user);
        }
    })
}


//Boutton ajouter nouveau user
btnValider.addEventListener('click', function() {
    // e.preventDefault();


    validerContenuFormulaire(nom, prenom, email, poste, telephone, statutMarital, paysOrigine);
    // console.log(nom.value, prenom.value, age.value, poste.value);
})

function validerContenuFormulaire(nom, prenom, email, poste, telephone, statutMarital, paysOrigine) {
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


        creerNewUser(nom.value, prenom.value, email.value, poste.value, telephone.value, statutMarital.value, paysOrigine.value);
        nom.value = "", prenom.value = "", email.value = "", poste.value = "", telephone.value = "", statutMarital.value = "", paysOrigine.value = "";
    }
}

function creerNewUser(nom, prenom, email,numeroTelephone, etatCivil, poste,pays) {
    newUser.nom = nom;
    newUser.prenom = prenom;
    newUser.email = email;
    newUser.poste = poste;
    newUser.numeroTelephone = telephone;
    newUser.estMarie = statutMarital;
    newUser.paysOrigine = paysOrigine;
    users.push(newUser);

    axios.post(`http://167.71.45.243:4000/api/employes/?api_key=zwohmnw`, newUser).then(function(response) {
        console.log(response);
    }).catch(function(erreur) {
        console.log(erreur);
    })
}



// Ajout des users dans le tableau
function ajouterDansListe(user) {
    let newElementLine = document.createElement("tr");


    for (const userProperty in user) {
        
        const newElementCell = document.createElement("td");

        newElementCell.innerText = user[userProperty];
        newElementLine.appendChild(newElementCell);
             
    }

    const modifierCell = document.createElement("td");
    modifierCell.innerHTML = `<td><a id = "mod-${user._id}"><i class="fas fa-edit"></i></</a></td>`;
    newElementLine.appendChild(modifierCell);

    const supprimerCell = document.createElement("td");
    supprimerCell.innerHTML = `<td><a id = "sup-${user._id}"><i class="fas fa-trash-alt"></i>`;
    newElementLine.appendChild(supprimerCell);


    supprimerCell.addEventListener("click", function() {

        if (confirm('Voulez-vous vraimenet supprimer cet élément ?')) {
            axios.delete(`http://167.71.45.243:4000/api/employes/${user._id}?api_key=zwohmnw`).then(function(response) {
                console.log(response);
            }).catch(function(erreur) {
                console.log(erreur);
            })
        }
    })

    modifierCell.addEventListener("click", function() {
        //initialisation du formulaire
        nom.value = user.nom;
        prenom.value = user.prenom;
        email.value = user.email;
        poste.value = user.poste;
        telephone.value = user.numeroTelephone;
        statutMarital.value = user.estMarie;
        paysOrigine.value = user.pays;

        // modifier bouton 'ajouter' en 'modifier'
        btnValider.innerHTML = "Modifier";

        btnValider.addEventListener("click", function() {
            newUser.nom = nom;
            newUser.prenom = prenom;
            newUser.email = email;
            newUser.poste = poste;
            newUser.numeroTelephone = telephone;
            newUser.estMarie = statutMarital;
            newUser.paysOrigine = paysOrigine;
            users.push(newUser);

            axios.put(`http://167.71.45.243:4000/api/employes/${user._id}?api_key=zwohmnw`, newUser).then(function(response) {
                console.log(response);
            }).catch(function(erreur) {
                console.log(erreur);
            })
        })
        
    })




    tbody.appendChild(newElementLine);
   
}

console.log(users);



// function creerNewUser(nom, prenom, email, age, poste, telephone, statutMarital, paysOrigine) {
//     newUser.nom = nom;
//     newUser.prenom = prenom;
//     newUser.email = email;
//     newUser.age = age;
//     newUser.poste = poste;
//     newUser.telephone = telephone;
//     newUser.statutMarital = statutMarital;
//     newUser.paysOrigine = paysOrigine;
//     users.push(newUser);
// }


// /modify line: iterer valeurs dans user.
//         if (user[userProperty] === 'modifier') {
//             newElementCell.style.color = 'blue';
//             newElementCell.style.cursor = 'pointer';

//             newElementCell.addEventListener("click", function() {
//                 nom.value = user.nom;
//                 prenom.value = user.prenom;
//                 email.value = user.email;
//                 age.value = user.age;
//                 poste.value = user.poste;
//                 telephone.value = user.telephone;
//                 statutMarital.value = user.statutMarital;
//                 paysOrigine.value = user.paysOrigine;
//                 btnValider.innerHTML = "Modifier";
                

                
//                 //mise à jour
//                 btnValider.addEventListener("click", function() {

//                     tbody.removeChild(newElementLine);
//                     validerContenuFormulaire();
//                     btnValider.innerHTML = "Ajouter";
//                 })
//             })
//         }  



 // //delete line
 //        if (user[userProperty] === 'delete') {
 //            newElementCell.style.color = 'red';
 //            newElementCell.style.cursor = 'pointer';
 //            newElementCell.addEventListener("click", function() {
 //                if (confirm('Voulez-vous vraimenet supprimer cet élément ?')) {
 //                    tbody.removeChild(newElementLine);
 //                }
 //            })
 //        }