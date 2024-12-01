import {Seller, Employee, Manager} from '../src/interfaces';

describe('Interface data type', () => {
    it('should create a seller with name and name of shop', () => {
        const seller: Seller = {
            name: 'John Doe',
            nameOfShop: 'John Doe Shop',
            governmentId: '1234567890'
        };
        expect(seller.name).toBe('John Doe');
        expect(seller.nameOfShop).toBe('John Doe Shop');

        seller.name = 'Jane Doe';
        expect(seller.name).toBe('Jane Doe');
        // Cannot change the value of governmentId
        // seller.governmentId = '0987654321';
        expect(seller.governmentId).toBe('1234567890');
    });

    it('create function interface', () => {
        interface Greet {
            (name: string): string;
        }

        const greet: Greet = (name: string) => {
            return `Hello, ${name}`;
        };

        expect(greet('John Doe')).toBe('Hello, John Doe');
    });

    it('support indexable interface', () => {
        interface StringArray {
            [index: number]: string;
        }

        const array: StringArray = ['John', 'Doe'];

        expect(array[0]).toBe('John');
        expect(array[1]).toBe('Doe');
    });

    
    it('support dictionary interface', () => {
        interface Dictionary {
            [index: string]: string;
        }

        const dictionary: Dictionary = {
            name: 'John Doe',
            age: '30'
        };

        expect(dictionary.name).toBe('John Doe');
        expect(dictionary.age).toBe('30');
    }); 

    it('support extend interface', () => {
        const employee: Employee = {
            name: 'John Doe',
            id: 1,
            department: 'IT'
        };

        expect(employee.name).toBe('John Doe');
        const manager: Manager = {
            name: 'Jane Doe',
            id: 2,
            department: 'HR',
            numberOfEmployees: 10
        };

        expect(manager.name).toBe('Jane Doe');
        expect(manager.numberOfEmployees).toBe(10);
    });

    it('support class interface', () => {
        interface ClockInterface {
            currentTime: Date;
            setTime(d: Date): void;
        }

        class Clock implements ClockInterface {
            currentTime: Date = new Date();
            setTime(d: Date) {
                this.currentTime = d;
            }
        }

        const clock = new Clock();
        const date = new Date();
        clock.setTime(date);

        expect(clock.currentTime).toBe(date);
    });
});