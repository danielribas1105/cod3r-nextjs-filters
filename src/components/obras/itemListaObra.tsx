import StatusObra from "./statusObra"

export interface ItemListaObraProps {
    nome: string
    tipo: string
    endereco: string
    bairro: string
    cidade: string
    estado: string
    status: 'iniciada' | 'paralisada' | 'concluida'
    valor: number
}

export default function ItemListaObra(props: ItemListaObraProps) {
    return (
        <div className="flex justify-between items-center bg-zinc-900 p-4 rounded-md">
            <div className="flex flex-col flex-1">
                <h1 className="text-lg text-blue-700">{props.nome}</h1>
                <p className="text-xs text-zinc-500">{props.endereco}</p>
                <p className="text-xs text-zinc-500">{props.bairro} - {props.cidade}/{props.estado}</p>
            </div>
            <StatusObra status={props.status}/>
            <div className="text-zinc-500 text-lg font-bold ml-32">R$ {props.valor.toFixed(2)}</div>
        </div>
    )
}