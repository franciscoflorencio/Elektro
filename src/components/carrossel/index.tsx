import { CarrosselContainer } from './style';
import "react-responsive-carousel/lib/styles/carousel.min.css";
var Carousel = require('react-responsive-carousel').Carousel;

const Carrossel = () => (
  <CarrosselContainer>
    <Carousel
      additionalTransfrom={0}
      arrows
      autoPlay
      autoPlaySpeed={3000}
      centerMode={false}
      className=""
      containerClass="carousel-container"
      dotListClass="custom-dot-list"
      draggable
      focusOnSelect={false}
      infiniteLoop
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside={true}
      showThumbs={false}
      showIndicators={true}
      showStatus={false}
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024
          },
          items: 1
        },
        mobile: {
          breakpoint: {
            max: 464,
            min: 0
          },
          items: 1
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 464
          },
          items: 1
        }
      }}
      rewind={false}
      rewindWithAnimation={false}
      rtl={false}
      shouldResetAutoplay
      sliderClass=""
      slidesToSlide={1}
      swipeable
    >
      <div>
        <img
          src={require("../../assets/carrossel1.png")}
          style={{
            display: 'block',
            height: 'auto',
            margin: '0 auto',
            width: 'calc(100% - 20px)', // Ajuste para as bordas
            maxWidth: '100%',
            padding: '10px', // Espaçamento para as bordas
            boxSizing: 'border-box'
          }}
          alt="Carrossel 1"
        />
      </div>
      <div>
        <img
          src={require("../../assets/carrossel2.png")}
          style={{
            display: 'block',
            height: 'auto',
            margin: '0 auto',
            width: 'calc(100% - 20px)', // Ajuste para as bordas
            maxWidth: '100%',
            padding: '10px', // Espaçamento para as bordas
            boxSizing: 'border-box'
          }}
          alt="Carrossel 2"
        />
      </div>
      <div>
        <img
          src={require("../../assets/carrossel3.png")}
          style={{
            display: 'block',
            height: 'auto',
            margin: '0 auto',
            width: 'calc(100% - 20px)', // Ajuste para as bordas
            maxWidth: '100%',
            padding: '10px', // Espaçamento para as bordas
            boxSizing: 'border-box'
          }}
          alt="Carrossel 3"
        />
      </div>
    </Carousel>
  </CarrosselContainer>
);

export default Carrossel;

