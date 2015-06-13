import Foo from './foo';

let foo = new Foo();

let textNode = document.createTextNode(foo.doSomething());
document.body.appendChild(textNode);

export var hello = 'es6';
