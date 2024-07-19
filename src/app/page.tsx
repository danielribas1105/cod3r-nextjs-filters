import FiltrarStatus from "@/components/obras/filtrarStatus";
import ListaObras from "@/components/obras/listaObras";
import Titulo from "@/components/shared/titulo";
import { DropdownMenu } from "@/components/ui/dropdown-menu";
import { IconBarrierBlockFilled } from "@tabler/icons-react";

export default function Home() {
  return (
    <div className="flex flex-col p-10 gap-4 h-screen">
      <div className="flex itens-center gap-20">
        <Titulo 
          primario="Obras"
          secundario="Listagem resumida de obras contratadas"
          icone={IconBarrierBlockFilled}
        />
        <FiltrarStatus/>
      </div>
      <ListaObras/>
    </div>
  );
}
