const express = require("express");
const cors = require("cors");
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Serve static files from the "img" directory
app.use('/img', express.static(path.join(__dirname, 'img')));

// Sample businesses data (similar to Yelp's response)
const businesses = [
    {
        id: "1",
        name: "Joe's Pizza",
        price: "£",
        location: "London",
        rating: 4.5,
        category: "Pizza",
        image_url: "http://localhost:3000/img/honey-on-pancakes.webp",  // Image for cheapest
      },
      {
        id: "2",
        name: "Sushi Samba",
        price: "£££",
        location: "London",
        rating: 4.8,
        category: "Sushi",
        image_url: "http://localhost:3000/img/honey-on-pancakes.webp",  // Image for highest price
      },
      {
        id: "3",
        name: "Burger Palace",
        price: "££",
        location: "London",
        rating: 4.2,
        category: "Burgers",
        image_url: "http://localhost:3000/img/honey-on-pancakes.webp",  // Image for mid-range
      },
      {
        id: "4",
        name: "Noodle Bar",
        price: "££",
        location: "London",
        rating: 4.7,
        category: "Asian",
        image_url: "http://localhost:3000/img/honey-on-pancakes.webp",  // Mid-range
      },
      {
        id: "5",
        name: "Pasta Fresca",
        price: "£",
        location: "London",
        rating: 4.3,
        category: "Italian",
        image_url: "http://localhost:3000/img/honey-on-pancakes.webp",  // Budget
      },
];

// Endpoint to get businesses based on search term and location
app.get("/search", (req, res) => {
  const { term = "", location = "" } = req.query;

  // Filter businesses based on the search term and location
  const filteredBusinesses = businesses.filter(
    (business) =>
      business.name.toLowerCase().includes(term.toLowerCase()) &&
      business.location.toLowerCase() === location.toLowerCase()
  );

  res.json({
    businesses: filteredBusinesses,
    total: filteredBusinesses.length,
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Mock Yelp API listening on port ${PORT}`);
});
