import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const fotos = ["galery01.webp", "galery02.webp", "galery03.webp", "galery04.webp", "galery05.webp"];

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
      <CarouselContent className="md:w-1/2 mx-auto">
        {fotos.map((foto) => (
          <CarouselItem key={foto}>
            <img
              src={`/galery/${foto}`}
              alt={foto}
              className="mx-auto w-full h-full"

            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};
export default Galeria;
