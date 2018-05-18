
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


//carousel
//https://codepen.io/maqnus/pen/rWVGZW

        

/* 
//obiektowo
const list = document.querySelectorAll(m�j_specjalny_selector);

list.forEach(function(selector) {
  new SectionController(selector);
});

const SectionController = function (element) {
  this.root = element;
  this.carousel = new Carousel(this.root.querySelector(specjalny_selector_wyszukuj�cy_karuzel�));

  // itd.
}

 */ 



//dzia�a wsz�dzie :)     
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



    
//dzia�a ale nie wiem czy na dotykowych
/* var carousel = document.querySelectorAll(".section") 
for (let z = 0; z < carousel.length; z++ ) {
    carousel[z].addEventListener('mouseover' || 'click', function() {
        
        var button = carousel[z].querySelectorAll('.section__controler__carousel__button');
        var image = carousel[z].getElementsByClassName('carousel__img');

        for (let k = 0; k < button.length; k++) {
            button[k].addEventListener('click', function() {
                let imgCurrent = carousel[z].getElementsByClassName('js__carousel__img');
                imgCurrent[0].className = imgCurrent[0].className.replace(' js__carousel__img', '');
                image[k].className += ' js__carousel__img';
                
                let buttonCurrent = carousel[z].getElementsByClassName('js__button__hoovered')
                buttonCurrent[0].className = buttonCurrent[0].className.replace(' js__button__hoovered', '');
                button[k].className += ' js__button__hoovered ';
            })
        }  
    })
} */





/* 
//�wietnie dzia�a dla jednej karuzeli
   
const button = document.querySelectorAll('.section__controler__carousel__button');
const image = document.getElementsByClassName('carousel__img');




for (let k = 0; k < button.length; k++) {
    button[k].addEventListener('click', function() {
        let imgCurrent = document.getElementsByClassName('js__carousel__img');
        imgCurrent[0].className = imgCurrent[0].className.replace(' js__carousel__img', '');
        image[k].className += ' js__carousel__img';
        
        let buttonCurrent = document.getElementsByClassName('js__button__hoovered')
        buttonCurrent[0].className = buttonCurrent[0].className.replace(' js__button__hoovered', '');
        button[k].className += ' js__button__hoovered ';

    })
} */

  





//offsetHeight returns height of element without margins - outerHeight
// offsetTop returns distance - offset().top - daje informacje o wysoko�ci elementu, nie dzia�a na document i window
// scrollHeight - ca�y obszar z mo�liwo�ci� przewijania, nie dzia�a na document czy window
//innerHeight - wysoko�� okna
//pageYOffset - liczba px o kt�re przesuni�ty dokument. O oznacza nie przesuni�ty - g�rna kraw�d�
// scrollTop - o ile g�rna kraw�d� elementu jest przesuni�ta w stosunku do przesuni�cia elemetnu - dzia�a wewn�trznie, gdy np. okienko z przewijaniem?
//window.scrollY - to to samo co pageYOffset - i ten jest lepiej wspierany
//Element.getBoundingClientRect() - pobiera rozmiary elementu i jego relatywn� pozycj� do viewport