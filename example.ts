// function addShipping(price: number, shipping: number) {
//     console.log(price + shipping);
//     return 'test';
// }

// addShipping(10, 5);


// union types with a pipe |
function addShipping(price: number, shipping: number) : number | boolean {
    console.log(price + shipping);
    return price + shipping;
}

addShipping(10, 5);