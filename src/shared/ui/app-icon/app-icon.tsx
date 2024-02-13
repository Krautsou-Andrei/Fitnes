import type { SVGProps } from 'react';
import clsn from 'classnames';

import type { IconName } from './types';

export interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'name' | 'type'> {
    name: IconName;
}

export function AppIcon({ name, className, viewBox, ...props }: IconProps) {
    const [spriteName, iconName] = name.split('/');

    return (
        <svg
            aria-hidden
            className={clsn('icon', className)}
            focusable='false'
            viewBox={viewBox}
            {...props}
        >
            <use xlinkHref={`/sprite/${spriteName}.svg#${iconName}`} />
        </svg>
    );
}
