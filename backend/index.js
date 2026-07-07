// import axios from 'axios';
// import dotenv from 'dotenv';
// dotenv.config();
const axios=require("axios");
require('dotenv').config();

const invokeUrl = "https://integrate.api.nvidia.com/v1/chat/completions";
const stream = false;

const headers = {
  "Authorization": `Bearer ${process.env.NVIDIA_API_KEY}`,
  "Accept": stream ? "text/event-stream" : "application/json",
  "Content-Type": "application/json"
};

const payload = {
  "model": "google/diffusiongemma-26b-a4b-it",
  "messages": [{ "role": "user", "content": "Say hello in one sentence." }],
  "max_tokens": 100,
  "temperature": 1.00,
  "top_p": 0.95,
  "stream": stream
};

async function run() {
  try {
    const response = await axios.post(invokeUrl, payload, {
      headers,
      responseType: stream ? 'stream' : 'json'
    });

    if (stream) {
  response.data.on('data', chunk => console.log(chunk.toString()));
} else {
  console.log(response.data.choices[0].message.content);
}
  } catch (error) {
    console.error("Status:", error.response?.status);
    console.error("Error:", error.response?.data || error.message);
  }
}

run();