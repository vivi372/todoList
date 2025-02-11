import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import NaverBar from './components/NaverBar';
import Breadcrumbs from './components/Breadcrumbs';
import Footer from './components/Footer';
import TodoRoutes from './routes/TodoRoutes';

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
    </Router>
  );
}

export default App;
