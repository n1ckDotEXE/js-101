function hello(name) {
    if (name != '') {
        console.log('Hello ' + name);
    } else {
        console.log('Hello, World!')
    }

}
const user = prompt('Enter your name: ');

hello(user);