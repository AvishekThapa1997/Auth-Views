const express = require("express");
const path = require("path");
const authRoute = require("./routes/authRoute");
const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "..", "public")));
app.use(authRoute);
app.listen(process.env.PORT || 3000);
