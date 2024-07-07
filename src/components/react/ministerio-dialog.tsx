import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState, type FC } from "react";
import DownloadIcon from "./icons/download";

const MinisterioDialog: FC<Ministerio> = ({ descripcion, titulo, icono }) => {
  const [esRadio] = useState(icono === "radio");

  const parrafos = descripcion.split(".");

  const parrafosFormateados = parrafos
    .map((parrafo) => parrafo.concat(".").trim())
    .filter((elemento) => elemento.length > 1);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          leer más
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]" aria-describedby={titulo}>
        <DialogHeader>
          <DialogTitle className="capitalize">{titulo}</DialogTitle>
        </DialogHeader>

        {parrafosFormateados.map((parrafo, i) => (
          <p key={i} className="first-letter:capitalize">
            {parrafo}
          </p>
        ))}

        {esRadio && (
          <>
            <a
              className="flex items-center gap-2 w-44 bg-slate-300 rounded px-3 py-2 border border-slate-700 hover:bg-slate-700 hover:text-slate-100 hover:shadow-md lg:hidden"
              href="https://play.google.com/store/apps/details?id=genex.radioencuentro"
              target="_blank"
            >
              <DownloadIcon />
              Descargar App
            </a>
            <div className="p-2 italic bg-slate-200">
              <h3 className="font-bold">Datos técnicos-legales:</h3>
              <p>
                107.3 MHz. Reglamento General del Servicio de Radiodifusión
                Sonora por Modulación de Frecuencia – FM (Resolución Nº 142
                SC/96).
              </p>
              <br />
              <p>
                Categoría de la estación “D” ENACOM Ente Nacional de
                Comunicaciones AFSCA Ley 26.522 Servicios de Comunicación
                Audiovisual y reglamentación.
              </p>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default MinisterioDialog;
