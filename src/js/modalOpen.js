const btn = document.getElementById('clickToMove');
const news = document.getElementById('gallery-section')

btn.addEventListener('click', (e) => {
    e.preventDefault();
    news.scrollIntoView({block: "start", behavior: "smooth"})
})

const clickedImages = document.querySelectorAll('.thumbImageContainer')

clickedImages.forEach((img) => {
const clickID = img.getAttribute("data-modal");
const modal = document.getElementById(clickID)

img.addEventListener('click', (e) => {
    modal.style.transition = 'height 250ms, opacity 650ms, width 500ms ease-out'
    modal.style.height = "100%"
    modal.style.width = "100%"
    modal.style.opacity = 1
})
})