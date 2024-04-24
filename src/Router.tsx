import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layout/DefaultLayout'
import { Home } from './pages/Home'
import { Purchase } from './pages/Purchase'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        {/* <Route path="/cart" element={<Cart />} /> */}
        <Route path="/purchase" element={<Purchase />} />
      </Route>
    </Routes>
  )
}
