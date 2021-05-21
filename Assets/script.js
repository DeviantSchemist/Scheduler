// displays the time at the top of the calendar
let update = function () {
  document.getElementById('currentDay').innerHTML = moment().format('dddd') + ', ' + moment().format('MMMM Do YYYY, h:mm:ss a')
}
update()
setInterval(update, 1000)

// checks if there is anything in local storage and then displays it
if (localStorage.length) {
  for (let i = parseInt($('div.container:first-child').attr('id').split('hour-')[1]); i <= parseInt($('div.container:last-child').attr('id').split('hour-')[1]); i++) {
    $('#hour-' + i + ' .description').val(localStorage.getItem('hour-' + i))
  }
}

// color codes the time blocks based on the current hour
let currentHour = moment().hour(), elementHour
jQuery.each($('.time-block'), function() {
  elementHour = parseInt($(this).attr('id').split('hour-')[1])

  if (elementHour < currentHour) {
    $(this).removeClass('present future')
    $(this).addClass('past')
  }
  else if (elementHour === currentHour) {
    $(this).removeClass('past future')
    $(this).addClass('present')
  }
  else if (elementHour > currentHour) {
    $(this).removeClass('present past')
    $(this).addClass('future')
  }
})

// saves the task when the save button is clicked
document.addEventListener('click', event => {
  if (event.target.classList.contains('saveBtn')) {
    localStorage.setItem(event.target.parentNode.id, $(event.target).siblings('.description').val())
  }
})
