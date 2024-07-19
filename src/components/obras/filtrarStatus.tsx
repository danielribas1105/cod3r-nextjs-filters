import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { IconChevronDown, IconFilter } from "@tabler/icons-react"
import StatusObra from "./statusObra"
  

export default function FiltrarStatus() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="outline-none">
                <div className="flex items-center gap-2">
                    <IconFilter/>
                    <span>Filtrar Status/Obra</span>
                    <IconChevronDown className="text-zinc-500"/>
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem>
                    <StatusObra status={"iniciada"} emptyStyle/>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <StatusObra status={"paralisada"} emptyStyle/>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <StatusObra status={"concluida"} emptyStyle/>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>

    )
}