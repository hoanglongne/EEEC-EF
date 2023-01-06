export let isDateAscending = true;
export function toggleDateSort () {
    
    const dateSort = this.querySelector('#dateSort');
    const arrowUp = this.querySelector('#arrowUp')
    const arrowDown = this.querySelector('#arrowDown')
    
    dateSort.addEventListener('click',() => {
    
    if (isDateAscending) {
        arrowUp.classList.add('hidden')
        arrowDown.classList.add('inline')
        arrowDown.classList.remove('hidden')
        arrowUp.classList.remove('inline')
        isDateAscending = !isDateAscending;
    } else {
        arrowDown.classList.add('hidden')
        arrowUp.classList.add('inline')
        arrowUp.classList.remove('hidden')
        arrowDown.classList.remove('inline')
        isDateAscending = !isDateAscending;
    }
    })
}