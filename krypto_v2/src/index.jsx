import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App.jsx'
import Footer from './Footer.jsx'
import Layout from './Layout.jsx';
import MainPage from './MainPage.jsx'
import Nav from './Nav.jsx'
import Home from './pages/Home.jsx';
import NoPage from './pages/NoPage.jsx';
import './style/style.css'
const root = createRoot(document.querySelector('#root'))

root.render(
    <>
    <BrowserRouter>
    
      <Routes>
            
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<h1>Blog</h1>} />
          {/* <Route path="contact" element={<Contact />} /> */}
          <Route path="*" element={<NoPage />} />
        </Route>
          
        

      </Routes>
      
    </BrowserRouter>
    
    </>
    /* 
     <> 
     <App clickersCount={ 3 }> 
     <div className='appContainer'> 
         <Nav /> 
         <MainPage /> 
         <Footer /> 
         <h1>React App</
        <h2>And a fancy subtitle</h2> 
     </App> 
     </div> 
     </> 
    */
)