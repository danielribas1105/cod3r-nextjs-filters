import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { IconChevronDown, IconCircleFilled, IconFilter } from "@tabler/icons-react"
import StatusObra from "./statusObra"
  
export interface FiltrarStatusProps {
    filtroMudou?: (status: string | null) => void
}

export default function FiltrarStatus(props: FiltrarStatusProps) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="outline-none">
                <div className="flex items-center gap-2">
                    <IconFilter stroke={1}/>
                    <span>Filtrar Status/Obra</span>
                    <IconChevronDown className="text-zinc-500"/>
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem onClick={() => props.filtroMudou?.(null)}>
                    <div className="flex items-center gap-2">
                        <IconCircleFilled color='#FFFFFF'/>
                        <span>Todas as obras</span>
                    </div>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <StatusObra status={"iniciada"} emptyStyle onClick={props.filtroMudou}/>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <StatusObra status={"paralisada"} emptyStyle onClick={props.filtroMudou}/>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <StatusObra status={"concluida"} emptyStyle onClick={props.filtroMudou}/>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>

    )
}