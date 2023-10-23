
function GaleryPhotos (){
    const body = document.querySelector('body');
    const ListImg = document.querySelectorAll('.img-photo');
    let indexB ;

function TreatingdownloadIMG (el, index){
if(el.classList.contains('Donwload-ico')){
const returnUrlimg = getComputedStyle(ListImg[index]);
const LinkDonwloada = document.querySelector('.download-img-photo');
const returnBackgroundImg = returnUrlimg.backgroundImage;
console.log(returnBackgroundImg);

const clearurl = returnBackgroundImg.replace('url("http://127.0.0.1:5501/','');
const clearurlComplete = clearurl.replace('")','');
LinkDonwloada.setAttribute('href',`../../../../../${clearurlComplete}`);
LinkDonwloada.setAttribute('download',clearurlComplete)
}
  
   
}

function ImgPriority (index) {

    for( let nRemov = 0 ;  ListImg.length > nRemov ; nRemov++ ){
        ListImg[nRemov].classList.remove('img-photo-animation');
    }
    ListImg[index].classList.add('img-photo-animation');
}


function ReturnIndexcontainerImg (elemento){

const elementfather = elemento.closest('.container-img-gallery');
const Elementsfather = document.querySelectorAll('.container-img-gallery');
if(elemento.classList.contains('fa-magnifying-glass-plus')){
    const  icoClick = document.querySelectorAll('.fa-magnifying-glass-plus');
icoClick.forEach(() =>{       
    //const elementos
    const IndexgetIco = Array.from(Elementsfather).indexOf(elementfather);
    ImgPriority(IndexgetIco);
    indexB = IndexgetIco;
})
}
if(elemento.classList.contains('background-img')){
const spanClick = document.querySelectorAll('.background-img');
//console.log('ola')
spanClick.forEach(() =>{
    const IndexgetSpan = Array.from(Elementsfather).indexOf(elementfather);
    ImgPriority(IndexgetSpan);
    indexB = IndexgetSpan;
}) 

}

}


function returContainer (){
    return  containerELmentphotos = document.querySelector('.photos-display');
}


function removContainerPhotos(){
  return  returContainer().classList.remove('photos-display-animation-opacity')
}


function addAnitamtionPhotosClose(){
    body.style.overflowY = 'scroll';
    return returContainer().classList.add('photos-display-animation-opacity')
}

//

function cleanImgNex (){
    for(let removClass = 0 ; ListImg.length > removClass ; removClass++){
        ListImg[removClass].classList.remove('Img-nex');
        ListImg[removClass].classList.add('opacity-img');
    }
}

function buttonClick (indexIMG, elemento){
    for(let removAnimationPhotoPrimary = 0 ;removAnimationPhotoPrimary < ListImg.length ; removAnimationPhotoPrimary++){
        ListImg[removAnimationPhotoPrimary].classList.remove('img-photo-animation');
    }
    cleanImgNex()
    
TreatingdownloadIMG(elemento, indexIMG)
    ListImg[indexIMG].classList.add('Img-nex');
}
//adiciona o evento de click no html
document.addEventListener('click',function (Event){
    const elemento = Event.target;
    
TreatingdownloadIMG(elemento, indexB)
    if(elemento.classList.contains('background-img') || elemento.classList.contains('fa-magnifying-glass-plus')){
        body.style.overflowY = 'hidden';
        returContainer().classList.add('photos-display-animation');
        removContainerPhotos();
        ReturnIndexcontainerImg(elemento);
        cleanImgNex()

    }
  
    if(elemento.classList.contains('close-container-photos')){
        addAnitamtionPhotosClose()
    }



    if(elemento.classList.contains('photos-display') || elemento.classList.contains('butons-photos') ){
        addAnitamtionPhotosClose();

    }
    if(elemento.classList.contains('previus-ico') || elemento.classList.contains('previus')){
        if(ListImg.length > indexB && !indexB <= 0){
        indexB--
        buttonClick( indexB, elemento)
    }
    
    }

    if(elemento.classList.contains('next') || elemento.classList.contains('fa-flip-horizontal')){
        if(ListImg.length > indexB && indexB < ListImg.length){
            indexB++;
      if(indexB >= ListImg.length){
        indexB = ListImg.length - 1;
      }
            buttonClick( indexB, elemento);
    }
}
});
}
GaleryPhotos();
