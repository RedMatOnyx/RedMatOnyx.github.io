const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    // console.table(jsonObject);  // temporary checking for valid response and data parsing
    const towns = jsonObject['towns']; // inserted line from virtual lab
    // for (let i = 0; i < prophets.length; i++ ) { // refactored below
    const trio = towns.filter (x => (x.name == 'Preston' | x.name == 'Soda Springs' | x.name == 'Fish Haven'));
    trio.forEach(town => {
    let place = document.createElement('section');
    let h2 = document.createElement('h2');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');
    let p4 = document.createElement('p');
    let image = document.createElement('img');
    // h2.textContent = prophets[i].name + ' ' + prophets[i].lastname; / use string interpolation instead, below

    //add details and attributes
    // h2.innerHTML = `${prophets[i].name} <span class="highlight">${prophets[i].lastname}</span> - Children: ${prophets[i].numofchildren}`;
    
    h2.innerHTML = `${town.name}`;// <span class="highlight">${prophet.lastname}</span>`;  - Children: ${prophet.numofchildren}`;
    p1.innerHTML = `<span class="townmotto">${town.motto}</span>`;
    p2.innerHTML = `Year Founded: ${town.yearFounded}`;
    p3.innerHTML = `Population: ${town.currentPopulation}`;
    p4.innerHTML = `Annual Rain Fall: ${town.averageRainfall}`;
    // image.setAttribute('src', prophets[i].imageurl);
    image.setAttribute('src', `${town.photo}`);
    // image.setAttribute('alt', `Official Portrait of ${prophets[i].name} ${prophets[i].lastname}`);
    image.setAttribute('alt', `photo of ${town.name}`);
// actually add the content to the container
    place.appendChild(h2);
    place.appendChild(p1);
    place.appendChild(p2);
    place.appendChild(p3);
    place.appendChild(p4);
    place.appendChild(image);

    document.querySelector('div.townsdata').appendChild(place);

    }); //added parenthesis and semi-colon per refactoring function above

});
