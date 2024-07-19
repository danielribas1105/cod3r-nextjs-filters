export default interface Obra {
    id: number
    nome: string
    tipo: string
    endereco: string
    bairro: string
    cidade: string
    estado: string
    status: 'iniciada' | 'paralisada' | 'concluida'
}