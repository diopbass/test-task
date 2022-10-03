import logo from './logo.svg';
import './App.css';
import { Route, RouterProvider, Routes } from 'react-router-dom';
import router from './routes';

export default function App() {
  return  <RouterProvider router={router} />
}


