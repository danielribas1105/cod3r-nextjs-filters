import obras from "@/data/constants/obras";
import Obra from "@/data/model/Obra";
import ItemListaObra from "./itemListaObra";
import StatusObra from "./statusObra";

export default function ListaObras() {
    return (
        <div className="flex flex-col">
            <div className="flex flex-col gap-4">
                {obras.map(function(obra: Obra) {
                    return (
                        <ItemListaObra key={obra.id}
                            nome={obra.nome} 
                            tipo={""} 
                            endereco={obra.endereco} 
                            bairro={obra.bairro} 
                            cidade={obra.cidade} 
                            estado={obra.estado} 
                            status={obra.status}
                        />
                    )
                })}
            </div>
        </div>
    )
}