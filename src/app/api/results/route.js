
// import mongoose from 'mongoose';
// import RallyResult from '../../models/rally-model';

// const dbConnect = async () => {
//     if (mongoose.connection.readyState === 0) {
//         await mongoose.connect(process.env.MONGODB_URI, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });
//     }
// };

// export async function GET(req, res) {
//     await dbConnect();  // Ensure database connection

//     console.log("API route accessed");

//     if (req.method === 'GET') {
//         try {
//             const results = await RallyResult.find();
//             console.log("Fetched results:", results);
//             res.statusCode = 200;  // Set the status code
//             res.json(results);     // Send the response
//         } catch (error) {
//             console.error("Error fetching results:", error);
//             res.statusCode = 500;  // Set the status code
//             res.json({ error: 'Failed to fetch results.' });  // Send the response
//         }
//     } else {
//         res.statusCode = 405;  // Set the status code
//         res.json({ error: 'Method not allowed.' });  // Send the response
//     }
// }