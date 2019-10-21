const { assert } = require ('chai');
const ArrayList = require('../src/arraylist');

describe('ArrayList instance', () => {
    it('should be an Object', () => {
        const alist = new ArrayList();
        
        assert.isObject(alist);
    });
});