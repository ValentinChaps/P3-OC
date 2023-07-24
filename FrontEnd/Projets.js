const reponse = await fetch('http://localhost:5678/api/works');
const projets = await reponse.json();

export function genererProjets(projets){
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