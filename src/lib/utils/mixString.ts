export function mixString(separator: string, ...args: any[]) {
    let mixString = '';
    for (let i = 0; i < args.length; i++) {
        
        mixString += `${args[i]} ${i !== args.length - 1 ? separator: '.'} `;
    }
    return mixString;
}
