import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState, type FC } from "react";

const MinisterioDialog: FC<Ministerio> = ({ descripcion, titulo }) => {
  const [esRadio] = useState(titulo === "radio");

  const parrafos = descripcion.split(".");

  const parrafosFormateados = parrafos
    .map((parrafo) => parrafo.concat(".").trim())
    .filter((elemento) => elemento.length > 1);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">leer más</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]" aria-describedby={titulo}>
        <DialogHeader>
          <DialogTitle className="capitalize">{titulo}</DialogTitle>
        </DialogHeader>

        {parrafosFormateados.map((parrafo, i) => (
          <p key={i} className="first-letter:capitalize">{parrafo}</p>
        ))}

        {esRadio && (
          <>
            <p className="lg:hidden">
              Podés descargar nuestra app para Android presionando{" "}
              <a
                href="https://play.google.com/store/apps/details?id=genex.radioencuentro"
                target="_blank"
              >
                aquí
              </a>
            </p>
            <h3>Datos técnicos-legales:</h3>
            <p>
              107.3 MHz. Reglamento General del Servicio de Radiodifusión Sonora
              por Modulación de Frecuencia – FM (Resolución Nº 142 SC/96)
            </p>
            <p>
              Categoría de la estación “D” ENACOM Ente Nacional de
              Comunicaciones AFSCA Ley 26.522 Servicios de Comunicación
              Audiovisual y reglamentación.
            </p>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default MinisterioDialog;
