const express = require("express");
const connectDB = require("./db"); // Импорт подключения к базе данных
require("dotenv").config(); // Загружаем переменные окружения

const app = express();
const PORT = process.env.PORT || 5000;

connectDB(); // Подключаем базу данных

app.get("/", (req, res) => {
    res.send("API is running...");
});

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});

