import './App.css'
import HeroSection from './components/Hero';
//import Navigation from './components/Nav';


function App() {

  return (
    <div>
    <nav>
        <div className='logo'>
          <img src="/brand_logo.png" alt="" />
        </div>
        <ul>
          <li href='#'>Menu</li>
          <li href='#'>Location</li>
          <li href='#'>About</li>
          <li href='#'>Contact</li>
        </ul>

        <button>Login</button>
      </nav>
    <HeroSection/>

    </div>
    

  ); 
};

export default App;
