import { Category, Product, Order } from '../src/type-alias';

describe('data type alias', () => {
    it('should be testing data type alias', () => {
        const category: Category = {
            id: '1',
            name: 'Electronics'
        };

        const product : Product = {
            id: '1',
            name: 'Laptop',
            price: 1000,
            category: category
        };

        const order: Order = {
            id: '1',
            products: [product],
            total: 1000
        };
        
        expect(category.id).toBe('1');
        expect(product.id).toBe('1');
        expect(order.total).toBe(1000);
        
    });
});