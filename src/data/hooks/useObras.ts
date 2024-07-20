import { useEffect, useState } from "react"
import Obra from "../model/Obra"
import listaDeObras from "@/data/constants/obras";

export default function UseObras() {
    const [valorTotal, setValorTotal] = useState<number>(0)
    const [obras, setObras] = useState<Obra[]>(listaDeObras)

    useEffect(() => {
        calcularValorTotal(obras)
    }, [obras])

    function filtrarObras(status: string | null) {
        const obrasFiltradas: Obra[] = listaDeObras.filter((obra) => obra.status === status || !status)
        setObras(obrasFiltradas)
    }

    function calcularValorTotal(obras: Obra[]) {
        const valorTotal = obras.reduce((acc, obra) => acc + obra.valor, 0)
        setValorTotal(valorTotal)
    }

    return {
        obras,
        filtrarObras,
        valorTotal
    }
}