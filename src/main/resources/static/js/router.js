import Home from "./views/Home.js";
import PostIndex from "./views/PostIndex.js";
import About from "./views/About.js";
import Error404 from "./views/Error404.js";
import Loading from "./views/Loading.js";

/**
 * Returns the route object for a specific route based on the given URI
 * @param URI
 * @returns {*}
 */
export default function router(URI) {
    const routes = {
        '/': {
            returnView: Home,
            state: {},
            uri: '/',
            title: 'Home'
        },
        '/posts': {
            returnView: PostIndex,
            state: {
                posts: '/api/posts',
                entities: '/api/entities'
            },
            uri: '/posts',
            title: 'All Posts'
        },
        '/about': {
            returnView: About,
            state: {},
            uri: '/about',
            title: 'About'
        },
        '/error': {
            returnView: Error404,
            state: {},
            uri: location.pathname,
            title: ' ERROR'
        },
        '/loading': {
            returnView: Loading,
            state: {},
            uri: location.pathname,
            title: 'Loading...'
        }
    };

    return routes[URI];
}