function a(name) {
    return 'hello ' + name;
}

// 「name => 'hello ' + name;」この部分がアロー関数になる
const b = (name, name1) => 'hello ' + name + ' heloo ' + name1;

console.log(b('Tom', 'Bob'))