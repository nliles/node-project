const links = document.querySelectorAll('.cool > li');
const background = document.querySelector('.dropdownBackground');
const nav = document.querySelector('nav');

function handleEnter() {
  background.classList.add('open');
  this.classList.add('trigger-enter')
  setTimeout(() => {
    this.classList.add('trigger-enter-active')
  }, 150)
  const dropdown = this.querySelector('.dropdown');
  const dropdownCoords = dropdown.getBoundingClientRect();
  const navCoords = nav.getBoundingClientRect();
  const coords = {
    width: dropdownCoords.width,
    height: dropdownCoords.height,
    left: dropdownCoords.left - navCoords.left,
    top: dropdownCoords.top - navCoords.top
  }
  background.style.setProperty('width', `${coords.width}px`);
  background.style.setProperty('height', `${coords.height}px`);
  background.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`); 
}

function handleExit() {
  background.classList.remove('open');
  this.classList.remove('trigger-enter', 'trigger-enter-active');
}

links.forEach(link => link.addEventListener('mouseenter', handleEnter));
links.forEach(link => link.addEventListener('mouseleave', handleExit));