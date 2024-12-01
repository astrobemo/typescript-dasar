describe('object data type', () => {
    it('should be testing object data type', () => {
        // in this example if no data type is defined, we can define it with object
        let product: {id:number, name:string} = {
            id: 1,
            name: 'Indomie Goreng',
            
        };
        expect(product.id).toBe('1');
        expect(product.name).toBe('Indomie Goreng');
    });
});