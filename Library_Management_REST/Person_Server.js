const express = require("express");
const fs = require("fs");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const DATA_FILE = "./person_data.json";

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
app.post("/person", (req, res) => {
  let person_data = readData();
  const person_name = req.body.person_name;
  const book_name = req.body.book_name;
  let flag = true;
  for(let i = 0; i < person_data.length; ++i) {
    if(person_data[i].person_name === person_name) {
      person_data[i].book_allocation.push(book_name);
      flag = false;
      break;
    }
  }
  if(flag)
  {
    person_data.push({person_name: person_name, book_allocation: [book_name, ]});
  }
  writeData(person_data);
  res.json(person_data);

});

// Read Items
app.get("/person/read", (req, res) => {
  const person_data = readData();
  writeData(person_data);
  res.json(person_data);
});


app.delete("/person/delete_book", (req, res) => {
  let items = readData();
  const book_name = req.body.book_name;
  const person_name = req.body.person_name;
  let flag = true;
  // let newBookList = []
  console.log("Hi");
  for(let i = 0; i < items.length; ++i) {
    if(items[i].person_name === person_name) {
      console.log("Person");
      for(let j = 0; j < items[i].book_allocation.length; ++j) {
        if(items[i].book_allocation[j] === book_name) {
          items[i].book_allocation.splice(j, 1);
          console.log("Book");
          break;
        }
      }
      if(items[i].book_allocation.length === 0) {
        items.splice(i, 1);
      }
    }
  }
  writeData(items);
  res.json(items);
});

// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
