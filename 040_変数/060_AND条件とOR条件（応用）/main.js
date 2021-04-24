function hello(name) {
  name = name || 'Tom';
    name = 'Tom';
  console.log('Hello ' + name);
}

hello('Bob')

let name;

name && hello(name);