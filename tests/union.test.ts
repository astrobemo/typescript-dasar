describe('data type union', () => {
    it('should be testing data type union', () => {
        //differences with any is predertimined data type
        let result: string | number;
        result = 'Jazz';
        expect(result).toBe('Jazz');
        result = 30;
        expect(result).toBe(30);
        
        // result = false;
        // expect(result).toBe(false);
    });

    it('should support type of operator', () => {
        let result: string | number;
        result = 'Jazz';
        expect(typeof result).toBe('string');
        result = 30;
        expect(typeof result).toBe('number');
    });
});