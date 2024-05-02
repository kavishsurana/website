import { Link } from "react-router-dom";


const NavBar = () => {
  

  return (
    <div className="h-full w-screen flex justify-center py-2 px-4 text-xl bg-gray-300">
      <div className="px-5">
        <Link to="/">About</Link>
      </div>
      
      <div className="px-5">
        <Link to="/service">Service</Link>
      </div>
      
      <div className="px-5">
        <Link to="/contact">Contact</Link>
      </div>
      
        
    </div>
  );
};

export default NavBar;