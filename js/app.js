const resume = document.getElementById('resume')
const paragraph = document.querySelector('#paragraph')
const lightDarkBtn = document.querySelector('#light-dark-button')
console.log(lightDarkBtn)


const allido = new Audio('../audio/allido.mp3')

resume.addEventListener('click', function(){
  allido.volume = .1
  allido.play()
})
lightDarkBtn.addEventListener('click', toggleLightDark)

function toggleLightDark() {
  paragraph.className = paragraph.className === 'dark' ? '' : 'dark'
}
function checkDarkPref() {
  if (
    window.matchMedia("(prefers-color-scheme:dark)").matches &&
    body.className !== "dark"
  ) {
    toggleLightDark()
  }
}
checkDarkPref()


