$(function() {



  //   $("p").click(function(){
  //     $(this).hide();
  // });


  // <div class="container">

  //       <div class="btn-group">
  //         <button type="button" class="btn btn-default">Vodka</button>
  //         <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onclick="removeIngredient(vodka)">
  //           <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
  //         </button>
  //       </div>

  // sets focus to toolbar
  $("#ingredient").focus();


  // creates button for user selcted drink when "add" pressed
  $("#ingred-btn").click(function() {
    addDrink();
  });

  // creates button for user selected drink when "enter" key pressed
  $("#ingredient").keypress(function(e) {
    if (e.which === 13) addDrink();
  });

  function addDrink() {
    var drink = $("#ingredient").val();
    var drinkButton =`<div class="btn-group">
    <button type="button" class="btn btn-default">${drink}</button>
    <button type="button" class="delete-button btn btn-outline-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
    </button>
    </div>`;
    $(".tagDiv").append(drinkButton);

    $("#ingredient").val("").focus();

    $('.delete-button').click(function(){
      $(this).parent().remove();
    });
  }


  function makeList(){
    var info = '<div class="x' + drink + '';

  }


  // $('#delete-button").live(function () {
  //         $(this).parent().remove();
  //     });

  // $("").click(function(){
  //         $(this).hide();
  //     });

  let ingredients = ['coffee'];
  let drinkIds = [];
  let drinks = [];

  getData();

  function getData() {
    getIds();
    setTimeout(getDrinks, 1000);
    setTimeout(displayDrinks, 2000);
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
        console.log(JSON.stringify(data));

        console.log(data);
        drinks.push(data.drinks[0]);

      });
    }

  }



  // noprotect


});


function displayDrinks() {



  let $drinksContainer = $("#drinks-container");
  drinks.forEach(function(drink) {

    let drinkName = drink.strDrink;
    let drinkGlass = drink.strGlass;

    let drinkInstructions = drink.strInstructions;

    let drinkIngredient1 = drink.strIngredient1;
    let drinkIngredient2 = drink.strIngredient2;
    let drinkIngredient3 = drink.strIngredient3;
    let drinkIngredient4 = drink.strIngredient4;
    let drinkIngredient5 = drink.strIngredient5;
    let drinkIngredient6 = drink.strIngredient6;
    let drinkIngredient7 = drink.strIngredient7;
    let drinkIngredient8 = drink.strIngredient8;
    let drinkIngredient9 = drink.strIngredient9;
    let drinkIngredient10 = drink.strIngredient10;
    let drinkIngredient11 = drink.strIngredient11;
    let drinkIngredient12 = drink.strIngredient12;
    let drinkIngredient13 = drink.strIngredient13;
    let drinkIngredient14 = drink.strIngredient14;
    let drinkIngredient15 = drink.strIngredient15;

    let drinkMeasure1 = drink.strMeasure1;
    let drinkMeasure2 = drink.strMeasure2;
    let drinkMeasure3 = drink.strMeasure3;
    let drinkMeasure4 = drink.strMeasure4;
    let drinkMeasure5 = drink.strMeasure5;
    let drinkMeasure6 = drink.strMeasure6;
    let drinkMeasure7 = drink.strMeasure7;
    let drinkMeasure8 = drink.strMeasure8;
    let drinkMeasure9 = drink.strMeasure9;
    let drinkMeasure10 = drink.strMeasure10;
    let drinkMeasure11 = drink.strMeasure11;
    let drinkMeasure12 = drink.strMeasure12;
    let drinkMeasure13 = drink.strMeasure13;
    let drinkMeasure14 = drink.strMeasure14;
    let drinkMeasure15 = drink.strMeasure15;

    $drinksContainer.append(drinkName + "<br>");
    $drinksContainer.append(drinkGlass + "<br>");

  });

}
