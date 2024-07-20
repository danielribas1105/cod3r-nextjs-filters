import { IconCircleFilled } from "@tabler/icons-react"

export interface StatusObraProps {
    status: 'iniciada' | 'paralisada' | 'concluida'
    emptyStyle?: boolean
    onClick?: (status: string) => void
}

export default function StatusObra(props: StatusObraProps) {

    function colorStatus(status: string) {
        let cor = '#FFFFFF'
        switch (status) {
            case 'iniciada':
                cor = '#00FF00'
                break;
            case 'paralisada':
                cor = '#FFFF00'
                break;
            case 'concluida':
                cor = '#0000FF'
                break;
            default:
                break;
        }
        return cor
    }

    return (
        <div 
            className={`flex items-center gap-2
                ${props.emptyStyle ? '' : 'bg-zinc-950 rounded-md w-40 px-4 py-2'}`
            }
            onClick={() => props.onClick?.(props.status)}>
            <IconCircleFilled color={colorStatus(props.status)}/>
            <span>{props.status}</span>
        </div>
    )
}