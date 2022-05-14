window.onscroll = function showHeader() {
    var header = document.querySelector('.header3');
    if(window.pageYOffset > 723){
        header.classList.add('header_fixed');
    } else{
        header.classList.remove('header_fixed');
    }
}