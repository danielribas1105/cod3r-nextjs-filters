import { IconCircleFilled } from "@tabler/icons-react"

export interface StatusObraProps {
    status: 'iniciada' | 'paralisada' | 'concluida'
}

export default function StatusObra(props: StatusObraProps) {
    return (
        <div className="flex items-center gap-2 bg-zinc-950 rounded-md w-40 px-4 py-2">
            <IconCircleFilled color={props.status === 'iniciada' ? '#00FF00' : props.status === 'paralisada' ? '#FFFF00' : '#0000FF'}/>
            <span>{props.status}</span>
        </div>
    )
}