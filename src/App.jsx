import axios from 'axios';
import './App.css'
import { Footer } from './Footer';
import { Header } from './Header';
import { BikesPage } from './BikesPage';

axios.defaults.baseURL = import.meta.env.MODE === "development" ? "http://localhost:3000" : "bike-api-u20x.onrender.com";

function App() {
  return (
    <div>
    <Header />
    <BikesPage />
    <Footer />



    </div>
  );
}

export default App