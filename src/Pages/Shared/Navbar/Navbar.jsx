import { NavLink } from "react-router-dom";

const Navbar = () => {

    const links = <>
        <NavLink to="/" className="mr-3 text-lg text-white">Home</NavLink>

        <NavLink to="/addCoffee" className="mr-3 text-lg text-white">Add Coffee</NavLink>

    </>

    return (
        <div >
            <div style={{ backgroundImage: 'url(https://i.ibb.co/R9GtwRh/15.jpg)' }} className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <img className="w-12" src="https://i.ibb.co/y4yNqht/logo1.png" alt="" />
                    <h2 className=" text-white text-2xl">Espresso Emporium</h2>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="bg-white text-black px-3 py-1 rounded">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;