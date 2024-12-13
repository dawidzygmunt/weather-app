import { Route, Routes } from 'react-router'
import HomePage from './components/homePage'
import Stats from './components/stats'

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route
          path="/stats"
          element={<Stats />}
        />
      </Routes>
    </>
  )
}

export default App
