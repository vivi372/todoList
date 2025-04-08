import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import NaverBar from './components/NaverBar';
import Breadcrumbs from './components/Breadcrumbs';
import Footer from './components/Footer';
import TodoRoutes from './routes/TodoRoutes';
import './styles/common.css';

function App() {
  return (
    <Router>
      <Header />
      <NaverBar />
      <Breadcrumbs />
      <main className='container'>
        <TodoRoutes />
      </main>
      <Footer />      
      <a href="#" className="scroll-top">
          <i className="lni lni-chevron-up"></i>
      </a>
    </Router>
  );

}

export default App;
