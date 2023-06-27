import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Swiper = ({i1,i2,i3,i4,i5,i6}) => {
    var settings = {
        dots:true,
        infinite: true,
        speed:500,
        slidesToShow:4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
      return (
        <Slider className="slider" {...settings}>
        <div>
              <img className="h-[500px]" src={i1} alt="" />
            </div>
            <div>
              <img className="h-[500px]" src={i2} alt="" />
            </div>
            <div>
              <img className="h-[500px]" src={i3} alt="" />
            </div>
            <div>
              <img className="h-[500px]" src={i4} alt="" />
            </div>
            <div>
              <img className="h-[500px]" src={i5} alt="" />
            </div>
            <div>
              <img className="h-[500px]" src={i6} alt="" />
            </div>
  </Slider>
      )
};
export default Swiper;
