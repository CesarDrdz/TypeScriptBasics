var Queue = /** @class */ (function () {
    function Queue() {
        this.date = [];
    }
    Queue.prototype.add = function (item) {
        this.date.push(item);
    };
    Queue.prototype.remove = function () {
        this.date.shift();
    };
    return Queue;
}());
var nameQueue = new Queue();
nameQueue.add('Meech');
nameQueue.add('Daniel');
var numberQueue = new Queue();
numberQueue.add(10);
// Generics are place holders for data types the letter T represents any data type and can be used anywhere in the class
// making a class more dynamic 
// side note T = type its convention to use it.
// Generics can be applied to funcs and class methods
