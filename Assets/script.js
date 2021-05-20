document.addEventListener('click', event => {
  if(event.target.classList.contains('saveBtn')) {
    //key needs to be unique
    localStorage.setItem('text', $(event.target).siblings('.description').val())
  }
})