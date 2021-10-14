$('.owl-carousel').owlCarousel({
    loop:true, /* FALSE = desliga o loop de rolagem infinita */
    margin:10, /* margem desfinida de 10px */
    nav:false, /* FALSE = desliga os botões de navegação dos jogos*/
    responsive:{ 
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{ /* se a tela for maior que 1000px ele exibe 5 imagens de jogos */
            items:5 
        }
    }
})