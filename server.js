const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

// Connect To MongoDB
const db = require("./config/db").mongoURI;
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB is Connected . . ."))
  .catch(err => console.log(`Something Wrong Connecting MongoDB : ${err}`));

// Middleware Body Parsing
app.use(bodyParser.json());

// Require Routes
const student = require("./routes/api/student");
const college = require("./routes/api/college");

// End Point API List
app.use("/api/student", student);
app.use("/api/college", college);

app.get("/", (req, res) => {
  res.send("/root : you're not awesome madafaka !");
});

// Running Server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port : ${PORT}`));
