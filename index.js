const express = require("express");
const axios = require("axios");
require('dotenv').config()
const app = express();
const port = 3000;

const apiKey = process.env.API_KEY;
const baseUrl = "https://officegpt.chat/";

app.post("/summarize", async (req, res) => {
  const text = req.body.text;

  try {
    const response = await axios({
      url: `${baseUrl}/summarize`,
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
      data: {
        text: text,
      },
    });

    const summary = response.data.summary;

    res.json({ summary });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error summarizing text");
  }
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
