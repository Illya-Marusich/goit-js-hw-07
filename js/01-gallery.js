import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
let instance;
const markup = galleryItems
  .map(({ original, preview, description }) => {
    return `
  <li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" data-source="${original}">
    </a>
  </li>
  `;
  })
  .join("");

gallery.insertAdjacentHTML("afterBegin", markup);

gallery.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }

  const selectedImage = e.target.getAttribute("data-source");

  instance = basicLightbox.create(
    `<img src="${selectedImage}" width="800" height="600">`,
    {
      onShow: () => {
        document.addEventListener("keydown", onKeyDown);
      },
      onClose: () => {
        document.removeEventListener("keydown", onKeyDown);
      },
    }
  );

  instance.show();
});

function onKeyDown(e) {
  if (e.key === "Escape") {
    console.log("listen");
    instance.close();
  }
}
