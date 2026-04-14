const mongoose = require("mongoose");
const ejs = require("ejs");

const express = require("express");
const app = express();

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.set("view engine", "ejs");

app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    next();
});

const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String },
    published: { type: Number },
});

const Book = mongoose.model("Book", bookSchema);

app.get("/", async (req, res) => {
    const books = await Book.find({})
    res.render("books.ejs", { books });
});

// Write a POST route that creates a new book document




async function startServer() {
    // Plug in your SRV link
    await mongoose.connect("...")
    app.listen(3000, () => {
        console.log("Server is running")
    })
}

startServer()
