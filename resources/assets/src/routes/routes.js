const router = [
        {
            path: '/',
            name:'index',
            redirect:'login',
        },
        {
            path: '/admin',
            name:'admin',
            redirect:{
                name:'dashboard'
            },
            component: () => import ('../layouts/Admin'),

            children:[
                {
                    path: '/dashboard',
                    name: 'dashboard',
                    component: () => import('../views/admin/Dashboard'),
                    meta: { requiresAuth: true },

                },
                {
                    path: '/users',
                    name:'users',
                    component:  () => import('../views/admin/Users'),
                    meta: { requiresAuth: true },
                },
                {
                    path: '/settings',
                    name:'settings',
                    component: () => import('../views/admin/Settings'),
                    meta: { requiresAuth: true },
                },
                {
                    path: '/order-entry',
                    name:'orderEntry',
                    component:  () => import('../views/admin/OrderEntry'),
                    meta: { requiresAuth: true },
                },                
                {
                    path: '/validation',
                    name:'validation',
                    component:  () => import('../views/admin/Validation'),
                    meta: { requiresAuth: true },
                },
                {
                    path: '/menu',
                    name:'menu',
                    component: () => import('../views/admin/Menu'),
                    meta: { requiresAuth: true },
                },
                {
                    path: '/scenario-two',
                    name:'scenarioTwo',
                    component: () => import('../views/admin/ScenarioTwo'),
                    meta: { requiresAuth: true },
                },
                {
                    path: '/data-bank-one',
                    name:'dataBankOne',
                    component:  () => import('../views/admin/DataBankOne'),
                    meta: { requiresAuth: true },
                },
                {
                    path: '/post',
                    name:'post',
                    component: () => import('../views/admin/Post'),
                    meta: { requiresAuth: true },
                },
                {
                    path: '/pre-costing',
                    name:'preCosting',
                    component: () => import('../views/admin/PreCosting'),
                    meta: { requiresAuth: true },
                },
                {
                    path: '/order-matrix',
                    name:'orderMatrix',
                    component: () => import('../views/admin/OrderMatrix'),
                    meta: { requiresAuth: true },
                },
                {
                    path: '/user-management',
                    name:'userManagement',
                    component: () => import('../views/admin/UserManagement'),
                    meta: { requiresAuth: true },
                },
                {
                    path: '/menu-management',
                    name:'menuManagement',
                    component: () => import('../views/admin/MenuManagement'),
                    meta: { requiresAuth: true },
                },
            ]
        },

        {
            path: '/login',
            name:'login',
            component: () => import('../auth/Login'),
            meta: { requiresGuest: true }
        },


];

export default router;
