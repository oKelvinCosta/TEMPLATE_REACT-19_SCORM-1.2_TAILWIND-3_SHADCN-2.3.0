
export function RandomId(prefix: string = "id"): string {
    return `${prefix}-${Math.random().toString(36).substr(2, 9)}`
}