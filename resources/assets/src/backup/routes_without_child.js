export default [
        {
            path: '/',
            name:'index',
            redirect:'login'
        },
    ...middleware('guest', [
            {
                path: '/admin',
                name:'admin',
                redirect:{
                    name:'dashboard'
                },
                component: () => import ('../Main'),
            },


            {
                path: '/dashboard',
                name: 'dashboard',
                component: () => import('../views/admin/Dashboard'),
                meta: {
                    requiresAuth: true
                },
            },
            {
                path: '/users',
                name:'users',
                component:  () => import('../views/admin/Users'),
                meta: {
                    requiresAuth: true
                },
            },
            {
                path: '/settings',
                name:'settings',
                component: () => import('../views/admin/Settings'),
                meta: {
                    requiresAuth: true
                },
            },
            {
                path: '/validation',
                name:'validation',
                component:  () => import('../views/admin/Validation'),
                meta: { requiresAuth: true },
            },
            {
                path: '/menus',
                name:'menus',
                component: () => import('../views/admin/Menu'),
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: '/menu-management',
                name:'menuManagement',
                component: () => import('../views/admin/MenuManagement'),
                meta: {
                    requiresAuth: true
                },
            },
            {
                path: '/roles',
                name:'role',
                component: () => import('../views/admin/Role'),
                meta: { requiresAuth: true },
            },
            {
                path: '/modules',
                name:'module',
                component: () => import('../views/admin/Module'),
                meta: {
                    requiresAuth: true
                },
            },
            {
                path: '/role-privileges',
                name:'privileges',
                component: () => import('../views/admin/Privilege'),
                meta: {
                    requiresAuth: true
                },
            },
    ]),


        {
            path: '/login',
            name:'login',
            component: () => import('../auth/Login'),
            meta: {
                requiresGuest: true
            }
        },


];

//export default router;


/**
 * @param  {String|Function} middleware
 * @param  {Array} routes
 * @return {Array}
 */
function middleware (middleware, routes) {
    routes.forEach(route =>
            (route.middleware || (route.middleware = [])).unshift(middleware)
    )

    return routes
}
