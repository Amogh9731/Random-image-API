# 📸 Random Image API (Node.js + Express)

This project is a simple RESTful API built using **Node.js** and **Express.js** that serves a **random image URL** using the [Picsum Photos](https://picsum.photos/) API.

---

## 🎯 Project Purpose

The goal of this project is to learn and demonstrate the basics of:
- Backend development using Node.js
- Creating an Express server
- Defining API routes
- Generating and serving random data
- Testing APIs using Postman or a web browser

---

## 🚀 How to Run the Server

Follow these steps to run the server locally:

📂 Clone, Install & Run the Project
git clone https://github.com/Amogh9731/random-jokes-API.git

cd random-image-api

npm install express

node index.js

After running the last command, you should see:

Server is running on http://localhost:3000

🌐Access the API:

Open your browser or Postman and make a GET request to: http://localhost:3000/api/image/random

📦 Endpoint
GET /api/image/random
Response:
{
  "imageUrl": "https://picsum.photos/400/300?random=123"
}

⚠️ Challenges Faced
Deciding on a reliable third-party source for random images.

Learning how to format dynamic URLs and integrate them into a JSON response.

Testing and verifying the randomness of image output.

Ensuring the server handles HTTP requests correctly and runs on any environment/port.


