// import Login from './auth/Login';
import { createBrowserRouter } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout'
import ChatRoom from './views/ChatRoom';
import Signin from './views/Signin';


const router = createBrowserRouter([
   {
      path: '/',
      element: <Signin />
   },
   {
     path: "/",
     element: <DefaultLayout />,
     children: [
       {
         path: "/chat-room/:username",
         element: <ChatRoom />,
       },
     ],
   },
 ]);
export default router;