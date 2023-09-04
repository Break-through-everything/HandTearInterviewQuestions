console.log(typeof null);
console.log(typeof 1);
console.log(typeof '张三');
fn = function () { };
console.log(typeof fn);
let a;
console.log(typeof a);
console.log(typeof undefined);
console.log(typeof {});
console.log(typeof []);
console.log(typeof true);
console.log(typeof /{d}/);
console.log(typeof Date);
console.log(typeof Symbol);
// 
// instanceof
console.log({} instanceof Object);
console.log([] instanceof Array);
console.log(/s/ instanceof RegExp);
console.log('' instanceof String);
console.log(true instanceof Boolean);
console.log(1 instanceof Number);
function A () {

}
function B () {

}
let AObj = new A();
console.log(AObj instanceof B);


// 
// constructor是原型prototype的一个属性，当函数被定义时候，js引擎会为函数添加原型prototype，并且这个prototype中constructor属性指向函数引用，
console.log(('1').constructor === String);
console.log((1).constructor === Number);
console.log(({}).constructor === Object);
console.log(([]).constructor === Array);
console.log((/s/).constructor === RegExp);
console.log((fn).constructor === Function);
console.log((fn).constructor === Function);
// A.prototype = new Array()
let f = new A()
f.constructor = Array
console.log((f).constructor === A);

const isType = type => target => `[object ${type}]` === Object.prototype.toString.call(target)
const isString = isType('String')
console.log(isString('123'));