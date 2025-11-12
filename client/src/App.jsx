/*
Author: Jinha Park
Student ID: 301475372
Course: COMP229 – Web Application Development
*/
import { BrowserRouter as Router } from 'react-router-dom';
import MainRouter from './MainRouter';
import './App.css';

export default function App() {
  return (
    <Router>
      <div className="container">
        <MainRouter />
      </div>
    </Router>
  );
}
