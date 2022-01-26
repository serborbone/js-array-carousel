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

let insertItem = "";

for (let i = 0; i < items.length; i++) {

  insertItem += `<div class="item"> <img src="${items[i]}"> <div class="title"> <h1>${title[i]}</h1> <h2>${text[i]}</h2> </div> </div> `;

}

let imgContainer = document.querySelector('.img-container');
imgContainer.innerHTML = insertItem;

let insertThumbnail = "";

for (let i = 0; i < items.length; i++) {

  insertThumbnail += `<div class="thumb"> <img src="${items[i]}"></div> `;

}

let thumbContainer = document.querySelector('.thumb-container');
thumbContainer.innerHTML = insertThumbnail;