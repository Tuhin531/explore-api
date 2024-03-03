const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}

const displayCountries = countries => {
    const countriesContainer = document.getElementById('all-capital');
//  console.log(countries);
    countries.forEach(country => {
        console.log(country)
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `
         <h3> Name:  ${country.name.common} </h3>
         <h5> Capital:${country.capital}  </h5>
         
        `;
        countriesContainer.appendChild(countryDiv);



    })
}

loadCountries();