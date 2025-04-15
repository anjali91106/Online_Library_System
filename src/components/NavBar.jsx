import "./NavBar.css"
import { Link } from "react-router-dom";

function NavBar(){
    return (
    <>
      <ul>
        <Link to="/browsebooks/fiction"><li>BrowseBooks</li></Link>
        <Link to="/addbook"><li>AddBooks</li></Link>
        <Link to="/home"><li>Home</li></Link>
      </ul><br /><br />
    </>
    )
}

export default NavBar;