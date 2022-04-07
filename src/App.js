import './App.css';
import DownloadCat from './components/downloadCat/DownloadCat';
import Home from './components/home/Home';
import Nav from './components/nav/Nav';
import Product from './components/product/Product';

function App() {
  return (
    <div className="app">
      <Nav/>
      <Home />
      <DownloadCat/>
      <Product />
    </div>
  );
}

export default App;