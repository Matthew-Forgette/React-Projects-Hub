/* GLOBAL VARIABLES */
const toggle = document.getElementById('toggle');
const closeModal = document.getElementById('close');
const openModal = document.getElementById('open');
const modal = document.getElementById('modal');


// ----------------------------------------------------------------------


/* EVENT LISTENERS */

// toggle nav
toggle.addEventListener('click', () => 
    document.body.classList.toggle('show-nav')
);

// Show modal
openModal.addEventListener('click', () => modal.classList.add('show-modal'));

// Hide modal
closeModal.addEventListener('click', () => modal.classList.remove('show-modal'))

// Hide modal on outside click
window.addEventListener('click', e => {
if (e.target == modal) {
    modal.classList.remove('show-modal')
} else {
    return false
}});


// ----------------------------------------------------------------------

