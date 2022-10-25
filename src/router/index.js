import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// const Home = () =>
//     import ('../pages/Home.vue')
// const Film = { template: '<div>Film Page</div>' }
// const Game = { template: '<div>Game Page</div>' }
// const Code = { template: '<div>Code Page</div>' }
// const About = () =>
//     import ('../pages/About.vue')

const Dashboard = () =>
    import ('../pages/Dashboard.vue')
const MyProjects = () =>
    import ('../pages/MyProjects.vue')
const Team = () =>
    import ('../pages/Team.vue')


const routes = [{
        path: '/',
        name: 'dashboard',
        component: Dashboard,
    },
    {
        path: '/projects',
        name: 'projects',
        component: MyProjects,
    },
    {
        path: '/team',
        name: 'team',
        component: Team,
    },
]

const router = new Router({
    routes,
    mode: 'hash',
})

export default router