import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './i18n.jsx'

const root = createRoot(document.querySelector('#root'))


root.render(
  <App />  
)
