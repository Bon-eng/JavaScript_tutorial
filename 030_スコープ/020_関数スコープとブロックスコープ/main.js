// 関数スコープとは「 function{} 」の中のものを指す
// ブロックスコープとの違いはfunctionが手前にあるかないか（関数を宣言されているかどうか）
function a() {
  let b = 0;
  console.log(b);

}

a();
// ブロックスコープとは「 {} 」の中のものを指す
// JSでブロックスコープを使用したい場合は{}（変数宣言）の中に「let」もしくは「const」を使う

if(true) {
  var c = 1;

  var d = function (){
    console.log('d is called');
  }
}
d();

console.log(c);
