import './App.css';
import AppBar from './components/App Bar/AppBar';
import ProductPage from './components/Product Page/Product Page';

function App() {
  return (
    <div className="App ">
      <header >
        <AppBar/>
      </header>
      <ProductPage/>
    </div>
  );
}

export default App;
