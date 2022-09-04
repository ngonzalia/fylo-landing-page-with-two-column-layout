// components
import Nav from './components/Nav';
import Hero from './components/Hero';
import Functions from './components/Functions';
import EarlyAcces from './components/EarlyAcces';
import Footer from './components/Footer';

// styles
import './stylesheets/main.css';

const App = () => {

  return (
    <div className='App' id='app'>
      <Nav />
      <Hero />
      <div className='curve-bg'></div>
      <Functions />
      <EarlyAcces />
      <Footer />
    </div>
  );
};

export default App;
