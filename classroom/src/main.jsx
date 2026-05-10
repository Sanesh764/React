import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import CompA from './sanesh/CompA';
import CompB from './sanesh/CompB';

//import App from './sanesh/My.jsx';
import Sanesh from './sanesh/My'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Sanesh />
    <CompA/>
    <CompB/>
  </StrictMode>,
)
