import { Link } from "react-router-dom";
import { useEffect } from "react";
import "./App.css";
import Aos from "aos";
import'aos/dist/aos.css';
import ButtonMailto from "./components/ButtonMailto.js";
import Swiper from "./components/Swiper";
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
import Navbar from "./components/Navbar";

function App() {

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  
  return (

    <div className=" pt-0 align-center">
      <div id="hero" className="bg h-[500px] lg:h-[700px] relative">
  
          <Navbar className="z-20"></Navbar>
                  
        <div className="flex flex-col mt-6 lg:mt-16 justify-center items-center">

          <p className="text-[25px] lg:text-[45px] font-bold  text-dzayergo-white">Discover the magic of</p>
          <p className="text-[25px] lg:text-[45px] font-bold text-dzayergo-pink">Algeria</p>
          <a className="invisible lg:visible btn_go" href="#start"><p className="text-[20px] lg:text-[30px]">GO</p> </a>
          
        </div>

        <div className="absolute z-10 rotate-[20deg] bottom-16 right-12 lg:right-[150px]">
          <img className=" h-[200px] lg:h-[400px]" src={frame1} alt="" />
        </div>

        <div className="absolute w-[70%] lg:w-[82%] bottom-16 lg:bottom-28 z-0">
          <img className="rotate-180" src={line} alt="line" />
        </div>

      </div>

      <div id="start" className="relative flex flex-col lg:flex-row gap-36 mt-36 justify-center">

        <div data-aos="fade-left" className="absolute top-24 lg:top-40 lg:ml-[1260px] ml-32">
         <img src={black_line} alt="line" />
        </div>
        
        <img className="order-last lg:order-first mt-[-80px] lg:mt-0 w-[90%] lg:w-[600px] lg:h-[400px]" src={notre_dame} alt="Notre dame d'afrique" />

        <div className="text-center">
          <span className="text-dzayergo-pink text-[25px] lg:text-[40px] font-bold">DzayerGO</span>
          <span className="text-[25px] lg:text-[40px] font-normal">, The best application</span>
          <p className="text-[25px] lg:text-[40px] font-normal">to discover Algeria</p>
          <p className="text-[20px] lg:text-[25px] px-6 lg:w-[90%] mt-16 text-justify">Our unparalleled application offers features that are almost or rarely seen in other application instances. Whether you want to virtually or actually visit any place of your choice, now this is possible for you!
          Great news! Our application is intended for everyone without exception, available in 3 languages.</p>
        </div>

      </div>

      <div id="about us" className="flex flex-col lg:flex-row gap-36 mt-36 justify-center">

      <div className="lg:w-[70%] lg:pl-20 text-center">
          <p className="text-[25px] lg:text-[40px] font-normal">Who are we? The team </p>
          <p className="text-[25px] lg:text-[40px] font-bold text-dzayergo-green">Solvinno !</p>
          <p className="text-[20px] lg:text-[25px] px-6 lg:w-[90%] mt-16 text-justify">Specialized in digital services since its appearance in 2012, we are committed to offering innovative and high-quality solutions to our clients. With a talented team equipped with undeniable skills, we are capable of tackling the most complex challenges.</p>
        </div>

        <div className="flex flex-col items-center gap-6 mt-[-150px] lg:mt-[-70px]">
         <img className="lg:w-[600px] lg:h-[400px]" src={solvinno} alt="solvinno" />
         <button data-aos="fade-up" className="btn1 text-[15px] lg:text-[25px]">Visit our website</button>
        </div>

      </div>

      <div id="download" className=" relative mt-28">

        <div data-aos="fade-left"className="absolute top-40 lg:ml-[80%] ml-[30%]">
         <img src={pink_line} alt="" />
        </div>

        <div data-aos="fade-right" className="absolute bottom-[-70px] lg:mr-[70%] mr-[30%]">
         <img className="rotate-180" src={pink_line} alt="" />
        </div>

        <p className="text-dzayergo-black text-[25px] lg:text-[40px] text-center font-medium mt-9">Download our mobile application</p>
        <p className="text-dzayergo-pink text-[25px] lg:text-[40px] text-center font-bold ">DzayerGO</p>

    <Swiper 
        i1={frame1} 
        i2={frame2} 
        i3={frame3} 
        i4={frame4} 
        i5={frame5} 
        i6={frame6}>
      </Swiper>

    </div>

      <div className="relative bg-dzayergo-purple py-6 lg:py-16 mt-28">

        <div className="flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-32">

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

        <div className="flex flex-col lg:flex-row items-center justify-center mt-10 gap-20 lg:gap-56">

          <div>
            <img className=" invisible lg:visible w-[166px]" src={logo}/>
          </div>

            <div className="flex flex-col gap-6 lg:gap-20 items-center mt-[-250px] lg:mt-0">

              <div className="flex flex-row text-[12px] lg:text-[20px] lg:flex-row gap-4 lg:gap-6 justify-center">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Use</a>
                <a href="#">Marketing Policy</a>
                <a href="#">Help</a>
              </div>

              <p className="text-[12px] lg:text-[20px]">DzayerGO@2023 All rights Reserved </p>

            </div>

            <div className="flex flex-col gap-2 lg:gap-6 mt-[-30px]">

              <div className="flex flex-row gap-6">
                <img src={location}/>
                <Link to="https://goo.gl/maps/VFiGzHnZwLM5dp3K8"><p className="text-[12px] lg:text-[20px]">Rue 24, Oued Smar</p></Link>
              </div>

              <div className="flex flex-row gap-6">
                <img src={phone}/>
                <a href="tel:+213-34453466"><p className="text-[12px] lg:text-[20px]">+213-34453466</p></a>
              </div>

              <div className="flex flex-row gap-6 text-[12px] lg:text-[20px]">
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
