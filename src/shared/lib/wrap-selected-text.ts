import {createElement} from 'react';

type WrapSelectedTextProps = {
    text: string;
    searchString: string;
    className?: string;
};

export function wrapSelectedText({ text, searchString, className }: WrapSelectedTextProps): React.ReactNode {
    const regex = new RegExp(searchString, 'gi');
    const parts: React.ReactNode[] = [];
    let lastIndex = 0;
    let match;

    while ((match = regex.exec(text)) !== null) {
        const { index } = match;
        const before = text.slice(lastIndex, index);
        const matchedText = match[0];

        if (before) {
            parts.push(before);
        }

        parts.push(createElement('span', { className, key: index }, matchedText));

        lastIndex = index + matchedText.length;
    }

    const remainingText = text.slice(lastIndex);

    if (remainingText) {
        parts.push(remainingText);
    }

    return parts;
}
