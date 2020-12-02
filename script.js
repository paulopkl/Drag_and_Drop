const cards = document.querySelectorAll('.card');
const dropzones = document.querySelectorAll('.dropzone');

cards.forEach(card => {
    card.addEventListener('dragstart', function (dragstart) {
        // THIS = card
        dropzones.forEach(dropzone => dropzone.classList.add('highlight'));

        this.classList.add('isDragging');
    });
    
    card.addEventListener('drag', drag => {
        console.log('Drag');
    });
    
    card.addEventListener('dragend', function (dragend) {
        dropzones.forEach(dropzone => dropzone.classList.remove('highlight'));

        this.classList.remove('isDragging');
    });
})

// place where will be dropped the cards
dropzones.forEach(dropzone => {
    dropzone.addEventListener('dragenter', dragenter => {
        console.log('Start Drag');
    });
    
    dropzone.addEventListener('dragover', function (dragover) {
        // THIS = dropzone
        this.classList.add('over');

        // Get dragging card
        const cardBeingDragged = document.querySelector('.isDragging');

        this.appendChild(cardBeingDragged);
    });
    
    dropzone.addEventListener('dragleave', function (dragleave) {
        this.classList.remove('over');
    });
    
    dropzone.addEventListener('drop', function (drop) {
        this.classList.remove('over');
    });
});