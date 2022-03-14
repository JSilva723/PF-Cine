import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { Home } from './home/Home.js'
// comentario de prueba
export const App = () => {
  return (
    <Router>
      <Routes>
              <Route path='/' element={<Home />} />
      </Routes>
    </Router>
  )
}
