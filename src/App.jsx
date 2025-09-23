/* 
 * File: App.css
 * Purpose: Global layout, theme variables, shared grid/card styles, per-page tweaks.
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
