function clickproperties (){

const buttonsMenu =  document.querySelectorAll('.button-menu');
const containersMenu  = document.querySelectorAll('.container-button');
const closeContainerMeunu = document.querySelectorAll('.material-icons');
const bodyHTML = document.querySelector('body');
buttonsMenu.forEach( (element, index) =>{

    element.addEventListener('click',() =>{
        for(let cont = 0 ; cont < buttonsMenu.length ; cont++){
            containersMenu[cont].classList.remove('properties');

        }
        containersMenu[index].classList.add('properties');
        
        const propertiesU = document.querySelector('.properties');
        
        bodyHTML.style.overflow = 'hidden';
        closeContainerMeunu.forEach((element, index) => {
            element.addEventListener('click',() => {
                containersMenu[index].classList.remove('properties');
                bodyHTML.style.overflow = 'auto';

            })
        })
    })

})
}
clickproperties()

function clickIconsUserPhoneShere(){

const ButtonMenuNav = document.querySelectorAll('.button-container-menu-nav');
const closeMenuLogin = document.querySelectorAll('.close-login-nav');
const ContainerMenuHome = document.querySelector('#section-container-button-nav');
const containerNav = document.querySelectorAll('.container-nav-home');
const buttonSharingMenu = document.querySelector('#buttoh-icos-sharing');
const containerSharingMenu = document.querySelector('.sharing-nav');
const CloseContainerSharing = document.querySelector('.close-sharing-nav');
const menu = document.querySelector('.menu');

function buttonDisplayActiv (){ 
    ButtonMenuNav.forEach((Element,index) =>{
 Element.addEventListener('click',() =>{
     ContainerMenuHome.style.display = 'flex';
     for(let cont = 0; cont < ButtonMenuNav.length ;cont++){
        containerNav[cont].classList.remove('activ-display');
        
    }
    containerNav[index].classList.add('activ-display');
    menu.style.zIndex = '1';
    if(index == 0){

        containerNav[index].classList.add('login-nav');
        
    }
    if(index == 1){
        containerNav[index].classList.add('animation-right-container-home');
    }
})
function ButtonDsiplayDisabled (){
    closeMenuLogin.forEach((Element) =>{
        Element.addEventListener('click', () =>{
        if( index == 0 ){
            containerNav[index].classList.remove('login-nav');
            
            containerNav[index].classList.add('remove-animation-nav');
        }
        if(index == 1){
           containerNav[index].classList.remove('animation-right-container-home');
           
            containerNav[index].classList.add('animation-remove-container-home');
        }
            setTimeout(function () {
                ContainerMenuHome.style.display = 'none';
                menu.style.zIndex = '20';
                containerNav[1].classList.remove('animation-right-container-home','animation-remove-container-home');
            },500)
        })
    })
}
ButtonDsiplayDisabled(); 
})
}
function ShareActiv_Disable() {
function activ(){    
    buttonSharingMenu.addEventListener('click', () =>{
    containerSharingMenu.classList.add('Activ-share');
    containerSharingMenu.classList.remove('Remove-Share');
    })
}
function Disable (){
    CloseContainerSharing.addEventListener('click' , () =>{
        containerSharingMenu.classList.add('Remove-Share');


    })
}

activ()
Disable()
}

ShareActiv_Disable();
buttonDisplayActiv();


}

clickIconsUserPhoneShere()
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////























































/////////////////////////////////////animação titulo/////////////////////////////////////;

 



//////////////////////////////////////////////////////////////////////


/// menu fixo no documento/////////////////////////////////////////////////////////////////////////////////////////////

function fixemenuScroll (Event ) {
    const menu = document.querySelector('.menu');
if(scrollY <= 100 ){
     menu.classList.remove('PositionFixed')

}else if(scrollY >= 120) {
     menu.classList.add('PositionFixed')

}
}
document.addEventListener('scroll',fixemenuScroll);