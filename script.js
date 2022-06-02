//Slider
$(document).ready(function () {
    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });

    //Modal
    $('[data-modal=consultation]').on('click', function () {
        $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal__close').on('click', function () {
        $('.overlay, #consultation, #thanks').fadeOut('slow');
    });
    $('[data-modal=thanks]').on('click', function () {
        $('.overlay, #consultation, #thanks').fadeOut('slow');
        $('.overlay, #thanks').fadeIn('slow');
    });

    //Scroll
    $('a[href^="#"').on('click', function () {

        let href = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(href).offset().top
        });
        return false;
    });
});
//Parallax
new Rellax('.rellax');

//Tabs
let tab = function () {
    let tabNav = document.querySelectorAll('.tabs-nav__item'),
        tabContent = document.querySelectorAll('.tab'),
        tabName;
    tabNav.forEach(item => {
        item.addEventListener('click', selectTabNav)
    });
    function selectTabNav() {
        //удаляем класс
        tabNav.forEach(item => {
            item.classList.remove('is-active');
        });
        //элементу this(на который кликнули) добавляем класс
        this.classList.add('is-active');
        //получаем data атрибут активного элемента
        tabName = this.getAttribute('data-tab-name');
        //вызываем функцию и передаем значение tabName 
        selectTabContent(tabName);
    }
    function selectTabContent(tabName) {
        tabContent.forEach(item => {
            //проверяем наличие класса = атрибуту tabName
            item.classList.contains(tabName) ? item.classList.add('is-active') : item.classList.remove('is-active');
        })
    }
};
tab()

