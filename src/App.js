import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Products from './Components/Products';
import Navbar from './Components/Navbar';
import { CounterContextProvider } from './Components/CounterContext';

function App() {
  return (
    <>
      <CounterContextProvider>
        <Navbar />
        <Header />
        <Products />
      </CounterContextProvider>
    </>
  );
}

export default App;
