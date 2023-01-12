const closeBtns = document.querySelectorAll('.close-modal');

closeBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const modal = btn.closest('.modal')
        modal.style.height = 0;
        modal.style.width = 0;
        modal.style.opacity = 0;
    })
})

window.addEventListener('click', (e) => {
         if(e.target.classList.contains('modal')){
            e.target.style.height = 0;
            e.target.style.width = 0;
            e.target.style.opacity = 0;
        }
    }
)

const modals = document.querySelectorAll('.modal');
modals.forEach((modal) => {
    window.addEventListener('keydown', (e) => {
        if (e.key=="Escape") {
            modal.style.transition = '1s width 2s, opacity 500ms, height 500ms ease-out '
            modal.style.height = 0;
            modal.style.width = 0;
            modal.style.opacity = 0;
        }
    })
})