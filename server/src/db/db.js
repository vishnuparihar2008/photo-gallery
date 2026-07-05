const mongoose = require("mongoose");

async function connectDB() {
  const DB_URI = process.env.DATABASE_URI;
  if (!DB_URI) {
    throw new Error("DATABASE_URI is not valid.");
  }

  await mongoose.connect(`${DB_URI}/project-1`);
  console.log("Connected to DB");
}

module.exports = connectDB;
