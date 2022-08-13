import React from "react";

function Footer() {
    return(
        <footer>
            <div>
                <div>
                    <h1>Kibandaski Food Court.</h1>
                    <p>
                        About Web App using React Hooks and TheMealDB open API, 
                        localStorage as storage for favourite meal.
                    </p>
                    <h3>Nairobi, Kenya</h3>
                    <h3>+254719111000</h3>
                    <h3>https://bonfacemasira.github.io/Portfolio-Bonface-Masira</h3>
                </div>
                <div>
                    <h1>Menu</h1>
                    <h3>Home</h3>
                    <h3>Discover</h3>
                    <h3>Favorites</h3>
                </div>
                <div>
                    <h1>Stay Connected</h1>
                    <h3>Facebook</h3>
                    <h3>Instagram</h3>
                    <h3>Twitter</h3>
                </div>
                <div>
                    <h1>Stay updated</h1>
                    <form>
                        <input placeholder="Enter your email" type="hidden" name="id" value="" />
                        <button type="submit" name="updated"></button>
                    </form>
                </div>
            </div>
        </footer>
    )
}

export default Footer;