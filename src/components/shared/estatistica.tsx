import { ElementType } from "react";

export interface EstatisticaProps {
    valor: any
    texto: string
    icone: ElementType
}

export default function Estatistica(props: EstatisticaProps) {
    return (
        <div className="flex items-center gap-2 px-4 py-2 bg-zinc-900 rounded-xl">
            <props.icone size={35} stroke={1} className="text-green-600"/>
            <div className="flex flex-col">
                <span className="text-lg">R$ {props.valor}</span>
                <span className="text-zinc-600 italic">{props.texto}</span>
            </div>
        </div>
    )
}