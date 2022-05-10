window.addEventListener('scroll', onScroll)

onScroll()
function onScroll(){
  showNavOnScroll()
  showBackToTopButtonOnScroll()
  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section){
  const targetLine = scrollY + innerHeight/2
  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop
  const sectionEndsAt = sectionTop +sectionHeight
  const sectionEndPassesTargetLine = sectionEndsAt <= targetLine

  const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassesTargetLine
  
  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if(sectionBoundaries){
    menuElement.classList.add('active')
  }
}

let valueDisplays = document.querySelectorAll('.numCount')
let interval = 4000

valueDisplays.forEach((valueDisplay)=>{
  let startValue = 0
  let endValue = parseInt(valueDisplay.getAttribute('data-val'))
  let duration = Math.floor(interval/endValue)
  let counter = setInterval(function(){
    startValue += 1
    valueDisplay.textContent = `+${startValue}`
    if(startValue == endValue){
      clearInterval(counter)
    }
  }, duration)
})

function showNavOnScroll(){
  if(scrollY>3){
    navigation.classList.add('scroll')
  }else{
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll(){
  if(scrollY>500){
    backToTopButton.classList.add('show')
  }else{
    backToTopButton.classList.remove('show')
  }
}

function openMenu(){
  document.body.classList.add('menu-expanded')
}
function closeMenu(){
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
}).reveal(`
#home,
#home img,
#home .stats,
#services,
#services header,
#services .card,
#about,
#about header,
#about .content`);