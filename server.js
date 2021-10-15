const express = require("express");
const connectDB = require("./config/db");
const path = require("path");

const app = express();

// Make connection to database.
connectDB();

app.use(express.json({ extended: false }));

// Define the routes.
app.use("/api/responses", require("./routes/responses"));

if (process.env.NODE_ENV === "production") {
  // Sets the static folder.
  app.use(express.static("client/build"));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on PORT ${PORT}.`);
});
