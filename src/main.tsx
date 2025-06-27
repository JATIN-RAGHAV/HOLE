import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import "./App.css"
import { Route,BrowserRouter, Routes } from 'react-router'
import Article from './components/ui/Article.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
          <BrowserRouter>
                  <Routes>
                          <Route path='/' element={<App/>}/>
                          <Route path='/:article_name' element={<Article/>}/>
                  </Routes>
          </BrowserRouter>
  </StrictMode>,
)
