import axios from 'axios'

export const apiKey = '0d9ad324-67a5-44f6-b801-1dc9546bcabd'

export const instance = axios.create({
    baseURL: 'https://kinopoiskapiunofficial.tech/api/v2.2/films',
    headers: {
        'X-API-KEY': apiKey,
    },
})
