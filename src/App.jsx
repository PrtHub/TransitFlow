import { Route, Routes } from 'react-router-dom'
import './App.css'

import { About, Blog, BlogSingle, Contact, Home, Pricing, Projects, Services, ServicesDetails, Tech, Transpotation } from './pages'
import { Header, Navbar } from './components'


const App = () => {
  return (
    <>
     <div className='overflow-hidden max-w-[1920px] mx-auto'>
       <Header/>
       <div className=''>
        <Navbar/>
       <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/about' element={<About/>}/>
         <Route path='/services' element={<Services/>}/>
         <Route path='/services-details' element={<ServicesDetails/>}/>
         <Route path='/contact' element={<Contact/>}/>
         <Route path='/blog' element={<Blog/>}/>
         <Route path='/blog-single' element={<BlogSingle/>}/>
         <Route path='/projects' element={<Projects/>}/>
         <Route path='/tech' element={<Tech/>}/>
         <Route path='/transportation' element={<Transpotation/>}/>
         <Route path='/pricing' element={<Pricing/>}/>
       </Routes>
       </div>
     </div>
    </>
  )
}

export default App