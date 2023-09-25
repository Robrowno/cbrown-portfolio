// // scripts/populateData.js

// require('dotenv').config({ path: './.env.local' });

// const mongoose = require('mongoose');
// const RallyResult = require('../src/app/models/rally-model');


// const data = [
//     {
//         rallyName: "Rally ABC",
//         location: "Location 1",
//         car: "Car Model A",
//         driver: "Driver A",
//         team: "Team A",
//         classResult: 1,
//         overallResult: 5,
//         image: "image_url_1"
//     },
//     // ... Add more sample data as needed
// ];

// mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => {
//         console.log("Connected to MongoDB");
//         return RallyResult.insertMany(data);
//     })
//     .then(() => {
//         console.log("Data inserted");
//         mongoose.connection.close();
//     })
//     .catch(error => {
//         console.error("Error inserting data: ", error);
//     });

