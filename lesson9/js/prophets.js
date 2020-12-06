const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const prophets = jsonObject['prophets']; // inserted line from virtual lab
    // for (let i = 0; i < prophets.length; i++ ) { // refactored below
    prophets.forEach(prophet => {
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let image = document.createElement('img');
    // h2.textContent = prophets[i].name + ' ' + prophets[i].lastname; / use string interpolation instead, below

    //add details and attributes
    // h2.innerHTML = `${prophets[i].name} <span class="highlight">${prophets[i].lastname}</span> - Children: ${prophets[i].numofchildren}`;
    h2.innerHTML = `${prophet.name} <span class="highlight">${prophet.lastname}</span> - Children: ${prophet.numofchildren}`;
    // image.setAttribute('src', prophets[i].imageurl);
    image.setAttribute('src', prophet.imageurl);
    // image.setAttribute('alt', `Official Portrait of ${prophets[i].name} ${prophets[i].lastname}`);
    image.setAttribute('alt', `Official Portrait of ${prophet.name} ${prophet .lastname}`);
// actually add the content to the container
    card.appendChild(h2);
    card.appendChild(image);

    document.querySelector('div.cards').appendChild(card);

    // birth date
    
    // birth place

    // img
    // 


    }); //added parenthesis and semi-colon per refactoring function above

});



  


