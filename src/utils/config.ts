export const API_BASE_URL = 'https://gateway.scan-interfax.ru';

export const TOKEN = localStorage.getItem('token');

export const TONALITY_PARAMS = [
    {name: 'Любая', value: 'any'},
    {name: 'Позитивная', value: 'positive'},
    {name: 'Негативная', value: 'negative'},
]