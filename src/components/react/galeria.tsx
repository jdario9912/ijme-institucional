import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const fotos = ["galery01.png", "galery02.png", "galery03.png"];

const Galeria = () => {
  return (
    <Carousel
      className=""
      opts={{
        align: "center",
        loop: true,
      }}
      plugins={[Autoplay({ delay: 2000 })]}
    >
      <CarouselContent className="">
        {fotos.map((foto) => (
          <CarouselItem key={foto} className="">
            <img
              src={`./src/img/galeria/${foto}`}
              alt={foto}
              className="mx-auto"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};
export default Galeria;
