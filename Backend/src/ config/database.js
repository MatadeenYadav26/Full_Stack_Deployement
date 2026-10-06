const mongoose = require("mongoose");
const dns = require("dns"); // for solving DNS issues in some environments : querySrv one
dns.setServers([
    '1.1.1.1',
    '8.8.8.8'
])

const connectToDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        // console.log(mongoose.connection.host);
        console.log("DB Connected");
    } catch (error) {
        console.log("Error connecting to DB", error);
    }
};

module.exports = connectToDB;