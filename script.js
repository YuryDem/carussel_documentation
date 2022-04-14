$(function() {
    $('.nav__item').click(function(){
        $('.nav__item').removeClass('active');
        $(this).addClass('active');
    });

    window.addEventListener('scroll',()=>{
        let scrollDistance = window.scrollY;
        document.querySelectorAll('.section').forEach((el, i)=>{
            if(el.offsetTop - document.querySelector('.nav').clientHeight <= scrollDistance){
                document.querySelectorAll('.nav__item').forEach((el)=>{
                    if(el.classList.contains('active')){
                        el.classList.remove('active');
                    }
                });
                document.querySelectorAll('.nav__item')[i].classList.add('active');
            }            
        });
    });
});