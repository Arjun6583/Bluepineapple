import React, { useState } from "react";
import "./Library.css"
import axios from "axios";

const API_URL = "http://localhost:5000/person";

function PersonUI() {
  const [person_list, setPersonList] = useState([]);
  const [book_name, setBookName] = useState("")
  const [person_name, setPersonName] = useState("")
  const [person_display_status, setPersonStatus] = useState(false)

  // useEffect(() => {
  //   fetchItems();
  // }, []);

  // const fetchItems = async () => {
  //   const res = await axios.get(API_URL);
  //   setPersonList(res.data);
  // };

  const addPerson = async () => {
    if(book_name.length === 0 || person_name.length === 0)
      return;
      setPersonStatus(false);
    const res = await axios.post(API_URL, {book_name, person_name});
    setPersonList(res.data);
  }


  const displayPerson = async (id) => {
    const res = await axios.get("http://localhost:5000/person/read");
    setPersonList(res.data);
    setPersonStatus(true);
  }

  const deletePerson = async () => {
    setPersonStatus(false);
    await axios.delete("http://localhost:5000/person/delete_book", {
  data: { book_name: book_name, person_name: person_name }
});
  }

  return (
    <>
      <div>
        <h1>Add Person / Display / Delete</h1>
        <label>Enter Book Name</label><input value={book_name} onChange={(e) => setBookName(e.target.value)} placeholder="Enter Book Name" /><br></br>
        <label>Enter Person Name</label><input value={person_name} onChange={(e) => setPersonName(e.target.value)} placeholder="Enter Person Name" /><br></br>
        <button onClick={addPerson}>Add Person</button>
        <button onClick={deletePerson}>Delete Person</button>
        <button onClick={displayPerson}>Display Books</button>
        {person_display_status ? <table>
          <tr><th>Person</th><th>Books</th></tr>
          {
            person_list.map((item) =>(
              item.book_allocation.map((data) =>(
                <tr><td>{item.person_name}</td><td>{data}</td></tr>
              ))
            ))}
        </table> : <></>}
      </div>
    </>
  );
}

export default PersonUI;
