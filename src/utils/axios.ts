import axios from "axios";
/*
"characters": "https://rickandmortyapi.com/api/character",
"locations": "https://rickandmortyapi.com/api/location",
"episodes": "https://rickandmortyapi.com/api/episode"
*/

export const instance = axios.create({
    baseURL: 'https://rickandmortyapi.com/api/',
    //timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  });