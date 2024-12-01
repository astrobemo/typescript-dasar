describe('Optional Parameter', () => {
    it('should support optional null or undefined parameter', () => {
        
        function sayHello(name?: string | null) {
            if(name) {
                return `Hello, ${name}`;
            } else {
                return 'Hello Anonymous';
            }
        }

        expect(sayHello()).toBe('Hello Anonymous');
        expect(sayHello('John Doe')).toBe('Hello, John Doe');
        expect(sayHello(null)).toBe('Hello Anonymous');
    });
});