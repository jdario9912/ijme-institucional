import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const fotos = ["galery01.jpeg", "galery02.jpeg", "galery03.jpeg"];

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
      <CarouselContent className="w-1/2 mx-auto">
        {fotos.map((foto) => (
          <CarouselItem key={foto}>
            <img
              src={`/${foto}`}
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
