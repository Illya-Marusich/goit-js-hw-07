import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
// const items = [];

// galleryItems.forEach((element) => {
//   const galleryItem = document.createElement("div");
//   galleryItem.className = "gallery__item";
//   const galleryLink = document.createElement("a");
//   galleryLink.className = "gallery__link";
//   galleryLink.href = element.original;
//   const galleryImage = document.createElement("img");
//   galleryImage.className = "gallery__image";
//   galleryImage.src = element.preview;
//   galleryImage.setAttribute("data-source", element.original);
//   galleryImage.alt = element.description;

//   galleryItem.append(galleryLink);
//   galleryLink.append(galleryImage);
//   items.push(galleryItem);
// });

const markup = galleryItems
  .map(({ original, preview, description }) => {
    return `
  <li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}">
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

  const instance = basicLightbox.create(
    `<img src="${selectedImage}" width="800" height="600">`
  );

  instance.show();

  gallery.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      console.log("here");
      instance.close();
    }
  });
});
