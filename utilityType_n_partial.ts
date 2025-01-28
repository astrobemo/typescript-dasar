function utilityType(){
    type User = {
        id: number
        username: string
        role: "admin" | "user" | "superadmin"
    }

    const users: User[] = [
        {id: 1, username: "john_doe", role: "admin"},
        {id: 2, username: "jane_smith", role: "user"},
        {id: 3, username: "alice_jones", role: "superadmin"},
    ];

    const updateUser = (id:number, updates: Partial<User>): User => {
        const user = users.find(user => user.id === id);
        if(!user){
            throw new Error('User not found');
        }
        Object.assign(user, updates);
        return user;
    }

    updateUser(1, {username: "john_doe", role: "user"});
    updateUser(2, {role: "admin"});
}

utilityType();
