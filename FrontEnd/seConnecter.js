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
            .then(response => {
              if(!response.ok){
                console.log(response.status)
                throw new Error(response.status)
              }
              return response.json()
            })

            .then(data => {
              if(data.token){
              token = data.token
              localStorage.setItem("token", token)
              event.preventDefault()
              window.location.href = "index.html"
            } 
            })
            .catch(error => {
              console.log(error)
              const erreur = document.querySelector("#messageErreurLog")
              if(error == "Error: 404"){
                erreur.innerHTML = "L'email ou le mot de passe est incorrect."
              } else{
                erreur.innerHTML = "Le mot de passe est incorrect."
              }          
            })
    }
    else{
        const erreur = document.querySelector("#messageErreurLog")
        erreur.innerHTML = "Le champs Mot de passe ou E-mail est vide." 
    }
})