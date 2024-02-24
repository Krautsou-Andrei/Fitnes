import React from 'react';

type Props = {
    text: string;
    searchString: string;
    className?: string;
};

export function wrapSelectedText({ text, searchString, className }: Props): React.ReactNode {
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

        parts.push(React.createElement('span', { className, key: index }, matchedText));

        lastIndex = index + matchedText.length;
    }

    const remainingText = text.slice(lastIndex);

    if (remainingText) {
        parts.push(remainingText);
    }

    return parts;
}
