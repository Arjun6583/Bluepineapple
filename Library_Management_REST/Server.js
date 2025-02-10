const express = require("express");
const fs = require("fs");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const DATA_FILE = "./book_data.json";

app.use(cors());
app.use(bodyParser.json());

// Read JSON file
const readData = () => {
  try {
    const data = fs.readFileSync(DATA_FILE, "utf8");
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
};

// Write JSON file
const writeData = (data) => {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), "utf8");
};

// Create Item
app.post("/library", (req, res) => {
  let book_data = readData();
  //let newBook_data = [];
  let index = -1;
  for(let i = 0; i < book_data.length; ++i) {
    if(book_data[i].book_name === req.body.book_name && book_data[i].author_name == req.body.author_name) {
      index = 1;
      book_data[i].total += 1;
      break;
    }
  }
  if(index == -1) {
    book_data.push({book_name: req.body.book_name, author_name: req.body.author_name, total: 1});
  }
  writeData(book_data);
  res.json(book_data);

});

// Read Items
app.get("/library/read", (req, res) => {
  const book_data = readData();
  writeData(book_data);
  res.json(book_data);
});

//create a list frequency wise

app.delete("/library/delete_book", (req, res) => {
  let items = readData();
  const book_name = req.body.book_name;
  const author_name = req.body.author_name;
  let flag = true;
  let newBookList = []
  for(let i = 0; i < items.length; ++i) {
    if(book_name === items[i].book_name && author_name === items[i].author_name) {
      if(items[i].total == 1) {
        items.splice(i, 1);
      } else {
        items[i].total -= 1;
        console.log("Hi...");
      }
    }
  }
  console.log(items);
  writeData(items);
  res.json(items);
});

// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
