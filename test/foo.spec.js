import Foo from '../src/js/foo.js';

let expect = require('chai').expect;

describe('ES6 Foo', function () {
    let foo;

    beforeEach(() => {
        foo = new Foo();
    });

    it('should return "Do Something" when calling doSomething', () => {
        expect(foo.doSomething()).to.equal('Do Something');
    });
});
