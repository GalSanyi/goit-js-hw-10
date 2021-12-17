export function fetchCountries(name) {
    const url = `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`;
    return fetch(url)
        .then(response => {

            return response.json();
        });
    //данные про размуетку
    // .then(renderCountryCard)
    // .catch(error => {
    //     console.log(error);
    // });
}