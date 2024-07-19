import ListaObras from "@/components/obras/listaObras";
import Titulo from "@/components/shared/titulo";
import { IconBarrierBlockFilled } from "@tabler/icons-react";

export default function Home() {
  return (
    <div className="flex flex-col p-10 gap-4 h-screen">
      <Titulo 
        primario="Obras"
        secundario="Listagem resumida de obras contratadas"
        icone={IconBarrierBlockFilled}
      />
      <ListaObras/>
    </div>
  );
}
