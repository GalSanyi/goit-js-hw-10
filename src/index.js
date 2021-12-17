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

fetchCountries().then(renderCountryCard).catch(error => console.log(error));


//возвращяет промис
function fetchCountries(name) {

    return fetch(`https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`)
        .then(response => {
            return response.json();
        });
    //данные про размуетку
    // .then(renderCountryCard)
    // .catch(error => {
    //     console.log(error);
    // });
}




function renderCountryCard(country) {
    const markup = countryCard(country);
    refs.countryInfo.innerHTML = markup;



}