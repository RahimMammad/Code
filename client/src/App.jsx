import React from 'react'
import './App.scss'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import MainLayout from './layouts/MainLayout'
import Add from './pages/Add'
import Detail from './pages/Detail'
import Basket from './pages/Basket'
import Wishlist from './pages/Wishlist'
import { HelmetProvider } from 'react-helmet-async';
import WishlistProvider from './context/WIshlistContext'
import BasketProvider from './context/basketContext'

function App() {
  return (
    <>
      <HelmetProvider>
          <WishlistProvider>
            <BasketProvider>
              <Routes>
                <Route path='/' element={<MainLayout />}>
                  <Route index element={<Home />} />
                  <Route path='/add' element={<Add />} />
                  <Route path='/:id' element={<Detail />} />
                  <Route path='/basket' element={<Basket />} />
                  <Route path='/wishlist' element={<Wishlist />} />
                </Route>
              </Routes>
            </BasketProvider>
          </WishlistProvider>
      </HelmetProvider>
    </>
  )
}

export default App
