import React from 'react';
import { StarFilled, StarOutlined } from '@ant-design/icons';

type CustomIconStarsParams = {
    value?: number;
    index?: number;
};

export function customIconStars({ value, index }: CustomIconStarsParams) {
    console.log("slkfjslfjlsjflsjf")
    return (value ?? 0) > (index ?? 0)
        ? React.createElement(StarFilled)
        : React.createElement(StarOutlined);
}
