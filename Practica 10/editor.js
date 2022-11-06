let imageElement = null;
const close = document.getElementById('close');

function abrirPopup(){
  modal_container.classList.add('show');
}

function createImage(src){
  const im = document.createElement('img');
  im.src = src;
  im.classList.add('transition');
  return im;
}

function mouseOver(event){
  const spanElement = document.createElement('span');
  imageElement = createImage(event.currentTarget.src);
  spanElement.appendChild(imageElement);
  this.parentNode.appendChild(spanElement);
}

function mouseOut(){
  imageElement.remove();
}

close.addEventListener('click', () => {
  modal_container.classList.remove('show');
});

const images = document.getElementsByClassName("artThumb")
for (i = 0; i < images.length; i++) {
  images[i].addEventListener('mouseover', mouseOver, true);
  images[i].addEventListener('mouseout', mouseOut, true);
}

const open = document.getElementsByClassName('open');
console.log('No '+ open.length);
for (i = 0; i < open.length; i++) {
  open[i].addEventListener('click',abrirPopup)
}
