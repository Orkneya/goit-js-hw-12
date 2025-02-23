import { refs } from "../main";

export function renderItems(users) {
  
  const markup = users
    .map((user) => {
      return `<li class="gallery-item">
      <a class="gallery-link" href="${user.largeImageURL}">
      <img
        class="gallery-image"
        src="${user.webformatURL}"
        data-source="${user.largeImageURL}"
        alt="${user.tags.split(',',3)}"
      />
      </a>
        <div class="img-info">
            <span class="img-span"> Likes: <br> ${user.likes}</span>
            <span class="img-span"> Views: <br> ${user.views}</span>
            <span class="img-span"> Comments: <br> ${user.comments}</span>
            <span class="img-span"> Downloads: <br> ${user.downloads}</span>
        </div>
      </li>`;
    })
    .join("");
  refs.container.insertAdjacentHTML("beforeend",markup);
}