import './css/styles.css';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
import countryCard from '../tamplates/city-card.hbs';
import API from '../src/fetch-api';
const DEBOUNCE_DELAY = 300;


const refs = {


    input: document.querySelector('#search-box'),
    countryList: document.querySelector('.country-list'),
    countryInfo: document.querySelector('.country-info'),

}
refs.input.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));

function onSearch(e) {

    e.preventDefault();
    const form = e.currentTarget.value;
    const value = form.trim();

    API.fetchCountries(value)
        .then(renderCountryCard)
        .catch(onFetchError)
        .finally(() => form.reset());
}
//возвращяет промис




function renderCountryCard(country) {
    const markup = countryCard(country);
    refs.countryInfo.innerHTML = markup;



}

function onFetchError(error) {
    Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
}