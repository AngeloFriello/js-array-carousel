const images = [
    './img/01.webp',
    './img/02.webp',
    './img/03.webp',
    './img/04.webp',
    './img/05.webp',
]

const carouselDOMElement = document.querySelector('.carousel');
console.log(carouselDOMElement, images);

let imagesN = images.length;
console.log(imagesN);


for (i = 0; i < images.length; i++) {

console.log(i)

const currentImages = images[i];

console.log(currentImages);

let imageDOMElement = `<img src="${currentImages}" alt="" class='carousel__item'>`;

carouselDOMElement.innerHTML += imageDOMElement;

}

const itemDOMElements = document.querySelectorAll('.carousel__item');
console.log(itemDOMElements)

let currentIdex = 0;

itemDOMElements[currentIdex].classList.add('active');

const buttonTopDOMElement = document.querySelector('.clicca-su');
const buttonBottomDOMElement = document.querySelector('.clicca-giu');


//evento avanti


buttonTopDOMElement.addEventListener('click', function (event){
    
    
  



if (currentIdex >= 5) {
    
    currentIdex += 0

}else{
    itemDOMElements[currentIdex].classList.remove('active');

    currentIdex += 1;
    
    itemDOMElements[currentIdex].classList.add('active');
}

})


buttonBottomDOMElement.addEventListener('click', function (event){

itemDOMElements[currentIdex].classList.remove('active');

currentIdex -= 1;

itemDOMElements[currentIdex].classList.add('active');
	

})
	
	
