
// -----------------------------------------------------codigos do container oculto---------------------------------------------




// function buttonHindden () {

//     let buttonPage = document.querySelector('#button-page-hidden');
//     const hiddenContainer = document.querySelector('#hidden-page');
//     const iconArron = document.querySelector('.fa-chevron-down');
//     const buttonsPageHidden = document.querySelector('#buttons-page-hidden');
//     const menuHidden = document.querySelector('.menu-hidden')
//     const listHidden = document.querySelector('.list-hidden-flex');
//     let counter = 0
//     buttonPage.addEventListener("click", function () {
//         counter++
//         if (counter == 1) {
//             const larguraViewport = window.innerWidth || document.documentElement.clientWidth;
//             if(larguraViewport <= 500 ){
//                 hiddenContainer.style.height = '800px';
//             }else{
//                 hiddenContainer.style.height = '500px';
//             }
//             iconArron.style.transform = `rotateZ(180deg)`;
//             iconArron.style.color = '#6b6b6b';
//             menuHidden.style.borderTop = '3px solid #F3F3F3';
//             listHidden.style.display = 'flex';
//         } else if (counter > 1) {
//             hiddenContainer.style.height = '30px';
//             iconArron.style.transform = `rotateZ(0deg)`;
//             menuHidden.style.borderTop = 'none';
//             iconArron.style.color = '#DDBA75';
//             listHidden.style.display = 'none';
    
//             counter = 0;
//         }
    
//     })
    
// }

function scrollunivece () {

function buttonHindden () {

        let buttonPage = document.querySelector('#button-page-hidden');
        const hiddenContainer = document.querySelector('#hidden-page');
        const iconArron = document.querySelector('.fa-chevron-down');
        const buttonsPageHidden = document.querySelector('#buttons-page-hidden');
        const menuHidden = document.querySelector('.menu-hidden')
        const listHidden = document.querySelector('.list-hidden-flex');
        let counter = 0
        buttonPage.addEventListener("click", function () {
            counter++
            if (counter == 1) {
                const larguraViewport = window.innerWidth || document.documentElement.clientWidth;
                if(larguraViewport <= 500 ){
                    hiddenContainer.style.height = '800px';
                }else{
                    hiddenContainer.style.height = '500px';
                }
                iconArron.style.transform = `rotateZ(180deg)`;
                iconArron.style.color = '#6b6b6b';
                menuHidden.style.borderTop = '3px solid #F3F3F3';
                listHidden.style.display = 'flex';
            } else if (counter > 1) {
                hiddenContainer.style.height = '30px';
                iconArron.style.transform = `rotateZ(0deg)`;
                menuHidden.style.borderTop = 'none';
                iconArron.style.color = '#DDBA75';
                listHidden.style.display = 'none';
        
                counter = 0;
            }
        
        })
        
}
function LocalitonMapanimation () {

        const containinerlocalition = document.querySelector('.map-localization')
        const ImagAnimation  = document.querySelector('[data-animation = "position-rotate"]')
        const position = ImagAnimation.getBoundingClientRect()['y']
    



if(position <= 700){
        let calcposition = position;
        let tranlat3dX = position;
        tranlat3dX >= 140 ? tranlat3dX = 140: tranlat3dX == tranlat3dX;
        tranlat3dX <= -274 ? tranlat3dX = -274: tranlat3dX == tranlat3dX;
        let tranlat3dY = position;
        tranlat3dY >= 249 ? tranlat3dY = 249: tranlat3dY == tranlat3dY;
        tranlat3dY <= -160 ? tranlat3dY = -160: tranlat3dY == tranlat3dY;
        let scale3dX = position;
        scale3dX >= 1.2 ? scale3dX = 1.2 : scale3dX == scale3dX;
        scale3dX <= 0.6 ? scale3dX = 0.6 : scale3dX == scale3dX;
        let RotateX = position;
        RotateX >= 74 ? RotateX = 74 : RotateX == RotateX;
        RotateX <= 36 ? RotateX = 36 : RotateX == RotateX;
        let RotateY = position;
        RotateY <= 0 ? RotateY = 0 : RotateY == RotateY; 
        RotateY >= 5 ? RotateY = 5 : RotateY == RotateY; 
        let RotateZ = position;
        RotateZ <= -19 ? RotateZ = -19 : RotateZ == RotateZ;
        RotateZ >= 20 ? RotateZ = 20 : RotateZ == RotateZ;
        ImagAnimation.style.transform = `perspective(1000px) translate3d(${(-tranlat3dX) + 140}px, ${tranlat3dY - 249 }px, ${tranlat3dX - 260}px) scale3d(${scale3dX}, ${scale3dX}, 1) rotateX(${-RotateX + 74 }deg) rotateY(${-RotateY + 5 }deg) rotateZ(${-RotateZ + 20}deg) skew(0deg, 0deg)`;
        
}
}
function scroollcontainercontainerAcceptance(){
    const svgID =  document.querySelector('#img-svg-acceptance');
    const positionsvgID = svgID.getBoundingClientRect()['y'];
positionsvgID <= 625 ? svgID.classList.add('animation-svg') : positionsvgID;
}
function opacitycontainers (){
    const debounce = function(func, wait, immediate) {
        let timeout;
        return function(...args) {
          const context = this;
          const later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
          };
          const callNow = immediate && !timeout;
          clearTimeout(timeout);
          timeout = setTimeout(later, wait);
          if (callNow) func.apply(context, args);
        };
      };
      
    const target = document.querySelectorAll('[data-animar]');
    const animationclass=['animar', 'animation-opacity'];
    
    function animarscroll () {
        const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4) ;
    
        function animationTraslete () {
            if((windowTop) > target[0].offsetTop){
                target[0].classList.add(animationclass[0])
            } 
    
        }
        
        function animationOpacity(){
            if((windowTop) > target[1].offsetTop){
                target[1].classList.add(animationclass[1])
            }
        }
     
        /*target.forEach(function (element ) {
            if((windowTop) > element.offsetTop){
                element.classList.add(animationclass[0])
            }  
            
        });*/
       animationOpacity()
        animationTraslete()
    }
    
    animarscroll();
    
    window.addEventListener('scroll', debounce(function(){
        animarscroll( );
        
    
    },100));
}
document.addEventListener('scroll',() =>{

    LocalitonMapanimation ()
    scroollcontainercontainerAcceptance();
    opacitycontainers()
});
buttonHindden()
}


//--------------------------------------------------------------------



scrollunivece ();