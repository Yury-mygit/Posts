import About from "../pages/About";
import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";
import LoginPage from "../pages/LoginPage";


export const privateRoutes =[
    {id: 2, path: '/about', element: About, exact: ""},
    {id: 3, path: '/posts', element: Posts, exact: true},
    {id: 4, path: "/posts/:id", element: PostIdPage, exact: true},
]

export const publicRoutes =[
    {id: 1, path: '/about', element: About, exact: ""},
    {id: 2, path: '/login', element: LoginPage, exact: ""},
]

