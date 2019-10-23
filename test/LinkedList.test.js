const { assert } = require ('chai');
const LinkedList = require('../src/LinkedList');

describe('LinkedList instance', () => {
    it('should be an Object', () => {
        const llist = new LinkedList();
        
        assert.isObject(llist);
    });
});

describe('LinkedList.clear', () => {
    let llist = null;

    beforeEach(() => {
        llist = new LinkedList();
    })

    it('should clear correctly (undefined)', () => {
        const arr = undefined;
        const expectedSize = 0;
        const expectedString = '[]';
        
        llist.init(arr);
        llist.clear();

        assert.deepEqual(llist.getSize(), expectedSize);
        assert.deepEqual(llist.toString(), expectedString);
    });

    it('should clear correctly ([])', () => {
        const arr = [];
        const expectedSize = 0;
        const expectedString = '[]';
        
        llist.init(arr);
        llist.clear();

        assert.deepEqual(llist.getSize(), expectedSize);
        assert.deepEqual(llist.toString(), expectedString);
    });

    it('should clear correctly ([1])', () => {
        const arr = [1];
        const expectedSize = 0;
        const expectedString = '[]';
        
        llist.init(arr);
        llist.clear();

        assert.deepEqual(llist.getSize(), expectedSize);
        assert.deepEqual(llist.toString(), expectedString);
    });

    it('should clear correctly ([1, 2])', () => {
        const arr = [1, 2];
        const expectedSize = 0;
        const expectedString = '[]';
        
        llist.init(arr);
        llist.clear();

        assert.deepEqual(llist.getSize(), expectedSize);
        assert.deepEqual(llist.toString(), expectedString);
    });

    it('should clear correctly ([1, 2, 3, 4, 5])', () => {
        const arr = [1, 2, 3, 4, 5];
        const expectedSize = 0;
        const expectedString = '[]';
        
        llist.init(arr);
        llist.clear();

        assert.deepEqual(llist.getSize(), expectedSize);
        assert.deepEqual(llist.toString(), expectedString);
    });
});

describe('LinkedList.getSize', () => {
    let llist = null;

    beforeEach(() => {
        llist = new LinkedList();
    })

    it('should clear correctly (undefined)', () => {
        const arr = undefined;
        const expectedSize = 0;
        const expectedString = '[]';
        
        llist.init(arr);
        llist.clear();

        assert.deepEqual(llist.getSize(), expectedSize);
        assert.deepEqual(llist.toString(), expectedString);
    });

    it('should clear correctly ([])', () => {
        const arr = [];
        const expectedSize = 0;
        const expectedString = '[]';
        
        llist.init(arr);
        llist.clear();

        assert.deepEqual(llist.getSize(), expectedSize);
        assert.deepEqual(llist.toString(), expectedString);
    });

    it('should clear correctly ([1])', () => {
        const arr = [1];
        const expectedSize = 1;
        const expectedString = '[1]';
        
        llist.init(arr);
        llist.clear();

        assert.deepEqual(llist.getSize(), expectedSize);
        assert.deepEqual(llist.toString(), expectedString);
    });

    it('should clear correctly ([1, 2])', () => {
        const arr = [1, 2];
        const expectedSize = 2;
        const expectedString = '[1, 2]';
        
        llist.init(arr);
        llist.clear();

        assert.deepEqual(llist.getSize(), expectedSize);
        assert.deepEqual(llist.toString(), expectedString);
    });

    it('should clear correctly ([1, 2, 3, 4, 5])', () => {
        const arr = [1, 2, 3, 4, 5];
        const expectedSize = 5;
        const expectedString = '[1, 2, 3, 4, 5]';
        
        llist.init(arr);
        llist.clear();

        assert.deepEqual(llist.getSize(), expectedSize);
        assert.deepEqual(llist.toString(), expectedString);
    });
});