function animatioshistory () {
function ContainerHistory (){
    const containerHistory = document.querySelector('.sec-history');
    const TitleContainerHistory = document.querySelector('.sec-history h1');
    const paragraphContainerHistory = document.querySelectorAll('.sec-history p');
    const positionHistoryContainer = containerHistory.getBoundingClientRect() ['y'];
    let calcposition = positionHistoryContainer;
    if(calcposition >= 330){
        calcposition =330;
    }
    if(calcposition <= 0){
        calcposition =0;
    }
    if(positionHistoryContainer <= 695){
        TitleContainerHistory.style.transform = `translateY(${-calcposition / 3}px)`;
        TitleContainerHistory.style.opacity = `${(-calcposition + 100) / 14}`;
        paragraphContainerHistory.forEach(function (element, index){
            paragraphContainerHistory[index].style.filter = `blur(${(calcposition + 10 ) / 10 -1 }px) `;
        })

        
    }

}
function photoContainer (){
    const containePhoto = document.querySelector('.photo-history');
    const titlePhoto = document.querySelector('.photo-history h1');
    const paragraphPhoto = document.querySelector('.photo-history p');
    const positionContainerPhoto = containePhoto.getBoundingClientRect()['y'];
    let positionContainer = positionContainerPhoto;
    positionContainer <= 0 ? positionContainer = 0 : positionContainer  == positionContainer;
    positionContainer >= 95 ? positionContainer = 95 : positionContainer  == positionContainer;
    if(positionContainerPhoto <= 590){
        titlePhoto.style.transform = ` translateY(${-positionContainer}px)`;
        titlePhoto.style.opacity = `${(-positionContainer + 80) / 14  }`;
        paragraphPhoto.style.opacity = `${(-positionContainer + 80) / 40}`;
    }
}

function ContainersPastoresHistory (){
 const containerHistoyPastores = document.querySelector('.history-pastores');
 const TitleHistoyPastores = document.querySelector('.history-pastores h1');
 const articleHistoyPastores = document.querySelectorAll('.history-pastores div article');
 console.log(articleHistoyPastores)
 console.log(window.innerWidth)

 const positionContainerHistory = containerHistoyPastores.getBoundingClientRect() ['y'];
 let calcpositionhistory = positionContainerHistory;

 calcpositionhistory <= 0 ? calcpositionhistory = 0: calcpositionhistory == calcpositionhistory;
 calcpositionhistory >= 360 ?calcpositionhistory = 360 : calcpositionhistory == calcpositionhistory; 

console.log(positionContainerHistory)



 if(positionContainerHistory <= 460){
    TitleHistoyPastores.style.transform = `translateY(${ -calcpositionhistory / 8 }px)`;
     TitleHistoyPastores.style.opacity= ((-calcpositionhistory + 400) / 300 ); 
 }


 if(positionContainerHistory <= 710){
    let calc0 = positionContainerHistory;
    calc0 <= 0 ? calc0 = 0 : calc0 == calc0;
    articleHistoyPastores[0].style.transform = `translateX(${-calc0}px)`;

 }
 if(positionContainerHistory <= 670){
    let calc1 = positionContainerHistory;
    calc1 <= 0 ? calc1 = 0 : calc1 == calc1;
    articleHistoyPastores[1].style.transform = `translateX(${calc1}px)`;
 }
 if(positionContainerHistory <= 2){
    let calc2 = positionContainerHistory;
    if(calc2 <= -220){
        calc2 = -220;
    }
    //calc2 <= 0 ? calc2 = 0 : calc2 == calc2;
    articleHistoyPastores[2].style.transform = `translateX(${(-calc2 -200) -20}px)`;
 }
if(window.innerWidth >= 700 & window.innerWidth < 1000 ){
    if(positionContainerHistory <= 130 ){
        let calc3 = positionContainerHistory;
        if(calc3 <= -223){
            calc3 = -223;
        }
        articleHistoyPastores[3].style.transform = `translateX(${calc3 + 223}px)`
     }
     if(positionContainerHistory <= 10){
        calc4 = positionContainerHistory ;
        if(calc4 <= -100){
            calc4 =  -100;
        }
        // calc4 <= 
        articleHistoyPastores[4].style.transform = `translateX(${-calc4 - 100}px)`
    }
}else{
 if(positionContainerHistory <= -230 ){
    let calc3 = positionContainerHistory;
    if(calc3 <= -523){
        calc3 = -523;
    }
    articleHistoyPastores[3].style.transform = `translateX(${calc3 + 523}px)`
 }
 if(positionContainerHistory <= -344){
    calc4 = positionContainerHistory ;
    if(calc4 <= -600){
        calc4 =  -600;
    }
    // calc4 <= 
    articleHistoyPastores[4].style.transform = `translateX(${-calc4 - 600}px)`
}
}
}
photoContainer();
ContainerHistory();
ContainersPastoresHistory();
}

function buttonScrollAnimate(){
    const buttonsRef = document.querySelectorAll('.icos-interation div button a[href^="#"] ');

    function clickButtonScroll (event){
        event.preventDefault();
        const element = event.target;
        const id = element.getAttribute('href');
        const section = document.querySelector(id)
        const to = section.offsetTop;
    smoothScrollTo(0, to);

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

function containerImgClick (){
const buttonsImg = document.querySelectorAll('.photo-history div button figure');
const imgsLooks = document.querySelectorAll('.container-hidden-photos div figure');
const containerLook = document.querySelector('.container-hidden-photos');
const body = document.querySelector('body');
const buttonClose = document.querySelectorAll('.close-imgs-cont');
const buttonsPressNextPrevius = document.querySelectorAll('.button-press');
const textAddindex = document.querySelector('.indexs-lenfh-img');
    function loocksContainer (){
    closeContainerPhoto();
    buttonsImg.forEach((element , index) =>{
    element.addEventListener('click',function () {
    containerLook.classList.remove('remov-container-click-opa');
    containerLook.classList.add('container-click-opa');
    body.style.overflowY = 'hidden';
    let indexImg = index;
    const imageManipulation = () =>{
        classListRemovImgsStandart()
        imgsLooks[index].classList.add('anima-figure-primary');
        addIndexElementsImg()
        
    }
    imageManipulation();
    function buttonsNexPrevius () {
    
    buttonsPressNextPrevius.forEach( element =>{
        element.addEventListener('click', function() {

            classListRemovImgsStandart();
        if(element.classList.contains('next')){
           
            indexImg++ ;
            indexImg >= imgsLooks.length  ? indexImg = 0 : indexImg === indexImg;
            imgsLooks[indexImg].classList.add('anima-figure-next');
            addIndexElementsImg()
        }else{
           
            indexImg--;
        indexImg <= - 1 ? indexImg = imgsLooks.length -1 : indexImg === indexImg;
        imgsLooks[indexImg].classList.add('anima-figure-previus');
        addIndexElementsImg()
        }
        })
    })
    
    }
    function addIndexElementsImg (){
        textAddindex.innerHTML = ` ${indexImg + 1 } / ${imgsLooks.length}`;
    }
    buttonsNexPrevius ()
    })
    })
    }
    function classListRemovImgsStandart (){
        imgsLooks.forEach(element =>{
            element.classList.remove('anima-figure-primary');
            element.classList.remove('anima-figure-next');
            element.classList.remove('anima-figure-previus');
        })
    }
    function closeContainerPhoto (){
     buttonClose.forEach(element =>{
        element.addEventListener('click',function (event){
        classListRemovImgsStandart()
        body.style.overflowY = 'scroll'
        containerLook.classList.remove('container-click-opa');
        containerLook.classList.add('remov-container-click-opa');
        })
    })
    }

loocksContainer()
}
containerImgClick()
buttonScrollAnimate()
document.addEventListener('scroll',animatioshistory);