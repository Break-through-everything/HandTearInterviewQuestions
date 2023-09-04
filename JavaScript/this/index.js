// this 的集中情况

// 4. 通过 new 绑定
var name = "window";
// function foo(_name) {
//   this.name = _name;
//   console.log(this);
// }
var obj = {
  name: "obj",
  //   fool: new foo("test"),
};
// console.log(obj);
// console.log(obj.fool);

// 箭头函数
const fn = () => {
  var name = "fn";
  return (name) => {
    console.log(this.name);
  };
};
const foo1 = fn();
foo1();
foo1.call(obj);
