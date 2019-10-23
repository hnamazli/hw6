const IList = require('./IList');

const LinkedList = function() {
    IList.apply(this, arguments);

    this._size = 0;
}

LinkedList.prototype = Object.create(IList.prototype);
LinkedList.prototype.constructor = LinkedList;

LinkedList.prototype.getSize = function() {
    return this._size;
}

LinkedList.prototype.toString = function() {
    return '[]';
}

LinkedList.prototype.init = function(arr) {
    if (Array.isArray(arr)) {
        for (let i = 0; i < arr.length; i++) {
            this._size++;            
        }        
    }
}

LinkedList.prototype.clear = function() {
    this._size = 0;
}

module.exports = LinkedList;