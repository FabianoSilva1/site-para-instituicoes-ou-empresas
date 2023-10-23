const buttons = document.querySelectorAll('.button-days');
const daysContainers = document.querySelectorAll('.day');
buttons.forEach((button, index) => {

buttons[0].classList.add('background-button-sun');
  button.addEventListener('click', () =>{
    for(let cont = 0 ; cont < buttons.length ; cont++){
      buttons[cont].classList.remove('background-button-days');
      buttons[cont].classList.remove('background-button-sun');
    }
    button.classList.add('background-button-days')
    daysContainers.forEach((days) => {
      days.style.display = 'none'
      days.classList.remove('animation');

    });
    daysContainers[index].style.display = 'block';
    daysContainers[index].classList.add('animation');

  })
})

