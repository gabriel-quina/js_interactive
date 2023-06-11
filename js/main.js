'use strict'

function chamarConsole(){
    console.log('Chamei o console, console respondeu!!! Pagina foi atualizada')
    nextLesson()
}

function nextLesson(){
    let elemCreate = document.createElement('p')
    elemCreate.innerText = 'Você acaba de chamar um arquivo javascript externo. Está é a maneira mais utilizada ao incorporar codigos javascript em paginas Web'
    document.body.appendChild(elemCreate)
}