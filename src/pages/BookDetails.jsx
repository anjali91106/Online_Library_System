import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./CSS/Bookdetails.css"


function BookDetails(){
    const {id} = useParams();
    const book = useSelector((state) => 
    state.books.books.find((b) => b.id === parseInt(id))
);
     
    if(!book) return <p>No Book Data Found!!</p>
    
    return (
    <>
      <div className="p-4 max-w-md mx-auto bookcard">
      <h2 className="text-3xl font-bold mb-2">{book.title}</h2>
      <img src={book.image} alt={book.title} className="w-48 mb-2 img" />
      <p className="text-lg font-semibold">Author: {book.author}</p>
      <p className="text-sm mb-2">{book.description}</p>
      <p>📅 Published: {book.published}</p>
      <p>📘 Pages: {book.pages}</p>
      <p>🏷️ Category: {book.category}</p>
      <p>🌐 Language: {book.language}</p><br />
      <b>OverView :-</b><br />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius delectus quaerat porro tempore architecto! Porro ipsam quibusdam nam, repudiandae labore dolores soluta deserunt. Maxime sequi laboriosam repellat provident modi eius!
      Amet provident suscipit ipsam fugit voluptates, doloremque iste dolorum. Tempore corporis cumque voluptatem quasi! Porro in, quia quod temporibus eligendi autem quaerat debitis, corporis omnis, voluptatem deleniti ea aspernatur eum!
      Nobis asperiores similique, cumque quisquam a nesciunt repellat, cum tempore aperiam laboriosam, porro eos atque adipisci voluptatem voluptates! Voluptas, eum commodi. Ullam, repudiandae quia id nisi necessitatibus debitis voluptas saepe?
      Itaque cum laboriosam dolor pariatur vero, illo officia corporis adipisci praesentium accusantium repellendus cupiditate, exercitationem aspernatur iure atque delectus iste vel sunt dolorum sapiente ullam dolorem? Quia voluptatum vitae cupiditate?
      Est possimus cum quod veniam? Modi ipsam recusandae sequi quia sapiente! Soluta consequatur vel delectus nisi itaque tempore alias ipsam consequuntur eligendi. Laboriosam itaque fugit dolorum neque animi at asperiores?</p>

      <Link to="/home">
        <button className="backbtn"> ← Back to Home</button>
      </Link>
    </div>
    </>
    )
}

export default BookDetails;