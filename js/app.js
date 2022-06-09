import { projectData } from "./project-data.js"
console.log(projectData)

const footer = document.getElementById('footer')
const paragraph = document.getElementById('paragraph')
const lightDarkBtn = document.getElementById('light-dark-button')
const favicon = document.getElementById('favicon')
const cardContainer = document.getElementById('card-container')



let projectMarkup = projectData.map(project =>
  ` 
  <div class="card" style="width: 18rem;">
    <img src="${project.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${project.title}</h5>
      <p class="card-text">${project.description}</p>
      <div>
      <a href="#"${project.github}"btn btn-primary">GitHub</a>
      <a href="#"${project.deployment}"btn btn-primary">Deployment</a>
      </div>
    </div>
  </div>
  `
  
  ).join('')
  
  cardContainer.innerHTML =projectMarkup


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


