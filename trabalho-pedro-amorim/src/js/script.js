//script js


var pagina1_btn = document.getElementById('pagina1-btn'),
    pagina2_btn = document.getElementById('pagina2-btn'),
    pagina3_btn = document.getElementById('pagina3-btn'),
    pagina1 = document.getElementById('pagina1'),
    pagina2 = document.getElementById('pagina2'),
    pagina3 = document.getElementById('pagina3');

pagina1.setAttribute('class', 'visivel');
pagina2.setAttribute('class', 'oculto');
pagina3.setAttribute('class', 'oculto');

pagina1_btn.addEventListener('click', function(){
    pagina1.setAttribute('class', 'visivel');
    pagina2.setAttribute('class', 'oculto');
    pagina3.setAttribute('class', 'oculto');
});

pagina2_btn.addEventListener('click', function(){
    pagina1.setAttribute('class', 'oculto');
    pagina2.setAttribute('class', 'visivel');
    pagina3.setAttribute('class', 'oculto');
});

pagina3_btn.addEventListener('click', function(){
    pagina1.setAttribute('class', 'oculto');
    pagina2.setAttribute('class', 'oculto');
    pagina3.setAttribute('class', 'visivel');
});


