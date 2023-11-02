import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryList = document.querySelector(".gallery");

const galleryItemsMarkup = galleryItems
  .map(
    ({ preview, original, description }) => `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
  <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/> </a></li>`
  )
  .join("");

const instance = basicLightbox.create(
  `<img width="auto" height="auto" src="">`,
  {
    onShow: (instance) => {
      window.addEventListener("keydown", onEscKeyPress);
    },
    onClose: (instance) => {
      window.removeEventListener("keydown", onEscKeyPress);
    },
  }
);

function onEscKeyPress(event) {
  if (event.code !== "Escape") return;
  instance.close();
}

function onImgClick(event) {
  event.preventDefault();
  const imgDatasetSource = event.target.dataset.source;
  if (!imgDatasetSource) {
    return;
  }
  instance.element().querySelector("img").src = imgDatasetSource;
  instance.show();
}

galleryList.insertAdjacentHTML("beforeend", galleryItemsMarkup);
galleryList.addEventListener("click", onImgClick);
