let mouseCursor = document.querySelector('.cursor')
let list = document.querySelectorAll('list')
const button = document.querySelector('button');

window.addEventListener('mousemove', cursor)

function cursor(event) {
	mouseCursor.style.top = event.pageY + "px"
	mouseCursor.style.left = event.pageX + "px"
}

window.addEventListener('mousedown', () => {
	mouseCursor.classList.add('mouse-down')
})
window.addEventListener('mouseup', () => {
	mouseCursor.classList.remove('mouse-down')
})

