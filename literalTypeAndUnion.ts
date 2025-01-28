let myLName = "Jazz";

// pada dasarnya const tidak bisa diubah,
// klo pada let bisa diubah, jadi bisa dibilang :string artinya bisa diubah jadi string apapun
// sedangkan klo const ya ga bisa diubah
const myLName2: "Jazz" = "Jazz";

// Literay type Union
type UserROll = "admin" | "user" | "superadmin";
let myRole: UserROll = "admin";