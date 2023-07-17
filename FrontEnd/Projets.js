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


const boutonToutMesProjets = document.querySelector("#toutMesProjets")
boutonToutMesProjets.addEventListener("click", function (){
    document.querySelector(".gallery").innerHTML = ""
    genererProjets(projets)
})

const boutonObjet = document.querySelector("#objets")
boutonObjet.addEventListener("click", function (){
    const projetsFiltres = projets.filter(function(projet){
        return projet.categoryId === 1
    })
    document.querySelector(".gallery").innerHTML = ""
    genererProjets(projetsFiltres)
})

const boutonAppartements = document.querySelector("#appartements")
boutonAppartements.addEventListener("click", function (){
    const projetsFiltres = projets.filter(function(projet){
        return projet.categoryId === 2
    })
    document.querySelector(".gallery").innerHTML = ""
    genererProjets(projetsFiltres)
})

const boutonHotelsEtRestaurants = document.querySelector("#hotelsEtRestaurants")
boutonHotelsEtRestaurants.addEventListener("click", function (){
    const projetsFiltres = projets.filter(function(projet){
        return projet.categoryId === 3
    })
    document.querySelector(".gallery").innerHTML = ""
    genererProjets(projetsFiltres)
})