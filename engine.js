window.addEventListener('load', function(){

    let menuBtn = document.querySelector('.menu-btn');
    let menu = document.querySelector('.mobile-menu');

    menuBtn.addEventListener('click', function(){
        menuBtn.classList.toggle('active');
        menu.classList.toggle('active');
    })

})



