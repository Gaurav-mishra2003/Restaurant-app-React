// import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar=({searchedval,searchedPresed})=>{
    return(
        <header   className="p-3 text-bg-dark">
        <div   className="container">
          <div   className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a href="/"   className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
              <svg   className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlinkHref="#bootstrap"></use></svg>
            </a>
    
            <ul   className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              {/* <li><a href="#"   className="nav-link px-2 text-secondary">Home</a></li> */}
              <li><Link to={"/"}className="nav-link px-2 text-secondary">Home</Link></li>
              {/* <Link to={"/about"}>home</Link> */}
              <li><a href="/"   className="nav-link px-2 text-white">Features</a></li>
              <li><Link to={"/cart"}className="nav-link px-2 text-secondary">Cart</Link></li>
              <li><Link to={"/faQ"}className="nav-link px-2 text-secondary">FaQ</Link></li>
              <li><Link to={"/about"}className="nav-link px-2 text-secondary">About</Link></li>
            </ul>
    
            <form   className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
              <input type="search"   className="form-control form-control-dark text-bg-dark" placeholder="Search..."  aria-label="Search" 
                onChange={searchedval}/>
            </form>
    
            <div   className="text-end">
            <button type="button"   className="btn btn-outline-light me-2" onClick={searchedPresed}>search 🔍</button>
              <button type="button"   className="btn btn-outline-light me-2">Login</button>
              <button type="button"   className="btn btn-warning">Sign-up</button>
            </div>
          </div>
        </div>
      </header>   
    );
}

export default Navbar;