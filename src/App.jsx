import NavBar from "./components/NavBar"
import { Route , Routes} from "react-router-dom"
import Home from "./pages/Home"
import BookDetails from "./pages/BookDetails"
import "./App.css"
import BrowseBooks from "./pages/BrowseBooks"
import AddBook from "./pages/AddBook"

function App() {

  return (
    <>
    <h1 className="FontWel">WELCOME TO OUR ONLINE BOOK STORE
      <br />
      This is a best place for all my book tok girlies.
    </h1>
    
      <NavBar /> 
      <main>
        <Routes >
          <Route path="/home" element={<Home />} />
          <Route path="/bookdata/:id" element={<BookDetails />} />
          <Route path="/browsebooks/:category" element={<BrowseBooks/>} />
          <Route path="/addbook" element={<AddBook />} />
        </Routes>
      </main>
    </>
  )
}

export default App
