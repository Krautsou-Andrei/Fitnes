export function calendarSelectedDay(element: HTMLElement) {
    document.querySelectorAll('.ant-picker-cell').forEach((cell) => {
        if (cell.getAttribute('title') === element?.getAttribute('title')) {
            cell.classList.add('ant-picker-cell-selected');
            return;
        }
        cell.classList.remove('ant-picker-cell-selected');
    });
}
