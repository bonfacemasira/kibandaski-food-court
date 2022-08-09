import React from "react";

function NavBar() {
    return(
        <div className="border border-red-600 w-1/4">
            <nav>
                <div>
                    <h1 className="p-6 text-red-500 text-2xl font-bold uppercase">Kibandaski Food Court</h1>
                </div>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;