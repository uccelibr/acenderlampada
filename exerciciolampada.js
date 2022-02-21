
let lampada = document.getElementById('lampada');

lampada.addEventListener('click', () =>{

    if( lampada.className == 'acesa'){
    lampada.src= 'img/lampada-apagada-png.png';
    lampada.className = 'apagada';
    }else{
        lampada.src = 'img/lampada-acesa-png.png ';
    lampada.className = 'acesa';
    }
})



