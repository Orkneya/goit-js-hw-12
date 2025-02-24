// --------------import--------------------
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { searchImging } from "./js/pixabay-api";
import { renderItems } from "./js/render-function";
// ---------------export--------------------
export const refs={
  container : document.querySelector(".gallery"),
  formSubmit: document.querySelector(".form"),
  loader : document.querySelector(".loader"),
  btnChange :document.querySelector(".btn_down"),
}
// ---------------const---------------------
const lightbox = new SimpleLightbox('.gallery a',{
  captionsData : 'alt',
  captionsDelay : 200,
});
const mes1 ="Fill please all fields!";
const mes2 = "Sorry, there are no images matching your search query. Please, try again!";
const mes3 = "We're sorry, but you've reached the end of search results.";
let inputValue = "";
export const limit = 40;
let page = 1;
let totalPage = 1;
// ----------------function-------------------
refs.formSubmit.addEventListener('submit', onFormSubmit);
refs.btnChange.addEventListener("click", onFofmClick);
async function onFormSubmit(e){
  e.preventDefault();
  page = 1;
  inputValue = e.currentTarget.elements.inpImg.value.trim();
  refs.container.innerHTML = '';
  if (!inputValue){
    showError(mes1);
    return;
  }
    refs.loader.style.display = 'block';
    try{
      const {hits, totalHits} = await searchImging(inputValue,page);
      totalPage = Math.ceil(totalHits / limit);
      if (hits.length === 0){
        refs.container.innerHTML = '';
        showError(mes2);
        e.target.reset();
        refs.loader.style.display = 'none';
        hiddenButton();
        return ;
      }
      renderItems(hits);
      lightbox.refresh(); 
      refs.loader.style.display = 'none';
      if(totalPage>1) 
        {showButton();
      }  else {
        hiddenButton();
      }
    }  catch(error){
      showError(error);
    }
    e.target.reset();
};
// ------------------------------------------
async function onFofmClick(e){
  e.preventDefault();
    refs.loader.style.display = 'block';
    page++;
    try{
      const {hits} = await searchImging(inputValue,page);
      renderItems(hits);
      lightbox.refresh(); 
      refs.loader.style.display = 'none';
      scrollPage();
      if (page < totalPage){
        showButton();
      } else {
        hiddenButton();
        showError(mes3);
      }
    }  catch(error){
      showError("This is : ",error);
    }
};
// ---------------Error--------------------------
function showError(msg){
  iziToast.show({
        message: msg,
        position:"topRight",
        messageColor: 'white',
        backgroundColor: "#cb4335",
        });
}
// ---------------for button------------------
function showButton(){
  refs.btnChange.classList.remove("hidden");
}
function hiddenButton(){
  refs.btnChange.classList.add("hidden");
}
// --------------------scroll-------------------
function scrollPage(){
  const info = refs.container.firstElementChild.getBoundingClientRect();
  const heightImg = info.height;
  scrollBy({
    behavior : 'smooth',
    top : heightImg*2,
  })
}