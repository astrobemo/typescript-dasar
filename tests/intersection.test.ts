describe('Intersection data type', () => {
    it('should support intersection data type', () => {
        type A = {
            a: number;
        };

        type B = {
            b: string;
        };

        type C = A & B;

        const c: C = {
            a: 1,
            b: "TEST"
        };

        expect(c.a).toBe(1);
        expect(c.b).toBe("TEST");
    });

    it('should support intersection of interface', () => {
        interface A {
            a: number;
        }

        interface B {
            b: string;
        }

        type C = A & B;

        const c: C = {
            a: 1,
            b: "TEST"
        };

        expect(c.a).toBe(1);
        expect(c.b).toBe("TEST");
    }
});