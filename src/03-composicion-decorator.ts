function Dec1(constructor: Function) {
    console.log('Decorator 1 ');
}

function Dec2(constructor: Function) {
    console.log('Decorator 2 ');
}

@Dec1
@Dec2
class User { }

export { }