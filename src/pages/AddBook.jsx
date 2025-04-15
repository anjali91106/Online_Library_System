import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBook } from "../redux/booksSlice"; 
import { useState } from "react";
import "./CSS/AddBook.css"


function AddBook() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    author: "",
    description: "",
    category: "",
    pages: "",
    published: "",
    language: "",
    image: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // basic validation
    if (!form.title || !form.author || !form.category) {
      alert("Please fill all required fields");
      return;
    }


    // Add to Redux immediately
    dispatch(addBook({ ...form, id: Date.now() }));

    // Redirect to category page
    navigate(`/browsebooks/${form.category}`);
  };

  return (
    <div className="addbook-container">
    <h2>Add a New Book</h2>
    <form className="addbook-form" onSubmit={handleSubmit}>
      <input name="title" placeholder="Title" onChange={handleChange} />
      <input name="author" placeholder="Author" onChange={handleChange} />
      <textarea name="description" placeholder="Description" onChange={handleChange}></textarea>
      <input name="category" placeholder="Category" onChange={handleChange} />
      <input name="pages" placeholder="Pages" onChange={handleChange} />
      <input name="published" placeholder="Published Year" onChange={handleChange} />
      <input name="language" placeholder="Language" onChange={handleChange} />
      <input name="image" placeholder="Image URL" onChange={handleChange} />
      <button type="submit">Add Book</button>
    </form>
  </div>
  );
}

export default AddBook;