
const menuLinks = document.querySelectorAll('.buttons-bank div button a[href^="#"]');

function getDistanceFromTheTop(element) {
  const id = element.getAttribute("href");
  return document.querySelector(id).offsetTop;
}


function scrollToSection(event) {
  event.preventDefault();
  const distanceFromTheTop = getDistanceFromTheTop(event.target) ;
  smoothScrollTo(0, distanceFromTheTop);
  console.log('ola')
}

menuLinks.forEach((link) => {
  link.addEventListener("click", scrollToSection);
});

function smoothScrollTo(endX, endY, duration) {
  const startX = window.scrollX || window.pageXOffset;
  const startY = window.scrollY || window.pageYOffset;
  const distanceX = endX - startX;
  const distanceY = endY - startY;
  const startTime = new Date().getTime();

  duration = typeof duration !== "undefined" ? duration : 400;

  const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1)
      return (distance / 2) * time * time * time * time + from;
    return (-distance / 2) * ((time -= 2) * time * time * time - 2) + from;
  };

  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
      clearInterval(timer);
    }
    window.scroll(newX, newY);
  }, 1000 / 60);
}

function opacityScroll (){
    const imgiani = document.querySelector('.backbrasil');
    const infani = document.querySelector('.inf');
    const positionimgani = imgiani.getBoundingClientRect()['y'];
    const pixbank = document.querySelector('.pix-bank');
    const Qrbank= document.querySelector('.QR-bank');
    const aniTexPix = document.querySelector('.ani-text-pix');
    const positionpixbank = pixbank.getBoundingClientRect()['y'];
    positionpixbank <= 712 ? Qrbank.classList.add('opacity-bank') & pixbank.classList.add('opacity-bank') & aniTexPix.classList.add('ani-text-opacy-tras-pos') : positionpixbank === positionpixbank;
    positionimgani <= 790 ? imgiani.classList.add('opacity-bank') & infani.classList.add('opacity-bank'): positionimgani === positionimgani;
}
document.addEventListener('scroll',opacityScroll);



let contindexpix = 0;
const indexContpix = document.querySelectorAll('.text-animation-pix');

function indexcontainerpix () {


      contindexpix++
    if(contindexpix >= indexContpix.length){
        contindexpix = 0
    }
    childindexstringspix(contindexpix);
}
function childindexstringspix (index){
    let contindexChildlet = 0;
    let removcontindexChildlet = 0;
    let indexremov = index - 1;
    indexremov <= -1 ? indexremov = indexContpix.length -1 : indexremov == indexremov;
    const childnews = indexContpix[index].querySelectorAll('i');
    const childnewsreovin = indexContpix[indexremov].querySelectorAll('i');



function contIndexChildOnepix (){

    if (  childnews.length > contindexChildlet){
    
        contindexChildlet++
        requestAnimationFrame(contIndexChildOnepix)
       
        childnews[contindexChildlet - 1].classList.replace('out','in');
     //   for(childnews[])



        // for(elementschildzero of childZeronews){
        //     elementschildzero.classList.replace('in','out');
        // }

    
    }
    if(childnewsreovin.length > removcontindexChildlet ){
        removcontindexChildlet++
        requestAnimationFrame(contIndexChildOnepix)
        childnewsreovin[removcontindexChildlet - 1].classList.replace('in','out');
    }

// requestAnimationFrame(contIndexChildOnepix)
}



requestAnimationFrame(contIndexChildOnepix)


}

setInterval(() => {
   indexcontainerpix() 
}, 2000);


































let contindexbrazil = 0;
const indexContBrazil = document.querySelectorAll('.text-animation-bank-brazil');

function indexcontainerBrazil () {
    //console.log(contindexbrazil)

      contindexbrazil++
    if(contindexbrazil >= indexContBrazil.length){
        contindexbrazil = 0
    }
    childindexstringsBrasil(contindexbrazil);
}
function childindexstringsBrasil (index){
    let contindexChildlet = 0;
    let removcontindexChildlet = 0;
    let indexremov = index - 1;
    indexremov <= -1 ? indexremov = indexContBrazil.length -1 : indexremov == indexremov;
    const childBrazil = indexContBrazil[index].querySelectorAll('i');
    const childBrazilreovin = indexContBrazil[indexremov].querySelectorAll('i');

function contIndexChildOneBrazil (){

    if (  childBrazil.length > contindexChildlet){
    
        contindexChildlet++
        requestAnimationFrame(contIndexChildOneBrazil)
       
        childBrazil[contindexChildlet - 1].classList.replace('out','in');

    
    }
    if(childBrazilreovin.length > removcontindexChildlet ){
        removcontindexChildlet++
        requestAnimationFrame(contIndexChildOneBrazil)
        childBrazilreovin[removcontindexChildlet - 1].classList.replace('in','out');
    }


}



requestAnimationFrame(contIndexChildOneBrazil)


}

setInterval(() => {
   indexcontainerBrazil() 
}, 2000);