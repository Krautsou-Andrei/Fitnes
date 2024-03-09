export function offSet(element: HTMLElement, width: number): boolean {
    const blockRect = element.getBoundingClientRect();
    const blockLeft = blockRect.left;

    const windowWidth = window.innerWidth;

    const distanceToRight = windowWidth - blockLeft;

    return distanceToRight < width;
}
