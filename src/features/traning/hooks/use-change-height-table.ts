import { useCallback, useEffect, useRef, useState } from 'react';
import { useDebounceCallback } from 'usehooks-ts';

export function useChangeHeightTable(sizePage = 2) {
    const firstRender = useRef(true);
    const [pageItemDefault, setPageItemDefault] = useState(sizePage);

    const handleTableHeightChange = useCallback(() => {
        const heightTabs = document.querySelector('.ant-tabs')?.clientHeight;
        const heightCell = document.querySelector('.ant-table-row')?.clientHeight;
        const heightLayout = document
            .querySelector('.ant-layout-content')
            ?.querySelector('div')?.clientHeight;

        if (heightLayout && heightTabs && heightCell) {
            const lastHeight = heightLayout - heightTabs;
            const pageItem = lastHeight / heightCell;

            const quantityItem = Math.round(pageItem);

            if (pageItem > 1) {
                setPageItemDefault((prev) => prev + quantityItem - 1);
            } else {
                if (pageItemDefault > 3) {
                    setPageItemDefault((prev) => prev - quantityItem - 1);
                }
            }
        }
    }, [pageItemDefault]);

    const debouncedHandleTableHeightChange = useDebounceCallback(handleTableHeightChange, 300);

    useEffect(() => {
        window.addEventListener('resize', debouncedHandleTableHeightChange);

        return () => {
            window.removeEventListener('resize', debouncedHandleTableHeightChange);
        };
    }, [debouncedHandleTableHeightChange]);

    useEffect(() => {
        if (firstRender.current) {
            handleTableHeightChange();
        }

        return () => {
            firstRender.current = false;
        };
    }, [handleTableHeightChange]);

    const quantityItems = pageItemDefault;

    return { quantityItems };
}
