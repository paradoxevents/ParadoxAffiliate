import logo from './image/paraffiliate.png';
import './App.css';
import { Footer } from './components/Footer';
import { Signup } from './components/Signup';
import { Subtitle1 } from './components/Subtitle1';
import { Subtitle2 } from './components/Subtitle2';
import { Title } from './components/Title';

function App() {
  return (
    <div className="App">
        <Title></Title>
        <div className="subtitle-box">
        <Subtitle1></Subtitle1>
        <Subtitle2></Subtitle2>
        </div>
        <Signup></Signup>
        <Footer></Footer>
    </div>
  );
}

export default App;
