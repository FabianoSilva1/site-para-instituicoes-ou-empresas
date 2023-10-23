const containeractiv = document.querySelectorAll('.container-button');
function activmenu (){
  const buttonMenu =   document.querySelectorAll('.button-menu-hd');
 

buttonMenu.forEach((element , index) => {
    element.addEventListener('click',function () {
        containeractiv[index].classList.add('properties')
        console.log(index)
    })
});
}

function desctivmenu (){
    const buttonclosemenu = document.querySelectorAll('.close-cont-menu');
    buttonclosemenu.forEach((element,index) =>{
        element.addEventListener('click',function () {
            containeractiv[index].classList.remove('properties');
        })
    })
}
desctivmenu()
activmenu()