import axios from 'axios';
import { limit } from '../main';

const API_KEY = '48810135-3fc2af65eea4986756bc51882';
const BASE_URl="https://pixabay.com/api/?";

 export async function searchImging(name,page){
  const params = new URLSearchParams({
    key : API_KEY ,
    q : name,
    image_type : "photo",
    orientation : "horizontal",
    safesearch : true,
    page,
    per_page : limit,
  });
  const {data} = await axios(`${BASE_URl}${params}`);
  return data;
  }