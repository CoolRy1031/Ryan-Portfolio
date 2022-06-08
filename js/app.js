const footer = document.getElementById('footer')
const paragraph = document.querySelector('#paragraph')
const lightDarkBtn = document.querySelector('#light-dark-button')
const title = document.querySelector('#portfolio')



const allido = new Audio('../audio/Dj clipped.mov')


footer.addEventListener('click', function(){
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

anime.timeline({loop: true})
  .add({
    targets: '.ml16 .letter',
    translateY: [-100,0],
    easing: "easeOutExpo",
    duration: 1400,
    delay: (el, i) => 30 * i
  }).add({
    targets: '.ml16',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });