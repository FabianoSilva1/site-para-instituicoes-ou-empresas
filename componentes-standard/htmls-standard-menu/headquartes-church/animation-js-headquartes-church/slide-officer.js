(function (){
    const Slideitems = document.querySelectorAll('.officer');
    const Wrapper = document.querySelector('.wrapper');
    const SlideList = document.querySelector('.slide-officer');
    const buttonsNextPrevius = document.querySelectorAll('.controls');
    const widtItem = Slideitems[0].clientWidth;
    let slideInterval;
    let statingPoint = 0;
    let currentPoint = 0;
    let savedPosition = 0;
    let moviment = 0;
    let currentIndex = 0;
function SlideAutoplay(){
    slideInterval = setInterval(function () {
        VisibleSlide( currentIndex += -4);
},3000)
}
    
function onMouseDown (event){
   const slideItem = event.currentTarget;
   statingPoint = event.clientX;
   currentPoint = statingPoint - savedPosition
   slideItem.addEventListener('mousemove', onMouseMove)
}
function onMouseMove(event){
     moviment = event.clientX - statingPoint;
    const position = event.clientX - currentPoint;
    TranslateSlide(position , false)
}

function TranslateSlide (position, animate){
    savedPosition = position;
    SlideList.style.transform = `translateX(${position}px)`;
    SlideList.style.transition = animate === true ? 'transform .5s' : 'none';

}



function VisibleSlide ( index){
    const position = widtItem * index;
    currentIndex = index;
    savedPosition = position;
    TranslateSlide(position, true);
    if(currentIndex < -Slideitems.length + 4){
     VisibleSlide(0);
    }else if(currentIndex > 0){
     VisibleSlide(-Slideitems.length + 4);
    }
} 

function nexSlide (){
    const position = (currentIndex -= 4 ) * widtItem ;
    savedPosition = position;
    VisibleSlide(currentIndex);
}

function previusSlide () {
    const position = (currentIndex += 4 ) * widtItem ;
    savedPosition = position;
    VisibleSlide(currentIndex);

}

function onMouseUp (event){
    const slideItem = event.currentTarget;
    slideItem.removeEventListener('mousemove',onMouseMove);
    VisibleSlide(currentIndex)
    if(moviment >= 100){
        previusSlide()
       
     } 
    else if (moviment <= - 100){
        nexSlide()
        
     }else {
        const position = (currentIndex  ) * widtItem ;
        savedPosition = position
        TranslateSlide(position, true)
     }

}
function onMouseLeave (event){
    const slideItem = event.currentTarget;
 
    slideItem.removeEventListener('mousemove',onMouseMove);
}

Slideitems.forEach((slideItem , index) =>{
    slideItem.addEventListener('dragstart', function (event){
        event.preventDefault();
    })
    slideItem.addEventListener('mousedown', function (event){
        onMouseDown(event);
    });
    slideItem.addEventListener('mouseup', function (event){
        onMouseUp(event);
    })
    slideItem.addEventListener('mouseleave', function (event){
        onMouseLeave(event)
    })

})
buttonsNextPrevius.forEach((button, index) =>{
    button.addEventListener('click', () =>{
      if(index === 0){
        previusSlide()
      }else if (index === 1){
 
        nexSlide()
      }
    })
})
Wrapper.addEventListener('mouseenter', () => clearInterval(slideInterval))
Wrapper.addEventListener('mouseleave', () => SlideAutoplay())
VisibleSlide(0);
SlideAutoplay()
})()