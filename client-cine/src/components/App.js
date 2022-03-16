import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { Home } from './home/Home.js'
import Review from './review/Review.js'

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/review' element={<Review />} />
      </Routes>
    </Router>
  )
}
