const buttonAgent = document.querySelector('#activ-container-agent');
const containerAgent = document.querySelector('#container-agent-hidden');
const body= document.querySelector('body')
buttonAgent.addEventListener('click', () =>{
   containerAgent.style.display = 'flex';
   body.style.overflowY = 'hidden'
const buttonCloseAgent = document.querySelector('#close-agent');
buttonCloseAgent.addEventListener('click', () =>{
    containerAgent.style.display = 'none';
    body.style.overflowY = 'scroll'
})
})



