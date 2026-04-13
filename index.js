
//global variables
const burgers = ["Hamburger", "Cheeseburger"];
let featuredDrink = "Strawberry Milkshake";

//function scoped variables
function addBurger(){
    const newBurger = "Flatburger";
    burgers.push(newBurger);
}

//block-scoped variables
if(true){
    const anotherNewBurger = "Maple Bacon Burger";
    burgers.push(anotherNewBurger);
}

//changing featured drink
function changeFeaturedDrink(){
    featuredDrink = "The JavaShake";
}
