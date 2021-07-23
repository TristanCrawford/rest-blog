import render from './render.js';
import router from './router.js';
import fetchData from "./fetchData.js";

/**
 * Finds the correct route for a given view, builds a loading view, fetches data and builds the final rendered view.
 * @param URI
 */
export default function createView(URI) {

    let route = router(URI);

    // if route is invalid, return a 404 page
    if (!route) {
        render(null, router('/error'));
        return;
    }

    // unsecured views get rendered
    if (!route.requiresAuth) {
        renderOpenView(route);
        return;
    }

    // change view to loading screen
    render(null, router('/loading'));

    fetchData(route.state).then((props) => {
        render(props, route);
    });
}

function renderOpenView(route) {
    render(null, router(
        route.uri
    ))

    if (route.viewEvent) {
        setTimeout(route.viewEvent, 500);
    }
}
