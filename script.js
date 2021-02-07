const cards = document.querySelectorAll('.card')
const dropzones = document.querySelectorAll('.dropzone')

function log(message) {
    console.log('> ' + message)
}

cards.forEach(card => {
    card.addEventListener('dragstart', dragStart)
    card.addEventListener('drag', drag)
    card.addEventListener('dragend', dragEnd)
})

function dragStart() {
    dropzones.forEach(dropzone => dropzone.classList.add('highligth'))
    this.classList.add('is-dragging')
}

function drag() {
}

function dragEnd() {
    dropzones.forEach(dropzone => dropzone.classList.remove('highligth'))
    this.classList.remove('is-dragging')
}



dropzones.forEach(dropzone => {
    dropzone.addEventListener('dragenter', dragEnter)
    dropzone.addEventListener('dragover', dragOver)
    dropzone.addEventListener('dragleave', dragLeave)
    dropzone.addEventListener('drop', drop)
})

function dragEnter() {
    log('DROPZONE: Enter in zone')
}

function dragOver() {
    this.classList.add('over')

    const card = document.querySelector('.is-dragging')
    this.appendChild(card)
}

function dragLeave() {
    this.classList.remove("over")
}

function drop() {
}
