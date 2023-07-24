let modal = null
const focusaleSelector ="button, a, input, textarea"
let focusables =[]

const openModal = async function (e) {
    e.preventDefault()
    const target = e.target.getAttribute("href")
    if (target.startsWith("#")){
        modal = document.querySelector(target)
    } else{
        modal = await loadModal(target)
    }
    focusables = Array.from(modal.querySelectorAll(focusaleSelector))
    focusables[0].focus()
    modal.style.display = null
    modal.removeAttribute("aria-hidden")
    modal.setAttribute("aria-modal","true")
    modal.addEventListener("click", closeModal)
    modal.querySelector(".js-modal-close").addEventListener("click", closeModal)
    modal.querySelector(".js-modal-stop").addEventListener("click", stopPropagation)

}

const closeModal = function (e) {
    if (modal === null) return
    e.preventDefault()
    modal.style.display = "none"
    modal.removeAttribute("aria-modal")
    modal.setAttribute("aria-hidden", "true")
    modal.removeEventListener("click", closeModal)
    modal.querySelector(".js-modal-close").removeEventListener("click", closeModal)
    modal.querySelector(".js-modal-stop").removeEventListener("click", stopPropagation)
    modal = null
}

const stopPropagation = function (e) {
    e.stopPropagation()
}

const focusInModal = function(e){
    e.preventDefault()
    let index = focusables.findIndex(f => f === modal.querySelector(":focus"))
    if (e.shiftKey === true){
        index--
    } else{
        index++
    }
    if (index >= focusables.length){
        index = 0
    }
    if (index < 0) {
        index = focusables.length -1
    }
    focusables[index].focus()
}

const loadModal = async function (url) {
    const target = "#" + url.split("#")[1]
    const existingModal = document.querySelector(target)
    if(existingModal !== null) return existingModal
    const html = await fetch(url).then(response => response.text())
    const element = document.createRange().createContextualFragment(html).querySelector(target)
    document.body.append(element)
    return element
}

const lienModal = document.querySelector(".js-modal")
lienModal.addEventListener("click", openModal)


window.addEventListener("keydown", function(e){
    if (e.key === "Escape" || e.key === "Esc"){
        closeModal(e)
    }
    if (e.key === "Tab" && modal !== null){
        focusInModal(e)
    }
})