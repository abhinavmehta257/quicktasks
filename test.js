//Find first 20 countries from the api with a population greater than or equal to the population 550
function countriesGreaterThan(population) {
    var countries = [];
    var i = 0;
    while (countries.length < 20 && i < countries.length) {
        if (countries[i].population >= population) {
            countries.push(countries[i]);
        }
        i++;
    }
    return countries;
}

//get data from api 
function getData(){
    var request = new XMLHttpRequest();
    request.open('GET', 'https://cdn.jsdelivr.net/gh/apilayer/restcountries@3dc0fb110cd97bce9ddf27b3e8e1f7fbe115dc3c/src/main/resources/countriesV2.json', true);
    request.onload = function () {
        var data = JSON.parse(this.response);
        if (request.status >= 200 && request.status < 400) {
            data.forEach(country => {
                console.log(country.name);
            });
        } else {
            console.log('error');
        }
    }
    request.send();

}

getData();