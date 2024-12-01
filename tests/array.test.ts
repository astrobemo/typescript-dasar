
describe('Array', () => {
    it('shoul same behaviour with javascript', () => {
        const names: string[] = ['John Doe', 'Jane Doe', 'John Smith'];
        const ages: number[] = [25, 30, 35];
        const isStudents: boolean[] = [false, true, false];

        console.info(names);
        console.info(ages);
        console.info(isStudents);

        return;
    });

    it('should error because readonly', () => {
        const names: readonly string[] = ['John Doe', 'Jane Doe', 'John Smith'];

        // names[0] = 'John Wick';

        console.info(names);

        return;
    });

    it('should be able to use tuple', () => {
        
        /**
         * A tuple is a typed array with a fixed length and known types at each index.
         * In this example, the `person` tuple has three elements: a string, a number, and a boolean.
         * This allows for more precise type checking and ensures that the array contains the expected types in the correct order.
         */

        const person: [string, number, boolean] = ['John Doe', 25, false];

        console.info(person);

        return;
    });
});