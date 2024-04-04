type AppHeighlightTextProps = {
    classNames: string;
    searchParams: string;
    text: string;
};

export function AppHeighlightText({ searchParams, text, classNames }: AppHeighlightTextProps) {
    if (!searchParams) {
        return text;
    }

    const regExp = new RegExp(searchParams, 'ig');
    const matchValues = text.match(regExp);

    if (matchValues) {
        return text.split(regExp).map((string, index, array) => {
            const match = matchValues.shift();
            if (index < array.length - 1) {
                return (
                    <span key={`${index + 1}`}>
                        {string}
                        <span className={classNames}>{match}</span>
                    </span>
                );
            }

            return string;
        });
    }

    return text;
}
