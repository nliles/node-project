const links = document.querySelectorAll('a');
const highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.appendChild(highlight);

function highlightLink() {
  const l = this.getBoundingClientRect();
  const coords = {
    width: l.width,
    height: l.height,
    left: l.left + window.scrollX,
    top: l.top + window.scrollY
  }
  highlight.style.width = `${coords.width}px`;
  highlight.style.height = `${coords.height}px`;
  highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
}

links.forEach(link => link.addEventListener('mouseenter', highlightLink))
