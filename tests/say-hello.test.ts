import { sayHello } from "../src/say-hello";

describe('sayHello', () => { 
    it('should return Hello, Jazz'!, () => {
        expect(sayHello('Jazz')).toBe('Hello, Jazz!');
    });
});