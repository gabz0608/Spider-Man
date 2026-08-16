import React from 'react'; import ReactDOM from 'react-dom/client'; import {HashRouter} from 'react-router-dom'; import App from './App'; import './styles.css'; import './responsive-fixes.css'; import './refinement.css'; import './live-refinement.css';
ReactDOM.createRoot(document.getElementById('root')!).render(<React.StrictMode><HashRouter><App/></HashRouter></React.StrictMode>);
