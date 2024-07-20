import Obra from "@/data/model/Obra";
import ItemListaObra from "./itemListaObra";

export interface ListaObrasProps {
    obras: Obra[]
}

export default function ListaObras(props: ListaObrasProps) {
    return (
        <div className="flex flex-col">
            <div className="flex flex-col gap-4">
                {props.obras.map(function(obra: Obra) {
                    return (
                        <ItemListaObra key={obra.id}
                            nome={obra.nome} 
                            tipo={""} 
                            endereco={obra.endereco} 
                            bairro={obra.bairro} 
                            cidade={obra.cidade} 
                            estado={obra.estado} 
                            status={obra.status}
                            valor={obra.valor}
                        />
                    )
                })}
            </div>
        </div>
    )
}