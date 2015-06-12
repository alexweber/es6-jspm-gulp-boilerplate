describe('ES6 Foo', function () {
    var foo;

    beforeEach(function() {
      foo = new Foo();
    });

    afterEach(function() {

    });

    it('should return "Do Something" when calling doSomething', function() {
      expect(foo.doSomething()).toEqual('Do Something');
    });
});
