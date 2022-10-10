import logo from './image/paraffiliate.png';
import './App.css';
import { Footer } from './components/Footer';
import { Signup } from './components/Signup';
import { Subtitle } from './components/Subtitle';
import { Title } from './components/Title';

function App() {
  return (
    <div className="App">
        <Title></Title>
        <Subtitle></Subtitle>
        <Signup></Signup>
        <Footer></Footer>
    </div>
  );
}

export default App;
