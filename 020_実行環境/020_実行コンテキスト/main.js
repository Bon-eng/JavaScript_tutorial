// グローバルコンテキストはこのファイル直下のもの全てを指す

let a = 0;
// ⬇️⬇️⬇️関数コンテキスト⬇️⬇️⬇️
function b(){
  console.log(this, arguments, a);
}
// ⬆️⬆️⬆️関数コンテキスト⬆️⬆️⬆️

// console.log(a);
b();