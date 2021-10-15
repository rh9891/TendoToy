const express = require("express");
const router = express.Router();

const Response = require("../models/Response");

// Route to add a set of responses to the database. POST request to "api/responses". Public access.
router.post("/", async (req, res) => {
  const { rating, satisfaction, comments, communication } = req.body;

  try {
    const newResponse = new Response({
      rating,
      satisfaction,
      comments,
      communication,
    });

    const response = await newResponse.save();

    res.json(response);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error.");
  }
});

module.exports = router;
