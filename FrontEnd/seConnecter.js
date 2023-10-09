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
                if(response.status == 404){
                  throw new Error("Utilisateur non trouvé")
                } else if(response.status == 401){
                  throw new Error("Mot de passe incorrect")
                }}
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
              erreur.innerText = error;        
            })
    }
    else{
        const erreur = document.querySelector("#messageErreurLog")
        erreur.innerText = "Le champ Mot de passe ou E-mail est vide." 
    }
})