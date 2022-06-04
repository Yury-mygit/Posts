import About from "../../pages/About";
import Posts from "../../pages/Posts";
import PostIdPage from "../../pages/PostIdPage";
import Login from "../../pages/Login";


export const privateRoutes =[
    // {id: 1, path: '/', component: Homepage, exact: "exact"},
    {id: 2, path: '/about', element: About, exact: ""},
    {id: 3, path: '/posts', element: Posts, exact: true},
    {id: 4, path: "/posts/:id", element: PostIdPage, exact: true},
    // {id: 5, path: '*', component: Page404, exact: "exact"},

]

export const publicRoutes =[
    // {id: 1, path: '/', component: Homepage, exact: "exact"},
    {id: 2, path: '/login', element: Login, exact: ""},

    // {id: 5, path: '*', component: Page404, exact: "exact"},

]

// export const ing= ()=>{ console.log(routes[1].component); console.log('ggggggggggg') }