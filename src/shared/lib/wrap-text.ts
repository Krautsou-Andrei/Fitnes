export function wrapText(text: string, maxLength: number): string {
    console.log("text", text)
    if (text.length <= maxLength) {
        return text;
    }

    let breakIndex = text.lastIndexOf(' ', maxLength);
    if (breakIndex === -1) {
        breakIndex = maxLength;
    }

    console.log("text", text)

    return text.slice(0, breakIndex) + '\n' + wrapText(text.slice(breakIndex + 1), maxLength);
}
