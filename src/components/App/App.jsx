import React, { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import AppBar from './Appbar'

const HomePage = lazy(() => import("pages/HomePage"));
const TweetsPage = lazy(() => import("pages/TweetsPage"));

const App = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tweets" element={<TweetsPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App