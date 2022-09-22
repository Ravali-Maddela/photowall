
import ReactDom from 'react-dom/client';
import Main from './components/Main';
import './styles/stylesheet.css';
import { BrowserRouter } from 'react-router-dom'


const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<BrowserRouter><Main /></BrowserRouter>)