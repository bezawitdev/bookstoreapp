import { NavLink } from "react-router-dom";
import logo from './logoFinal.PNG';
import {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons' ;


const Nav = ({ flex }) => {
 
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
      <>
        <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-green-900 mb-3">
          <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
            <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <img src={logo} class="max-w-full h-auto rounded-full" width="74" height="54" alt=""/>
              <a
                className="text-2xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap text-yellow-600"
                href="#pablo"
              >
               Magic Book Store
              </a>
              <button
                className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                type="button"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                <FontAwesomeIcon icon={faBars} />
              
              </button>
            </div>
            <div
              className={
                "lg:flex flex-grow items-center" +
                (navbarOpen ? " flex" : " hidden")
              }
              id="example-navbar-danger"
            >
              <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                <li className="nav-item">
                <NavLink to="/" className="block mt-2 lg:inline-block lg:mt-0 text-md uppercase text-yellow-600  font-medium  hover:text-white mr-8">Home</NavLink>
                </li>
                <li className="nav-item">
                <NavLink to="/books" className="block mt-2 lg:inline-block lg:mt-0 text-yellow-600 text-md uppercase  font-medium hover:text-white mr-8">Books</NavLink>
                </li>
                <li className="nav-item">
                <NavLink to="/add-book" className="block mt-2 lg:inline-block lg:mt-0 text-yellow-600 text-md uppercase  font-medium hover:text-white mr-8">Add-Book</NavLink>
                <li className="nav-item">
                <NavLink to="/NewyorkSeller" className="block mt-2 lg:inline-block lg:mt-0 text-yellow-600 text-md uppercase  font-medium hover:text-white mr-8">NY-Best-Seller</NavLink>
                </li>
                
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }

  export default Nav