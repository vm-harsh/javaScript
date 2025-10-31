const addtoBag = document.querySelectorAll('.button-1');
const wishlist = document.querySelector('#button');
const message = document.querySelector('.items');

let items = 0;

addtoBag[0].addEventListener('click',()=>{
  items++;
  message.textContent = items;
})

addtoBag[1].addEventListener('click',()=>{
  items+=2;
  message.textContent = items;
})




wishlist.addEventListener('click',()=>{
  console.log('wishlist button clicked')
})

