// // Server ko start karna
// // Dataabase ko connect karna


// require('dotenv').config()

// require("dotenv").config({ path: "./.env" });
// const app = require("./src/app")
// const connectToDB = require("./src/config/database")

// connectToDB()


// app.listen(3000,()=>{
//     console.log("server is running on port 3000")
// })


// Our final code for server start and DB Connection: 

require('dotenv').config();

console.log("MONGO_URI:", process.env.MONGO_URI);

const app = require("./src/app");
const connectToDB = require("./src/config/database");

connectToDB();

app.listen(3000, () => {
    console.log("server is running on port 3000");
});




// require("dotenv").config({ path: "./.env" });

// console.log("ENV FILE:", require("fs").existsSync("./.env"));
// console.log("MONGO_URI:", process.env.MONGO_URI);

// const app = require("./src/app");
// const connectToDB = require("./src/config/database");

// connectToDB();

// app.listen(3000, () => {
//     console.log("server is running on port 3000");
// });