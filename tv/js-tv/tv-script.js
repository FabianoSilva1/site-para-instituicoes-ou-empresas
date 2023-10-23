// const VideoTV= document.querySelectorAll('.video-play-tv');
// const Play_video = document.querySelectorAll('.play-video-tv');
// VideoTV.forEach((Element, index ) =>{
//     VideoTV[index].poster = '../imgs/capa.png';
//   //  Element.setAttribute('poster','../imgs/capa.png');
//     Element.addEventListener('click',() => {
//         for(let nVar = 0; nVar < VideoTV.length ; nVar++){
//             VideoTV[nVar].removeAttribute('controls');
//             VideoTV[nVar].pause()
//             // VideoTV[nVar].poster ='../imgs/capa.png';
//             VideoTV[nVar].muted = true;
//         }
//         VideoTV[index].setAttribute('controls','borda')
//         VideoTV[index].play();
//         VideoTV[index].removeAttribute('poster')
//     })

// Play_video.forEach((Element ,index) =>{
//    Element.addEventListener('click', () =>{
//     for(let nVar = 0; nVar < VideoTV.length ; nVar++){
//         VideoTV[nVar].removeAttribute('controls');
//         VideoTV[nVar].pause();
//         VideoTV[nVar].poster = '../imgs/capa.png';
//         VideoTV[nVar].muted = true;
//     }
//     VideoTV[index].play()
//     VideoTV[index].removeAttribute('poster','../imgs/capa.png')
//     Play_video[index].style.display = 'none';
//     VideoTV[index].setAttribute('controls', 'borda');

// })
// })

// })

// ///////////////////////////

// // window.addEventListener('scroll', () =>{
// //     console.log(positionVideoU);
// // })
// window.onload = () =>{
//     function postion_calc ()  {
//     const VideoU = document.querySelector('#video-U');
//     const positionVideoU = VideoU.getBoundingClientRect()['y'];
//    // console.log(positionVideoU);
//     if (positionVideoU <= 100){
//         VideoU.play()
//     }
// }
//     document.addEventListener('scroll',postion_calc);

// }
