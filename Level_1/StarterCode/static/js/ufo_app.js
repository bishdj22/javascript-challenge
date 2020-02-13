// from data.js
var tableData = data;

// YOUR CODE HERE!
// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the ufo data from data.js
console.log(tableData);

// // Step 1: Loop Through `data` and console.log each ufo sighting object
 tableData.forEach(function(ufoSighting) {
   console.log(ufoSighting);
 });

// // Step 2:  Use d3 to append one table row `tr` for each ufo sighting object
// // Don't worry about adding cells or text yet, just try appending the `tr` elements.
tableData.forEach(function(ufoSighting) {
   console.log(ufoSighting);
   var row = tbody.append("tr");
 });

 // Fix indent? // Step 3:  Use `Object.entries` to console.log each ufo sighting value
 tableData.forEach(function(ufoSighting) {
    console.log(ufoSighting);
    var row = tbody.append("tr");
 
    Object.entries(ufoSighting).forEach(function([key, value]) {
      console.log(key, value);
    });
  });

// // Step 4: Use d3 to append 1 cell per weather report value (Date, City, State, Country, Shape, Duration, Comments)
tableData.forEach(function(ufoSighting) {
    console.log(ufoSighting);
    var row = tbody.append("tr");
 
    Object.entries(ufoSighting).forEach(function([key, value]) {
      console.log(key, value);
      // Append a cell to the row for each value
 //     // in the weather report object

      var cell = row.append("td");
      cell.text(value);
    });
  });

// Create function to run on button click + form fill GOOD CODE: //

//Select the button
var button = d3.select("#filter-btn");

button.on("click", function() {
    
//Select the input element and get the raw HTML node
  var inputElement = d3.select(".form-control");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(tableData);

  var filteredData = tableData.filter(ufo => ufo.datetime === inputValue);

  console.log(filteredData);

  tbody.html("");

  filteredData.forEach((x) => {
      var row = tbody.append("tr");
      Object.entries(x).forEach(([key,value]) => {
          var cell = row.append("td");
          cell.text(value);
      });

  //var tbody = d3.select("tbody");
  //return filteredData;

  // no good --> document.write(filteredData);
  // button works, wrong output --> document.getElementById("ufo-table").innerHTML = filteredData;

})});
