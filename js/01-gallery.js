import { galleryItems } from "./gallery-items.js";

let instance;
// Change code below this line

const listGallery = document.querySelector(".gallery");

const newArray = galleryItems
  .map(({ preview, original, description }) => {
    return `<a class="gallery__item">
    <img class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}">
    </a>`;
  })
  .join("");
listGallery.insertAdjacentHTML("afterbegin", newArray);

listGallery.addEventListener("click", displayOriginal);

function displayOriginal(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") return;
  const urlOriginal = event.target.dataset.source;
  console.dir(event.target);
  console.log(urlOriginal);

  instance = basicLightbox.create(`
    <img src="${urlOriginal}" width="800" height="600">
`);

  instance.show();

  document.addEventListener("keydown", clickEsc);
}

function clickEsc(event) {
  if (event.code === "Escape") {
    instance.close();
  }
  document.removeEventListener("keydown", clickEsc);
}
