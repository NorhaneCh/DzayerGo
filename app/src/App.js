import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import logo_white from "./images/logo_white.png";
import appstore from "./images/appstore.png";
import home from "./images/home.png";
import notre_dame from './images/notre_dame.png';
import googleplay from "./images/googleplay.png";
import vect1 from "./images/vect1.png";
import line from "./images/Line.png";
import visiter from './images/visiter.png';
import solvinno from './images/solvinno.png';
import connecter from './images/connecter.png';
import black_line from './images/black_line.png';
import pink_line from './images/pink_line.png';
import frame1 from "./images/frame1.png";
import frame2 from "./images/frame2.png";
import frame3 from "./images/frame3.png";
import frame4 from "./images/frame4.png";
import frame5 from "./images/frame5.png";
import frame6 from "./images/frame6.png";
import button from "./images/button.png";
import map from "./images/ligne.png";
import "./App.css";

function App() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className=" pt-0 align-center">
      <div id="hero" className="bg relative">
        <div className="flex flex-row xl:gap-[800px]">
          <img className="pl-16 mt-9 w-[166px]" src={logo_white} alt="" />
          <div className="flex flex-row xl:gap-32">
          <div className="pt-9 flex flex-row gap-16 justify-center ">

            <a href="#about us">About us</a>
            <a href="#download">Download</a>
           
          </div>
          <div>
          <a href="#footer"><img src={connecter} alt="" /></a>
          </div>
          </div>
        </div>
        <div className="flex flex-col mt-16 justify-center items-center">
          <p className="text-[60px] font-bold  text-dzayergo-white">
            Discover the magic of
          </p>
          <p className="text-[60px] font-bold text-dzayergo-pink">Algeria</p>
          <a href="#download">
            <img className="mt-[200px]" src={button} alt="DzayerGo" />
          </a>
        </div>
        <div className="absolute bottom-28 right-[200px] rotate-12">
          <img src={frame1} alt="" />
        </div>
        <div>
          <img className="absolute bottom-[104px]" src={line} alt="line" />
        </div>
      </div>
      <div   id="about us" className=" relative flex flex-row gap-24 mt-36 justify-center  ">
        <div className="absolute top-40 mr-[-1700px] ">
        <img src={black_line} alt="" />
        </div>
        <img className="w-[728px] h-[649px]" src={notre_dame} alt="Notre dame d'afrique" />
        <div>
          <span className="text-dzayergo-pink text-[48px] font-bold">DzayerGO</span><span className="text-[48px] font-normal">, la meilleure application</span>
          <p className="text-[48px] font-normal">pour découvrir l’Algérie</p>
          <p className="text-[30px] w-[80%] mt-16 text-justify">Notre application sans égale ,offre des fonctionnalités quasiment ou rarement vues sur d’autres exemplaires d’applications. Que vous voudriez visiter virtuellement ou réellement n’importe quel lieu de votre choix, maintenant ceci vous est possible!
          Une bonne nouvelle! notre application est destinée sans exception à tout le monde ,disponible en 3 langues. 
        </p>
        </div>
      </div>
      <div className="flex flex-row gap-0 mt-36 justify-center items-center ">
      <div className="ml-28 w-[60%]">
          <p className="text-[48px] font-normal">Qui sommes nous? L’équipe </p>
          <p className="text-[48px] font-bold text-dzayergo-green">Solvinno !</p>
          <p className="text-[30px] w-[80%] mt-12 text-justify">Spécialisée dans les services numériques, depuis son apparition en 2012 ,nous engageons à offrir des solutions innovantes et de qualité à now clients. Avec une équipe talentueuse, dotée de compétences  incontestables, nous sommes en mesure de relever des défis les plus complexes. 
 
        </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-6">
        <img className="w-[826px] h-[619px]" src={solvinno} alt="solvinno" />
        <img src={visiter} alt="" />
        </div>
      </div>
      <div id="download" className=" relative mt-28">
        <div className="absolute top-40 ml-[85%]">
        <img src={pink_line} alt="" />
        </div>
        <div className="absolute bottom-[-70px]">
          <img className="rotate-[180deg]" src={pink_line} alt="" />
        </div>
        <p className="text-dzayergo-black xl:text-[48px] text-center font-medium mt-9">
        Télécharger Notre Application Mobile!
        </p>
        <p className="text-dzayergo-pink xl:text-[52px] text-center font-medium ">
        DzayerGO
        </p>
        <div className="slider">
          <Carousel responsive={responsive}>
            <div>
              <img className="w-[292] h-[582px]" src={frame1} alt="" />
            </div>
            <div>
              <img className="w-[292] h-[582px]" src={frame2} alt="" />
            </div>
            <div>
              <img className="w-[292] h-[582px]" src={frame3} alt="" />
            </div>
            <div>
              <img className="w-[292] h-[582px]" src={frame4} alt="" />
            </div>
            <div>
              <img className="w-[292] h-[582px]" src={frame5} alt="" />
            </div>
            <div>
              <img className="w-[292] h-[582px]" src={frame6} alt="" />
            </div>
          </Carousel>
          ;
        </div>

      </div>
      <div
        id="download"
        className="relative bg-dzayergo-purple h-[329px] pt-6 mt-36"
      >
        <div className="absolute top-[-60px]">
          <img className="rotate-[-7deg] w-[1920px]" src={vect1} alt="" />
        </div>
        <div className="flex flex-col lg:flex-row xl:flex-row justify-center items-center gap-32 mt-16">
          <a href="#">
            <img className="w-[378px] h-[94px]" src={appstore} alt="" />
          </a>
          <a href="#">
            <img className="w-[378px] h-[94px]" src={googleplay} alt="" />
          </a>
        </div>
      </div>

      <div id="footer" className=" footer bg-black h-[100px]">
        <div className="flex flex-row justify-center items-center gap-72 mt-10">
          <div className=" flex flex-row gap-6 justify-center ">
            <a className="text-dzayergo-black" href="#">
              {" "}
              | Privacy Policy{" "}
            </a>
            <a className="text-dzayergo-black" href="#">
              | Terms of Use
            </a>
            <a className="text-dzayergo-black" href="#">
              | Marketing Policy
            </a>
            <a className="text-dzayergo-black" href="#">
              | Help
            </a>
          </div>
          <p className="text-[24px]">Contact us : DzayerGO@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default App;
