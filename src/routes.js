// import Login from './auth/Login';
import DefaultLayout from './layouts/DefaultLayout'
import ChatRoom from './views/ChatRoom';
import Signin from './views/Signin';



const routes =  [
    {
       path: '/',
       exact: true,
       layout: DefaultLayout,
       element: Signin
    },
    {
       path: '/chat-room/:username',
       exact: true,
       layout: DefaultLayout,
       element: ChatRoom
    },
]

export default routes;