describe('data type any', () => {
    it('should be testing datat type any', () => {
        const person: any = {
            name: 'Jazz',
            age: 30
        };

        person.work = 'Software Engineer';
        expect(person.name).toBe('Jazz');
        expect(person.age).toBe(30);

    });
});