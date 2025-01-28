let ages: number[] = [1,2,3,4,5,6,7,8,9,10];
// ages[2] = "test"; error karena tipe datanya harus number

type PA = {
    name: string
    age: number
    isStudent: boolean
}

let ps1:PA =  {
    name: "Jazz",
    age: 30,
    isStudent: false
};

let ps2:PA =  {

    name: "Jazz",
    age: 30,
    isStudent: false
};

let persons: PA[] = [ps1, ps2];
//bisa juga tulis seperti ini Array<PA>
let persons2: Array<PA> = [ps1, ps2];