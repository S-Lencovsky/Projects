import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css';
import './App.css';
import React, {useState, useEffect} from 'react';
import Header from './Pages/Header';
import Banner from './Pages/Banner';
import Main from './Pages/Main';
import Footer from './Pages/Footer';
import BackToTopBtn from './components/BackToTopBtn';

function App() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Header scroll={scroll} />
      <Banner />
      <Main />
      <Footer />
      <BackToTopBtn scroll={scroll} />
    </>
  );
}

export default App;
