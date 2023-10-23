function menuMobileResponsive () {
    //remove-animation-menu-mobile
 
    let claSs = ['animation-menu-mobile','remove-animation-menu-mobile','animation-menu-mobile-buttons','remove-animation-menu-mobile-buttons','activ-btn-hamburgue','desctiv-btn-hamburgue'];
    const menuMobile = document.querySelectorAll('.bth-haburgue');
    const ContainerMenuMobile =  document.querySelector('.menu-mobile');
    const CloseContainerMenuMobile = document.querySelectorAll('.close');
    const RemoveAnimationMenuDisplayTm = document.querySelector('.remove-animation-menu-mobile');
    const menu = document.querySelector('.menu')
    const containeranimationTransform = document.querySelector('.menu-mobile-buttons');
    const body = document.querySelector('body');
    const mainStart = document.querySelector('#main-start')
menuMobile.forEach((element, index)  =>{
element.addEventListener('click' , function (){

    if (index == 0 ){

    ContainerMenuMobile.classList.contains(claSs[0]) ?  ContainerMenuMobile.classList.add(claSs[0])  & ContainerMenuMobile.classList.remove(claSs[1]) :  ContainerMenuMobile.classList.add(claSs[0]) &  ContainerMenuMobile.classList.remove(claSs[1]);
    ContainerMenuMobile.classList.contains(claSs[2]) ? containeranimationTransform.classList.remove(claSs[2]) : containeranimationTransform.classList.add(claSs[2]) &  containeranimationTransform.classList.remove(claSs[3]); 
    body.style.overflowY = 'hidden';
    menu.style.zIndex= '2';
    
    }
})
})


CloseContainerMenuMobile.forEach((element) =>{
    element.addEventListener('click', function () {

        ContainerMenuMobile.classList.contains(claSs[0]) ?  ContainerMenuMobile.classList.add(claSs[1]) &    ContainerMenuMobile.classList.remove(claSs[0])  :  ContainerMenuMobile.classList.contains(claSs[0]); 
    containeranimationTransform.classList.contains(claSs[2]) ? containeranimationTransform.classList.remove(claSs[2]) & containeranimationTransform.classList.add(claSs[3])  : containeranimationTransform.classList.add(claSs[2]); 
    body.style.overflowY = 'scroll';
    menu.style.zIndex= '2';

    })
} )
}
menuMobileResponsive();

function ClickMenumobile () {
const buttonsMenuMobile =  document.querySelectorAll('.button-menu-mobile');
const containersMenuMobile  = document.querySelectorAll('.container-button');
const closeContainerMeunuMobile = document.querySelectorAll('.material-icons');

const bodyHTML = document.querySelector('body');
buttonsMenuMobile.forEach( (element, index) =>{

    element.addEventListener('click',() =>{
        for(let cont = 0 ; cont < buttonsMenuMobile.length ; cont++){
            containersMenuMobile[cont].classList.remove('properties');

        }
        containersMenuMobile[index].classList.add('properties');
        const propertiesU = document.querySelector('.properties');
        
        bodyHTML.style.overflow = 'hidden';
        closeContainerMeunuMobile.forEach((element, index) => {
            element.addEventListener('click',() => {
                containersMenuMobile[index].classList.remove('properties');
                bodyHTML.style.overflow = 'auto';

            })
        })
    })

})
}
ClickMenumobile()