const inputEmail = document.querySelector("#e-mail")
const inputMotDePasse = document.querySelector("#motDePasse")
const boutonSeConnecter = document.querySelector("#seConnecter")
let token = ""
boutonSeConnecter.addEventListener("click", function (event){
    if (inputEmail.value.length > 0 && inputMotDePasse.value.length > 0){
        fetch("http://localhost:5678/api/users/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              email: inputEmail.value,
              password: inputMotDePasse.value
            })
          })
            .then(response => response.json())
            .then(data => {
              if(data.token){
              token = data.token
              localStorage.setItem("token", token)
              event.preventDefault()
              window.location.href = "index.html"
              console.log(token)
            } else{
              const erreur = document.querySelector("#messageErreur")
              erreur.innerHTML = "L'email ou le mot de passe est incorrect"
            }
            })
            .catch(error => {
              console.log("Une erreur s'est produite :", error)
            })
    }
    else{
        const erreur = document.querySelector("#messageErreur")
        erreur.innerHTML = "L'email ou le mot de passe est incorrect"
        
    }
})