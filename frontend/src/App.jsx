import { lazy } from 'react'
import { BrowserRouter, Routes,Route} from 'react-router-dom'
import Header from './components/Partials/Header/Header'
import Footer from './components/Partials/Footer/Footer'
const Home = lazy(()=>import('./components/Pages/Home/Home'))
const Create = lazy(()=>import('./components/Pages/Create/Create')) 
const Edit = lazy(()=>import('./components/Pages/Edit/Edit'))
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <div>
        <ToastContainer/>
        <Header/>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/create' element={<Create/>}/>
          <Route path='/edit/:id' element={<Edit/>}/>
        </Routes>
        </BrowserRouter>
        {/* <Footer/> */}
        </div>
    </>
  )
}

export default App
