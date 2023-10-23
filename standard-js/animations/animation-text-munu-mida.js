
let contindexmenu = 0;

const indexContmidia = document.querySelectorAll('.text-animation-menu-string-midia');

function indexcontainermidia () {
    //console.log(contindexmenu)

      contindexmenu++
    if(contindexmenu >= indexContmidia.length){
        contindexmenu = 0
    }
    childindexstringsmidia(contindexmenu);
}
function childindexstringsmidia (index){
    let contindexChildlet = 0;
    const childmidia = indexContmidia[index].querySelectorAll('i');
    const childOnemidia = indexContmidia[1].querySelectorAll('i');
    const childZeromidia = indexContmidia[0].querySelectorAll('i');
if(index === 1){
    
function contIndexChildOnemidia (){

    if (  childmidia.length > contindexChildlet){
    
        contindexChildlet++
        requestAnimationFrame(contIndexChildOnemidia)
        childmidia[contindexChildlet - 1].classList.replace('out','in');
        for(elementschildzero of childZeromidia){
            elementschildzero.classList.replace('in','out');
        }
    
    }
}
requestAnimationFrame(contIndexChildOnemidia)
}




else if(index === 0){

function contIndexChildZeromidia (){
    for(elementschildOne of childOnemidia){
        elementschildOne.classList.replace('in','out')
    }
if (  childmidia.length > contindexChildlet){
    contindexChildlet++
    requestAnimationFrame(contIndexChildZeromidia)
    childmidia[contindexChildlet - 1].classList.replace('out', 'in');
}
}
requestAnimationFrame(contIndexChildZeromidia)
}
}

setInterval(() => {
   indexcontainermidia() 
}, 2000);