/**
 * The `omitUtilityType` function demonstrates the use of TypeScript's utility types.
 * 
 * In this example, we define a `User` type with properties `id`, `username`, and `role`.
 * We then create an array of users and provide functions to add new users.
 * 
 * The `Omit` utility type in TypeScript allows you to create a new type by omitting 
 * certain properties from an existing type. For example, if you have a type `User` 
 * and you want to create a new type that has all properties of `User` except `id`, 
 * you can use `Omit<User, 'id'>`.
 * 
 * This can be useful when you want to create a type for objects that should not 
 * include certain properties, such as when creating new instances where the `id` 
 * is generated automatically.
 * 
 * Example usage of `Omit`:
 * 
 * ```typescript
 * type UserWithoutId = Omit<User, 'id'>;
 * ```
 * 
 * In this example, `UserWithoutId` will have all properties of `User` except `id`.
 */
function omitUtilityType(){
    type User = {
        id: number
        username: string
        role: "admin" | "user" | "superadmin" | "member"
    }

    let newUserId = 1;

    const users: User[] = [
        {id: newUserId++, username: "john_doe", role: "admin"},
        {id: newUserId++, username: "jane_smith", role: "user"},
        {id: newUserId++, username: "alice_jones", role: "superadmin"},
    ];

    function addNewUser(newUser:Omit<User,"id" | "roles" >) : User{
        newUserId++;
        const user: User = {id: newUserId, ...newUser};
        users.push(user);
        return user; 
    }

    /* const updateUser = (id:number, updates: Partial<User>): User => {
        const user = users.find(user => user.id === id);
        if(!user){
            throw new Error('User not found');
        }
        Object.assign(user, updates);
        return user;
    } */

    addNewUser({username: "jojon_doe", role:"member"})

    /* updateUser(1, {username: "john_doe", role: "user"});
    updateUser(2, {role: "admin"}); */

    console.log(users);
}

omitUtilityType();