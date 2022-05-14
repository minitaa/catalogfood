window.onscroll = function showHeader() {
    var header = document.querySelector('.header2');
    if(window.pageYOffset > 590){
        header.classList.add('header_fixed1');
    } else{
        header.classList.remove('header_fixed1');
    }
}
