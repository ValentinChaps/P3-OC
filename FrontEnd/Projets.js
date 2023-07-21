const reponse = await fetch('http://localhost:5678/api/works');
const projets = await reponse.json();

function genererProjets(projets){
    for (let i = 0; i < projets.length; i++){
        const article = projets[i]
        const sectionGallery = document.querySelector(".gallery")
        const projetElement = document.createElement("figure")
        const imageElement = document.createElement("img")
        imageElement.src = article.imageUrl
        const titreElement = document.createElement("figcaption")
        titreElement.innerText = article.title

        sectionGallery.appendChild(projetElement)
        projetElement.appendChild(imageElement)
        projetElement.appendChild(titreElement)
    }
}
genererProjets(projets)

const fondToutMesProjets = document.querySelector("#toutMesProjets")
    fondToutMesProjets.style.color = "white"
    fondToutMesProjets.style.backgroundColor = "#1D6154"
    
const boutonToutMesProjets = document.querySelector("#toutMesProjets")
boutonToutMesProjets.addEventListener("click", function (){
    const toutMesProjets = document.querySelector("#toutMesProjets")
    toutMesProjets.style.color = "white"
    toutMesProjets.style.backgroundColor = "#1D6154"
    const boutonFiltresToutMesProjets = document.querySelectorAll("#appartements, #objets, #hotelsEtRestaurants")
        boutonFiltresToutMesProjets.forEach(boutonFiltresToutMesProjets => {
        boutonFiltresToutMesProjets.style.color = ""
        boutonFiltresToutMesProjets.style.backgroundColor = ""})
    document.querySelector(".gallery").innerHTML = ""
    genererProjets(projets)
})
const boutonObjet = document.querySelector("#objets")
boutonObjet.addEventListener("click", function (){
    const Objets = document.querySelector("#objets")
    Objets.style.color = "white"
    Objets.style.backgroundColor = "#1D6154"
    const boutonFiltresObjets = document.querySelectorAll("#appartements, #toutMesProjets, #hotelsEtRestaurants")
        boutonFiltresObjets.forEach(boutonFiltresObjets => {
        boutonFiltresObjets.style.color = ""
        boutonFiltresObjets.style.backgroundColor = ""
    })
    const projetsFiltres = projets.filter(function(projet){
        return projet.categoryId === 1
    })
    
    document.querySelector(".gallery").innerHTML = ""
    genererProjets(projetsFiltres)
})

const boutonAppartements = document.querySelector("#appartements")
boutonAppartements.addEventListener("click", function (){
    const appartements = document.querySelector("#appartements")
    appartements.style.color = "white"
    appartements.style.backgroundColor = "#1D6154"
    const boutonFiltresAppartements = document.querySelectorAll("#objets, #toutMesProjets, #hotelsEtRestaurants")
    boutonFiltresAppartements.forEach(boutonFiltresAppartements => {
        boutonFiltresAppartements.style.color = ""
        boutonFiltresAppartements.style.backgroundColor = ""
    })
    const projetsFiltres = projets.filter(function(projet){
        return projet.categoryId === 2
    })
    document.querySelector(".gallery").innerHTML = ""
    genererProjets(projetsFiltres)
})

const boutonHotelsEtRestaurants = document.querySelector("#hotelsEtRestaurants")
boutonHotelsEtRestaurants.addEventListener("click", function (){
    const hotelsEtRestaurants = document.querySelector("#hotelsEtRestaurants")
    hotelsEtRestaurants.style.color = "white"
    hotelsEtRestaurants.style.backgroundColor = "#1D6154"
    const boutonFiltresHotelsEtRestaurants = document.querySelectorAll("#appartements, #objets, #toutMesProjets")
    boutonFiltresHotelsEtRestaurants.forEach(boutonFiltresHotelsEtRestaurants => {
        boutonFiltresHotelsEtRestaurants.style.color = ""
        boutonFiltresHotelsEtRestaurants.style.backgroundColor = ""
    })
    const projetsFiltres = projets.filter(function(projet){
        return projet.categoryId === 3
    })
    document.querySelector(".gallery").innerHTML = ""
    genererProjets(projetsFiltres)
})

const token = localStorage.getItem("token")
if (token) {
    const encadreNoir = document.querySelector("#encadreNoir")
    encadreNoir.style.display = "flex"
}
console.log(token)