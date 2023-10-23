
window.onload = () =>{
    function scrolanimation () {
        const containerAnimation = document.querySelector('.history-background');
        const positionYcontainer = containerAnimation.getBoundingClientRect()['y'];
        const historyText = document.querySelector('[data-animation="lefth"]');
        const TitileHistory = document.getElementById('Title-history');
        const TextHistory = document.getElementById('Text-history');
        const imghistory = document.querySelector('[data-animation="opacety-figure"]');
        if( positionYcontainer >= 136){
            
         TitileHistory.style.transform = `translate(${(positionYcontainer - 136) / 10}%)`;
        } if (positionYcontainer >= 10) (
            TextHistory.style.transform = `translate(${(positionYcontainer - 10) / 10}%)`
        )
        // if(positionYcontainer >= 136){
       
        //     historyText.style.transform = `translate(${(positionYcontainer - 136)}px)`;
       
        // }
    }
document.addEventListener('scroll',scrolanimation);

}

function buttonScrollAnimate(){
    const buttonsRef = document.querySelectorAll('.button-guide');
    console.log(buttonsRef.length)
    function clickButtonScroll (event){
        event.preventDefault();
        const element = event.target;
        const id = element.getAttribute('href');
        const section = document.querySelector(id)
        const to = section.offsetTop;
    smoothScrollTo(1000, to);

    }
buttonsRef.forEach(item =>{
item.addEventListener('click',clickButtonScroll )
})

function smoothScrollTo(endX, endY, duration) {
    const startX = window.scrollX || window.pageXOffset;
    const startY = window.scrollY || window.pageYOffset;
    const distanceX = endX - startX;
    const distanceY = endY - startY;
    const startTime = new Date().getTime();
  
    duration = typeof duration !== 'undefined' ? duration : 400;
  
    // Easing function
    const easeInOutQuart = (time, from, distance, duration) => {
      if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
      return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
    };
  
    const timer = setInterval(() => {
      const time = new Date().getTime() - startTime;
      const newX = easeInOutQuart(time, startX, distanceX, duration);
      const newY = easeInOutQuart(time, startY, distanceY, duration);
      if (time >= duration) {
        clearInterval(timer);
      }
      window.scroll(newX, newY);
    }, 1000 / 60); // 60 fps
  };
}

buttonScrollAnimate()