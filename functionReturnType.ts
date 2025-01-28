type userRoleF = "admin" | "user" | "superadmin";
type UserF = {
    username: string
    role: userRoleF
}

const usersF: UserF[] = [
    {username: "Jazz", role: "admin"},
    {username: "Alvin", role: "user"},
    {username: "Ricky", role: "superadmin"},
];

// ini UserF mksdnya yang memastikan reutrnnya itu sesuai dengan type UserF
function fetchUserDetails(username:string): UserF{
    const user = usersF.find(user => user.username === username);
    if(!user){
        throw new Error('User not found');
    }

    // this will error
    // return user.username;

    // this is not
    return user;
}
