const loadCountries = () => {
    fetch(`https://restcountries.com/v3.1/all
    `)
    .then(res => res.json())
    .then(data => displayCountries(data));
}

const displayCountries = countries => {

    const countriesHtml = countries.map(country => getCountryHtml(country));

    const container = document.getElementById("container");
    container.innerHTML = countriesHtml.join(' ');
}

const getCountryHtml = country => {

    return `
        <div class="rounded border-2 shadow">
            <h2 class="text-5xl text-center">${country.name.common}</h2>
            <h3 class="text-3xl text-center my-5">Capital: ${country.capital}</h3>
            <img class="w-2/4 my-5 mx-auto" src="${country.flags.png}">
        </div>
    `;
}

loadCountries();