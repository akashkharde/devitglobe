import React from 'react';
import './App.css';
import HomeSection from './Themes/SubComponent/HomeSection';
import { neutralsNine, neutralsZ, primary } from './Themes/Assets/Const/ColorConst';
import HomeAbout from './Themes/SubComponent/HomeAbout';
import HomeServices from './Themes/SubComponent/HomeServices';
import HomeWork from './Themes/SubComponent/HomeWork';
import Header from './Themes/Common/Header';
import './Global.scss'
import Footer from './Themes/Common/Footer';


function App() {


  return (
    <div  className={`scrollbar-thin bg-${neutralsNine} text-${neutralsZ} antialiased selection:${primary} selection:text-${neutralsZ}`} >
      <div className="main">
        <Header />
        <section className="Home__Section">
          <HomeSection />
        </section>
        <section id="about" className="home_aboutTheme">
          <HomeAbout />
        </section>
        <section id="services" className="home_servicesTheme">
          <HomeServices />
        </section>
        <section id="work" className="home_workTheme">
          <HomeWork />
        </section>
        <section id="footer" className="home_footerTheme">
          <Footer />
        </section>
 
      </div>
    </div>
  );
}

export default App;
