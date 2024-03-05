import { splitString } from '../../../shared/lib/slpit-string';

describe('splitString', () => {
    it('should return the string itself if there is no newline character', () => {
        const str = 'Hello World';
        const result = splitString(str);
        expect(result).toEqual(str);
    });

    it('should split the string and return an array of React elements with <br> tags', () => {
        const str = 'Line 1\nLine 2\nLine 3';
        const result = splitString(str);

        expect(result).toMatchInlineSnapshot(`
        [
          <React.Fragment>
            Line 1
            <br />
          </React.Fragment>,
          <React.Fragment>
            Line 2
            <br />
          </React.Fragment>,
          "Line 3",
        ]
    `);
    });
});
