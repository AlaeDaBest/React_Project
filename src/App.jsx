import { useState } from 'react'
import './App.css'
import Home from './Components/Home/Home'
import { Provider } from 'react-redux'
import store from './Redux/Store'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ListFragrances from './Components/Fragrances/ListFragrances'
import ListFavorites from './Components/Favorites/ListFavorites'
import ListCart from './Components/Cart/ListCart'
import CreateFragrance from './Components/Fragrances/CreateFragrance'
import About from './Components/About/About'
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='about' element={<About/>} />
          <Route path='/fragrances' element={<ListFragrances/>} />
          <Route path='/favorites' element={<ListFavorites/>} />
          <Route path='/cart' element={<ListCart/>} />
          <Route path='/addFragrance' element={<CreateFragrance/>} />
        </Routes>
      </Provider>
    </BrowserRouter>
  )
}

export default App;