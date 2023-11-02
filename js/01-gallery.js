import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryList = document.querySelector(".gallery");
const galleryItemsMarkup = createGalleryItems(galleryItems);
galleryList.insertAdjacentHTML("beforeend", galleryItemsMarkup);
const bannerImgEl = document.querySelector(".gallery__image");

// const createGalleryItems = ({ preview, original, description } = {}) => {
//   return `<li class="gallery__item">
//   <a class="gallery__link" href="${original}">
//   <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/> </a></li>`;
// };

// markup

function createGalleryItems(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
    })
    .join("");
}

// modal
const instance = basicLightbox.create(
  `<img width="1280" height="auto" src="">`,

  instance.show(() => window.addEventListener("keydown", onEscKeyPress)),
  instance.close(() => window.removeEventListener("keydown", onEscKeyPress))
);

function onEscKeyPress(e) {
  if (e.code !== "Escape") return;
  instance.close();
}
const onImgClick = ({ target: galleryImgEl }) => {
  if (galleryImgEl.tagName !== "IMG") {
    return;
  }

  const imgUrlPath = galleryImgEl.dataset.source;
  bannerImgEl.src = imgUrlPath;
};

galleryList.addEventListener("click", onImgClick);
