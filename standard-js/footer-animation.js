
const typing = document.querySelector('[data-js="typing"]');
const messages = [' nas Redes Sociais', 'no Youtube','no Instagam','no Fecebook'];
let messageIndex = 0;
let characterIndex = 0;
let currentMessage = '';
let currentCharacters = '';

const type = () => {
    if( messageIndex === messages.length){
        messageIndex = 0;
    }
    currentMessage = messages[messageIndex]
    currentCharacters = currentMessage.slice(0, characterIndex++)
    typing.textContent = currentCharacters;

    if(currentCharacters.length === currentMessage.length){
        messageIndex++
        characterIndex = 0
    }
}
setInterval( type,150);


 function scrollFotterActiveAnimate () {
    const footer = document.querySelector('.footer-infomation');
    const positionfooter = footer.getBoundingClientRect()['y'];
if(positionfooter <= 410 ){
    footer.classList.add('transform-rotate-x')
} 

}
document.addEventListener('scroll', () =>{
    scrollFotterActiveAnimate();

})
