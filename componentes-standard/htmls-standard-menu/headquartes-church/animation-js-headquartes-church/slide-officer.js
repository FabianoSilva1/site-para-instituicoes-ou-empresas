const control = document.querySelectorAll('.controls');
let curretintem = 0;
const items = document.querySelectorAll('.officer'); 
const translate = -1115;
const maxitems = items.length;
const containerCarrocel = document.querySelector('.carrocel');

containerCarrocel.addEventListener('load', () =>{
containerCarrocel.style.transform = `translateX(${translate}px)`;   
    
})
control.forEach((control) =>{
    control.addEventListener('click', () =>{
     const isright =   control.classList.contains('board-right')
    console.log(control,isright,curretintem)
if(isright){
    curretintem -= 1;
}else{
    curretintem += 1;
}
console.log(items)
const widtitem = 220 * curretintem;
curretintem >= maxitems ? curretintem =0: curretintem == curretintem;
curretintem < 0 ? curretintem = maxitems - 1: curretintem== curretintem;
console.log(120 * curretintem);
containerCarrocel.style.transform = `translateX(${translate + widtitem}px)`;   
})


})