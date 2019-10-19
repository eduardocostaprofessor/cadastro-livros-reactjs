const ENV = (window.location.href.indexOf('localhost') === -1)? 'prod' : 'dev';

export const API_URL = (ENV === 'dev') 
? 'http://localhost:3002/api' 
: 'https://cadastro-livros-senai-backend.herokuapp.com/api';


console.log(API_URL);
