// import Login from './auth/Login';
import DefaultLayout from './layouts/DefaultLayout'
import Signin from './views/Signin';



const routes =  [
    {
       path: '/',
       exact: true,
       layout: DefaultLayout,
       element: Signin
    },
]

export default routes;