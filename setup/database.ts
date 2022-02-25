let mongoose = require("mongoose");

const connectDB = () => {
  mongoose
    .connect(process.env.DB_URL)
    .then(() => {
      console.log("MongoDB Connected");
    })
    .catch((error?: object) => {
      console.log(error);
    });
};

const closeDB = () => {
  mongoose.connection
    .close()
    .then(() => {
      console.log("MongoDB Closed");
    })
    .catch((error?: object) => {
      console.log(error);
    });
};

module.exports = { connectDB, closeDB };
