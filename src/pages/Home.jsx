import { Link } from "react-router-dom";
function Home() {
  
  return (
   <div className="categorycon">
   <ul className="category-list">
        <h1>List of The category Books available</h1>
        <Link to="/browsebooks/fiction"><li>Fiction</li></Link>
        <Link to="/browsebooks/non-fiction"><li>Non-Fiction</li></Link>
        <Link to="/browsebooks/scific"><li>SciFic</li></Link>
        <Link to="/browsebooks/romance"><li>Romance</li></Link>
        <Link to="/browsebooks/academic"><li>Academic</li></Link>
        <Link to="/browsebooks/self-help"><li>Self-Help</li></Link>
        <Link to="/browsebooks/horror"><li>Horror</li></Link>
        <Link to="/browsebooks/historical-fiction"><li>Historical-fiction</li></Link>
        <Link to="/browsebooks/adventure-fiction"><li>Adventure-fiction</li></Link>
        <Link to="/browsebooks/mystery"><li>Mystery</li></Link>
        <Link to="/browsebooks/literary-fiction"><li>Literary-fiction</li></Link>
        <Link to="/browsebooks/fantasy"><li>Fantasy</li></Link>
        <Link to="/browsebooks/thriller"><li>Thriller</li></Link>
</ul>

   </div>
  );
}

export default Home;
