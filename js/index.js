const buttons = document.querySelectorAll('.keyboard__item');


buttons.forEach(e => e.addEventListener('click', function() {
    e.classList.add('active'); 
    setTimeout(function(){
        e.classList.remove('active');
    },200)
}))


