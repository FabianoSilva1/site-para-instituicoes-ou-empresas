function animarContainerText (event){
    const paragraph = document.querySelector('.background p');
    const title = document.querySelector('.background h1');
    title.classList.add('ani-title');
    paragraph.classList.add('ani-paragraph');
}
document.addEventListener('load', animarContainerText());