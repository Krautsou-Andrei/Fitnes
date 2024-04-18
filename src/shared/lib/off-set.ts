export function offSet(element: HTMLElement, width: number): boolean {   
    const blockRect = element.getBoundingClientRect();
    const blockLeft = blockRect.left;

    const widthConteiner = document.querySelector('#root');

    if (widthConteiner === null) {
        return false;
    }

    const distanceToRight = widthConteiner.getBoundingClientRect().width - blockLeft;

    return distanceToRight < width;
}
