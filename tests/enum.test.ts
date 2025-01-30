import { CustomerType, Customer, ItemType, Item } from '../src/type-enum';

describe('Enum data type', () => {
    it('should create a customer with individual type', () => {
        const customer: Customer = {
            name: 'John Doe',
            type: CustomerType.INDIVIDUAL
        };
        expect(customer.type).toBe(CustomerType.INDIVIDUAL);
    });

    it ('should create item with bulk type', () => {
        const item: Item = {
            name: 'Book',
            type: ItemType.BULK
        };
        expect(item.type).toBe(ItemType.BULK);
    });
});