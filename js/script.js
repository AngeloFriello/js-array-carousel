// - MILESTONE 1
//     - Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo un’immagine grande al centro: avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull’aspetto logico.
    const images = [
        '../img/01.webp',
        '../img/02.webp',
        '../img/03.webp',
        '../img/04.webp',
    ]
    let imagesN = images.length
    console.log(imagesN)
// - MILESTONE 2
//     - Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell’array fornito e un semplice ciclo for che concatena un template literal.
for (i = 0; i < images.length; i++) {
    const currentImages = images[i];
    console.log(currentImages)  
    let divDOMElement = `
    <div class='container'>
        <div class='row'>
            <div class='col-12'>
                
            </div>
        </div>
    </div>
    `
    
}



// - Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
//     - Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.
// - MILESTONE 3
//     - Al click dell’utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.
