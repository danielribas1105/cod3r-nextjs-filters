'use client'
import { IconBarrierBlockFilled, IconBrandCashapp } from "@tabler/icons-react";
import FiltrarStatus from "@/components/obras/filtrarStatus";
import ListaObras, { ListaObrasProps } from "@/components/obras/listaObras";
import Titulo from "@/components/shared/titulo";
import Estatistica from "@/components/shared/estatistica";
import UseObras from "@/data/hooks/useObras";

export default function Home() {

  const { obras, filtrarObras, valorTotal} = UseObras()

  return (
    <div className="flex flex-col p-10 gap-4 h-screen">
      <div className="flex itens-center gap-20">
        <Titulo 
          primario="Obras"
          secundario="Listagem resumida de obras contratadas"
          icone={IconBarrierBlockFilled}
        />
        <FiltrarStatus filtroMudou={filtrarObras}/>
        <Estatistica valor={valorTotal} texto={"Valor total"} icone={IconBrandCashapp}/>
        <Estatistica valor={valorTotal} texto={"Valor total"} icone={IconBrandCashapp}/>
        <Estatistica valor={valorTotal} texto={"Valor total"} icone={IconBrandCashapp}/>
      </div>
      <ListaObras obras={obras}/>
    </div>
  );
}
