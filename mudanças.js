botoes = document.querySelectorAll('.b1')
partes = document.querySelectorAll('.s1')
console.log(partes)

function tabs(index){
    partes.forEach(e =>{
        e.classList.remove('ativo')
    })
    partes[index].classList.add('ativo')
}

botoes.forEach((item, posicao)=>{
    item.addEventListener('click', (e)=>{
        e.preventDefault()
        tabs(posicao)
    })
})

/* maquina*/

function typeWriter(elemento){
    const textoArray = elemento.innerHTML.split('')
    elemento.innerHTML = '';
    textoArray.forEach((letra, i )=>{
        setTimeout(() => elemento.innerHTML += letra, 75 * i)
    })
}

const titulo = document.querySelector('.subtitulo')
typeWriter(titulo)
