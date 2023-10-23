//---------------------------------------------------------codigo terminado--------------------------------------------------------
let cont = 0;
function animayoutubeText () {
    const textAn =  document.querySelectorAll('.anT');
    const textAnmenu =  document.querySelectorAll('.anTmenu');
if(textAn.length === 0){
    for(let contClass = 0;  textAnmenu.length > contClass ; contClass++){
        textAnmenu[contClass].classList.remove('is-visible')
        textAnmenu[contClass].classList.add('is-hidden');
    }
        cont >= textAnmenu.length ? cont =0 : cont == cont;
         textAnmenu[cont].classList.contains('is-hidden')    ?  textAnmenu[cont].classList.remove('is-hidden')  & textAnmenu[cont].classList.add('is-visible') : textAnmenu[cont].classList.contains('is-hidden');
    cont++
}else{
    for(let contClass = 0; textAn.length & textAnmenu.length > contClass ; contClass++){
        textAn[contClass].classList.remove('is-visible')
        textAn[contClass].classList.add('is-hidden');
    
        textAnmenu[contClass].classList.remove('is-visible')
        textAnmenu[contClass].classList.add('is-hidden');
    }
        cont >= textAn.length ? cont =0 : cont == cont;
        textAn[cont].classList.contains('is-hidden') & textAnmenu[cont].classList.contains('is-hidden')    ? textAn[cont].classList.remove('is-hidden') & textAnmenu[cont].classList.remove('is-hidden') & textAn[cont].classList.add('is-visible') & textAnmenu[cont].classList.add('is-visible') : textAn[cont].classList.contains('is-hidden');
    cont++    
}

}

setInterval(() => {
    animayoutubeText() 
 }, 2000);