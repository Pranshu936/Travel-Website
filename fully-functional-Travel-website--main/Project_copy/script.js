document.addEventListener("DOMContentLoaded", function() {
    const hotelButton = document.getElementById("hotelButton");
    hotelButton.addEventListener("click", getNearbyHotels);
  });

function getNearbyHotels() {
const placeName = "YourPlaceName"; // Replace with the desired place name
const apiUrl = `https://example.com/api?place=${placeName}`; // Replace with the actual API URL

// Make the API call using fetch or any other suitable method
fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
    // Process the returned data and display the hotel recommendations on your page
    displayHotels(data);
    })
    .catch(error => {
    console.log("An error occurred:", error);
    });
}

function displayHotels(hotels) {
// Update this function to display the hotel recommendations on your page
console.log(hotels);
}
  