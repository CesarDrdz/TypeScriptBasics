// types supported string, number, boolean, null, undefined. 
// resignment has to be of the same type, type script does have type inferance if type is not set ts bases the type on the value.
// not available for func params 

// const myName: string = '';

let myName: string | null = '';
myName = 'Test'

// being strict with our data types is okay too in some cases 

// union types --have to manually added 
// adding multiple data types by pipping with the pipe character | ex -> ---type | type ---

// any kind of the wild card but we do miss out if we use the any type, should be a last option 



// Arrays

// let items = ['test', 'this'];
// let items = [8, 'Dave'];

// adding the ? at the end of status will make the type optional meaning you add types if needed.

// const account: {
//     name: string,
//     balance: number,
//     status?: string
// }= {
//     name: 'Dave',
//     balance: 10
// }

// using an interface

let items = [8, 'Dave'];

interface IAccount {
    name: string,
    balance: number,
    status?: string
    deposit?: () => void
};

const account:IAccount = {
    name: 'Dave',
    balance: 10
}

// tells ts it wll store an array of obejects {}[] , {} will be replaced by interface if using one 
let accounts: IAccount[];

class InvestmentAccount implements IAccount {
    constructor(
        public name, public balance
    ) {

    }

    private withdraw() {
        
    }
}