const express = require("express");
const bodyParser = require("body-parser");
const route = require("./routes/route");
const mongoose = require("mongoose");

const app = express();

app.use(bodyParser.json());

try {
  mongoose.connect(
    "mongodb+srv://Narottam2000:Sarkar2000@cluster0.bciguah.mongodb.net/websiteAssignment",
    {
      useNewUrlParser: true,
    }
  );
  console.log("MongoDB is connected");
} catch (error) {
  console.error("Error connecting to MongoDB:", error);
}

app.use("/", route);

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
