function Historyscroll () {
const containerCardHistory = document.querySelector('.history-pastor-church');
const cardTransfom = document.querySelector('#card-transform');
const localitionContianer = containerCardHistory.getBoundingClientRect()['y'];
console.log(localitionContianer);
let calcrotate = localitionContianer;
if(calcrotate <= 0 ){
    calcrotate = 0
}
if(localitionContianer <= 520){
    cardTransfom.style.transform = `perspective(1000px) translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(${calcrotate / 5.7}deg) rotateZ(0deg) skew(0deg, 0deg)`;
}
}
document.addEventListener('scroll',Historyscroll);