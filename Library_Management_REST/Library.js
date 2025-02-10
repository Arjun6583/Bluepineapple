import React, { useState } from "react";
import "./Library.css"
import axios from "axios";
import PersonUI from "./PersonUI";

const API_URL = "http://localhost:5000/library";

function Library() {
  const [book_list, setBookList] = useState([]);
  const [book_name, setBookName] = useState("")
  const [author_name, setAuthorName] = useState("")
  const [book_display_status, setBookStatus] = useState(false)

  // useEffect(() => {
  //   fetchItems();
  // }, []);

  // const fetchItems = async () => {
  //   const res = await axios.get(API_URL);
  //   setBookList(res.data);
  // };

  const addBook = async () => {
    if(book_name.length === 0 || author_name.length === 0)
      return;
    setBookStatus(false);
    const res = await axios.post(API_URL, {book_name, author_name});
    setBookList(res.data);
  }


  const displayBook = async (id) => {
    const res = await axios.get("http://localhost:5000/library/read");
    setBookList(res.data);
    setBookStatus(true);
  }

  const deleteBook = async () => {
    setBookStatus(false);
    await axios.delete("http://localhost:5000/library/delete_book", {
  data: { book_name: book_name, author_name: author_name }
});
  }

  return (
    <div>
      <h1>Library Management System</h1>
      <div>
        <h1>Add Book / Display / Delete</h1>
        <label>Enter Book Name</label><input value={book_name} onChange={(e) => setBookName(e.target.value)} placeholder="Enter Book Name" /><br></br>
        <label>Enter Author Name</label><input value={author_name} onChange={(e) => setAuthorName(e.target.value)} placeholder="Enter Author Name" /><br></br>
        <button onClick={addBook}>Add Book</button>
        <button onClick={deleteBook}>Delete Book</button>
        <button onClick={displayBook}>Display Books</button>
        {book_display_status ? <table>
          <tr><th>Book</th><th>Author</th><th>Total</th></tr>
          {
            book_list.map((item) =>(
              <tr><td>{item.book_name}</td><td>{item.author_name}</td><td>{item.total}</td></tr>
            ))}
        </table> : <></>}
      </div>
      <div>
        <PersonUI></PersonUI>
      </div>
    </div>
  );
}

export default Library;
