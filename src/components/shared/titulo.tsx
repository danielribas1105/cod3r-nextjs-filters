import { ElementType } from "react"

export interface TituloProps {
    primario: string
    secundario: string
    icone: ElementType
}

export default function Titulo(props: TituloProps) {
 return (
    <div className="flex gap-2">
        <props.icone size={50}/>
        <div className="flex flex-col">
            <h1 className="text-xl">{props.primario}</h1>
            <h2 className="text-sm text-zinc-500">{props.secundario}</h2>
        </div>
    </div>
 )
}