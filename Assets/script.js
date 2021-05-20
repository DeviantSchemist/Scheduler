if(localStorage.length) {
  for (let i = 9; i <= 17; i++) {
    $('#hour-' + i + ' .description').val(localStorage.getItem('hour-' + i))
  }
}


document.addEventListener('click', event => {
  if(event.target.classList.contains('saveBtn')) {
    localStorage.setItem(event.target.parentNode.id, $(event.target).siblings('.description').val())
  }
})