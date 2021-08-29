export default interface LogEntity {
    id: number,
    endpoint: string,
    created_at: Date,
    updated_at: Date,
    query_param: string
}
