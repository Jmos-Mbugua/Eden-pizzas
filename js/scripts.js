// function Pizza(size, crust, toppings) {
//   this.size = [];
//   this.crust = [];
//   this.toppings = [];


// }
// function size(small, medium, large) {
//   this.small = small;
//   this.medium = medium;
//   this.large = large;
// }
// function crust(crispy, stuffed, gluttenFree) {
//   this.crispy = crispy;
//   this.stuffed = stuffed;
//   this.gluttenFree = gluttenFree;
// }
// function toppings(pepperoni, mushrooms, bacon, sausage,blackOlives, cheese) {
//   this.pepperoni = pepperoni;
//   this.mushrooms = mushrooms;
//   this.bacon = bacon;
//   this.sausage = sausage;
//   this.blackOlives = blackOlives;
//   this.cheese = cheese;
// }







// $(document).ready(function(){
//       $("form#button").submit(function(event){
//         event.preventDefault();






//     var inputtedSize = $("this").find("select#inputtedSize").val();
//     var inputtedCrust = $("this").find("select#inputtedCrust").val();
//     var inputtedToppings = $("this").find("select#inputtedToppings").val();
//     newPizza.size.push(inputtedSize)
//     newPizza.crust.push(inputtedCrust)
//     newPizza.toppings.push(inputtedCrust)

//     var newPizza = new Pizza(inputtedSize, inputtedCrust, inputtedToppings);



//     // $(".new-address").each(function() {
//     //   var inputtedStreet = $(this).find("input.new-street").val();
//     //   var inputtedCity = $(this).find("input.new-city").val();
//     //   var inputtedCounty = $(this).find("input.new-county").val();
//     //   var newAddress = new Address(inputtedStreet, inputtedCity, inputtedCounty)
//     //   newContact.addresses.push(newAddress)
//     // });

//     $("ul#orderCart").append("<li><span class='cart'>" + newPizza.inputtedSize() + "</span></li>");
//       })

//   });
"use strict"
let pSize = "";
let pCrust = "";
let pToppings = "";
let choice = '';
let selectBoxIDS = [];
$(document).ready(function () {

  $('form#userChoice').find('select').each(function () {
    selectBoxIDS.push(this.id);
  });
  selectBoxIDS.forEach(function (selectBoxID, index) {
    $("#" + selectBoxID).change(function () {
      choice = $(this).val();
      switch (choice) {
        case 'small - Kshs. 500':        
          console.log('500');
          break;
        case 'medium - Kshs. 750':
        console.log('b')
          break;
        case 'large - Kshs. 1000':
        console.log('c')
          break;
      }
    });
  })

})