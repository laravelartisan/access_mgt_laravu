import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/index'
import jwtToken from '../helpers/jwt-token'
import routes from './routes.js'
import { sync } from 'vuex-router-sync'

/*const globalRouter = new VueRouter({
    routes:router,
    mode: 'history',
    linkActiveClass: 'nav-active'
});*/
Vue.use(Router)
const routeMiddleware = resolveMiddleware(
    require.context('./middleware', false, /.*\.js$/)
)
//console.log(routeMiddleware);
const router = make()

sync(store, router)

export default router
/**
 * Create a new router instance.
 *
 * @return {Router}
 */
function make () {
    const router = new Router({
        //scrollBehavior,
        mode: 'history',
        routes: routes.map(beforeEnter)
    })

    // Register before guard.
    /*router.beforeEach(async (to, from, next) => {
     await setLocale(store.getters['lang/locale'])

     if (!store.getters['auth/check'] && store.getters['auth/token']) {
     try {
     await store.dispatch('auth/fetchUser')
     } catch (e) { }
     }

     setLayout(to)
     next()
     })*/

    // Register after hook.
    /* router.afterEach((to, from) => {
     router.app.$nextTick(() => {
     router.app.$loading.finish()
     })
     })*/

    return router
}
/**
 * Add beforeEnter guard to the route.
 *
 * @param {Object} route
 * @param {Object}
 */
function beforeEnter (route) {
    //console.log(route);
    if (route.children) {
        route.children.forEach(beforeEnter)
    }

    if (!route.middleware) {
        return route
    }

    route.beforeEnter = (...args) => {
        if (!Array.isArray(route.middleware)) {
            route.middleware = [route.middleware]
        }
        //console.log( route.middleware);
        route.middleware.forEach(middleware => {
            if( Array.isArray(middleware)){
                middleware.forEach(aMiddleware => {
                    if (typeof aMiddleware === 'function') {
                        aMiddleware(...args)
                    } else if (routeMiddleware[aMiddleware]) {
                        routeMiddleware[aMiddleware](...args)
                    } else {
                        throw Error(`Undefined middleware [${aMiddleware}]`)
                    }
                });
            }else{
                if (typeof middleware === 'function') {
                    middleware(...args)
                } else if (routeMiddleware[middleware]) {
                    routeMiddleware[middleware](...args)
                } else {
                    throw Error(`Undefined middleware [${middleware}]`)
                }
            }

        })
    }

    return route
}

/**
 * Set the application layout from the matched page component.
 *
 * @param {Route} to
 */
function setLayout (to) {
    // Get the first matched component.
    const [component] = router.getMatchedComponents({ ...to })

    if (component) {
        router.app.$nextTick(() => {
            // Start the page loading bar.
            if (component.loading !== false) {
                router.app.$loading.start()
            }

            // Set application layout.
            router.app.setLayout(component.layout || '')
        })
    }
}

/**
 * @param  {Route} to
 * @param  {Route} from
 * @param  {Object|undefined} savedPosition
 * @return {Object}
 */
function scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
        return savedPosition
    }

    if (to.hash) {
        return { selector: to.hash }
    }

    const [component] = router.getMatchedComponents({ ...to }).slice(-1)

    if (component && component.scrollToTop === false) {
        return {}
    }

    return { x: 0, y: 0 }
}

/**
 * @param  {Object} requireContext
 * @return {Object}
 */
function resolveMiddleware (requireContext) {
    //console.log(requireContext.keys());
    return requireContext.keys().map(file =>[file.replace(/(^.\/)|(\.js$)/g, ''), requireContext(file)])
        .reduce((guards, [name, guard]) => ({ ...guards, [name]: guard.default }), {})
}

/*globalRouter.beforeEach((to, from, next) => {

    if(to.meta.requiresAuth) {
        if(Store.state.authUser.authenticated || jwtToken.getToken())
            return next();
        else
            return next({name: 'login'});
    }
    if(to.meta.requiresGuest) {
        if(Store.state.authUser.authenticated || jwtToken.getToken())
            return next({name: 'admin'});
        else
            return next();
    }
    next();
});



export default globalRouter;*/
