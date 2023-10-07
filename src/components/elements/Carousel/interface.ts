export interface CarouselProps {
  slides: Array<object>;
  goToSlide: number;
  offsetRadius: number;
  showNavigation: boolean;
  animationConfig: object;
  goToSlideDelay: number;
}
