
//scrolling to top on home link navigation
const topLink = document.getElementById('homeLink')
topLink.addEventListener('click', function() {
    window.scroll({
        top: -1000
    });
})

//visible span after click link navigation
const navContainer = document.querySelector('.nav__container');
const liContainer = navContainer.querySelectorAll('li.nav__container__li > a');
const spanContainer = document.getElementsByClassName('span');

for (let i = 0; i < liContainer.length; i++) {
    liContainer[i].addEventListener('click', function() {

        let current = document.getElementsByClassName('js__active__li');
        current[0].className = current[0].className.replace(' js__active__li', '');
        spanContainer[i].className += ' js__active__li';
        //event.preventDefault();
    });
}

//visible span after scrool
const section = document.querySelectorAll('.section');
const sectionHeight = section.offsetHeight;
const navBottom = navContainer.getBoundingClientRect().top + navContainer.offsetHeight;

window.addEventListener('scroll', function() {
    for (let j = 0; j < section.length; j++) {
        var elemBottom = section[j].getBoundingClientRect().top + section[j].offsetHeight;
        var elemTop = section[j].getBoundingClientRect().top;

        if (elemTop <= navBottom  && elemBottom  >= navBottom  ) {
            spanContainer[j].className += ' js__active__li';
        } else if (elemBottom  < navBottom || elemTop > navBottom  ) {
            spanContainer[j].classList.remove('js__active__li');
        }
    }
})

//section carousel
var carousel = document.querySelectorAll(".section")
carousel.forEach(function(el) {
    var button = el.getElementsByClassName('section__controler__carousel__button');
    var img = el.getElementsByClassName('carousel__img');
    var imgCurrent = el.getElementsByClassName('js__carousel__img');
    var buttonCurrent = el.getElementsByClassName('js__button__hoovered');
    var text = el.getElementsByClassName('js__text__carousel');
    var textCurrent = el.getElementsByClassName('js__text__active')
    var buttonLength = button.length;

    for (let k = 0; k < buttonLength; k++) {
        button[k].addEventListener('click', function() {
            imgCurrent[0].className = imgCurrent[0].className.replace(' js__carousel__img', '');
            img[k].className += ' js__carousel__img';
            textCurrent[0].className = textCurrent[0].className.replace(' js__text__active', '');
            text[k].className += ' js__text__active';
            buttonCurrent[0].className = buttonCurrent[0].className.replace(' js__button__hoovered', '');
            button[k].className += ' js__button__hoovered ';
        })
    }
});