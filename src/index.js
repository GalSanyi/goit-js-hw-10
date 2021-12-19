import './css/styles.css';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
import countryCard from '../tamplates/city-card.hbs';
import oneCountry from '../tamplates/oneCountry.hbs';
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
    const form = e.target.value;
    const value = form.trim();
    if (value === '') {
        refs.countryList.innerHTML = '';
        refs.countryInfo.innerHTML = '';
        return;
    }



    API.fetchCountries(value)
        .then(renderCountryCard)
        .catch(onFetchError);
    // .finally(() => input.reset());


}
//возвращяет промис




function renderCountryCard(country) {
    const markup = countryCard(country);
    const markupOneCountry = oneCountry(country);
    refs.countryInfo.innerHTML = markup;

    if (country.length > 10) {
        refs.countryInfo.innerHTML = '';
        refs.countryList.innerHTML = '';
        return Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
    } else if (country.length >= 2 && country.length <= 10) {
        refs.countryList.innerHTML = markup;
        refs.countryInfo.innerHTML = '';
        return;
    } else if (country.length === 1) {
        refs.countryInfo.innerHTML = markupOneCountry;
        refs.countryList.innerHTML = '';
        return;
    }

}




function onFetchError(error) {
    Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
    refs.countryInfo.innerHTML = '';
}