$(document).ready(function() {
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyC7MM23nDQ4z17Kexnz04yKH5mUIreawo4",
    authDomain: "newrecipes-cd4b3.firebaseapp.com",
    databaseURL: "https://newrecipes-cd4b3.firebaseio.com",
    projectId: "newrecipes-cd4b3",
    storageBucket: "newrecipes-cd4b3.appspot.com",
    messagingSenderId: "1077881902598",
    appId: "1:1077881902598:web:6a9a5963f4eb8707e51587"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var firestore1 = firebase.firestore();

  var makeRow = function(table, rowData) {
    var row = table.insertRow(-1);
    rowData.forEach(function(cellData) {
      var cell = document.createElement("td");
      cell.innerHTML = cellData;
      row.appendChild(cell);
    });
  };
  var makeTable = function() {
    var table = document.createElement("table");
    table.className = "table table-bordered";
    return table;
  };
  $("#add_button").click(function() {
    var recipe = {
      recipe_title: $("#recipe_title").val(),
      ingredient_one: $("#ingredient_one").val(),
      ingredient_two: $("#ingredient_two").val(),
      ingredient_three: $("#ingredient_three").val(),
      ingredient_four: $("#ingredient_four").val()
    };
    firestore1
      .collection("recipes")
      .add(recipe)
      .then(function(docRef) {
        console.log("Document written, ID = ", docRef.id);
        document.getElementById("add_recipes").reset();
      })
      .catch(function(error) {
        console.error("erroradding document: ".error);
      });
  });
  $("#show_button").click(function() {
    var table = makeTable();
    var recipes = [];
    recipes.push(["Recipe title", "I-1", "I-2", "I-3", "I-4"]);
    firestore1
      .collection("recipes")
      .get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          var data = doc.data();
          recipes.push([
            data.recipe_title,
            data.ingredient_one,
            data.ingredient_two,
            data.ingredient_three,
            data.ingredient_fourß
          ]);
        });
      })
      .then(function() {
        recipes.forEach(function(rowData) {
          makeRow(table, rowData);
        });
      });
    // var recipeDiv = document.getElementById("recipe_data");
    // recipeDiv.innerHTML = "";
    // recipeDiv.appendChild(table);
    var recipeDiv = $("#recipe_data");
    recipeDiv.empty();
    recipeDiv.append(table);
  });
});
