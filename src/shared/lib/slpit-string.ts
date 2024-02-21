import React from 'react';

export function splitString(str: string) {
    const newStr = str
        .split('\n')
        .map((line, index) =>
            React.createElement(React.Fragment, { key: index }, line, React.createElement('br')),
        );
    return newStr;
}