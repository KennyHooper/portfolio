let ingredients = ['coffee'];
let drinkIds = [];
let drinks = [];

getData();

function getData() {
  getIds();
  setTimeout(getDrinks, 1000);
  setTimeout(displayDrinks, 3000);
}

function getIds() {
  console.log('Getting ids');

  for (let drink of ingredients) {

    $.getJSON('http://cors.io/?u=http://www.thecocktaildb.com/api/json/v1/1/filter.php?i=' + drink, function(data) {

    data.drinks.forEach(function(drink) {
      drinkIds.push(drink.idDrink);
    });

    });

  }

}

function getDrinks() {

  drinks = [];

  console.log('Getting drinks');
  for (let drinkId of drinkIds) {

    $.getJSON('http://cors.io/?u=http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + drinkId, function(data) {

      // console.log(data);
      drinks.push(data.drinks[0]);

    });
  }

}

function displayDrinks() {

  console.log('Displaying Drinks');

  let $drinksContainer = $("#drinks-container");
  drinks.forEach(function(drink) {

    let drinkName = drink.strDrink;
    let drinkGlass = drink.strGlass;

    let drinkInstructions = drink.strInstructions;

    var map = new Map();

    for (let i = 1; i <= 15; i++) {
      if (drink['strIngredient'+i]) {
        map.set(drink['strMeasure'+i], drink['strIngredient'+i]);
      }
    }

    $drinksContainer.append(`<h3>${drinkName}</h3>`);

    $drinksContainer.append(`<p>${drinkInstructions}</p>`);

    $drinksContainer.append('<ul>');

    for (var [key, value] of map) {
      $drinksContainer.append(`<li>${key} ${value}</li>`);
    }

    $drinksContainer.append('</ul>');

    $drinksContainer.append("<hr>");

  });

}



// noprotect
