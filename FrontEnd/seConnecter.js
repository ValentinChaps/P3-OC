const inputEmail = document.querySelector("#e-mail")
const inputMotDePasse = document.querySelector("#motDePasse")
const boutonSeConnecter = document.querySelector("#seConnecter")
boutonSeConnecter.addEventListener("click", function (){
    if (inputEmail.value ==="sophie.bluel@test.tld" && inputMotDePasse.value ==="S0phie"){
        const connecter = "Connecter"
        console.log(connecter)
    }
    else{
        const erreur = document.querySelector("#messageErreur")
        erreur.innerHTML = "L'email ou le mot de passe est incorrect"
        
    }
})