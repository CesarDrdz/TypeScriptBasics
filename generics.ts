class Queue<T> {
    private date: T[] = [];

    add(item: T) {
        this.date.push(item)
    }

    remove() {
        this.date.shift();
    }
}

const nameQueue = new Queue<string>();
nameQueue.add('Meech');
nameQueue.add('Daniel');

const numberQueue =new Queue<number>();
numberQueue.add(10);

// Generics are place holders for data types the letter T represents any data type and can be used anywhere in the class
// making a class more dynamic 
// side note T = type its convention to use it.
// Generics can be applied to funcs and class methods