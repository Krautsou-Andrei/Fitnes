import { wrapSelectedText } from '../../../shared/lib/wrap-selected-text';

describe('wrapSelectedText', () => {
    it('should wrap selected text with a span element', () => {
        const text = 'There should be an email here';
        const searchString = 'email';
        const className = 'highlight';

        const result = wrapSelectedText({ text, searchString, className });

        expect(result).toMatchInlineSnapshot(`
            [
              "There should be an ",
              <span
                className="highlight"
              >
                email
              </span>,
              " here",
            ]
        `);
    });

    it('should handle no matches', () => {
        const text = 'There should be an email here';
        const searchString = 'foo';
        const className = 'highlight';

        const result = wrapSelectedText({ text, searchString, className });

        expect(result).toMatchInlineSnapshot(`
            [
              "There should be an email here",
            ]
        `);
    });
});
