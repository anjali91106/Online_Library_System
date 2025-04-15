import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../redux/booksSlice";
import { Link } from "react-router-dom";
import "./CSS/Home.css";

const BrowseBooks = () => {
  const [query, setQuery] = useState("fiction");
  const dispatch = useDispatch();
  const { books, status, error } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(fetchBooks(query));
  }, [query, dispatch]);

  return (
    <>
      <h1>These are the most popular books of the week enjoy your reading - </h1>
      <br />
      <input
        id="search"
        type="text"
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Category"
      />
      <Link to={`/browsebooks/${query}`}><button className="searchbtn">Search Book</button></Link>
      
      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p>Error: {error}</p>}

      <div className="bookcontainer">
        {books.map((book) => (
          <div key={book.id} className="bookbox">
            <img src={book.image} alt={book.title} />
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <p>{book.description}</p>
            <p>
              📅 {book.published} | 📘 {book.pages} pages
            </p>
            <p>
              🏷️ {book.category} | 🌐 {book.language}
            </p>
            <br />
            <br />

            <p>For More Details -</p>
            <Link to={`/bookdata/${book.id}`}>
              {" "}
              <button className="detailsbtn">Click Here</button>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default BrowseBooks;
