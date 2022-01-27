const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

/* Inserisco le immagini nella sezione principale del container */

let insertItem = "";

for (let i = 0; i < items.length; i++) {

  insertItem += `<div class="item"> <img src="${items[i]}"> <div class="title"> <h1>${title[i]}</h1> <h2>${text[i]}</h2> </div> </div> `;

}

let imgContainer = document.querySelector('.img-container');
imgContainer.innerHTML = insertItem;

/* Inserisco le thumbnail nella sezione a destra del container */

let insertThumbnail = "";

for (let i = 0; i < items.length; i++) {

  insertThumbnail += `<div class="thumb"> <img src="${items[i]}"> <div class="overlay"></div> </div> `;

}

/* 
Creo due variabili con gli elementi che creano le frecce di scorrimento 
top e bottom che andranno in thumb-container
*/

let arrowTop = '<div class="btn-arrow prev"> <i class="fas fa-chevron-up"></i> </div>';
let arrowBottom = '<div class="btn-arrow next"> <i class="fas fa-chevron-down"> </i></div>';

//inserisco le thumbnail e le frecce di scorrimento in thumb-container
let thumbContainer = document.querySelector('.thumb-container');
thumbContainer.innerHTML = insertThumbnail + arrowTop + arrowBottom;
