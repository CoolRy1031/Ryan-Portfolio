import { projectData } from "./project-data.js"
console.log(projectData)

const footer = document.getElementById('footer')
const paragraph = document.getElementById('paragraph')
const lightDarkBtn = document.getElementById('light-dark-button')
const favicon = document.getElementById('favicon')
const cardContainer = document.getElementById('dropdown')
console.log(cardContainer)



let projectMarkup = projectData.map(project =>
  ` <div class="dropdown">
  <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown link
  </a>

  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <li><a class="dropdown-item" href="${project.github}">GitHub</a></li>
    <li><a class="dropdown-item" href="${project.deployment}">Deploy</a></li>
  </ul>
</div>
  `
  ).join('')
  
  cardContainer.innerHTML = projectMarkup


const allido = new Audio('../audio/Dj clipped.mov')
footer.addEventListener('click', function(){
  allido.volume = .1
  allido.play()
  changeFavicon()
})

function changeFavicon () {
  favicon.setAttribute('href', '/images/Braves-Logo.png') 
}
  

// function revertFavicon () {
//   favicon.setAttribute('href', '/images/Ryan.jpeg')
// }

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


