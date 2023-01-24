import React from 'react'
import ReactDOM from 'react-dom/client'
import Index from './index';
import MenuBottom from './menu';
import './style.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.Fragment>
    <Index />
    <MenuBottom />
  </React.Fragment>
)
