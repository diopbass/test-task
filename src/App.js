import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import routes from './routes';

export default function App() {
  return (
    <Routes>
    {routes.map((route, index) => {
      return (
        <Route key={index} path='/' element={<route.layout />}>
          <Route 
          key={index}
          path={route.path}
          exact={route.exact}
          element={<route.element />}
          />
        </Route>
      );
    })}
  </Routes>
  )
}


