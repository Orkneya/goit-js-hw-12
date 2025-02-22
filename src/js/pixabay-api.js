import axios from 'axios';

const API_KEY = '48810135-3fc2af65eea4986756bc51882';
const BASE_URl="https://pixabay.com/api/?";

 export function searchImging(name){
  const params = new URLSearchParams({
    key : API_KEY ,
    q : name,
    image_type : "photo",
    orientation : "horizontal",
    safesearch : true,
    page : 1,
    per_page :20,
  });
  return axios.get(`${BASE_URl}${params}`)
  }