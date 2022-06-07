const git = document.querySelector('#git')
const linked = document.querySelector('#linked')
const mail = document.querySelector('#mail')
const work = document.querySelector('#work')
const contact = document.querySelector('#contact')
const resume = document.querySelector('#resume')
const paragraph = document.querySelector('#paragraph')

const allido = new Audio('../audio/allido.mp3')

paragraph.addEventListener('click', function(){
  allido.volume = .1
  allido.play()
})



