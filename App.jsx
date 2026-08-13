import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './PageNotFound';
import ScrollToTop from './ScrollToTop';
import Home from './more_stuff/pages_with_code/Home';
import Home2 from './more_stuff/pages_with_code/Home2';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home-2" element={<Home2 />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  )
}

export default App
