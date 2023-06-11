const jsStart = function (doc, win) {
  'use strict'

  let elemCreate = doc.createElement('div')
  const helloworldH1 = doc.createElement('h1')
  helloworldH1.innerHTML = 'Hello World'
  helloworldH1.style.color = '#ffffff'
  //doc.body.appendChild(elemCreate)
  //elemCreate.appendChild(helloworldH1)
  elemCreate.setAttribute('id', 'title')
  elemCreate.style.backgroundColor = '#3600ff'
  elemCreate.style.padding = '3px'

}(document, window)
