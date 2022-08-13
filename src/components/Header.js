import React from "react";

function Header() {
    return(
        <header className='flex bg-teal-400'>
            <div>
                {/* <h1 className="text-3xl font-bold uppercase">Recipes</h1> */}
                <h1 className="p-4 text-red-500 text-2xl font-bold uppercase">Kibandaski Food Court</h1>
            </div>
            <div className="mr-0 ml-auto">
                <button type="button" className="rounded-md border px-5 py-1 mx-2">Login</button>
                <button type="button" className="rounded-md border px-5 py-1 mx-2">Sign Up</button>
            </div>
        </header>
    )
}

export default Header;