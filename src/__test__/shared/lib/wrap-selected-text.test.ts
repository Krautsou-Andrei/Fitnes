import { wrapSelectedText } from '@shared/lib/wrap-selected-text';

describe('wrapSelectedText', () => {
  let text: string;
  let searchString: string;
  let className: string;

  beforeEach(() => {
    text = 'There should be an email here';
    searchString = 'email';
    className = 'highlight';
  });

  it('should wrap selected text with a span element', () => {
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
    searchString = 'foo';

    const result = wrapSelectedText({ text, searchString, className });

    expect(result).toMatchInlineSnapshot(`
      [
        "There should be an email here",
      ]
    `);
  });
});