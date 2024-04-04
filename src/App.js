import './App.css';
import AppBar from './components/App Bar/AppBar';
import ProductPage from './components/Product Page/Product Page';
import SimilarProducts from './components/Similar Products/Similar Products';

function App() {
  return (
    <div className="App ">
      <header >
        <AppBar/>
      </header>
      <ProductPage/>
      <SimilarProducts/>
      
    </div>
  );
}

export default App;
