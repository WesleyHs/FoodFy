const modal = document.querySelector('.modal')
const receitas = document.querySelectorAll('.receitas')



for (let receita of receitas){
    
    receita.addEventListener("click", function (){
        const imagemId = receita.getAttribute('id')
        const title = receita.querySelector("h3.nome").textContent;
        const autor = receita.querySelector("p.autor").textContent;
    
        modal.classList.add('active')

        modal.querySelector("img").src = `./layouts/assets/${imagemId}.png`
        modal.querySelector("h3.nome").innerHTML = title;
        modal.querySelector("p.autor").innerHTML = autor;
        })
}

document.querySelector('.modalReceitas').addEventListener("click", function () {
    modal.classList.remove('active')
    modal.querySelector("img").src = ""

})