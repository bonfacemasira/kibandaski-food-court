import React from "react";
import '../index.css'

function MostPopularRecipes() {
    return(
        <div>
            <h1 className="text-2xl font-bold">Most Popular Recipes</h1>
            <div>
                <img src="https://placehold.it/500x300" alt="stew"/>
            </div>
            <div>
                <span className="text-xl">5 Bean Chilli Stew</span>
                <span>Recipe by Masira</span>
            </div>
        </div>
    )
}

export default MostPopularRecipes;