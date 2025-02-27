export function mixString(separator: string, ...args: any[]) {
    let mixString = '';
    for (let i = 0; i < args.length; i++) {
        mixString += `${args[i]} ${separator} `;
    }
    return mixString;
}
