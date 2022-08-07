import React from "react";
import Header from "./Header";
import LatestRecipes from "./LatestRecipes";
import Login from "./Login";
import MorePopularRecipes from "./MorePopularRecipes";
import Pagination from "./Pagination";

function Main() {
    return(
        <div>
            <Login />
            <Header />
            <div>
                <LatestRecipes />
                <MorePopularRecipes />
            </div>
            <Pagination />
        </div>
    )
}

export default Main;