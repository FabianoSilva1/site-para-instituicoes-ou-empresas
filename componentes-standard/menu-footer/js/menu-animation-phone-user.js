

function animationPhone  () {
const text = document.querySelector('.text');
const constaineraddAnimation = document.querySelector('.container-text');
constaineraddAnimation.classList.remove('animation-pointer-width');
const tagnameOne = setTimeout(()=>{
text.textContent = 'CONOSCO';
constaineraddAnimation.classList.remove('animation-pointer-width');
constaineraddAnimation.classList.add('animation-pointer-width');
clearTimeout(tagnametwuo);
},0)



const tagnametwuo = setTimeout(() =>{ 
    text.textContent = `COM A IGREJA`;
    constaineraddAnimation.classList.remove('animation-pointer-width');
    constaineraddAnimation.classList.add('animation-pointer-width');
    clearTimeout(tagnameOne);
},4000)


}

 function animationLogin  () {
    const text = document.querySelector('.text-login');
    const constaineraddAnimation = document.querySelector('.container-text-login');
    constaineraddAnimation.classList.remove('animation-pointer-width');

    setTimeout(()=>{
    text.textContent = 'Social';
    constaineraddAnimation.classList.remove('animation-pointer-width');
    constaineraddAnimation.classList.add('animation-pointer-width');
    
    
    },0)
    setTimeout(() =>{ 
        text.textContent = `Membros`;
        constaineraddAnimation.classList.remove('animation-pointer-width');
        constaineraddAnimation.classList.add('animation-pointer-width');
    },4000);
    setTimeout(() =>{ 
        text.textContent = `ADEA`;
        constaineraddAnimation.classList.remove('animation-pointer-width');
        constaineraddAnimation.classList.add('animation-pointer-width');
    },8000)
}
setInterval(animationPhone,8000);
setInterval(animationLogin,16000)