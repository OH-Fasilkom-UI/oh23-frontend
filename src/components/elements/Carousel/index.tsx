import Carousel from "react-spring-3d-carousel";
import { CarouselProps } from "./interface";

const MyCarousel: React.FC<CarouselProps> = ({
  slides,
  goToSlide,
  offsetRadius,
  showNavigation,
  animationConfig,
  goToSlideDelay,
}) => {
  return (
    <Carousel
      slides={slides}
      goToSlide={goToSlide}
      offsetRadius={offsetRadius}
      showNavigation={showNavigation}
      animationConfig={animationConfig}
      goToSlideDelay={goToSlideDelay}
    />
  );
};

export default MyCarousel;
