
// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Loop through data and append table with new rows to web page
tableData.forEach((ufoReport) => {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});


// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("form");

// Create event handlers
button.on("click", runEnter);
form.on("submit", runEnter);
clear.on("click", clearTable);

// Create the function to run for both events
function runEnter(){

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    // Print the value to the console
    console.log(inputValue);


    // Search through the date/time column to find rows that match user input
    // Create an array with just the datetime
    var filteredData = tableData.filter(sightings => sightings.datetime === inputValue);

    // Print the value to the console
    console.log(filteredData);

    tbody.html("");
    
    // Filter data to match user's desired input
    filteredData.forEach((ufoReport) => {
        var row = tbody.append("tr");
        Object.entries(ufoReport).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
};


