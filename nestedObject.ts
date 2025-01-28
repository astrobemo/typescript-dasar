type Address = {
    city: string,
    street: string,
    country: string
}

type User = {
    name: string
    age: number
    isStudent: boolean,
    address?: Address
}

let user: User = {
    name: "Jazz",
    age: 30,
    isStudent: false,
    address: {
        city: "Jakarta",
        street: "Jl. Jendral Sudirman",
        country: "Indonesia"
    }
}

let user2: User = {
    name: "Jazz",
    age: 30,
    isStudent: false
}

function printUser(user: User){
    console.log(`${user.name} currently live in ${user.address?.city} `);
}

printUser(user2); // Jazz currently live in undefined