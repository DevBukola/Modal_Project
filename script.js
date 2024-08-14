const modalButton = document.querySelector('.modal-button');
const modalComponent = document.querySelector('.modal-wrapper');
const closeIcon = document.querySelector('.fa-x');

modalButton.addEventListener('click', () => {
    // modalComponent.style.display = 'flex'
    modalComponent.style.scale = 1
})

closeIcon.addEventListener('click', () => {
    // modalComponent.style.display = 'none'
    modalComponent.style.scale = 0
})