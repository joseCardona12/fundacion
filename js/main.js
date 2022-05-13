$(document).ready(main);

var contador = 1;

function main() {
    $('.menu__bar').click(function(){
        if (contador == 1 ){
            $('nav').animate({
                left: '0'
            });
            contador = 0;
        } else {
            contador = 1;
            $('nav').animate({
                left: '-100%'
            });

        }
    }); 

    //mostramos y ocultamos submenu //
    $('.submenu').click(function(){
        $(this).children('.children').slideToggle();
    });

}


//noticias//

function mostrarNoticia(){
    document.getElementById('noticias').style.display = 'block';
}

function ocultarNoticia(){
    document.getElementById('noticias').style.display = 'none';
}