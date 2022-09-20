import { Link } from "react-router-dom";


function Navbar() {
    return (
        <div className="navbar bg-base-200 p-1">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">Github Finder</a>
            </div>

            <div className="flex-none px-2 mx-2">
                <div className="flex justify-end">
                    <Link to='/' className="btn btn-ghost btn-sm rounded-btn" >Home</Link>
                    <Link to='/about' className="btn btn-ghost btn-sm rounded-btn" >About</Link>
                </div>
            </div>
            
        </div>

    );
}

export default Navbar;