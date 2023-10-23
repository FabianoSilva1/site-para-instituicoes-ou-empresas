


function animaScrolContainers () {
function animationsSenioPastor (){
    const pastorSection = document.querySelector('.senior-pastor-sc');
    const  localitionSpastorSec = pastorSection.getBoundingClientRect()['y'];
    const pastorimg = document.querySelector('#img-pastor-config');
    const pastorparagraph = document.querySelector('#pastor-text-paragraph');
    const niKPastor = document.querySelector('.nik-pastor');   
    const subtitlePastor = document.querySelector('.sub-nik-pastor');
    const buttonPastor = document.querySelector('.button-pastor');
    const widthScreen = window.innerWidth;
    if(localitionSpastorSec < 550 && localitionSpastorSec > 150){
    let transitiontitle = localitionSpastorSec;

    if(localitionSpastorSec <= 240) transitiontitle = 0;

    // transitiontitle <= 240 ? transitiontitle = 0 : transitiontitle === transitiontitle;
   // niKPastor.style.transform = `translateX(${((-transitiontitle) +  225) }px)`;
   niKPastor.style.transform = `translateX(${(-transitiontitle / 3  )}px)`;
    }

    if(localitionSpastorSec <= 300){
        let positionimg = localitionSpastorSec;
        subtitlePastor.style.opacity = '1'
        subtitlePastor.style.transform= `translateY(0px)`;
        if(positionimg <=25){
            positionimg = 65;
        }
        if(widthScreen === 360){
            animarImgSeniorMobile(pastorimg, positionimg)
        }else{
        pastorimg.style.backgroundPositionX = `${((-positionimg / 20) * 2) + 60}%`;
        }
    }else{
        subtitlePastor.style.opacity = '0.1'
        subtitlePastor.style.transform = `translateY(-50px)`;
        
    }
    if (localitionSpastorSec <= 325){
        pastorparagraph.style.filter= `blur(0px)`;
    }else{
        pastorparagraph.style.filter= `blur(10px)`
    }
    if (localitionSpastorSec <= 350 ){
               pastorimg.style.opacity = (((-localitionSpastorSec * 10)  ) / 3000) + 1.5;
        
    }
    if (localitionSpastorSec <= 300 && localitionSpastorSec >= -200){
        let rotateButton = localitionSpastorSec;
        let skewrotate =localitionSpastorSec;
        if (skewrotate >= 0){
            skewrotate = -10;
        }
        else if (skewrotate <= -7){
            skewrotate = 0;
        }

        if (rotateButton <= 0 ) {
            rotateButton = -0;
        }
        buttonPastor.style.transform= `rotateX(${-rotateButton/ 2.3}deg) skew(${skewrotate}deg)` ;
       
    }
}
function animationHitory () {

const containerhitory = document.querySelector('.history-church')
const buttonHistory = document.querySelector('.button-history')
const positionSpace = containerhitory.getBoundingClientRect()['y']
 let calcrotate = positionSpace;
 if(calcrotate <= 330){
    if(calcrotate <= -100){
        calcrotate = 0;
    }
    buttonHistory.style.transform = `perspective(1000px) translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(${calcrotate / 4.5}deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`;
 }
}
function animarOfficers (){
// const objectOfficer = [
//     wrapperOfficer = document.querySelector('.wrapper'),
//     calcPositionWrapper = wrapperOfficer.getBoundingClientRect()['y'],
//     buttonOfficer = document.querySelector('.button-board'),
//     positionbuttonOfficer = wrapperOfficer.getBoundingClientRect()['y']
// ];
const wrapperOfficer = document.querySelector('.wrapper')
const calcPositionWrapper = wrapperOfficer.getBoundingClientRect()['y']
const buttonOfficer = document.querySelector('.button-board')
const positionbuttonOfficer = wrapperOfficer.getBoundingClientRect()['y']
let value = (calcPositionWrapper + 100 ) / 11;

if(positionbuttonOfficer <= 344 ){
    value = 0;
}
if(calcPositionWrapper <= 1188){


    if(value <= 0){
        value = 0 ;
    }
   
    
    wrapperOfficer.style.transform = `perspective(1000px) translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(${-value * -1}deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`;
    let Opci = (positionbuttonOfficer + 100 ) /10;
    wrapperOfficer.style.opacity = `${(((Opci * -1 ) /50 )+ 2.5 )}`
}

if(calcPositionWrapper <= 335){
    let calcbutton = (positionbuttonOfficer - 350) / 5;
    if( calcbutton <= 0){
        calcbutton = 0;
    }
     buttonOfficer.style.transform= `perspective(1000px) translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(${calcbutton}deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`;
}
}
function animateChurch (){
// const objectChuch = [
//     containerChurch = document.querySelector('.church-thirst'),
//     positionContainerchuch = containerChurch.getBoundingClientRect()['y'],
//     CardAnimate = document.querySelectorAll('.card')
// ] 
const    containerChurch = document.querySelector('.church-thirst')
const    positionContainerchuch = containerChurch.getBoundingClientRect()['y']
const    CardAnimate = document.querySelectorAll('.card')
let calcpositon = positionContainerchuch;
let res = calcpositon <= 0 ? calcpositon = 0 : calcpositon <= 0 ;
if (positionContainerchuch <= 2500){
    CardAnimate[0].style.transform = `translateX(${-calcpositon }px)`
    CardAnimate[1].style.transform = `translateX(${+calcpositon }px)`
}
}
animationsSenioPastor();
  animationHitory();
   animarOfficers();
 animateChurch();
}
function animarImgSeniorMobile (img, relatvscroll){
let position = relatvscroll;
position > 30 & position < 68 ? position = 56 : position === position;

    img.style.backgroundPositionX = `${position}%`;
}
document.addEventListener('scroll', animaScrolContainers);






    























































































//---------------------------------------------------------codigo terminado--------------------------------------------------------



