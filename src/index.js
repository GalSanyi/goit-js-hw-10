import './css/styles.css';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
import countryCard from '../tamplates/city-card.hbs';

const DEBOUNCE_DELAY = 300;


const refs = {


    input: document.querySelector('#search-box'),
    countryList: document.querySelector('.country-list'),
    countryInfo: document.querySelector('.country-info'),
}




fetch('https://restcountries.com/v3.1/all')
    .then(response => {
        return response.json();
    })
    .then(country => {
        // console.log(country);
        const markup = countryCard(country);
        console.log(markup);

    })
    .catch(error => {
        console.log(error);
    });