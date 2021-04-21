// スクリプトスコープとして表示される
let a =0;
// 以下二つはグローバルスコープとして表示される
var b = 0;
function c() {}

console.log(window.b);

window.d = 1;
let d = 2;
console.log(d);