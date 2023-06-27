import { Link } from "react-router-dom";
import { useEffect } from "react";
import "./App.css";
import Aos from "aos";
import'aos/dist/aos.css';
import ButtonMailto from "./components/ButtonMailto.js";
import Swiper from "./components/Swiper";

import logo_white from "./images/logo_white.png";
import logo from "./images/logo.png";
import notre_dame from './images/notre_dame.png';
import line from "./images/Line.png";
import solvinno from './images/solvinno.png';
import black_line from './images/black_line.png';
import pink_line from './images/pink_line.png';
import frame1 from "./images/frame1.png";
import frame2 from "./images/frame2.png";
import frame3 from "./images/frame3.png";
import frame4 from "./images/frame4.png";
import frame5 from "./images/frame5.png";
import frame6 from "./images/frame6.png";
import location from "./images/location.png";
import phone from "./images/phone.png";
import email from './images/email.png';

function App() {

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  
  return (

    <div className=" pt-0 align-center">
      <div id="hero" className="bg relative">
        <div className="flex flex-row gap-[1000px]">
          <img className="pl-16 mt-9 w-[166px]" src={logo_white} alt="DzayerGo" />
          
          <nav className='mx-9 mt-12'>
            <a className=' p-[10px] ml-[20px] ' href="#about us"> About us </a> 
            <a className='p-[10px] ml-[20px] ' href="#download"> Download </a>
          </nav>
        
        </div>

        <div className="flex flex-col mt-16 justify-center items-center">

          <p className="text-[45px] font-bold  text-dzayergo-white">Discover the magic of</p>
          <p className="text-[45px] font-bold text-dzayergo-pink">Algeria</p>
          <a className="btn_go" href="start">GO</a>
          
        </div>

        <div className="absolute bottom-28 z-10 right-[150px] rotate-[20deg]">
          <img className="h-[400px]" src={frame1} alt="" />
        </div>

        <div className="absolute w-[1260px] bottom-28 z-1 ">
          <img className="rotate-180" src={line} alt="line" />
        </div>

      </div>

      <div id="start" className=" relative flex flex-row gap-36 mt-36 justify-center">

        <div data-aos="fade-left" className="absolute top-40 ml-[1260px]">
         <img src={black_line} alt="line" />
        </div>
        
        <img data-aos="fade-right" className="w-[600px] h-[400px]" src={notre_dame} alt="Notre dame d'afrique" />

        <div>
          <span className="text-dzayergo-pink text-[40px] font-bold">DzayerGO</span>
          <span className="text-[40px] font-normal">, The best application</span>
          <p className="text-[40px] font-normal">to discover Algeria</p>
          <p className="text-[25px] w-[90%] mt-16 text-justify">Our unparalleled application offers features that are almost or rarely seen in other application instances. Whether you want to virtually or actually visit any place of your choice, now this is possible for you!
          Great news! Our application is intended for everyone without exception, available in 3 languages.</p>
        </div>

      </div>

      <div id="about us" className="flex flex-row  mt-36 justify-center items-center ">

      <div className="w-[70%] pl-20">
          <p className="text-[40px] font-normal">Who are we? The team </p>
          <p className="text-[40px] font-bold text-dzayergo-green">Solvinno !</p>
          <p className="text-[25px] w-[90%] mt-12 text-justify">Specialized in digital services since its appearance in 2012, we are committed to offering innovative and high-quality solutions to our clients. With a talented team equipped with undeniable skills, we are capable of tackling the most complex challenges.</p>
        </div>

        <div className="flex flex-col   items-center gap-6">
         <img data-aos="fade-left" className="w-[600px] h-[400px]" src={solvinno} alt="solvinno" />
         <button data-aos="fade-left" className="btn1">Visit our website</button>
        </div>

      </div>

      <div id="download" className=" relative mt-28">

        <div data-aos="fade-left"className="absolute top-40 ml-[80%]">
         <img src={pink_line} alt="" />
        </div>

        <div data-aos="fade-right" className="absolute bottom-[-70px]">
         <img className="rotate-180" src={pink_line} alt="" />
        </div>

        <p className="text-dzayergo-black text-[40px] text-center font-medium mt-9">Download our mobile application</p>
        <p className="text-dzayergo-pink text-[40px] text-center font-bold ">DzayerGO</p>

      <Swiper 
        i1={frame1} 
        i2={frame2} 
        i3={frame3} 
        i4={frame4} 
        i5={frame5} 
        i6={frame6}>
      </Swiper>

    </div>

      <div className="relative bg-dzayergo-purple h-[200px] pt-6 mt-36">

        <div className="flex flex-col lg:flex-row justify-center items-center gap-32 mt-12">

        {/*-- App Store button */}
        <a href="https://www.apple.com/fr/app-store/" target="_blank" class="market-btn apple-btn" role="button">
         <span class="market-button-subtitle">Download on the</span>
         <span class="market-button-title">App Store</span>
        </a>

       {/*-- Google Play button */}
        <a href="https://play.google.com/store/apps?hl=fr&gl=US&pli=1" target="_blank" class="market-btn google-btn" role="button">
         <span class="market-button-subtitle">Download on the</span>
         <span class="market-button-title">Google Play</span>
        </a>

        </div>
      </div>

      <div id="footer" className="footer mb-12">

        <div className="flex lx:flex-row justify-center mt-10 gap-20">

          <div>
            <img className="w-[166px]" src={logo}/>
          </div>

            <div className="flex flex-col gap-20 items-center">

              <div className="flex flex-row gap-6 justify-center">
                <a href="#">| Privacy Policy</a>
                <a href="#">| Terms of Use</a>
                <a href="#">| Marketing Policy</a>
                <a href="#">| Help</a>
              </div>

              <p className="text-xl">DzayerGO@2023 All rights Reserved </p>

            </div>

            <div className="flex flex-col gap-6">

              <div className="flex flex-row gap-6">
                <img src={location}/>
                <Link to="https://goo.gl/maps/VFiGzHnZwLM5dp3K8"><p>Rue 24, Oued Smar</p></Link>
              </div>

              <div className="flex flex-row gap-6">
                <img src={phone}/>
                <a href="tel:+213-34453466"><p>+213-34453466</p></a>
              </div>

              <div className="flex flex-row gap-6">
                <img src={email}/>
                <ButtonMailto label="DzayerGO@gmail.com" mailto="mailto:dzayergo@gmail.com" />
              </div>

            </div>
          
        </div>
      </div>
    </div>  
  );
}

export default App;
