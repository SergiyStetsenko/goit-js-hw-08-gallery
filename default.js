import gallery from './gallery-items.js'
console.log(gallery);
const galleryList = document.querySelector('.js-gallery')
console.log(galleryList);
gallery.forEach(el=>{
 const liNext = `<li class=“gallery__item”>
<a
  class='gallery__link'
  href='${el.original}'
>
  <img
    class='gallery__image'
    src='${el.preview}'
    data-source='${el.original}'
    alt='${el.description}'
  />
</a>
</li>`
galleryList.insertAdjacentHTML('beforeend', liNext)
});
const galleryModal = document.querySelector('.js-lightbox')
const btnCloseModal = document.querySelector('.lightbox__button')
const bigPicture = document.querySelector('.lightbox__image')
const makeMarkupModal = (e)=>{
e.preventDefault();
if(e.target.nodeName!== 'IMG'){
return
}
bigPicture.src = e.target.dataset.source;
bigPicture.alt = e.target.alt
onModalOpen();
}
const onModalOpen = ()=>{
  galleryModal.classList.add('is-open')
  window.addEventListener('keydown', escClick)
  window.addEventListener('keydown', overClik)
}
const closeModal = ()=>{
galleryModal.classList.remove('is-open')
bigPicture.src = '';
bigPicture.alt = '';
  window.removeEventListener('keydown', escClick)
  window.removeEventListener('keydown', overClik)
}
const escClick = e=>{
  if (e.key === 'Escape') {
    closeModal();
  }
}
const over=document.querySelector('.lightbox__overlay')
const overClik = e =>{
  
  if (e.target ===  over) {
    closeModal();
  }
}
galleryList.addEventListener('click', makeMarkupModal);
btnCloseModal.addEventListener('click', closeModal);
galleryModal.addEventListener('click', overClik);


