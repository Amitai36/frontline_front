export interface Draft {
    _id: string,
    to: string[],
    userId: string,
    date: number,
    subject: string,
    content: string
}