var c1 = 0;
var c2 = 0;

function digit1(e) {
  let exp = /[0-9.]/;
  let value = e.key;
  console.log(value);
  let msg = document.getElementById("s1");
  let flag = exp.test(value);
  if (flag) {
    msg.innerHTML = ``;
  } else {
    msg.innerHTML = `Only digits allowed`;
  }
  if (e.keyCode == 8) {
    msg.innerHTML = ``;
    flag = true;
  }
  if (e.keyCode == 109) {
    msg.innerHTML = ``;
    flag = true;
  }
  if (e.keyCode == 110) {
    c1++;
    if (c1 > 1) {
      msg.innerHTML = `Only one decimal point allowed`;
      flag = false;
      c1 = 1;
    }
  }
  console.log(flag);
  return flag;
}

function digit2(e) {
  let exp = /[0-9.]/;
  let value = e.key;
  console.log(value);
  let msg = document.getElementById("s2");
  let flag = exp.test(value);
  if (flag) {
    msg.innerHTML = ``;
  } else {
    msg.innerHTML = `Only digits allowed`;
  }
  if (e.keyCode == 8) {
    msg.innerHTML = ``;
    flag = true;
  }
  if (e.keyCode == 109) {
    msg.innerHTML = ``;
    flag = true;
  }
  if (e.keyCode == 110) {
    c2++;
    if (c2 > 1) {
      msg.innerHTML = `Only one decimal point allowed`;
      flag = false;
      c2 = 1;
    }
  }
  console.log(flag);
  return flag;
}

function add() {
  let num1 = parseFloat(document.getElementById("n1").value);
  let num2 = parseFloat(document.getElementById("n2").value);
  let res = num1 + num2;
  document.getElementById("r").value = res;
}
function sub() {
  let num1 = parseFloat(document.getElementById("n1").value);
  let num2 = parseFloat(document.getElementById("n2").value);
  let res = num1 - num2;
  document.getElementById("r").value = res;
}
function mul() {
  let num1 = parseFloat(document.getElementById("n1").value);
  let num2 = parseFloat(document.getElementById("n2").value);
  let res = num1 * num2;
  document.getElementById("r").value = res;
}
function div() {
  let num1 = parseFloat(document.getElementById("n1").value);
  let num2 = parseFloat(document.getElementById("n2").value);
  let res = num1 / num2;
  document.getElementById("r").value = res;
}
