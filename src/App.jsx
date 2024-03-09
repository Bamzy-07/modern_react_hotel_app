import {Routes, Route} from 'react-router-dom';


import {Footer} from './containers';
import {Home, AboutUs, Plans, Gallery, Contact, BookUs} from './pages';

function App() {
  return (
    <>
    
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<AboutUs/>} />
      <Route path='/plans' element={<Plans/>} />
      <Route path='/gallery' element={<Gallery/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/book' element={<BookUs/>} />  
    </Routes>

    <Footer />
    </>
  )
}

export default App
