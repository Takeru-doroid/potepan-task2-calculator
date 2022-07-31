
/*document.getElementById(``)を簡略化したかったが、constで置くとうまく動作できなくなった...
原因が分からないため、不恰好ではあるが今回はとりあえず必要な時に都度都度書いている*/


//calc関数を作成、引数をvとしてonclick属性に代入する
function calc(v){
    /*document（全体）内にあるid=`result`要素を取得し、
    そのvalue値に引数vをどんどん入れていく*/
    document.getElementById('result').value += v;
}

//先頭に0を表示させなくする("0"用)少数問題がまだある...
function zero(z){
  
  const mid_way = document.getElementById('result').value;
  let last_child = mid_way.slice(-1);
  /*0入力について、先頭に0はok(少数など0.0~)、000~もok(1000や0.000~など)、
  しかし小数点なしの00はダメ（000.00など）*/
  
  switch (last_child){
    //末尾が空欄・各演算子の場合、空欄で返す...しかしこのままでは少数入力ができない...
    case "":
      document.getElementById('result').value += "";
      break;
    case "+":
      document.getElementById('result').value += "";
      break;
    case "-":
      document.getElementById('result').value += "";
      break;
    case "*":
      document.getElementById('result').value += "";
      break;
    case "/":
      document.getElementById('result').value += "";
      break;
    default:
      document.getElementById('result').value += z;
    
  }
  
}



//小数点用（.）
function dod(d){
  const mid_way = document.getElementById('result').value;
  let last_child = mid_way.slice(-1);
  
  switch(last_child){
    /*末尾が空欄、各演算子、.の場合は手前に0を入力する
    少数を入力するときは、"."入力で表示するようにする*/
    case "":
      document.getElementById('result').value += '0' + d;
      break;
    case "+":
      document.getElementById('result').value += '0' + d;
      break;
    case "-":
      document.getElementById('result').value += '0' + d;
      break;
    case "*":
      document.getElementById('result').value += '0' + d;
      break;
    case "/":
      document.getElementById('result').value += '0' + d;
      break;
    //末尾が"."の場合、空欄を入力する
    case ".":
      document.getElementById('result').value += "";
      break;
      /*先頭空欄で00.1~のような入力をさせたくないが、そうすると100.~のようなことが
      入力できなくなってしまう...*/
    default:
      document.getElementById('result').value += d;
      break;
  }
}



//演算子用(+＆-)
function addsub(a){
  const mid_way = document.getElementById('result').value;
  let last_child = mid_way.slice(-1);
  
  switch (last_child){
    case "+":
      //末尾が+の場合、削除して再入力する
      const last_plus = document.getElementById('result').value.slice(0,-1);
      document.getElementById('result').value = last_plus;
      document.getElementById('result').value += a;
      break;
    case "-":
      //末尾が-の場合、削除して再入力する
      const last_minus = document.getElementById('result').value.slice(0,-1);
      document.getElementById('result').value = last_minus;
      document.getElementById('result').value += a;
      break;
    case "*":
      //末尾が*の場合、削除して再入力する
      const last_multi = document.getElementById('result').value.slice(0,-1);
      document.getElementById('result').value = last_multi;
      document.getElementById('result').value += a;
      break;
    case "/":
      //末尾が/の場合、削除して再入力する
      const last_divi = document.getElementById('result').value.slice(0,-1);
      document.getElementById('result').value = last_divi;
      document.getElementById('result').value += a;
      break;
    case ".":
      //末尾が.の場合、入力不可する
      document.getElementById('result').value += "";
      break;
      //末尾が演算子以外の場合、そのまま入力する
    default:
      document.getElementById('result').value += a;
      break;
  }
}

//演算子用(*＆/)
function multidiv(m){
  const mid_way = document.getElementById('result').value;
  let last_child = mid_way.slice(-1);
  
  switch (last_child){
    case "":
      //末尾が空欄の時は、入力できない
      document.getElementById('result').value += "";
      break;
    case "+":
      //末尾が+の場合
      let last_plus = document.getElementById('result').value.slice(0,-1);
      //末尾の+を削除後、もし空欄の場合は入力しない
      if(last_plus == ""){
        document.getElementById('result').value += "";
        //空欄じゃない場合、そのまま入力
      } else {
        document.getElementById('result').value = last_plus;
        document.getElementById('result').value += m;
      }
      break;
    case "-":
      //末尾が-の場合、削除して再入力する
      let last_minus = document.getElementById('result').value.slice(0,-1);
      //末尾の-を削除後、もし空欄の場合は入力しない
      if(last_minus == ""){
        document.getElementById('result').value += "";
        //空欄じゃない場合、そのまま入力
      } else {
        document.getElementById('result').value = last_minus;
        document.getElementById('result').value += m;
      }
      break;
    case "*":
      //末尾が*の場合、削除して再入力する
      let last_multi = document.getElementById('result').value.slice(0,-1);
      document.getElementById('result').value = last_multi;
      document.getElementById('result').value += m;
      break;
    case "/":
      //末尾が/の場合、削除して再入力する
      let last_divi = document.getElementById('result').value.slice(0,-1);
      document.getElementById('result').value = last_divi;
      document.getElementById('result').value += m;
      break;
    case ".":
      //末尾が.の場合、入力不可する
      document.getElementById('result').value += "";
      break;
      //末尾が演算子以外の場合、そのまま入力する
    default:
      document.getElementById('result').value += m;
      break;
  }
}


//AutoClear用
function reset(){
    document.getElementById('result').value = "";
}


//=用
function equal(){
  const result = document.getElementById('result').value;
  //console.log(eval(result));←検証画面で表示確認
  document.getElementById('result').value = eval(result);
}
