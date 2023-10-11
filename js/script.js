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


//evento click avanti


buttonTopDOMElement.addEventListener('click', function (event){
    
    console.log("Images Length", images.length);
 
    itemDOMElements[currentIdex].classList.remove('active');
    
    if (currentIdex >= (images.length - 1)) {
        
        currentIdex = 0;
    }else{
        currentIdex += 1;
    }
    itemDOMElements[currentIdex].classList.add('active');
    
    console.log(images.length, [i])
})

//evento click indietro
buttonBottomDOMElement.addEventListener('click', function (event){

    itemDOMElements[currentIdex].classList.remove('active');
    
    if (currentIdex <= 0) {
        
        currentIdex = (images.length - 1);
    }else{
        currentIdex -= 1;
    }

    itemDOMElements[currentIdex].classList.add('active');
	

})
	
	
