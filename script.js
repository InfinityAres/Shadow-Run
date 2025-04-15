
 shadow = document.querySelector('.shadow');

 pedra = document.querySelector('.pedra')

 jump = () => {
  shadow.classList.add('jump');

setTimeout(() => {

   shadow.classList.remove('jump');
    
}, 500);
}


 loop = setInterval(() => {

  
   pedraPosition = pedra.offsetLeft;
  
   shadowPosition = +window.getComputedStyle(shadow).bottom.replace('px', '')

  if(pedraPosition < 130 && pedraPosition > 0 && shadowPosition < 60) {

    pedra.style.animation = 'none';
    pedra.style.left = `${pedraPosition}px`;

    shadow.style.animation = 'none';
    shadow.style.bottom = `${shadowPosition}px`;
  }

}, 10)
    
document.addEventListener('keydown', jump);