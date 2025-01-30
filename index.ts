type Pizza = {
    id: number
    name: string
    price: number
}

type Order = {
    orderNumber: number
    pizza: Pizza
    status: "ordered" | "completed"
}

let cashInRegister: number = 100;
let orderNumber: number = 1;
let pizzaId: number = 1;
const orderQueue: Order[] = [];
 
const menu: Pizza[] = [
    {id:pizzaId++, name: 'Pizza Carbonara',price: 15},
    {id:pizzaId++, name: 'Pizza Margherita',price: 10},
    {id:pizzaId++, name: 'Pizza Pepperoni',price: 12},
]


function addNewPizza(newPizza: Omit<Pizza,"id">):Pizza{
    pizzaId++;
    const pizza:Pizza = {id:pizzaId, ...newPizza};
    menu.push(pizza);
    return pizza;
}

function getPizzaDetail(identifier: number | string): Pizza | undefined{
    if(typeof identifier === 'number'){
        return menu.find(pizza => pizza.id === identifier);
    // kenapa harus explicit else if, ini untuk better readability
    // karena ini javascript klo ga explicit, dia bakal nge return undefined
    }else if(typeof identifier === 'string'){
        return menu.find(pizza => pizza.name.toLowerCase() === identifier.toLowerCase() );
    }

    throw new Error('Invalid identifier type');
}

function takeOrder(pizzaName: string): Order | undefined{
    const selectedPizza = menu.find(pizza => pizza.name === pizzaName);
    if(selectedPizza === undefined){
        console.error(`${pizzaName} not found`);
        return 
    }
    cashInRegister += selectedPizza.price;
    const newOrder: Order = { orderNumber:orderNumber, pizza: selectedPizza, status: 'ordered' };
    orderNumber++;
    orderQueue.push(newOrder);
    return newOrder;
}

function completeOrder(orderNumber: number): Order | undefined{
    const order = orderQueue.find(order => order.orderNumber === orderNumber);
    if(order === undefined){
        console.error(`Order number ${orderNumber} not found`);
        return;
    }
    order.status = 'completed';
    return order;
}

function addToArray<T>(array: T[], item: T):T[]{
    array.push(item);
    return array;
}

addToArray<Pizza>(menu, {id: 4, name: 'Pizza Hawaii', price: 13});
// klo ga pake <Order>, dia ga complain klo status nya ga ada di union
// makanya kl orderQueue<Order> artinya explicit kasih tau klo ini array of Order
addToArray<Order>(orderQueue, {orderNumber: 2, pizza: menu[0], status: 'ordered'});

addNewPizza({name: 'Pizza Hawaii', price: 13});
addNewPizza({name: 'Pizza Quattro Stagioni', price: 17});

takeOrder('Pizza Margherita');
