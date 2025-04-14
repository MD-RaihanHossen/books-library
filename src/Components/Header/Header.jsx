import { NavLink } from "react-router-dom";
import "./Header.css"

const Header = () => {

    const btn = <div className=" lg:flex gap-3 lg:gap-11 font-bold">
        <li><NavLink to={"/"}>Home</NavLink></li>
        <li><NavLink to={"/beshbord"}>Listed Books</NavLink></li>
        <li><NavLink to={'/read'}>Pages to Read</NavLink></li>
    </div>

return (
    <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    {btn}
                </ul>
            </div>
            <a className="btn btn-ghost font-bold text-2xl">Book Vibe</a>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
                {btn}
            </ul>
        </div>
        <div className="navbar-end ">
            <NavLink  className="btn bg-green-700 mx-4 px-2 lg:px-6">Sign In</NavLink>
            <NavLink  className="btn bg-blue-500 px-2 lg:px-6">Sign Up</NavLink>
        </div>
    </div>
);
};

export default Header;