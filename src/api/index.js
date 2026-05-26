import axios from 'axios';
import queryString from 'query-string';

const httpClient = axios.create({
    baseURL: "https://fakerapi.it/api/v2/"
})

export const getAllBooks = (options) => {
    const allOptions = {...options, _locale: 'uk_UA'}
    const queryStr = queryString.stringify(allOptions)
    return httpClient.get(`/books?${queryStr}`);
}