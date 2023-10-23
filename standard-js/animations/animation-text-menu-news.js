let contindexnews = 0;
const indexContnews = document.querySelectorAll('.text-animation-menu-string-news');

function indexcontainernews () {

      contindexnews++
    if(contindexnews >= indexContnews.length){
        contindexnews = 0
    }
    childindexstringsnews(contindexnews);
}
function childindexstringsnews (index){
    let contindexChildlet = 0;
    let removcontindexChildlet = 0;
    let indexremov = index - 1;
    indexremov <= -1 ? indexremov = indexContnews.length -1 : indexremov == indexremov;
    const childnews = indexContnews[index].querySelectorAll('i');
    const childnewsreovin = indexContnews[indexremov].querySelectorAll('i');
function contIndexChildOnemidia (){

    if (  childnews.length > contindexChildlet){
    
        contindexChildlet++
        requestAnimationFrame(contIndexChildOnemidia)
       
        childnews[contindexChildlet - 1].classList.replace('out','in');




    
    }
    if(childnewsreovin.length > removcontindexChildlet ){
        removcontindexChildlet++
        requestAnimationFrame(contIndexChildOnemidia)
        setTimeout(contIndexChildOnemidia,2000)
        childnewsreovin[removcontindexChildlet - 1].classList.replace('in','out');
    }

 requestAnimationFrame(contIndexChildOnemidia)
}



requestAnimationFrame(contIndexChildOnemidia)

}

setInterval(() => {
   indexcontainernews() 
}, 2000);