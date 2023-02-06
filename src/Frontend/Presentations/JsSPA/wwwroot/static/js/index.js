// Imports
import Home from "./views/Home.js";
import Login from "./views/Login.js";
import Register from "./views/Register.js";
//import Posts from "./views/Posts.js";
//import Profile from "./views/Profile.js";
//import Profile from "./views/Profile.js";
//import MongoGraph from "./views/MongoGraph.js";
//import { GetUserEmailAsString, UpdateUserHtml } from '/static/js/resources/default_scripts.js';

// Previous VIEW / PAAGE -------------------------------------------------------------------->
export let prevView = ['/', '/'];



// Navigator--------------------------------------------------------------------------------->
export const navigateTo = url => {
    history.pushState(null, null, url); // Add the url to the history API of Js   
    router();
};




// Router------------------------------------------------------------------------------------------>
const router = async () => {

    // Declaration of the ROUTES
    // Map Views to paths - so on specific path there will be specific veiew that will show specific HTML ---------------------------------------------------------->
    const routes = [
        { path: "/", view: Home }, // On Path "/" use the HomeView class and inject html in the #app div
        { path: "/Login", view: Login },
        { path: "/Register", view: Register }
    
    ];





    // Test each route for potential match ------------------------------------------------------->
    // Get the current Url and check if its defined in routes method "Check if its one of our Spa Urls" ----------------------------------------------------->
    const potentialMatches = routes.map(route => {   // The Map method loops routes and stores each route as variable route
        return {
            route: route,
            isMatch: location.pathname === route.path  // True if match else false - location.pathname = the path of the current page / View
        };
    });




    // Check if there is Match------------------------------------------------------------------->
    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);  // Get isMatch from potentialMatches



    // If no match return to StartPage "Home"
    if (!match) {
        match = {
            route: routes[0], // StartPage
            isMatch: true
        };
    }




    // PREVIOUS VIEW / PAGE --------------------------------------------------------------------->
    //if (location.pathname != '/Login' && location.pathname != '/Register')  // If Page Login or Register etc. dont add them to the prev view
    //{
    //    prevView.push(location.href); // Add View to PreviousView so when needed we can navigate back to previous Page/View 
    //    prevView.shift(); // Remove the First element from the array
    //}


    // Check if User logged in than show Content - ex. Prifile - Update etc. Ex. for specific Views password may be required, so here we do the check for those Views that reqire password.
    //if (location.pathname == '/Profile' || location.pathname == '/' || location.pathname == '/MongoGraph' || location.pathname == '/Search') {
    //    if (await GetUserEmailAsString() == '') {
    //        match = {
    //            route: routes[4], // Route to LogIn if not logged in
    //            isMatch: true
    //        };
    //    }
    //}

    const view = new match.route.view(); // If match  use the routes array of the router and get the view function for the route
    document.getElementById("app").innerHTML = await view.getHtml();  // Get the #app div and use the view function to inject Html in it from the view class ex."Dashboard, Posts, Settings etc."
    await view.executeViewScript(); // Execute the script for the specific View
};





// On-Navigating-Back&Forth-Load the Content--Together with the url------------------------------------------------------------------------------------>
window.addEventListener("popstate", router); // On popstate "If back button is pressed" use the router array to load back the previeous SPA View


// Listen for document fully Loaded
document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => { //Listen for click in the body
        if (e.target.matches("[data-link]")) {  // If body item was clicked and it is data-link decorated
            e.preventDefault();  // Prevent deafult behavior dont follow the link
            navigateTo(e.target.href);  // Navigate method   
        }
    });


    router(); // Load the content if the url is defined in our "Spa Urls"
});

//#### Client Routing END #####









// Load user Html ------------------------------------------------------------------------------------------------------------------------------------->
//document.body.onload = function () { return UpdateUserHtml() }; // On Body Load - load UserHtml - username, logOut etc.
