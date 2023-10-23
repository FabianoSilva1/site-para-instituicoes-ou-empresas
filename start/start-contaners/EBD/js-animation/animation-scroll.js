function animateScroll (){
const buttonsClick = document.querySelectorAll('.link');
function distaceTop (element){
    const id = element.classList;
    const id1 = `#${id[3]}`;
    return document.querySelector(id1).offsetTop;
}
function clickanimation (event){
    event.preventDefault();
    console.log(event.target)
    const distance = distaceTop(event.target);
    smoothScrollTo(0,distance, 400)
    // const element = event.target;
    // const id = element;
    // const idP = `#${id.classList[3]}`;
    // const section = document.querySelector(idP)
    // console.log(section.offsetTop)
  
}
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

buttonsClick.forEach(function(element ){
element.addEventListener('click',clickanimation)
})
}
animateScroll()

let contindexmagazine = 0 ;

const indexContmagazine = document.querySelectorAll('.text-animation-string-mag');

function indexcontainermagazine () {
    //console.log(contindex)

      contindexmagazine++
    if(contindexmagazine >= indexContmagazine.length){
        contindexmagazine = 0
    }
    childindexstringsmagazine(contindexmagazine);
}
function childindexstringsmagazine (index){
    const widthScreen = window.innerWidth;
    
    let contindexChildlet = 0;
    const child = indexContmagazine[index].querySelectorAll('i');
    const childOne = indexContmagazine[1].querySelectorAll('i');
    const childZero = indexContmagazine[0].querySelectorAll('i');
    const manipwidthmaga= document.querySelector('.collection-animation-magazine')
if(index === 1){
    
function contIndexChildOnemagazine (){

    if (  child.length > contindexChildlet){
    
        contindexChildlet++
        requestAnimationFrame(contIndexChildOnemagazine)
        child[contindexChildlet - 1].classList.replace('out-mag','in-mag');
        for(elementschildzero of childZero){
            elementschildzero.classList.replace('in-mag','out-mag');
        if(widthScreen >= 360 & widthScreen <= 700){
            manipwidthmaga.style.width = `${26 * child.length - 1 }px`;
        }else{
            manipwidthmaga.style.width = `${20 * child.length - 1 }px`;
        }
            
        }
    
    }
}
requestAnimationFrame(contIndexChildOnemagazine)
}




else if(index === 0){

function contIndexChildZero (){
    for(elementschildOne of childOne){
        elementschildOne.classList.replace('in-mag','out-mag')
    }
if (  child.length > contindexChildlet){
    contindexChildlet++
    requestAnimationFrame(contIndexChildZero)
    child[contindexChildlet - 1].classList.replace('out-mag', 'in-mag');

    if(widthScreen >= 360 & widthScreen <= 700){
        manipwidthmaga.style.width = `${26 * child.length - 1 }px`;
    }else{
        manipwidthmaga.style.width = `${20 * child.length - 1 }px`;
    }
}
}
requestAnimationFrame(contIndexChildZero)
}
}


setInterval(() => {
    indexcontainermagazine() 
 }, 2000);
























let contindexYT = 0;
const indexContnewsYT = document.querySelectorAll('.text-animation-string-YOUTUBE');
const manipwidth = document.querySelector('.collection-animation-YOUTUBE');
function indexcontainerYT () {

      contindexYT++
    if(contindexYT >= indexContnewsYT.length){
        contindexYT = 0
    }
    childindexstringsYT(contindexYT);
}
function childindexstringsYT (index){
    let contindexChildlet = 0;
    let removcontindexChildlet = 0;
    let indexremov = index - 1;
    indexremov <= -1 ? indexremov = indexContnewsYT.length -1 : indexremov == indexremov;
    const childYT = indexContnewsYT[index].querySelectorAll('i');
    const childnewsreovin = indexContnewsYT[indexremov].querySelectorAll('i');
function contIndexChildYT (){

    if (  childYT.length > contindexChildlet){
    
        contindexChildlet++
        requestAnimationFrame(contIndexChildYT)
       
        childYT[contindexChildlet - 1].classList.replace('out','in');
        manipwidth.style.width = `${22 * (childYT.length - 1)}px`;



    
    }
    if(childnewsreovin.length > removcontindexChildlet ){
        removcontindexChildlet++
        requestAnimationFrame(contIndexChildYT)
        childnewsreovin[removcontindexChildlet - 1].classList.replace('in','out');
        // manipwidth.style.width = `${26 * (childYT.length - 1)}px`;
    }

requestAnimationFrame(contIndexChildYT)
}



requestAnimationFrame(contIndexChildYT)

}

setInterval(() => {
   indexcontainerYT() 
}, 2000);




































