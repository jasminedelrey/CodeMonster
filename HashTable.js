//HASH TABLE//
// Maps keys to values
// Can lookup, insert, and delete

//How to make a hash table?
//Key is sent to hash function that performs arithmetic operations on it
//Result = index of key-value pair

//Important things
//Hash function, size of hash table, collision handling method
//Implemented with arrays
//Good for randomly sorted data!

class HashTable {
    constructor() {
        this.values = {};
        this.length = 0;
        this.size = 0;
    };
};

calculateHash(key) {
    return key.toString().length%this.size;
}

function search () {

}

function insert () {

}

function remove () {

}

function get () {

}

function set () {

}