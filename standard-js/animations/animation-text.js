let contindex = 0 ;
const indexCont = document.querySelectorAll('.text-animation-menu-string');

function indexcontainer () {
    //console.log(contindex)

      contindex++
    if(contindex >= indexCont.length){
        contindex = 0
    }
    childindexstrings(contindex);
}
function childindexstrings (index){
    let contindexChildlet = 0;
    const child = indexCont[index].querySelectorAll('i');
    const childOne = indexCont[1].querySelectorAll('i');
    const childZero = indexCont[0].querySelectorAll('i');
if(index === 1){
    
function contIndexChildOne (){

    if (  child.length > contindexChildlet){
    
        contindexChildlet++
        requestAnimationFrame(contIndexChildOne)
        child[contindexChildlet - 1].classList.replace('out','in');
        for(elementschildzero of childZero){
            elementschildzero.classList.replace('in','out');
        }
    
    }
}
requestAnimationFrame(contIndexChildOne)
}




else if(index === 0){

function contIndexChildZero (){
    for(elementschildOne of childOne){
        elementschildOne.classList.replace('in','out')
    }
if (  child.length > contindexChildlet){
    contindexChildlet++
    requestAnimationFrame(contIndexChildZero)
    child[contindexChildlet - 1].classList.replace('out', 'in');
}
}
requestAnimationFrame(contIndexChildZero)
}
}

setInterval(() => {
   indexcontainer() 
}, 2000);