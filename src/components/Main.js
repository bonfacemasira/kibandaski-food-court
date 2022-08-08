import React, { useEffect, useState } from "react";
import Header from "./Header";
import LatestRecipes from "./LatestRecipes";
import Login from "./Login";
import MostPopularRecipes from "./MostPopularRecipes";
import Pagination from "./Pagination";
import axios from "axios";

function Main() {

    const [meals, setMeals] = useState([]);

    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://tasty.p.rapidapi.com/recipes/list',
            params: {from: '0', size: '20', tags: 'under_30_minutes'},
            headers: {
              'X-RapidAPI-Key': '4528166eb9msheffa2c87ee71260p17ada3jsnd19d285afb10',
              'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
            }
          };
          
          axios.request(options).then(function (response) {
            setMeals(response.data.results);
          }).catch(function (error) {
            console.error(error);
          });
    }, [])

    console.log(meals)
    
    return(
        <div>
            <Login />
            <Header />
            <div>
                <LatestRecipes />
                <MostPopularRecipes />
            </div>
            <Pagination />
        </div>
    )
}

export default Main;